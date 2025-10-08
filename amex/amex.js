function display(i) {
    const arrow = i.childNodes[1];
    const details = i.parentNode.childNodes[3];
    arrow.classList.toggle("rotate");
    details.classList.toggle('disp')
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
    }
}