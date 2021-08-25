$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: false,
		prevNextButtons: true
	});
	
	$('.nav-tabs').on('shown.bs.tab', 'a', function( event ) {
		var selector = event.target.getAttribute('href');
		$(selector).flickity('resize');
	});
});

