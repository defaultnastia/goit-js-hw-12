import axios from 'axios';
import {
  showLoadMoreBtn,
  generateToastError,
  generateToastInfo,
} from './render-functions';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const userKey = '43979459-cb9029671f39809d08984a919';
const perPage = 15;
let resultsLimit;
let requestedPage = 1;

// === EXPORT

export async function getPictures(keyWord) {
  const params = {
    params: {
      q: keyWord,
      key: userKey,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: requestedPage,
    },
  };

  try {
    const result = await axios.get('', params);
    const fetchedImages = result.data;
    if (fetchedImages.totalHits === 0) {
      generateToastError('no_images_found');
      return;
    }

    requestedPage += 1;
    resultsLimit = Math.ceil(fetchedImages.totalHits / perPage);
    resultsLimit >= requestedPage
      ? showLoadMoreBtn(true)
      : generateToastInfo('no_more_results');

    return fetchedImages.hits;
  } catch (error) {
    const problem = error?.response?.status ? error.response.status : error;
    generateToastError(problem);
  }
}

export function resetRequestedPage() {
  requestedPage = 1;
  resultsLimit = 15;
}
