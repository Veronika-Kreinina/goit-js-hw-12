export function addLoader(gallery) {
  const loaderHTML = `
    <div class="loader-container">
      <span class="loader-text">Loading images, please wait...</span>
    </div>
  `;
  gallery.insertAdjacentHTML('beforebegin', loaderHTML);
}

export function removeLoader() {
  const loader = document.querySelector('.loader-container');
  if (loader) {
    loader.remove();
  }
}

export function markup(data) {
  return data.hits
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
            <li class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                <img
                  class="gallery-image"
                  src="${webformatURL}"
                  alt="${tags}"
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