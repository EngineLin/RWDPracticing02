jQuery(document).ready(function($) {
	$(".bar").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".menuIn").toggle('fast', function() {
		});
	});

	$(".heart").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).children().toggleClass('fa-heart-o');
		$(this).children().toggleClass('fa-heart');
	});
});