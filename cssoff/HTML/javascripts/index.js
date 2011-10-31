$(document).ready(function() {
	//On click Event Nav
	$('header nav p a').click(function() {
	   var elementClicked = $(this).attr("href");
	   var destination = $(elementClicked).offset().top;
	   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-0}, 500 );
	   return false;
	});
	
	//On click Event Obstacle
	$(".obstacles li").click(function() {
		$(".obstacles li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected activity
	});
	
	//Countdown of the clock
	$(function() {
		var seconds = 60;
		setTimeout(updateCountdown, 1000);
		function updateCountdown() {
			seconds--;
			if (seconds > 0) {
				$(".clock p").text(seconds);
				setTimeout(updateCountdown, 1000);
			}
		}
	});
	
	//Uses replaceholder library to fix non supporting browsers
	$.fn.replaceholder();
});