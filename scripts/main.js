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

//----------------------------
// Change media style buttons
//----------------------------
setDesktop();

let btnDesktop = document.querySelector('.btn_desktop');
btnDesktop.addEventListener('click', setDesktop);

let btnMobile = document.querySelector('.btn_mobile');
btnMobile.addEventListener('click', setMobile);

let btnBack = document.querySelector('.btn_back');
btnBack.addEventListener('click', setDesktop);

function setMobile() {
    let btnDesktop = document.querySelector('.btn_desktop');
    showElem(btnDesktop);

    let btnMobile = document.querySelector('.btn_mobile');
    hideElem(btnMobile);

    let mainPanel = document.querySelector('.main_panel');
    if (mainPanel == undefined) return;
    mainPanel.classList.remove('main_panel');
    mainPanel.classList.add('main_panel-mobile');

    let sidePanels = document.querySelectorAll('.side_panel');
    for (const sidePanel of sidePanels) {
        sidePanel.classList.remove('side_panel');
        sidePanel.classList.add('side_panel-mobile');
    }
}

function setDesktop() {
    let btnDesktop = document.querySelector('.btn_desktop');
    hideElem(btnDesktop);

    let btnMobile = document.querySelector('.btn_mobile');
    showElem(btnMobile);

    let mainPanel = document.querySelector('.main_panel-mobile');
    if (mainPanel == undefined) return;
    mainPanel.classList.remove('main_panel-mobile');
    mainPanel.classList.add('main_panel');
    
    let sidePanels = document.querySelectorAll('.side_panel-mobile');
    for (const sidePanel of sidePanels) {
        sidePanel.classList.remove('side_panel-mobile');
        sidePanel.classList.add('side_panel');
    }
}