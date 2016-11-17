$(function() {
	//cache the window object
	var $window = $(window);
	
	//parallax background effect
	$('section[data-type="background"]').each(function() {
		
		var $bgObj = $(this); //assign the object
		
		$(window).scroll(function() {
			
			//scroll the background at var speed
			//the yPos is a negative value as we're scrolling upward.
			var yPos = -($window.scrollTop() / $bgObj.data('speed'));
			
			//create background position coordinates
			var coords = '50% '+ yPos + 'px';
			
			//move the background
			$bgObj.css({ backgroundPosition: coords })
		
		});
	});
});