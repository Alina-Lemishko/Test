import { renderMarkup } from './template/renderMarkup';

import getRefs from './services/getRefs';

const refs = getRefs();

let arrayOfPairs = [];

export function onInputChange(e) {
  if (e.target.value.trim().length >= 1) {
    refs.formButton.removeAttribute('disabled', false);
  }
  if (e.target.value.trim().length === 0) {
    refs.formButton.setAttribute('disabled', true);
  }
}

export function onFormSubmit(e) {
  e.preventDefault();
  const inputPair = e.target.elements.inputQuery.value.trim();
  const name = inputPair.split('=')[0].trim();
  const value = inputPair.split('=')[1].trim();
  const isAlfaNumeric = validationPairs(name, value);

  if (inputPair !== '' && name && value && isAlfaNumeric) {
    const pair = {
      id: Date.now(),
      name,
      value,
    };

    arrayOfPairs.push(pair);

    addToLocalStorage(arrayOfPairs);
    renderMarkup(arrayOfPairs);
    e.target.elements.inputQuery.value = '';
  } else {
    alert('please add pair');
  }
}

function validationPairs(name, value) {
  if (/[^a-zA-Z0-9]/.test(name) || /[^a-zA-Z0-9]/.test(value)) {
    alert('Input is not alphanumeric');
    return false;
  }
  return true;
}

export function addToLocalStorage(pairs) {
  // convert the array to string then store it.
  localStorage.setItem('pairs', JSON.stringify(pairs));
  // render to screen
  renderMarkup(pairs);
}

// function helps to get everything from local storage
export function getFromLocalStorage() {
  const getPairs = localStorage.getItem('pairs');

  if (getPairs) {
    const pairs = JSON.parse(getPairs);
    arrayOfPairs.push(...pairs);
    renderMarkup(pairs);
  }
}

export function onSortByName(e) {
  arrayOfPairs = [...arrayOfPairs].sort((a, b) => a.name.localeCompare(b.name));
  renderMarkup(arrayOfPairs);
}

export function onSortByValue(e) {
  arrayOfPairs = [...arrayOfPairs].sort((a, b) =>
    a.value.localeCompare(b.value)
  );
  renderMarkup(arrayOfPairs);
}

getFromLocalStorage();

export function onItemClick(e) {
  const checkedItem = e.target.id;
  localStorage.setItem('idForDelete', JSON.stringify(checkedItem));

  // onDelete(checkedItem);
}

export function onDelete(e) {
  const getPairs = localStorage.getItem('idForDelete');
  const pairs = JSON.parse(getPairs);
  arrayOfPairs = arrayOfPairs.filter(function (item) {
    return item.id != pairs;
  });
  console.log(pairs);

  addToLocalStorage(arrayOfPairs);
}
