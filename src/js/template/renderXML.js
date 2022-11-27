import getRefs from '../services/getRefs';

const refs = getRefs();

//Template for rendering xml markup
export function renderXML(array) {
  const markup = array
    .map(
      item => /*html*/ `
      <li class='xml__list_item'>&lt;<span>pairsElement id</span>="${item.id}"	&gt;
         <p class='xml__list_text'>&lt;<span>name</span>&gt;${item.name}&lt;<span>/name</span>	&gt;</p>
          <p class='xml__list_text'>&lt;<span>value</span>&gt;${item.value}&lt;<span>/value</span>&gt;</p>
      &lt;<span>/pairsElement</span>&gt;   </li>
  `
    )
    .join('');
  refs.XMLList.innerHTML = markup;
}
