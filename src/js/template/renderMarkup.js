import getRefs from '../services/getRefs';

const refs = getRefs();

export function renderMarkup(array) {
  const markup = array
    .map(
      item => /*html*/ `
        <li class="pairs__list_item" id='${item.id}' >${item.name}=${item.value}</li>
  `
    )
    .join('');

  refs.pairsList.innerHTML = markup;
}
