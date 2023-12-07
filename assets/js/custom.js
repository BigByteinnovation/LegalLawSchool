(function($){
    'use strict';


    //Pre-loader
	jQuery('.loader').delay(100).fadeOut("slow");

    //menu options
    var fixed_top = $(".main-menu");
    var scroll_top_open = $(".scroll-top");
	
    $(window).on('scroll', function(){
      
      if( $(this).scrollTop() > 100 ){  
        fixed_top.addClass("animated fadeInDown menu-fixed");
      }
      else{
        fixed_top.removeClass("animated fadeInDown menu-fixed");
      }

      if( $(this).scrollTop() > 800 ){  
        scroll_top_open.addClass("open");
      }
      else{
        scroll_top_open.removeClass("open");
      }

    });

	
    //header search
	$('.menu-search').on('click', function() {
		$('.menu-search-form').addClass('open');
	});
	$('.menu-search-close').on('click', function() {
		$('.menu-search-form').removeClass('open');
	});


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});



	//Isotope activation js codes
	var $gellary_img = $('.gallery-items').isotope({
	  itemSelector: '.gallery-item',
	  percentPosition: true,
	  transitionDuration: '0.5s',
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.gallery-item',
		gutter: 30
	  },
	  getSortData: {
		name: '.name',
		symbol: '.symbol',
		number: '.number parseInt',
		category: '[data-category]',
		weight: function( itemElem ) {
		  var weight = $( itemElem ).find('.weight').text();
		  return parseFloat( weight.replace( /[\(\)]/g, '') );
		}
	  }
	});

	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
		var name = $(this).find('.name').text();
		return name.match( /ium$/ );
	  }
	};

	// bind filter button click
	$('.gallery-menu').on( 'click', 'li', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $gellary_img.isotope({ filter: filterValue });
	});



	// change is-checked class on buttons
	$('.gallery-menu').each( function( i, liList ) {
	  var $liList = $( liList );
	  $liList.on( 'click', 'li ', function() {
		$liList.find('.active').removeClass('active');
		$( this ).addClass('active');
	  });
	});	


	 //lightcase
  	$('a[data-rel^=lightcase]').lightcase();
	

  	//Counter up
	$('.counter').counterUp();


	//Circle Progress bar
	$('.first.circle').circleProgress({
      value: 0.99,
      fill: {gradient: ['#ffb400']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(99 * progress) + '<i>%</i>');
    });

    $('.second.circle').circleProgress({
      value: 0.70,
      fill: {gradient: ['#ffb400']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    });

    $('.third.circle').circleProgress({
      value: 0.50,
      fill: {gradient: ['#ffb400']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
    });

    $('.fourth.circle').circleProgress({
      value: 1.0,
      fill: {gradient: ['#ffb400']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
    });



    //nst slider
    $('.nstSlider').nstSlider({
        "rounding": {
            "100": "1000",
            "1000": "10000",
            "10000": "100000"
        },
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            var $container = $(this).parent();
            $container.find('.leftLabel').text(leftValue);
            $container.find('.rightLabel').text(rightValue);
        }
    });


    //flex slider
	$(window).on('load',function() {
		// The slider being synced must be initialized first
		$('#carousel').flexslider({
		  animation: "slide",
		  controlNav: false,
		  animationLoop: false,
		  slideshow: false,
		  itemWidth: 84,
		  itemMargin: 4,
		  asNavFor: '#slider'
		});

		$('#slider').flexslider({
		  animation: "slide",
		  controlNav: false,
		  animationLoop: false,
		  slideshow: false,
		  sync: "#carousel"
		});
	});




	//Product list grid view
	var list = $("#list");
	var grid = $("#grid");
	list.on('click', function(){    
	  $('.product-item-grid').animate({opacity:0},function(){
		  $('.grid').removeClass('grid-active');
		  $('.list').addClass('list-active');
		  $('.product-item-grid').attr('class', 'product-item-list shadow');
		  $('.product-item-list').stop().animate({opacity:1});
	  });
	});

	grid.on('click', function(){  
	  $('.product-item-list').animate({opacity:0},function(){
		  $('.list').removeClass('list-active');
		  $('.grid').addClass('grid-active');
		  $('.product-item-list').attr('class', 'product-item-grid shadow');
		  $('.product-item-grid').stop().animate({opacity:1});
	  });
	});



	//Banner slider
	var swiper = new Swiper('.banner-slider', {
	    slidesPerView: 1,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
    	autoplay: 3500,
    	loop: true

	    });


	//Category slider
	var swiper = new Swiper('.category-slider', {
	    slidesPerView: 10,
    	autoplay: 2000,
	    spaceBetween: 0,
	    loop: true,
	    nextButton: '.category-button-next',
        prevButton: '.category-button-prev',
	    breakpoints: {
		    // when window width is <= 580px
		    580: {
		      slidesPerView: 3
		    },
		    // when window width is <= 991px
		    991: {
		      slidesPerView: 6
		    }
		  }
	    });

	//Category slider
	var swiper = new Swiper('.category-slider-three', {
	    slidesPerView: 6,
    	//autoplay: 2000,
	    spaceBetween: 0,
	    loop: true,
	    nextButton: '.category-three-button-next',
        prevButton: '.category-three-button-prev',
	    breakpoints: {
		    // when window width is <= 580px
		    580: {
		      slidesPerView: 2
		    },
		    // when window width is <= 991px
		    991: {
		      slidesPerView: 4
		    }
		  }
	    });



  	//Testimonial slider
	var swiper = new Swiper('.testimonial-slider', {
	    nextButton: '.testimonial-button-next',
        prevButton: '.testimonial-button-prev',
        effect: 'fade',
        fade: {
		  crossFade: true
		}
	    });


	//Partner slider
	var swiper = new Swiper('.partner-slider', {
	    slidesPerView: 6,
    	autoplay: 2000,
    	loop: true,
	    spaceBetween: 20,
	    breakpoints: {
		    // when window width is <= 480px
		    480: {
		      slidesPerView: 2
		    },
		    // when window width is <= 580px
		    580: {
		      slidesPerView: 3
		    },
		    // when window width is <= 767px
		    767: {
		      slidesPerView: 4
		    },
		    // when window width is <= 991px
		    991: {
		      slidesPerView: 5
		    }
		  }
	    });

	var swiper = new Swiper('.partner-slider-two', {
	    slidesPerView: 5,
    	autoplay: 2000,
    	loop: true,
	    spaceBetween: 20,
	    breakpoints: {
		    // when window width is <= 480px
		    480: {
		      slidesPerView: 1
		    },
		    // when window width is <= 580px
		    580: {
		      slidesPerView: 2
		    },
		    // when window width is <= 767px
		    767: {
		      slidesPerView: 3
		    },
		    // when window width is <= 991px
		    991: {
		      slidesPerView: 4
		    }
		  }
	    });

	//Teacher slider
	var swiper = new Swiper('.teacher-slider', {
	    slidesPerView: 4,
    	autoplay: 2000,
    	//loop: true,
	    spaceBetween: 20,
	    breakpoints: {
		    // when window width is <= 480px
		    480: {
		      slidesPerView: 1
		    },
		    // when window width is <= 767px
		    767: {
		      slidesPerView: 2
		    },
		    // when window width is <= 991px
		    991: {
		      slidesPerView: 3
		    }
		  }
	    });




})(jQuery);	  