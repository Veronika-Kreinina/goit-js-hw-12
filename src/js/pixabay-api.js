import axios from "axios";
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '46105893-c3619f828e66c5e4a4f6c6159';

export async function getGalleryData(query, page =15,per_page=15) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });
  return response.data;
}

