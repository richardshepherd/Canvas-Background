/**
 * HTML5 Canvas Background Tutorial
 * For Smashing Magazine
 * January 2012
 *   
 * Author: Richard Shepherd
 * 		   www.richardshepherd.com
 * 		   @richardshepherd   
 */
 
var canvasVideo = {

	init: function() {

		// Cache the window object	
		$window = $(window);
		
		canvasVideo.attachKeyboardHandlers();
		canvasVideo.attachMouseHandlers();
		canvasVideo.initialiseCanvas();		
		canvasVideo.spriteSetup();
		canvasVideo.loadBigImages();

	
	},


	attachKeyboardHandlers: function() {

		// Animated scrolls to show off the background 
		$('a[data-scrollToID]').click(function(){
			$.scrollTo('#' + $(this).attr('data-scrollToID'), 1000);
		});

	},
		
		
	attachMouseHandlers: function() {

		// When the window scrolls
		$window.scroll(canvasVideo.windowScroll);

	},


	initialiseCanvas: function() {
	
		// Kickstart our Canvas element
		videoContainer = document.getElementById('canvas');
		videoContext = videoContainer.getContext('2d');	

		// How many frames are in the movie?
		numberOfFrames = 50
		
		// Create our timeLapseVideo object and cache the window object
		timeLapseVideo = new Image();

		
	},
		
			
	spriteSetup: function() {

		// Define the timeLapseVideo element
		timeLapseVideo.onload = function(){
			videoContainer.width = 960;
			videoContainer.height = 540;
			videoContext.drawImage(timeLapseVideo, 0, 0, 80, 45, 0, 0, 960, 540);
			
		}
		
		// Load in the first frame
		timeLapseVideo.src = 'images/spritesheet.jpg';
				
		// Calculate how far we have to scroll before changing a frame
		var scrollDistance = $window.height() - $window.scrollTop();
		var totalHeight = $(document).height() - scrollDistance;
		frameDiff = totalHeight / (numberOfFrames - 1);

	},
	
	loadBigImages: function() {
        
	
	},


	
	windowScroll: function() {

		// Which frame do we need to show
		frameString = (Math.round($window.scrollTop()/frameDiff) + 1).toString();
		
		
		// Change the image in the canvas
		counter = frameString;
		if (frameString > 10) counter = frameString - 10;
		if (frameString > 20) counter = frameString - 20;
		if (frameString > 30) counter = frameString - 30;
		if (frameString > 40) counter = frameString - 40;
		
		x = (counter - 1) * 80;
		y = (Math.floor((frameString-1)/10)) * 45;
		
		videoContext.drawImage(timeLapseVideo, x, y, 80, 45, 0, 0, 960, 540);
		
		
		// Display which frame we're on
		$('.frame').html('Frame: ' + frameString);

	} // canvasVideo.windowScroll
	
	
}

// Off we go...
$(document).ready(canvasVideo.init);




