jQuery(document).ready(function($) {
	$(".heart").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).children().toggleClass('fa-heart-o');
		$(this).children().toggleClass('fa-heart');
	});
});