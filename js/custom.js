$(function () {
	//search
	$(".btn_search").click(function () {
		$(".search_overly").addClass("active");
	})
	$(".close_btn").click(function () {
		$(".search_overly").removeClass("active");
	})

	//	banner slider
	$(".banner_slider").slick({
		autoplay: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	});

	//isotop
	$('.work_warp').isotope({
		// options
		itemSelector: '.single_work_warp',
		layoutMode: 'fitRows'
	});
	//init Isotope
	var $grid = $('.work_warp').isotope({
		// options
	});
	// filter items on button click
	$('.work_gal_controller').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});

	//counter up
	$(".counter").counterUp({
		delay: 10000,
		time: 1000000,
	});

	//feedback slider
	$(".feedback_slider").slick({
		vertical: true,
		autoplay: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
	});

	$(".faq_header").on('click', function () {
		$('.faq_btn').removeClass('active');
		$(this).children('.faq_btn').addClass('active');

	});

});
