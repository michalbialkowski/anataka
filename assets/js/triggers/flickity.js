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
});

$('#tabs__promo .nav a[data-toggle="pill"]').on('shown.bs.tab', function(event) {
	let elem_id = $(this).attr('href');
	
	$(elem_id + ' .flickity--slider').flickity('resize');
	
	//alert(elem_id);
});

