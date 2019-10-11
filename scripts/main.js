
let expander = document.querySelector('.edu--title_expander');
expander.addEventListener('click', onExpand);

function onExpand(event) {
    let expander = event.currentTarget;
    let contentDiv = document.querySelector('.edu--content');
    if (contentDiv.style.display == 'none') {
        contentDiv.style.display = 'block';
        expander.innerHTML = '&#9650;';
    }
    else {
        contentDiv.style.display = 'none';
        expander.innerHTML = '&#9660;';
    }
}
