function hide(elementId) {
    event.preventDefault();
    document.getElementById(elementId).style.display = 'none';
}

function show(elementId) {
    event.preventDefault();
    document.getElementById(elementId).style.display = 'block';
}