import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getGalleryData } from './js/pixabay-api';
import { addLoader, removeLoader, markup } from './js/render-functions';
import { basicAPI } from "./js/pixabay-api";

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const { search } = Object.fromEntries(formData.entries());
  const searchValue = search.trim();

  if (!searchValue) {
    iziToast.error({
      title: 'Error',
      message: 'The search query is empty.',
      position: 'topRight',
    });
    return;
  }

gallery.innerHTML = '';
  addLoader(gallery);

  getGalleryData(searchValue)
    .then(data => {
      
      if (data.hits.length === 0) {
        iziToast.info({
          position: 'topRight',
          title: 'Info',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      const galleryMarkup = markup(data);
      gallery.insertAdjacentHTML('beforeend', galleryMarkup);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Error: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      removeLoader();
    });
}