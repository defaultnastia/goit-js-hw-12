import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPictures, resetRequestedPage } from './js/pixabay-api.js';
import {
  generateToastError,
  renderGallery,
  showLoadMoreBtn,
} from './js/render-functions.js';

// === REFS ===
export const loadMoreBtn = document.querySelector('.load-more-js');
export const gallery = document.querySelector('.gallery');

const searchForm = document.querySelector('.search-wrapper');
const imageLinkSelector = '.gallery a';
const loader = document.querySelector('.loader');
const noResultsPlaceholder = document.querySelector('.nothing-fetched');

const lightbox = new simpleLightbox(imageLinkSelector, {
  captionDelay: 250,
  captionsData: 'alt',
});

let keyWord = '';

// === LOGIC ===

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  keyWord = event.target.elements.searchbox.value.trim();
  if (keyWord === '') {
    generateToastError('missing_keyword');
    return;
  }

  gallery.innerHTML = '';
  resetRequestedPage();
  await updateGallery();
});

loadMoreBtn.addEventListener('click', async event => {
  await updateGallery();
  scrollItems(2);
});

// === FUNCTIONS ===

async function updateGallery() {
  showNotFoundState(false);
  loader.classList.remove('visually-hidden');

  showLoadMoreBtn(false);

  const images = await getPictures(keyWord);
  loader.classList.add('visually-hidden');
  if (!Array.isArray(images)) return;

  renderGallery(images, gallery);
  lightbox.refresh();

  if (!gallery.hasChildNodes()) showNotFoundState(true);
}

function showNotFoundState(showBoolean) {
  showBoolean
    ? noResultsPlaceholder.classList.remove('visually-hidden')
    : noResultsPlaceholder.classList.add('visually-hidden');
}

function scrollItems(number) {
  const galleryItem = gallery.querySelector('li');
  const rect = galleryItem.getBoundingClientRect();
  window.scrollBy({
    top: number * rect.height,
    left: 0,
    behavior: 'smooth',
  });
}
