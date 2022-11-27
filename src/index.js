// Imports
import {
  onDelete,
  onFormSubmit,
  onInputChange,
  onItemClick,
  onSortByName,
  onSortByValue,
  onXMLShow,
} from './js/add-pairs';
import getRefs from './js/services/getRefs';

const refs = getRefs();

// Listeners
refs.formInput.addEventListener('input', onInputChange);
refs.form.addEventListener('submit', onFormSubmit);
refs.btnSortByName.addEventListener('click', onSortByName);
refs.btnSortByValue.addEventListener('click', onSortByValue);
refs.btnDelete.addEventListener('click', onDelete);
refs.btnShowXML.addEventListener('click', onXMLShow);
refs.pairsList.addEventListener('click', onItemClick);
