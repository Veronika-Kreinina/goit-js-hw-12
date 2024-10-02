
export function addLoader(gallery) {
    const addedLoader = `
    <div class="loader-container">
    <span class="loader-text">Loading images, please wait...</span>
    </div>
  `;
    gallery.insertAdjacentHTML('afterend', addedLoader);
}

export function removeLoader() {
  const loader = document.querySelector('.loader-container');
  if (loader) {
    loader.remove();
  }
}

export function createMarkup(data) {
  return data.hits
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
            <li class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                <img
                  class="gallery-image"
                  src="${webformatURL}"
                  alt="${tags}"
                  loading="lazy"
                  
                />
              </a>
              <ul class="img-wrapper">
                <li class="img-descr">Likes<span>${likes}</span></li>
                <li class="img-descr">Views<span>${views}</span></li>
                <li class="img-descr">Comments<span>${comments}</span></li>
                <li class="img-descr">Downloads<span>${downloads}</span></li>
              </ul>
            </li>
      `
    )
    .join('');
}

export function showBtn() {
    const loadMoreBtn = document.querySelector('.js-btn-wrapper');

  loadMoreBtn.classList.remove('is-hidden');
}

export function hideBtn() {
    const loadMoreBtn = document.querySelector('.js-btn-wrapper');

    loadMoreBtn.classList.add('is-hidden');
}