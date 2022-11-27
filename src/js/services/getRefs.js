export default function getRefs() {
  return {
    formInput: document.querySelector('.form__input'),
    pairsList: document.querySelector('.pairs__list'),
    pairsListItem: document.querySelector('.pairs__list_item'),
    formButton: document.querySelector('.form__button'),
    form: document.querySelector('.form'),
    btnSortByName: document.querySelector('.button__sort_name'),
    btnSortByValue: document.querySelector('.button__sort_value'),
    btnDelete: document.querySelector('.button__sort_delete'),
    btnShowXML: document.querySelector('.button__sort_xml'),
    sectionXML: document.querySelector('.section__xml'),
    XMLList: document.querySelector('.xml__list'),
  };
}
