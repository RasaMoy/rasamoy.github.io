$(function(){

	var $window = $(window).width();
	var $body = $('body');
	

	if ($window < 959) {
		$('nav').addClass('nav-responsive');
	}

	$(window).on('resize', function(){
		var $window1 = $(window).width();
		if ($window1 < 959) {
		$('nav').addClass('nav-responsive');
		}else{
			$('nav').removeClass('nav-responsive')
		}
	});


	$('#button-menu').on('click', function(e){
		e.preventDefault();
		
			$body.removeClass();
			$body.addClass('nav-pusher');
			$body.addClass('overflowh');
			$('#site-cache').addClass('site-cache');
		

		$('#site-cache').on('click', function(){
			
			$body.removeClass('overflowh');
			$body.addClass('nav-pusherback');
			$body.removeClass('nav-pusher');
			$('#site-cache').removeClass('site-cache');
		});


	});
});