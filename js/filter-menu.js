$(document).ready(function(){
  selectionFilterMenu();
});

function selectionFilterMenu() {
  $('.menu-ul li').on('click', function(e){
    $('.filter-selection').text(e.target.textContent);
  })
}

