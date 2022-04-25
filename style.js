
function bulma_openTab(evt, tabTitle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove('is-active');
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.classList.add('is-active');
}
