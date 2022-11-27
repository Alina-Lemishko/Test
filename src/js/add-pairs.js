import { renderMarkup } from './template/renderMarkup';

import getRefs from './services/getRefs';
import { renderXML } from './template/renderXML';

const refs = getRefs();

// Main array for pairs
let arrayOfPairs = [];

// Function for availability of form button
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
  const name = inputPair.split('=')[0]?.trim();
  const value = inputPair.split('=')[1]?.trim();
  const isAlfaNumeric = validationPairs(name, value);

  // Check pairs for correct format
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

//Function for pairs validation
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

// Function for sort by name
export function onSortByName(e) {
  const sortedArrayOfPairs = [...arrayOfPairs].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  renderMarkup(sortedArrayOfPairs);
}

// Function for sort by value
export function onSortByValue(e) {
  const sortedArrayOfPairs = [...arrayOfPairs].sort((a, b) =>
    a.value.localeCompare(b.value)
  );
  renderMarkup(sortedArrayOfPairs);
}

// Function for getting id from checked pair and add to localStorage
export function onItemClick(e) {
  const checkedItem = e.target.id;

  localStorage.setItem('idForDelete', JSON.stringify(checkedItem));
}

// Function for deleting checked pairs and change main array with pairs
export function onDelete(e) {
  const getPairs = localStorage.getItem('idForDelete');
  const pairs = JSON.parse(getPairs);
  const isPairsAvailable = arrayOfPairs.find(el => el.id === Number(pairs));
  if (!isPairsAvailable) {
    return;
  }
  arrayOfPairs = arrayOfPairs.filter(function (item) {
    return item.id != pairs;
  });

  addToLocalStorage(arrayOfPairs);
}

// Function fro rendering pair in xml format
export function onXMLShow() {
  const getPairs = localStorage.getItem('pairs');
  const pairs = JSON.parse(getPairs);
  refs.sectionXML.classList.toggle('visually-hidden');
  renderXML(pairs);
}

// Get pairs from localStorage after reloading page
getFromLocalStorage();
