//----------------------------
//    Education Expander
//----------------------------
let expander = document.querySelector('.edu--title_expander');
expander.addEventListener('click', onExpand);

function onExpand(event) {
    const upSymbol = '&#9650;';
    const downSymbol = '&#9660;';

    let expander = event.currentTarget;
    let contentDiv = document.querySelector('.edu--content');
    if (isVisible(contentDiv)) {
        hideElem(contentDiv);
        expander.innerHTML = downSymbol;
    }
    else {
        showElem(contentDiv);
        expander.innerHTML = upSymbol;
    }
}
