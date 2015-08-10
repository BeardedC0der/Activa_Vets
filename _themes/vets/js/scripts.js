$(document).ready(function () {
	navToggle();
	closeNav();
	tabs();
	accordionToggle();
	closenavonbreakpoint();
	scrolledNav();
	scrolltoanchor();
	
	$('.slider').flickity({
      // options
      arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z',
      cellAlign: "center", 
      contain: true, 
      wrapAround: true, 
      freeScroll: false, 
      autoPlay: 5000,
      initialIndex: 0
   	});
});


function navToggle() {
	$('#toggle').click(function() {
	   $(this).toggleClass('active');
	   $('body').toggleClass('active');
	   $('#overlay').toggleClass('open');
	});
}

function closeNav(){
	$('.overlay_menu ul li a').click(function() {
		$('#toggle, body').removeClass('active');
		$('#overlay').removeClass('open');
	});
}
	
function closenavonbreakpoint() {
    $(window).on('resize', function(){
        var win = $(this);
        
        if (win.width() >= 1024) {
            $('#toggle,body').removeClass('active');
			$('#overlay').removeClass('open');
        }
    });
}

function scrolledNav() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1 ) {
            $('.site-header--Home').addClass('scrolled');
        }
        if (scroll <= 1 ) {
            $('.site-header--Home').removeClass('scrolled');
        }
    });
}

// Scroll to anchor

function scrolltoanchor() {
 $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top - 72
       }, 400);
       return false;
     }
   }
 });
}	
	
function tabs() {
    
    $( '.tab' ).click( function() {
        var $tabclicked = $( this );
        var $tabsection = $tabclicked.closest('section');
            
        //clean up
       $tabsection.find('.tab__content' ).hide();
       $tabsection.find( '.tab' ).removeClass( 'tab--active' );
            
        //show new tab
        $tabclicked.addClass( 'tab--active' );
        $( $tabclicked.attr('href') ).show();

        return false;
    });
        
    //hide all the tabs panels
    $( '.tab__content' ).hide();
        
    //click the first tab
    //$('.tab').first().click();
    

	$(".wrap--tabs").each(function() {
        //$(this).css('background','red');
        //$(this).find('.tab').first().css('background','red');
        $(this).find('.tab').first().click();
    });
    
}

function accordionToggle() {
    $('.tab--mobile').click(function() {
        $(this).next().toggleClass('tab__content--show');
        return false;
    });
}