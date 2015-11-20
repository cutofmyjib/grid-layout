$(document).ready(function(){
  selectionFilterMenu();
});

//add text to span element in h4 tag in menu div
function selectionFilterMenu() {
  $('.menu-ul li').on('click', function(e){
    $('.filter-selection').text(e.target.textContent);
  })
}

