$function {
'use strict';
var winH = $(window).height(), 
    upperH = $('.navbar').innerHeight()
$('.intropage, .carousel-item').height(winH - upperH);
};

$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 500});
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#myCarousel").carousel(3);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#myCarousel").carousel("next");
    });
  });

  (function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
      $('#nav-toggle').click(function() {
    $('nav ul').toggle();
  });
    });
  })(jQuery);