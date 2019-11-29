const expander = document.getElementById('expander');
expander.addEventListener('click', onExpand);

function onExpand(event) {
  const upSymbol = '&#9650;';
  const downSymbol = '&#9660;';

  const expander = event.currentTarget;
  const contentDiv = document.querySelector('.edu__content');
  expander.classList.toggle('edu__title-expander_expanded');
  contentDiv.classList.toggle('edu__content_expanded');
//   if (isVisible(contentDiv)) {
//     //hideElem(contentDiv);
//     expander.innerHTML = downSymbol;
//   } else {
//     //showElem(contentDiv);
//     expander.innerHTML = upSymbol;
//   }
}
