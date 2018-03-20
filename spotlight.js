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
    nav:false,
    items:7,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:4,
          },
        1200:{
            // items:6
        }
    }
  });

  // init Masonry
  var grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });

  grid.imagesLoaded().progress(function() {
    grid.masonry();
  });

  // open hide Content
  var displayArea = $('#displayArea');
  var closeButton = $('#closeButton');
  displayArea.hide();
  $('.grid').on('click', function() {
    displayArea.show();
    displayArea.animate({bottom: '0'});
  });
  closeButton.on('click', function(e) {
    e.preventDefault();
    displayArea.animate({bottom: '-400px'});
  });

});
