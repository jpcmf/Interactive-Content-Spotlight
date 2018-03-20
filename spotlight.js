$(document).ready(function() {

  // bullet open and close
  var bgs = $('.zoomin-image');
  // var isOpen = false;

  // console.log(bgs);

  $('.pulse-dot').click(function() {
    var target = $($(this).data('target')).stop(true).fadeToggle();
    // console.log(target);

    bgs.not(target).filter(':visible').stop(true, true).fadeToggle();
    // console.log(bgs.not(target));

    $(this).toggleClass('changeZindex');

    // setTimeout(function(){
    //   isOpen = true;
    // }, 100);
  });

  // $('body').on('click', function() {
  //   if(isOpen) {
  //     var target = $('.zoomin-image');
  //     target.hide();
  //     isOpen = false;
  //   }
  // });

  // init owl carousel products
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    dots:true,
    nav:true,
    items:5,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });

  // init Masonry
  var grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });

});
