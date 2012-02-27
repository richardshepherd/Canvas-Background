/**
 * HTML5 Canvas Background Tutorial
 * For Smashing Magazine
 * March 2012
 *   
 * Author: Richard Shepherd
 * 		   www.richardshepherd.com
 * 		   @richardshepherd   
 */
 
 $(document).ready(function(){
	

	// Kickstart our Canvas element
	var videoContainer = document.getElementById('canvas');
	var videoContext = videoContainer.getContext('2d');	

			videoContainer.width = 960;
			videoContainer.height = 540;


	// How many frames are in the movie?
	var numberOfFrames = 50
	
	// Create our timeLapseVideo object and cache the window object
	timeLapseVideo = new Image();
	$window = $(window);
	i = 0,
	counter = 0,
	x = 0,
	y = 0;


	loadImage();
	
	timeLapseVideo.onload = function(){
		
		counter = i;
		if (i > 10) counter = i-10;
		if (i > 20) counter = i-20;
		if (i > 30) counter = i-30;
		if (i > 40) counter = i-40;
		
		x = (counter - 1) * 80;
		y = (Math.floor((i-1)/10)) * 45;
		
		videoContext.drawImage(timeLapseVideo, 0, 0, 480, 270, x, y, 80, 45);
		console.log(y);
		if (i < 50) loadImage();
	}
	
	
	function loadImage() {


		var frameString = (i + 1).toString();
		
		// Prepend any 0's where needed - I was too lazy to delete them from the filenames ;)
		if (frameString.length == 1) frameString = '00' + frameString;
		if (frameString.length == 2) frameString = '0' + frameString;
		
		timeLapseVideo.src = 'images/TimeLapse' + frameString + '.jpg';

		i++;

	}
	
});		
	
	
	
