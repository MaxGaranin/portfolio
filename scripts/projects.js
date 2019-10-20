let btnSwitch = document.querySelector('.btn_switch');
btnSwitch.addEventListener('click', switchDesktopMobile);

let btnBack = document.querySelector('.btn_back');
btnBack.addEventListener('click', backToPortfolio);

function switchDesktopMobile() {
    let frame = document.querySelector('.frame');
    frame.classList.toggle('mobile');
    frame.classList.toggle('desktop');
    btnSwitch.innerHTML = btnSwitch.innerHTML == 'Mobile'
        ? 'Desktop'
        : 'Mobile';
}

function backToPortfolio() {
    history.back();
}