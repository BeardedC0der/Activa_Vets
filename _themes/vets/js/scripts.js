$(document).ready(function () {
	closePopUp();
	navtoggle();
	selectNav();
	
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('body').toggleClass('active');
   $('#overlay').toggleClass('open');
  });

function navtoggle() {
	$('.nav-toggle').click(function() {
		$('.site-nav, .nav-toggle, body').toggleClass('site-nav--visible');
		
		if($('.nav-toggle').hasClass('site-nav--visible')) {
			$('.nav-toggle__label').text('Close');
		}
		else {
			$('.nav-toggle__label').text('Menu');
		}
	});
	$('.site-nav a').click(function() {
		$('.site-nav, .nav-toggle').removeClass('site-nav--visible');
	});
}

function selectNav() {
	$("nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
}

function closePopUp() {
	$('.user-details__close').click(function() {
		$('.user-details').hide();
		
		// Unlocks body
		$('body').removeClass('site-nav--visible');
	});
}