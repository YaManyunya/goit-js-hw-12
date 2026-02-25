import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import * as main from '../main';

import iziToast from 'izitoast'; //вспливаюче повідомлення
import 'izitoast/dist/css/iziToast.min.css';

let lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
 <a class="gallery-link" href="${largeImageURL}">
 <img class="gallery-img" src="${webformatURL}" alt ="${tags}" width="360" height="200"/>
 </a>
<ul class="gallery-info">
<li class="gallery-info-item">
<h3 class="gallery-info-title">Likes</h3>
<p class="gallery-info-text">${likes}</p>
</li>
<li class="gallery-info-item">
<h3 class="gallery-info-title">Views</h3>
<p class="gallery-info-text">${views}</p>
</li>
<li class="gallery-info-item">
<h3 class="gallery-info-title">Comments</h3>
<p class="gallery-info-text">${comments}</p>
</li>
<li class="gallery-info-item">
<h3 class="gallery-info-title">Downloads</h3>
<p class="gallery-info-text">${downloads}</p>
</li>
</ul>
</li>`
    )
    .join('');
}

export function renderGallery(arr) {
  main.gallery.insertAdjacentHTML('beforeend', createGallery(arr));
  lightbox.refresh();
}

export function clearGallery() {
  main.gallery.innerHTML = '';
}

export function showLoader() {
  main.loader.classList.remove('hide');
}

export function hideLoader() {
  main.loader.classList.add('hide');
}

export function showLoadMoreButton() {
  main.button.classList.remove('hide');
}

export function hideLoadMoreButton() {
  main.button.classList.add('hide');
}
export function showArrow() {
  main.arrow.classList.remove('hide');
}
export function hideArrow() {
  main.arrow.classList.add('hide');
}

function showToast(message) {
  iziToast.error({
    message,
    messageColor: '#fafafb',
    backgroundColor: '#ef4040',
    messageSize: '16px',
    position: 'topRight',
    icon: 'material-icons',
  });
}

export function showError() {
  showToast(
    'Sorry, there are no images matching your search query. Please try again!'
  );
}
export function showEmptyInputError() {
  showToast('Please enter the correct name!');
}

export function showFinishedError() {
  showToast(`We're sorry, but you've reached the end of search results`);
}
