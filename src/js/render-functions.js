import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { loadMoreBtn } from '../main.js';

// === EXPORT

export function renderGallery(images, gallery) {
  const markup = createMarkup(images);
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function generateToastError(error) {
  // expected errors
  if (error.toString() === '400')
    error = 'Tell support there is a parameter error.'; //to test comment the "key" URL parameter
  if (error.toString() === '404')
    error = 'Tell support there is an endpoint error.'; // to test change const END_POINT = '/api/dapi';
  if (error.toString() === '500') error = 'Try again later.';
  if (error.toString() === 'missing_keyword') error = 'Enter the keyword.';
  if (error.toString() === 'no_images_found')
    error =
      'Sorry, there are no images matching your search query. Please try again!';
  iziToast.show({
    title: 'Oops!',
    message: `${error}`,
    position: 'bottomLeft',
    color: 'red',
    displayMode: 'replace',
  });
}

export function generateToastInfo(reason) {
  if (reason === 'no_more_results')
    reason = 'We are sorry, but you have reached the end of search results.';
  iziToast.show({
    title: 'ⓘ',
    message: `${reason}`,
    position: 'bottomLeft',
    color: 'blue',
    displayMode: 'replace',
  });
}

export function showLoadMoreBtn(showBoolean) {
  showBoolean
    ? loadMoreBtn.classList.remove('visually-hidden')
    : loadMoreBtn.classList.add('visually-hidden');
}

// === FUNCTIONS

function createMarkup(imagesArray) {
  if (imagesArray.length === 0) {
    return '';
  }

  let imageMarkupString = '';

  imagesArray.forEach(image => {
    imageMarkupString += `<li><a href="${
      image.largeImageURL
    }"><img src="${image.webformatURL.replace('_640', '_340')}" alt="${
      image.tags
    }"/></a>${createImageStatsMarkup(image)}
</li>`;
  });
  return imageMarkupString;
}

function createImageStatsMarkup(image) {
  return `<div class="stats-box"><p>Likes<br><span>${image.likes}</span></p><p>Views<br><span>${image.views}</span></p><p>Comments<br><span>${image.comments}</span></p><p>Downloads<br><span>${image.downloads}</span></p></div>`;
}
