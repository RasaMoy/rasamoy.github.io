var $buttonMenu = $('#button-menu');

function abrirMenu(){
	$buttonMenu.removeClass('fa fa-bars').addClass('fa fa-close');
	$('.navegacion .menu').css({'left':'0px'});
	$('#site-cache').css({'position':'absolute'});
};

function cerrarMenu(){
	$buttonMenu.removeClass('fa fa-close').addClass('fa fa-bars');
	$('.navegacion .menu').css({'left':'-320px'});
	$('#site-cache').fadeOut( 200, function() {
		$('#site-cache').css({'position':'static'})
	});

}

$buttonMenu.click(function() {
	if ($buttonMenu.hasClass('fa fa-bars')) {
		abrirMenu();
	}else{
		cerrarMenu();
	}
});