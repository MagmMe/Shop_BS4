(function(){

	// Wysuwane Menu na urządzeniach mobilnych

	 $(document).ready(function () {
  		$('[data-toggle="offcanvas"]').click(function () {
    	$('.row-offcanvas').toggleClass('active');
 		 });
	});

	// $(".chevron-animate").hover(function(){
 //        $(this).css("transform", "rotate(90deg)");
 //        });

	// $(".chevron-animate").active(function(){
 //        $(this).css("transform", "rotate(90deg)");
 //        });


	 	// Magme Hero Smooth Scroll
		$('#start').on('click', function(e){
		    e.preventDefault();
		    var target= $('#end');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top
		    }, 1000);
		});

}(jQuery));