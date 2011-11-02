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
		$(".obstacles li").removeClass("active");
		$(this).addClass("active");
	});
	//Countdown of the clock
	$(function() {
		var seconds = 60;
		setTimeout(updateCountdown, 1000);
		function updateCountdown() {
			seconds--;
			if (seconds >= 0) {
				$(".clock p").text(seconds);
			}
			else{seconds = 60}
			setTimeout(updateCountdown, 1000);
		}
	});
	//On submit Event Form submission
	$("#register").submit(function() {
		alert('We require only your photo and email, and now its too late to turn back...your submission is accepted!');
		return false;
	});	
	//Uses replaceholder library to fix non supporting browsers
	$.fn.replaceholder();
});