(function(){


	// Wysuwane Menu na urządzeniach mobilnych

	 $(document).ready(function () {
  		$('[data-toggle="offcanvas"]').click(function () {
    	$('.row-offcanvas').toggleClass('active');
 		 });
	});


	 // Hero Smooth scroll

	// $(function() {
	//   $('a[href*="#"]:not([href="#"])').click(function() {
	//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	//       var target = $(this.hash);
	//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	//       if (target.length) {
	//         $('html, body').animate({
	//           scrollTop: target.offset().top
	//         }, 1000);
	//         return false;
	//       }
	//     }
	//   });
	// });

}(jQuery));