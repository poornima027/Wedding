(function($) {
"use strict";
$(function(){




/*------------------------------------------------------------------
[Table of contents]


1.THE HAEART MENU TOGGLE JS
2.THE HEART STICKU MENU
3.THE HEART VAGAS ANIMATE JS
4.THE HEART AUTO HEIGHT FUNCTION JS
5.THE HEART JARALAX JS
6.THE HEART SLIDER JS
7.THE HEART GIFT REGISTY GALLERY JS
8.THE HEART MAGNIFIC POPUP JS
9.THE HEART V7 JS
10.THE HEART WOW JS
11.THE HEART PRELOADER JS
12.THE HEAR GALLERY GRID JS
13.THE HEART JOURNAL GRID JS


-------------------------------------------------------------------*/


/*--------------------------------------------------------------
1.THE HAEART MENU TOGGLE JS
------------------------------------------------------------*/
$(".menu-toggle").on("click", function(){
	$(".the-heart-main-meun").slideToggle(500);
});

/*--------------------------------------------------------------
2.THE HEART STICKU MENU
------------------------------------------------------------*/
$(window).scroll(function(){
  if ($(window).scrollTop() > 50) {
    $('.the-heart-menu-and-logo-section').addClass('sticky-menu');
  } else {
    $('.the-heart-menu-and-logo-section').removeClass('sticky-menu');
  }
});



/*--------------------------------------------------------------
5.THE HEART JARALAX JS
------------------------------------------------------------*/
if($('.jarallax').length>0) {

  jarallax(document.querySelectorAll('.jarallax'));
	jarallax(document.querySelectorAll('.jarallax-keep-img'), {
	    keepImg: true,
	});
}

/*--------------------------------------------------------------
  THE HEART MENU SOOMTH SCROLL JS
--------------------------------------------------------------*/

if ($('.the-heart-main-meun ul li a').length > 0) {
    $('.the-heart-main-meun ul li a').click(function(e){
      var href = $(this).attr("href"),
        hrefFirst = href[0];


      if(href.length > 1 && hrefFirst === '#' && $(href).offset()){
        var offsetTop = href === "#" ? 0 : $(href).offset().top - 0;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop,
        }, 500, "easeInOutCirc");
        e.preventDefault();
      }

    });
  }

// Lazy Loads
  var bLazy = new Blazy();

 });/*End document ready*/


$(window).on("load" ,function(){

/*--------------------------------------------------------------
11.THE HEART PRELOADER JS
------------------------------------------------------------*/
$('#prelaoder').fadeOut(450);


}); // End window LODE


})(jQuery);
