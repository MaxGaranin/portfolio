function isVisible(elem) {
    if (elem == undefined) return false;
    return elem.style.display != 'none';
}

function hideElem(elem) {
    if (elem == undefined) return;
    elem.style.display = 'none';
}

function showElem(elem, display = 'block') {
    if (elem == undefined) return;
    elem.style.display = display;
}

function toggleElem(elem, display = 'block') {
    if (elem == undefined) return;
    if (elem.style.display == 'none') {
        elem.style.display = display;   
    }
    else {
        elem.style.display = 'none';
    }
}