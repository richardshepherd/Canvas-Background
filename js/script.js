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

		// Animated scrolls to show off the background 
		$('a[data-scrollToID]').click(function(){
			$.scrollTo('#' + $(this).attr('data-scrollToID'), 1000);
		});
			
		// Kickstart our Canvas element
		var videoContainer = document.getElementById('canvas');
		var videoContext = videoContainer.getContext('2d');	

		// How many frames are in the movie?
		var numberOfFrames = 50
		
		// Create our timeLapseVideo object and cache the window object
		timeLapseVideo = new Image();
		$window = $(window);
		
		// Define the timeLapseVideo element
		timeLapseVideo.onload = function(){
			videoContainer.width = 960;
			videoContainer.height = 540;
			videoContext.drawImage(timeLapseVideo, 0, 0, 960, 540);
		}
		
		// Load in the first frame
		timeLapseVideo.src = 'images/TimeLapse001.jpg';
				
		// Calculate how far we have to scroll before changing a frame
		var scrollDistance = $window.height() - $window.scrollTop();
		var totalHeight = $(document).height() - scrollDistance;
		frameDiff = totalHeight / (numberOfFrames - 1);
	
		// When the window scrolls
		$window.scroll(canvasVideo.windowScroll);
	
	}, // canvasVideo.init
	
	windowScroll: function() {

		// Which frame do we need to show
		frameString = (Math.round($window.scrollTop()/frameDiff) + 1).toString();
		
		// Prepend any 0's where needed - I was too lazy to delete them from the filenames ;)
		if (frameString.length == 1) frameString = '00' + frameString;
		if (frameString.length == 2) frameString = '0' + frameString;
		
		// Change the image in the canvas
		timeLapseVideo.src = 'images/TimeLapse' + frameString + '.jpg';
		
		// Display which frame we're on
		$('.frame').html('Frame: ' + frameString);

	}, // canvasVideo.windowScroll
	
	preload: function() {
	
		// You can create a function which preloads images when the user isn't scrolling

	},
	
	spritesheet: function() {
	
		// Why not create a spritesheet like NewZealand.com, and stretch
		// each tiny frame over the canvas?
	
	}
	
}

// Off we go...
$(document).ready(canvasVideo.init);