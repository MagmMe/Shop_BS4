!function(){$(document).ready(function(){$('[data-toggle="offcanvas"]').click(function(){$(".row-offcanvas").toggleClass("active")})}),$(".product-row").on("click",".remove-item",function(){$(this).parents("tr").eq(-1).remove()}),$("#start").on("click",function(o){o.preventDefault();var e=$("#end");$("html, body").stop().animate({scrollTop:e.offset().top+450},1e3)}),$("#regOne").on("click",function(o){o.preventDefault();var e=$("#reg1");$("html, body").stop().animate({scrollTop:e.offset().top-200},1e3)}),$("#regTwo").on("click",function(o){o.preventDefault();var e=$("#reg2");$("html, body").stop().animate({scrollTop:e.offset().top-200},1e3)}),$("#regThree").on("click",function(o){o.preventDefault();var e=$("#reg3");$("html, body").stop().animate({scrollTop:e.offset().top-200},1e3)}),$("#regFour").on("click",function(o){o.preventDefault();var e=$("#reg4");$("html, body").stop().animate({scrollTop:e.offset().top-200},1e3)}),$("#regFive").on("click",function(o){o.preventDefault();var e=$("#reg5");$("html, body").stop().animate({scrollTop:e.offset().top-200},1e3)})}(jQuery);