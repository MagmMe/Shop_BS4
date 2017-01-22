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

 		// Usunięcie produktu z koszyka

 		$('.product-row').on('click','.remove-item',function(){

    		$(this).parents('tr').eq(-1).remove();// usuwa produkt z koszyka na stronie checkout.html

		});


	 	// Magme Hero Smooth Scroll and Regulamin Site smooth scroll
		$('#start').on('click', function(e){
		    e.preventDefault();
		    var target= $('#end');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top + 450
		    }, 1000);
		});
		$('#regOne').on('click', function(e){
		    e.preventDefault();
		    var target= $('#reg1');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top - 200
		    }, 1000);
		});
		$('#regTwo').on('click', function(e){
		    e.preventDefault();
		    var target= $('#reg2');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top - 200
		    }, 1000);
		});
		$('#regThree').on('click', function(e){
		    e.preventDefault();
		    var target= $('#reg3');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top - 200
		    }, 1000);
		});
		$('#regFour').on('click', function(e){
		    e.preventDefault();
		    var target= $('#reg4');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top - 200
		    }, 1000);
		});
		$('#regFive').on('click', function(e){
		    e.preventDefault();
		    var target= $('#reg5');
		    $('html, body').stop().animate({
		       scrollTop: target.offset().top - 200
		    }, 1000);
		});

}(jQuery));
