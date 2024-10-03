import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { addLoader, removeLoader,createMarkup } from "./js/render-functions";
import { showBtn, hideBtn } from "./js/render-functions";
import { getGalleryData } from "./js/pixabay-api";


const form = document.querySelector('.js-search-form');
const galleryList = document.querySelector('.js-gallery');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-btn-wrapper');


let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let searchValue = '';
let currentPage = 1;
let totalHits = 0;
form.addEventListener('submit', onSubmitForm);
loadMoreBtn.addEventListener('click', onLoadMore);

hideBtn()

function resetSearch() {
  gallery.innerHTML = '';
  hideBtn();
  currentPage = 1;
  totalHits = 0;
}

async function onSubmitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const { search } = Object.fromEntries(formData.entries());
  searchValue = search.trim();

  if (!searchValue) {
    iziToast.error({
      title: 'Error',
      message: 'The search query is empty.',
      position: 'topRight',
    });
    return;
  }

  resetSearch();
  addLoader(gallery);

  try {
    const data = await getGalleryData(searchValue, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        position: 'topRight',
        title: 'Info',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    renderGallery(data);
    lightbox.refresh();


    if (data.hits.length < 15) {
      hideBtn();
    } else {
      showBtn();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    removeLoader();
  }
}

async function onLoadMore() {
  currentPage += 1;
  addLoader(gallery);

  try {
    const data = await getGalleryData(searchValue, currentPage);
    renderGallery(data);
    lightbox.refresh();
    smoothScroll();

      
      
      if (gallery.children.length > totalHits) {
hideBtn()
      iziToast.info({
        position: 'topRight',
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    removeLoader();
  }
}

function renderGallery(data) {
  const galleryMarkup = createMarkup(data);
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}

function smoothScroll() {
  const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}