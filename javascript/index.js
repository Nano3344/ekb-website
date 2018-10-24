/* Underline nav-bar effect */
$(document).ready(function(){

$('nav').on('click', 'a', function() {
  $('nav a.active').removeClass('active');
    $(this).addClass('active');
});

/* Dropdown function */

function dropDown() {
  document.getElementById('content').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.burger-menu')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
});
