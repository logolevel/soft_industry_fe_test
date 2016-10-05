$(function() {

/*drop select with img*/

  $("#lang").msDropdown();

/*carousel*/
  $('.owl-carousel').owlCarousel({
      loop:true,
      nav:true,
      margin:0,
      responsive:{
          0:{
              items:1
          }
      },
    navText:""
  })
/*search nav*/
$('.owl-prev').addClass('icon-arrow-left');
$('.owl-next').addClass('icon-arrow-right');

/*like rating*/
$('.like-rating ul li').on('click', function() {
  var selectedCssClass = 'selected';
  var $this = $(this);
  $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
  $this
    .addClass(selectedCssClass)
    .parent().addClass('vote-cast');
});


});
