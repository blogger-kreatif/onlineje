	jQuery(function($) {
	"use strict";

	var $container = $('.portfolio-container');
	var navbar = $('.default_header');
	var owlHeader = $('#owl-header');
	var owlClients = $(".owl-clients:not(.no-navigation)");
	var owlClientsNN = $('.owl-clients');
	var backgrounds = $("[data-background]");
	var navbarNav = $('.navbar-nav');
	var searchForm = $('.search-form');
	var rangeSlider = $('.range-slider');
	var spinners = $('.spinner');
	var tabsContainer = $('.tabs-container');
	var owlProject = $('.owl-project');
	var progressBars = $('.progress-bar');
	var accordions = $('.accordions');
	var thumbnails = $('.thumbnails .product-holder');

	$(document).ready(function(){
		$('.vcenter').each(function(){
			if($(window).width() > 768)
				$(this).css("top", $(this).parent().height() / 2 - $(this).height() / 2 + "px");
		});
			
		$(window).scroll(function() {
			var wh = window.innerWidth;
			var window_top = $(window).scrollTop() + 1;
			if (window_top > 100) {
				$('.mt_header').css("top",'0');
			} else {
				$('.mt_header').css("top", $(".mt_view_wrapper").outerHeight());
			}
		});
		// when loged-in
		if ($(".logged-in").length > 0) {
			$(".mt_header").css("margin-top", $("#wpadminbar").outerHeight());
			$(".mt_transparent_header").css("margin-top", $("#wpadminbar").outerHeight());
			$(".mt_fixed").css("margin-top", $("#wpadminbar").outerHeight());
		} else {
			$('.mt_header').css("margin-top",'0');
			$('.mt_transparent_header').css("margin-top",'0');
			$('.mt_fixed').css("margin-top",'0');
		}

		//progresssbar
		progressBars.each(function(){
			$(this).width($(this).data("valuenow") + "%");
		});
		// parallax effect
        $(function() {
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 1
            });
        });
		//on scroll fixed header
		$(window).scroll(function() {
			 var wh = window.innerWidth;
			var window_top = $(window).scrollTop() + 1;
			if (wh > 991){
				if (window_top > 200) {
					$('.moto_header .moto_header_wrapper').addClass('mt_fixed');
					$('.mt_scroll_menu').addClass('mt_fixed');
				} else {
					$('.moto_header .moto_header_wrapper').removeClass('mt_fixed');
					$('.mt_scroll_menu').removeClass('mt_fixed');
				}
			}
		});
		//menu toggle
		
		$("ul.sub-menu").parent().prepend('<i class="fa fa-caret-down" aria-hidden="true"></i>');
        $("ul.sub-menu li ul").parent().prepend('<i class="fa fa-caret-down" aria-hidden="true"></i>');
		
		$(".menu_toggle").click(function() {
            $(".menu_toggle").toggleClass('close_btn');
            $(".mt_header_wrapper").toggleClass('open_menu');
        });
		//sub-menu toggle
		$("ul.sub-menu").css("display", "none");
		$(".mt_header_wrapper .mt_moto_menu ul > li:has(ul) > a").on('click', function(e) {
			e.preventDefault();
			$(this).parent('.mt_header_wrapper .mt_moto_menu ul li').children('ul.sub-menu').slideToggle();
		});
		// $(".mt_header_wrapper .mt_moto_menu ul li ul.sub-menu li a").on('click', function(e) {
			// $(this).parent('.mt_header_wrapper .mt_moto_menu ul li ul.sub-menu li').children('ul').slideToggle();
		// });
			
		
		$('.owl-text').owlCarousel({
			loop: true,
			items: 1,
			dots: true,
			nav: false,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			margin: 0,
			autoplay: true,
			navText: ['', ''],
			animateIn: 'fadeInDown',
			animateOut: 'fadeOut'
		});
		owlClients.owlCarousel({
			loop: true,
			items: 4,
			dots: false,
			nav: true,
			autoHeight: false,
			touchDrag: false,
			mouseDrag: false,
			margin: 15,
			autoplay: true,
			navText: ['<', '>'],
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1068: {
					items: 4,
				}
			}
		});
		owlClientsNN.owlCarousel({
			pagination: false,
			navigation: true,
			navigationText:["<", ">"],
			autoPlay: 4000,
			items: 2
		});
		owlProject.owlCarousel({
			// pagination: false,
			// singleItem: true,
			// autoPlay: 4000,
			loop: true,
			items: 1,
			dots: false,
			nav: false,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			margin: 0,
			autoplay: true,
			navText: ['', ''],
			animateIn: 'fadeIn',
			animateOut: 'fadeOut'
		});
		// $container = $('.portfolio-container').imagesLoaded(function(){
			// $container.isotope({
				// itemSelector: '.item'
				// //layoutMode: 'fitRows'
			// });
		// });
		$(window).load(function(){
			var $container = $('.portfolio-container');
			$container.isotope({
				//layoutMode: 'fitRows',
				itemSelector: '.item',
				percentPosition: true,
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
					isFitWidth: true,
				}
			});
		 
			$('.portfolio-filter a').click(function(){
				$('.portfolio-filter .active').removeClass('active');
				$(this).addClass('active');
		 
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			});  
		}); 
		//pretty photo
		$("a[data-rel^='prettyPhoto']").prettyPhoto({
			social_tools: false
		});
		//prettyphoto 

        jQuery(".gallery a").attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
        jQuery(".alignnone").parent().attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
			
		//prettyphoto lightbox 

        jQuery(".light_img_wrap a ").attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
        jQuery(".alignnone").parent().attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
			
		//prettyphoto video lightbox 	
		$("a[data-gal^='prettyPhoto']").prettyPhoto();
		function prettyLaunch(linkurl, title) {
			document.getElementById("prettyLink").href = linkurl;
			document.getElementById("prettyLink").title = title;
			$.prettyPhoto.open(linkurl+'?iframe=true&amp;width=100%&amp;height=100%',title);
		}
		//range slider
		if(rangeSlider.length){
			rangeSlider.slider({
				range: true,
				min: 0,
				max: 500,
				values: [ 75, 300 ],
				slide: function( event, ui ) {
					$( ".price-range" ).html( ui.values[0] + " - " + ui.values[1] );
				}
			});
		}
		if(spinners.length){
			spinners.spinner({
				min:0,
				step: 1
			});
		}
		AdaptHeader();
		AddBackgrounds();
		TimelineHeight();
		// Accordion

		accordions.children('.accordion').children('.content').hide();
		$('.accordions').children('.accordion.active').children('.content').slideDown(200);
		accordions.children('.accordion').children('a.heading').on('click', function(){
			event.preventDefault();
				$(this).parent().siblings('.accordion').children('.content').slideUp();
				$(this).parent().siblings('.accordion').removeClass('active')
				$(this).parent().children('.content').slideDown();
				$(this).parent().addClass('active');
		});
		
		// woocommerce toast message
		var toast_m = $('.woocommerce .woocommerce-error, .woocommerce .woocommerce-info, .woocommerce .woocommerce-message');
		if(toast_m.length){
			setTimeout(function(){
				$('.woocommerce .woocommerce-error, .woocommerce .woocommerce-info, .woocommerce .woocommerce-message').fadeOut();
			},3000);
		}
		
		// CUSTOMS SELECT
		$("select").selectBoxIt({
			// Uses the jQuery 'fadeIn' effect when opening the drop down
			showEffect: "fadeIn",
			// Sets the jQuery 'fadeIn' effect speed to 400 milleseconds
			showEffectSpeed: 400,
			// Uses the jQuery 'fadeOut' effect when closing the drop down
			hideEffect: "fadeOut",
			// Sets the jQuery 'fadeOut' effect speed to 400 milleseconds
			hideEffectSpeed: 400
		});
		$(window).resize(function(){
			//$('body').css("padding-top", navbar.outerHeight());
			thumbnails.each(function(){
				$(this).height($('.gallery-pic').height() / thumbnails.length);
			});
			AdaptHeader();
		});

		$(window).load(function(){
			$('#owl-header').owlCarousel({
				singleItem: true, 
				addClassActive:true,
				pagination:false,
				afterMove: AnimateHeader
			});
			thumbnails.each(function(){
				$(this).height($('.gallery-pic').height() / thumbnails.length);
			});
			//FixFIsotope();
		});

		function TimelineHeight() {
			$('.timeline .post .icon').each(function(){
				var height = $(this).parent().siblings('.desc').height();
				$(this).parent().css("line-height", height + "px");
				$(this).parent().siblings('.posted').children('.heading').css("line-height", height - 35 + "px");
			});
		}

		function AddBackgrounds() {
			backgrounds.each(function(){
				$(this).css("background", "url('" + $(this).data("background") + "') no-repeat center center");
				$(this).css("background-size", "cover");
			});
		}
		function AdaptHeader() {
			owlHeader.find('.item').height($(window).height() - navbar.outerHeight());
		}
		function AnimateHeader() {
			var index = $('.owl-header .owl-item.active').index();

			$('.owl-header').find('.owl-item').eq(index).find('.header-text').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  			$(this).removeClass('animated zoomIn');
			});
		}
		// Tabs
      $('.tabs-container .tab-nav a:first').addClass('active');
		tabsContainer.children('.tab-nav').children('a').on('click', function(){
			event.preventDefault();
			$('.tabs-container .tab-nav a').removeClass('active');
			$(this).addClass('active');
			var index = $(this).parent().children('a').index($(this));
			tabsContainer.children('.tab-holder').children('.tab').fadeOut(150);
			tabsContainer.children('.tab-holder').children('.tab').eq(index).fadeIn(150);
		});

		tabsContainer.each(function(){
			var active_tab = $('.tab-nav a.active');
			var index = $(this).find('.tab-nav').children('a').index(active_tab);
			tabsContainer.find('.tab').hide();
			tabsContainer.children('.tab-holder').children('.tab').eq(index).show();
		});
		$('.search-toggle').on('click', function(){
			$('#moto-search').show();
			$('.nav-right-info form .close').show();
		});
		$('.nav-right-info form .close').on('click', function(){
			$('#moto-search').hide();
			$(this).hide();
		});

		// $('.portfolio-filter a').on('click', function(){
			// event.preventDefault();
			// $(this).addClass('active').siblings().removeClass('active');
			// var filterValue = $(this).attr('data-filter');
	  		// $container.isotope({ filter: filterValue });
		// });

		//Animate
		/*$('p').removeClass().addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  			$(this).removeClass();
		});*/

		// function FixFIsotope() {
			// $container.find(".item").each(function(){
		  		// if($(this).index() != 0) {
					// var width = parseInt($(this).prev(".item").css("width"));
					// var left = parseInt($(this).prev(".item").css("left"));
					// var pfWidthMin = $container.width() - 5;
					// var pfWidthMax = $container.width() + 5;
		  			// if(!(
		  				// width + left > pfWidthMin &&
		  				// width + left < pfWidthMax) ) {
		  				
		  				// $(this).css("left", (parseInt(width)+parseInt(left)) + "px");
		  			// }
		  		// }
	  		// });
		// }
		//product description slider
		$(".product_description_wrapper .owl-carousel").owlCarousel({
			loop: true,
			items: 1,
			dots: true,
			nav: false,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			margin: 0,
			autoplay: true,
			navText: ['', ''],
			animateIn: 'fadeIn',
			animateOut: 'fadeOut'
		});
		//popular video slider
		$(".mt_popular_video_section .owl-carousel").owlCarousel({
			loop: true,
			items: 3,
			dots: false,
			nav: true,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			margin: 0,
			autoplay: false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
		});
		//related project
		$(".related_projects .owl-carousel").owlCarousel({
			loop: true,
			items: 3,
			dots: false,
			nav: true,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			margin: 5,
			autoplay: false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
		});
		//latest project
		$('.showcase_project_slider .owl-carousel').owlCarousel({
			loop: true,
			items: 1,
			dots: false,
			nav: true,
			autoHeight: true,
			touchDrag: false,
			mouseDrag: false,
			margin: 0,
			autoplay: false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
		});
		//menu 
        $('.dropdown-menu').parent().hover(function() {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();

            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    'left': 'auto',
                    'right': '0'
                });
            }
        });
		/* ---------------------------------------------------- */
	/*	Contact From Sending Mail Ajax						*/
	/* ---------------------------------------------------- */
	
	$.validate({
		form : '#moto_contactform',
		modules : 'security',
		onSuccess : function() {
		contactform();
		return false; // Will stop the submission of the form
		}
	});
	$('.moto_loading').hide();
	function contactform(){
		var formdata = $( "#moto_contactform" ).serialize();
		formdata += '&action=moto_sndadminmail';
		$('.moto_loading').show();
		$.ajax({
			type : "post",
			url : $('#moto_ajaxurl').val(),
			data : formdata, 
			success: function(response) {
				$('.moto_loading').hide();
				$('#success_mes').text(response);
				$('#Message').val('');				
			}
		});
	}
	
	$('.send_mail').click(function(e){
		e.preventDefault();
		$('#moto_contactform').submit();
		
	});
	
	$('.send_mail_shortcode').click(function(e){
		e.preventDefault();
		$('#moto_contactform_shortcode').submit();
		
	});
	
	$.validate({
		form : '#moto_contactform_shortcode',
		modules : 'security',
		onSuccess : function() {
		contactform_shortcode();
		return false; // Will stop the submission of the form
		}
	});
	
	$('.moto_loading_shortcode').hide();
	function contactform_shortcode(){
		var formdata = $( "#moto_contactform_shortcode" ).serialize();
		formdata += '&action=moto_sndadminmail';
		$('.moto_loading_shortcode').show();
		$.ajax({
			type : "post",
			url : $('#moto_ajaxurl_shortcode').val(),
			data : formdata, 
			success: function(response) {
				$('.moto_loading_shortcode').hide();
				$('#success_mes_shortcode').text(response);
				$('#Message').val('');				
			}
		});
	}
		 
    //menu on small width
	    $(".menu_btn").click(function(){
			var w = window.innerWidth;
			if (w <= 992){
				$(this).toggleClass('close_menu');
				$(".mt_menu").toggleClass('mt_open_menu');
			}
	    });
		$(".moto_menu_btn").click(function(){
			var w = window.innerWidth;
			if (w <= 992){
				$(".moto_menu").addClass('mt_open_menu');
			}
	    });	
		$(".menu_close_btn").click(function(){
			var w = window.innerWidth;
			if (w <= 992){
				$(".moto_menu").removeClass('mt_open_menu');
			}
	    });

	
	//Scroll menu js end
	
	/* ---------------------------------------------------- */
	/*	Contact From Sending Mail Ajax						*/
	/* ---------------------------------------------------- */
	
	/* ----------------MAiclchimp Strat-------------------- */
		
		$(".mailchimp_btn").click(function(e){
			e.preventDefault(); // if the clicked element is a link
			var mailchimp_email   = $('.mailchimp_email').attr("value");
			var mailchimp_api	  = $('#mailchimp_api').attr("value");
			var mailchimp_list_id = $('#mailchimp_list_id').attr("value");

			if (!valid_email_address( mailchimp_email ))
			{
				$(".mailchimp_error").html('Please make sure you enter a valid email address.').slideDown("slow");
			}
			else{
			$(".mailchimp_message").html("<span style='color:green;'>Almost done, please check your email address to confirmation.</span>");
			 
			if( $('.subscriber').attr("value") != '' ){
				var subscriber = $('.subscriber').attr("value");
			}
			$.ajax({ 
				type: 'POST',
				url: ajax_object.ajax_url,
				data: {	
				'action'	 :'moto_news_letter',
				'email'  	 : mailchimp_email,
				'subscriber' : subscriber,
				'api_key'	 : mailchimp_api, 
				'list_id' 	 : mailchimp_list_id
				},
				success: function(msg) {
					if(msg=="success")
					{
					   $("#email").val("");
					   $(".mailchimp_message").html('<span style="color:green;">You have successfully subscribed to our mailing list.</span>').slideDown("slow");
					}
					else
					{
					 $(".mailchimp_error").html('Please make sure you enter a valid email address.').slideDown("slow");
					}
				},
				error:function(e){
					console.log(e);
				}
				
				 }); 
			}
		});
			function valid_email_address(email)
			{
			var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
			return pattern.test(email);
			}
		
		//Smooth Scroll
		$('.mt_scroll_menu nav li a[href*="#"]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		  });
		
		
	});
});
jQuery(window).load(function() {	
	jQuery("#preloader_box").fadeOut();
	jQuery("#preloader_wrapper").delay(350).fadeOut("slow");
});
