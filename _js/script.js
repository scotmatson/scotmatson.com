$(document).ready(function() {

/************************************************************/
/*					Site Functions							*/
/************************************************************/
// Places an active cursor within the first form located on a page
$(':text:first').focus();
/************************************************************/
/*					index.html								*/
/************************************************************/

//	Creates an Array for all shade images and store them in an image object
	var preloadShutter = 	['_img/_shutter/droidshade.jpg',			//0
							 '_img/_shutter/artshade.jpg',				//1
							 '_img/_shutter/appletshade.jpg',			//2
							 '_img/_shutter/gamesshade.jpg',			//3
							 '_img/_shutter/iosshade.jpg',				//4
							 '_img/_shutter/opensourceshade.jpg',		//5
							 '_img/_shutter/photosshade.jpg',			//6
							 '_img/_shutter/webdesignshade.jpg',		//7
							 '_img/_shutter/webdevelopmentshade.jpg'	//8
	];

	var imgShutter = [];
	for (var i = 0; i < preloadShutter.length; i++) {
		imgShutter[i] = new Image();
		imgShutter[i].src = preloadShutter[i];
	}

//	Toggles the HTML image file with a preloaded Array shutter image
	$('#android').hover(
	function() {
		$(this).attr('src', imgShutter[0].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/droid.jpg')
	}); // end hover
	$('#art').hover(
	function() {
		$(this).attr('src', imgShutter[1].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/art.jpg')
	}); // end hover
	$('#applet').hover(
	function() {
		$(this).attr('src', imgShutter[2].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/applet.jpg')
	}); // end hover
	$('#games').hover(
	function() {
		$(this).attr('src', imgShutter[3].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/games.jpg')
	}); // end hover
	$('#ios').hover(
	function() {
		$(this).attr('src', imgShutter[4].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/ios.jpg')
	}); // end hover
	$('#opensource').hover(
	function() {
		$(this).attr('src', imgShutter[5].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/opensource.jpg')
	}); // end hover
	$('#photos').hover(
	function() {
		$(this).attr('src', imgShutter[6].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/photos.jpg')
	}); // end hover
	$('#webdesign').hover(
	function() {
		$(this).attr('src', imgShutter[7].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/webdesign.jpg')
	}); // end hover
	$('#webdevelopment').hover(
	function() {
		$(this).attr('src', imgShutter[8].src)
	},
	function() {
		$(this).attr('src', '_img/_shutter/webdevelopment.jpg')
	}); // end hover

//  Uses AJAX to pull content from pages accessed through the shutter. Content is displayed on the index page.
	$('#shutter a').click(function() {
		var url = $(this).attr('href');
		$('#portfolioContent').load(url + " #content");
		return false;
	}); //end click

/************************************************************/
/*					Fancybox								*/
/************************************************************/
// Creates a interactive pop-up window to display web design portfolio content
$('.fancySite').fancybox({
	width : '70%'
}); // end fancybox

/************************************************************/
/*					Forms									*/
/************************************************************/
// Disables the submission button once clicked upon
$('#formID').submit(function() {
	var subButton = $(this).find(':submit');
	subButton.attr('disabled',true);
	subButton.val('...sending information');
}); // end submit

/*
//	Blog assignment, unstyled. Possibly future use for site blog.
	(function() {
		// simulates AJAX request
		var data = [
			{
				title: "Drink Beer Fresh, Brew At Home!",	
				href: "http://www.google.com/",
				imgSrc: "_img/_photos/brewing.jpg",
			},
			{
				title: "Who Says The Drummer Can't Front The Band?",
				href: "http://www.google.com/",
				imgSrc: "_img/_photos/drumvox.jpg"
			},
			{
				title: "Making Friends While Cycling.",
				href: "http://www.google.com/",
				imgSrc: "_img/_photos/horse.jpg"
			}
		],
			template = document.querySelector('#template').innerHTML,
			result = document.querySelector('.result'),
			i = 0, len = data.length,
			fragment = '';

		for ( ; i < len; i++ ) {
			fragment += template
				.replace( /\{\{title\}\}/, data[i].title )
				.replace( /\{\{href\}\}/, data[i].href )
				.replace( /\{\{imgSrc\}\}/, data[i].imgSrc );
		}

		result.innerHTML = fragment;
	})(); // end anon function
*/
}); // end ready