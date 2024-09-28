export const basicAPI = {
API_URL: 'https://pixabay.com/api/',
API_KEY:'46105893-c3619f828e66c5e4a4f6c6159'
}
export function getGalleryData(queryValue) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: queryValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${API_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}