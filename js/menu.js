var $buttonMenu = $('#button-menu');
// -------------------------
// -----MOSTRANDO MENU------

function abrirMenu(){
	$buttonMenu.removeClass('fa fa-bars').addClass('fa fa-close');
	$('.navegacion .menu').css({'left':'0px'});
	$('#site-cache').fadeIn().addClass('site-cache');
	$('div.main').css({'left':'320px'});
	$('div.main').addClass('stop-scrolling');
};

function cerrarMenu(){
	$buttonMenu.removeClass('fa fa-close').addClass('fa fa-bars');
	$('.navegacion .menu').css({'left':'-320px'});
	$('.navegacion .submenu').css({'left':'-320px'});
	
	$('#site-cache').fadeOut( 200, function() {
		$('#site-cache').removeClass('site-cache');
	});
	$('.main').removeClass('stop-scrolling');
	$('div.main').css({'left':'0px'});
	
}

$buttonMenu.click(function() {
	if ($buttonMenu.hasClass('fa fa-bars')) {
		abrirMenu();
	}else{
		cerrarMenu();
	}
});

// -------------------------
// -----MOSTRANDO SUBMENU------

// MOSTRANDO SUBMENU
	$('.navegacion .menu > .item-submenu a').click(function(){
		
		var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
		console.log(positionMenu); 

		$('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); // Mostramos El submenu correspondiente

	});

	// OCULTANDO SUBMENU
	$('.navegacion .submenu li.atras').click(function(){

		$(this).parent().css({'left':'-320px'}); // Ocultamos el submenu

	});

$('#site-cache').click(function(){
	cerrarMenu();
});