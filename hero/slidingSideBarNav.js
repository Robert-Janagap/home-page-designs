(function($){
	$('.triangle_inner').on('click', function(){
		$('header').toggleClass('margin_left_zero');
		$(this).toggleClass('triangle_active');
	})
})(jQuery);