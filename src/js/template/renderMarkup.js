import getRefs from '../services/getRefs';

const refs = getRefs();

//Template for rendering markup for main list of pairs
export function renderMarkup(array) {
  const markup = array
    .map(
      item => /*html*/ `
        <li class="pairs__list_item"><button id='${item.id}' class="pairs__list_item_btn">${item.name}=${item.value}</button></li>
  `
    )
    .join('');

  refs.pairsList.innerHTML = markup;
}
