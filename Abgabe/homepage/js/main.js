jQuery(function($) {

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});

	//Isotope
	$(window).load(function(){
		$gallery = $('.gallery-items');
		$gallery.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$gallery_selectors = $('.gallery-filter >li>a');
		$gallery_selectors.on('click', function(){
			$gallery_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$gallery.isotope({ filter: selector });
			return false;
		});
	});
});