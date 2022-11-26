// Imports
import {
  onDelete,
  onFormSubmit,
  onInputChange,
  onItemClick,
  onSortByName,
  onSortByValue,
} from './js/add-pairs';
import getRefs from './js/services/getRefs';

const refs = getRefs();

// Listeners
refs.formInput.addEventListener('input', onInputChange);
refs.form.addEventListener('submit', onFormSubmit);
refs.btnSortByName.addEventListener('click', onSortByName);
refs.btnSortByValue.addEventListener('click', onSortByValue);
refs.btnDelete.addEventListener('click', onDelete);
// refs.btnShowXML.addEventListener('click', onShowXML);
refs.pairsList.addEventListener('click', onItemClick);
