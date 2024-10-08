document.getElementById('sectionsLink').addEventListener('click', function (e) {
    e.preventDefault();
    var sectionsMenu = document.getElementById('sectionsMenu');
    if (sectionsMenu.classList.contains('d-none')) {
        sectionsMenu.classList.remove('d-none');
    } else {
        sectionsMenu.classList.add('d-none');
    }
});