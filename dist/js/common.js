$(function() {

/*drop select with img*/

  $("#lang").msDropdown();

/*main slider*/
  $('#main_slider').owlCarousel({
      loop:true,
      nav:true,
      margin:0,
      responsive:{
          0:{
              items:1
          }
      },
    navText:""
  });

/*hash slider*/
    $('#hash_slider').owlCarousel({
      items:1,
      nav:true,
      loop:false,
      center:true,
      margin:10,
      URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 'URLHash',
      animateIn: 'lightSpeedIn',
      animateOut: 'lightSpeedOut',
      navText:""
  });

/*carousel x2*/
  $('.quartet-slider').owlCarousel({
      loop:true,
      nav:true,
      margin: 18,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          769:{
            items:3
          },
          1024:{
            items:4
          }
      },
    navText:""
  });

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

/*menu toggle*/

  function blueaseMenu() {
    var $trigger = $('.menu__trigger'),
        $menu = $('.menu__list');

    $trigger.click(function(){
      $(this).next($menu).slideToggle();
    });

    $(window).resize(function() {
      if ( $(window).width() > 880 ) {
        $menu.removeAttr('style');
      } 
    });
  }
  blueaseMenu();


});
