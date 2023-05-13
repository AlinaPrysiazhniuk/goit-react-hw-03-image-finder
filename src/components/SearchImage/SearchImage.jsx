import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '34983998-155dfb76bac09cdf48f99cd2f',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
