$( document ).ready(function() {

$('#owl-one').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    navText:['<button type="button" class="btn btn-light prev"><i class="fas fa-angle-right"></i></button>','<button type="button" class=" next btn btn-light"><i class="fas fa-angle-left"></i></button>'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});
//owl-carousel-two
$("#owl-two").owlCarousel({
    rtl:true,
    loop:true,
    navText:['<button type="button" class="btn btn-light prev"><i class="fas fa-angle-right"></i></button>','<button type="button" class=" next btn btn-light"><i class="fas fa-angle-left"></i></button>'],
    margin:25,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
           
        }
    }
});
$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

  //counter numbers
$('.count').counterUp({
    delay: 20,
    time: 1500
    
});

//progressbar

 //SCROLL
 $(window).bind("scroll", function () {
     if ($(this).scrollTop() > 100) {
         $(".back-to-top").css("display", "block");
       } else {
         $('.back-to-top').css("display", "none");
       }     
     });
 $('.back-to-top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
 }); 
//isotope
$(window).on('load', function() {
    var $container = $('.work-filter');
    var $filter = $('#menu-filter');
    
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear'
		}
	});
    $filter.find('a').on("click", function() {
		var selector = $(this).attr('data-filter');
		
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear'
			}
		});
		
        return false;
	});
	
});

//google-map
var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  
 
});

