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
    if (contentDiv.style.display == 'none') {
        contentDiv.style.display = 'block';
        expander.innerHTML = upSymbol;
    }
    else {
        contentDiv.style.display = 'none';
        expander.innerHTML = downSymbol;
    }
}

//----------------------------
// Change media style buttons
//----------------------------
let btnDesktop = document.querySelector('.btn_desktop');
hideElem(btnDesktop);

let btnMobile = document.querySelector('.btn_mobile');
expander.addEventListener('click', () => {
    // document.location.href = "index.html";
});

let btnBack = document.querySelector('.btn_back');
expander.addEventListener('click', () => {
    // document.location.href = "index.html";
});