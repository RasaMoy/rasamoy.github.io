var times;


$(window).load(function() {
    $(".loader").fadeOut("slow");
});

//  --------------JSON

// var xhr = new XMLHttpRequest();
// xhr.onload = function(){
// 	if (xhr.status === 200) {
// 		responseObject = JSON.parse(xhr.responseText);

// 		var newContent = '';
// 		for (var i = 0; i<responseObject.events.length; i++){
// 			newContent += '<div class="event">';
// 	        newContent += '<img src="' +responseObject.events[i].map +'" alt="">';
// 	        newContent += '<p class="bold">' + responseObject.events[i].location +'</span></p></div>'
// 		}
// 		document.getElementById('content').innerHTML = newContent;
// 	}
// };

// xhr.open('GET', '../data/data.json', true);
// xhr.send(null);


//  --------------JSONP

// function showEvents(data){
// 	var newContent = '';

// 	for(var i = 0; i < data.events.length; i++){
// 		newContent += '<div class="event">';
// 	    newContent += '<img src="' + data.events[i].map +'" alt="">';
// 	    newContent += '<p class="bold">' + data.events[i].location +'</span></p></div>'
// 	}
// 	document.getElementById('content').innerHTML = newContent;
// }


// ---------------jquery ajax
$('nav a').on('click', function(e){
	e.preventDefault();
	var url = this.href;
	$('nav a.active').removeClass('active');
	$(this).addClass('active');
	$('main').remove();
	$('.container').load(url + ' #main').hide().fadeIn('slow');

	$('body').removeClass('overflowh');
	$('body').addClass('nav-pusherback');
	$('body').removeClass('nav-pusher');
	$('#site-cache').removeClass('site-cache');
});

$(function(){
	

	$.ajax({
		beforeSend: function(xhr){
			if (xhr.overrideMimeType){
				xhr.overrideMimeType("application/json");
			}
		}
	});

	function loadTimetable(){
		$.getJSON('data/example.json')
		.done( function(data){
			times = data;
		}).fail( function(){
			// $('#events').html('Sorry! We could not load rhe timetable at the moment');
		});
	}

	loadTimetable();

	
});


// CLICK ON THE EVENT TO LOAD A TIMETABLE

$('.evento').on('click', function(e){

	e.preventDefault();
	var loc = this.id.toUpperCase();

	var newContent = '';
	for (var i = 0; i < times[loc].length; i++) {
		newContent += '<li><span>' + times[loc][i].time + '</span>'
		newContent += '<a href="descriptions.html# class="tema"';
		newContent += times[loc][i].title.replace(/ /g, '-') + '">';
		newContent += times[loc][i].title + '</a></li>';
		console.log(newContent);
	}

	$('#sessions').html('<ul>' + newContent + '</ul>');
	$('#events a.active').removeClass('active');
	$(this).addClass('active');
	$('.description').text('');
	});

	$('.tema').on('click', function(event) {
		event.preventDefault();
		var fragment = this.href;

		fragment = fragment.replace('#', ' #');
		$('.description').load(fragment);

	});

