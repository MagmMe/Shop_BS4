!function($,e){"use strict";var i={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:15,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,i){},onAfterSlide:function(e,i){},onBeforeNextSlide:function(e,i){},onBeforePrevSlide:function(e,i){}};$.fn.lightSlider=function(e){if(0===this.length)return this;if(this.length>1)return this.each(function(){$(this).lightSlider(e)}),this;var t={},n=$.extend(!0,{},i,e),l={},a=this;t.$el=this,"fade"===n.mode&&(n.vertical=!1);var s=a.children(),o=$(window).width(),r=null,d=null,c=0,u=0,f=!1,h=0,g="",v=0,p=n.vertical===!0?"height":"width",m=n.vertical===!0?"margin-bottom":"margin-right",S=0,b=0,C=0,M=0,T=null,x="ontouchstart"in document.documentElement,w={};return w.chbreakpoint=function(){if(o=$(window).width(),n.responsive.length){var e;if(n.autoWidth===!1&&(e=n.item),o<n.responsive[0].breakpoint)for(var i=0;i<n.responsive.length;i++)o<n.responsive[i].breakpoint&&(r=n.responsive[i].breakpoint,d=n.responsive[i]);if("undefined"!=typeof d&&null!==d)for(var t in d.settings)d.settings.hasOwnProperty(t)&&("undefined"!=typeof l[t]&&null!==l[t]||(l[t]=n[t]),n[t]=d.settings[t]);if(!$.isEmptyObject(l)&&o>n.responsive[0].breakpoint)for(var a in l)l.hasOwnProperty(a)&&(n[a]=l[a]);n.autoWidth===!1&&S>0&&C>0&&e!==n.item&&(v=Math.round(S/((C+n.slideMargin)*n.slideMove)))}},w.calSW=function(){n.autoWidth===!1&&(C=(h-(n.item*n.slideMargin-n.slideMargin))/n.item)},w.calWidth=function(e){var i=e===!0?g.find(".lslide").length:s.length;if(n.autoWidth===!1)u=i*(C+n.slideMargin);else{u=0;for(var t=0;t<i;t++)u+=parseInt(s.eq(t).width())+n.slideMargin}return u},t={doCss:function(){var e=function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],i=document.documentElement,t=0;t<e.length;t++)if(e[t]in i.style)return!0};return!(!n.useCSS||!e())},keyPress:function(){n.keyPress&&$(document).on("keyup.lightslider",function(e){$(":focus").is("input, textarea")||(e.preventDefault?e.preventDefault():e.returnValue=!1,37===e.keyCode?a.goToPrevSlide():39===e.keyCode&&a.goToNextSlide())})},controls:function(){n.controls&&(a.after('<div class="lSAction"><a class="lSPrev">'+n.prevHtml+'</a><a class="lSNext">'+n.nextHtml+"</a></div>"),n.autoWidth?w.calWidth(!1)<h&&g.find(".lSAction").hide():c<=n.item&&g.find(".lSAction").hide(),g.find(".lSAction a").on("click",function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,"lSPrev"===$(this).attr("class")?a.goToPrevSlide():a.goToNextSlide(),!1}))},initialStyle:function(){var e=this;"fade"===n.mode&&(n.autoWidth=!1,n.slideEndAnimation=!1),n.auto&&(n.slideEndAnimation=!1),n.autoWidth&&(n.slideMove=1,n.item=1),n.loop&&(n.slideMove=1,n.freeMove=!1),n.onBeforeStart.call(this,a),w.chbreakpoint(),a.addClass("lightSlider").wrap('<div class="lSSlideOuter '+n.addClass+'"><div class="lSSlideWrapper"></div></div>'),g=a.parent(".lSSlideWrapper"),n.rtl===!0&&g.parent().addClass("lSrtl"),n.vertical?(g.parent().addClass("vertical"),h=n.verticalHeight,g.css("height",h+"px")):h=a.outerWidth(),s.addClass("lslide"),n.loop===!0&&"slide"===n.mode&&(w.calSW(),w.clone=function(){if(w.calWidth(!0)>h){for(var i=0,t=0,l=0;l<s.length&&(i+=parseInt(a.find(".lslide").eq(l).width())+n.slideMargin,t++,!(i>=h+n.slideMargin));l++);var o=n.autoWidth===!0?t:n.item;if(o<a.find(".clone.left").length)for(var r=0;r<a.find(".clone.left").length-o;r++)s.eq(r).remove();if(o<a.find(".clone.right").length)for(var d=s.length-1;d>s.length-1-a.find(".clone.right").length;d--)v--,s.eq(d).remove();for(var c=a.find(".clone.right").length;c<o;c++)a.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(a),v++;for(var u=a.find(".lslide").length-a.find(".clone.left").length;u>a.find(".lslide").length-o;u--)a.find(".lslide").eq(u-1).clone().removeClass("lslide").addClass("clone left").prependTo(a);s=a.children()}else s.hasClass("clone")&&(a.find(".clone").remove(),e.move(a,0))},w.clone()),w.sSW=function(){c=s.length,n.rtl===!0&&n.vertical===!1&&(m="margin-left"),n.autoWidth===!1&&s.css(p,C+"px"),s.css(m,n.slideMargin+"px"),u=w.calWidth(!1),a.css(p,u+"px"),n.loop===!0&&"slide"===n.mode&&f===!1&&(v=a.find(".clone.left").length)},w.calL=function(){s=a.children(),c=s.length},this.doCss()&&g.addClass("usingCss"),w.calL(),"slide"===n.mode?(w.calSW(),w.sSW(),n.loop===!0&&(S=e.slideValue(),this.move(a,S)),n.vertical===!1&&this.setHeight(a,!1)):(this.setHeight(a,!0),a.addClass("lSFade"),this.doCss()||(s.fadeOut(0),s.eq(v).fadeIn(0))),n.loop===!0&&"slide"===n.mode?s.eq(v).addClass("active"):s.first().addClass("active")},pager:function(){var e=this;if(w.createPager=function(){M=(h-(n.thumbItem*n.thumbMargin-n.thumbMargin))/n.thumbItem;var i=g.find(".lslide"),t=g.find(".lslide").length,l=0,s="",o=0;for(l=0;l<t;l++){"slide"===n.mode&&(n.autoWidth?o+=(parseInt(i.eq(l).width())+n.slideMargin)*n.slideMove:o=l*((C+n.slideMargin)*n.slideMove));var r=i.eq(l*n.slideMove).attr("data-thumb");if(s+=n.gallery===!0?'<li style="width:100%;'+p+":"+M+"px;"+m+":"+n.thumbMargin+'px"><a href="#"><img src="'+r+'" /></a></li>':'<li><a href="#">'+(l+1)+"</a></li>","slide"===n.mode&&o>=u-h-n.slideMargin){l+=1;var d=2;n.autoWidth&&(s+='<li><a href="#">'+(l+1)+"</a></li>",d=1),l<d?(s=null,g.parent().addClass("noPager")):g.parent().removeClass("noPager");break}}var c=g.parent();c.find(".lSPager").html(s),n.gallery===!0&&(n.vertical===!0&&c.find(".lSPager").css("width",n.vThumbWidth+"px"),b=l*(n.thumbMargin+M)+.5,c.find(".lSPager").css({property:b+"px","transition-duration":n.speed+"ms"}),n.vertical===!0&&g.parent().css("padding-right",n.vThumbWidth+n.galleryMargin+"px"),c.find(".lSPager").css(p,b+"px"));var f=c.find(".lSPager").find("li");f.first().addClass("active"),f.on("click",function(){return n.loop===!0&&"slide"===n.mode?v+=f.index(this)-c.find(".lSPager").find("li.active").index():v=f.index(this),a.mode(!1),n.gallery===!0&&e.slideThumb(),!1})},n.pager){var i="lSpg";n.gallery&&(i="lSGallery"),g.after('<ul class="lSPager '+i+'"></ul>');var t=n.vertical?"margin-left":"margin-top";g.parent().find(".lSPager").css(t,n.galleryMargin+"px"),w.createPager()}setTimeout(function(){w.init()},0)},setHeight:function(e,i){var t=null,l=this;t=n.loop?e.children(".lslide ").first():e.children().first();var a=function(){var n=t.outerHeight(),l=0,a=n;i&&(n=0,l=100*a/h),e.css({height:n+"px","padding-bottom":l+"%"})};a(),t.find("img").length?t.find("img")[0].complete?(a(),T||l.auto()):t.find("img").on("load",function(){setTimeout(function(){a(),T||l.auto()},100)}):T||l.auto()},active:function(e,i){this.doCss()&&"fade"===n.mode&&g.addClass("on");var t=0;if(v*n.slideMove<c){e.removeClass("active"),this.doCss()||"fade"!==n.mode||i!==!1||e.fadeOut(n.speed),t=i===!0?v:v*n.slideMove;var l,s;i===!0&&(l=e.length,s=l-1,t+1>=l&&(t=s)),n.loop===!0&&"slide"===n.mode&&(t=i===!0?v-a.find(".clone.left").length:v*n.slideMove,i===!0&&(l=e.length,s=l-1,t+1===l?t=s:t+1>l&&(t=0))),this.doCss()||"fade"!==n.mode||i!==!1||e.eq(t).fadeIn(n.speed),e.eq(t).addClass("active")}else e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==n.mode||i!==!1||(e.fadeOut(n.speed),e.eq(t).fadeIn(n.speed))},move:function(e,i){n.rtl===!0&&(i=-i),this.doCss()?n.vertical===!0?e.css({transform:"translate3d(0px, "+-i+"px, 0px)","-webkit-transform":"translate3d(0px, "+-i+"px, 0px)"}):e.css({transform:"translate3d("+-i+"px, 0px, 0px)","-webkit-transform":"translate3d("+-i+"px, 0px, 0px)"}):n.vertical===!0?e.css("position","relative").animate({top:-i+"px"},n.speed,n.easing):e.css("position","relative").animate({left:-i+"px"},n.speed,n.easing);var t=g.parent().find(".lSPager").find("li");this.active(t,!0)},fade:function(){this.active(s,!1);var e=g.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;w.calSlide=function(){u>h&&(S=e.slideValue(),e.active(s,!1),S>u-h-n.slideMargin?S=u-h-n.slideMargin:S<0&&(S=0),e.move(a,S),n.loop===!0&&"slide"===n.mode&&(v>=c-a.find(".clone.left").length/n.slideMove&&e.resetSlide(a.find(".clone.left").length),0===v&&e.resetSlide(g.find(".lslide").length)))},w.calSlide()},resetSlide:function(e){var i=this;g.find(".lSAction a").addClass("disabled"),setTimeout(function(){v=e,g.css("transition-duration","0ms"),S=i.slideValue(),i.active(s,!1),t.move(a,S),setTimeout(function(){g.css("transition-duration",n.speed+"ms"),g.find(".lSAction a").removeClass("disabled")},50)},n.speed+100)},slideValue:function(){var e=0;if(n.autoWidth===!1)e=v*((C+n.slideMargin)*n.slideMove);else{e=0;for(var i=0;i<v;i++)e+=parseInt(s.eq(i).width())+n.slideMargin}return e},slideThumb:function(){var e;switch(n.currentPagerPosition){case"left":e=0;break;case"middle":e=h/2-M/2;break;case"right":e=h-M}var i=v-a.find(".clone.left").length,t=g.parent().find(".lSPager");"slide"===n.mode&&n.loop===!0&&(i>=t.children().length?i=0:i<0&&(i=t.children().length));var l=i*(M+n.thumbMargin)-e;l+h>b&&(l=b-h-n.thumbMargin),l<0&&(l=0),this.move(t,l)},auto:function(){n.auto&&(clearInterval(T),T=setInterval(function(){a.goToNextSlide()},n.pause))},pauseOnHover:function(){var e=this;n.auto&&n.pauseOnHover&&(g.on("mouseenter",function(){$(this).addClass("ls-hover"),a.pause(),n.auto=!0}),g.on("mouseleave",function(){$(this).removeClass("ls-hover"),g.find(".lightSlider").hasClass("lsGrabbing")||e.auto()}))},touchMove:function(e,i){if(g.css("transition-duration","0ms"),"slide"===n.mode){var t=e-i,l=S-t;if(l>=u-h-n.slideMargin)if(n.freeMove===!1)l=u-h-n.slideMargin;else{var s=u-h-n.slideMargin;l=s+(l-s)/5}else l<0&&(n.freeMove===!1?l=0:l/=5);this.move(a,l)}},touchEnd:function(e){if(g.css("transition-duration",n.speed+"ms"),"slide"===n.mode){var i=!1,t=!0;S-=e,S>u-h-n.slideMargin?(S=u-h-n.slideMargin,n.autoWidth===!1&&(i=!0)):S<0&&(S=0);var l=function(e){var t=0;if(i||e&&(t=1),n.autoWidth)for(var l=0,a=0;a<s.length&&(l+=parseInt(s.eq(a).width())+n.slideMargin,v=a+t,!(l>=S));a++);else{var o=S/((C+n.slideMargin)*n.slideMove);v=parseInt(o)+t,S>=u-h-n.slideMargin&&o%1!==0&&v++}};e>=n.swipeThreshold?(l(!1),t=!1):e<=-n.swipeThreshold&&(l(!0),t=!1),a.mode(t),this.slideThumb()}else e>=n.swipeThreshold?a.goToPrevSlide():e<=-n.swipeThreshold&&a.goToNextSlide()},enableDrag:function(){var e=this;if(!x){var i=0,t=0,l=!1;g.find(".lightSlider").addClass("lsGrab"),g.on("mousedown",function(e){return!(u<h&&0!==u)&&void("lSPrev"!==$(e.target).attr("class")&&"lSNext"!==$(e.target).attr("class")&&(i=n.vertical===!0?e.pageY:e.pageX,l=!0,e.preventDefault?e.preventDefault():e.returnValue=!1,g.scrollLeft+=1,g.scrollLeft-=1,g.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(T)))}),$(window).on("mousemove",function(a){l&&(t=n.vertical===!0?a.pageY:a.pageX,e.touchMove(t,i))}),$(window).on("mouseup",function(a){if(l){g.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),l=!1,t=n.vertical===!0?a.pageY:a.pageX;var s=t-i;Math.abs(s)>=n.swipeThreshold&&$(window).on("click.ls",function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopImmediatePropagation(),e.stopPropagation(),$(window).off("click.ls")}),e.touchEnd(s)}})}},enableTouch:function(){var e=this;if(x){var i={},t={};g.on("touchstart",function(e){t=e.originalEvent.targetTouches[0],i.pageX=e.originalEvent.targetTouches[0].pageX,i.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(T)}),g.on("touchmove",function(l){if(u<h&&0!==u)return!1;var a=l.originalEvent;t=a.targetTouches[0];var s=Math.abs(t.pageX-i.pageX),o=Math.abs(t.pageY-i.pageY);n.vertical===!0?(3*o>s&&l.preventDefault(),e.touchMove(t.pageY,i.pageY)):(3*s>o&&l.preventDefault(),e.touchMove(t.pageX,i.pageX))}),g.on("touchend",function(){if(u<h&&0!==u)return!1;var l;l=n.vertical===!0?t.pageY-i.pageY:t.pageX-i.pageX,e.touchEnd(l)})}},build:function(){var e=this;e.initialStyle(),this.doCss()&&(n.enableTouch===!0&&e.enableTouch(),n.enableDrag===!0&&e.enableDrag()),$(window).on("focus",function(){e.auto()}),$(window).on("blur",function(){clearInterval(T)}),e.pager(),e.pauseOnHover(),e.controls(),e.keyPress()}},t.build(),w.init=function(){w.chbreakpoint(),n.vertical===!0?(h=n.item>1?n.verticalHeight:s.outerHeight(),g.css("height",h+"px")):h=g.outerWidth(),n.loop===!0&&"slide"===n.mode&&w.clone(),w.calL(),"slide"===n.mode&&a.removeClass("lSSlide"),"slide"===n.mode&&(w.calSW(),w.sSW()),setTimeout(function(){"slide"===n.mode&&a.addClass("lSSlide")},1e3),n.pager&&w.createPager(),n.adaptiveHeight===!0&&n.vertical===!1&&a.css("height",s.eq(v).outerHeight(!0)),n.adaptiveHeight===!1&&("slide"===n.mode?n.vertical===!1?t.setHeight(a,!1):t.auto():t.setHeight(a,!0)),n.gallery===!0&&t.slideThumb(),"slide"===n.mode&&t.slide(),n.autoWidth===!1?s.length<=n.item?g.find(".lSAction").hide():g.find(".lSAction").show():w.calWidth(!1)<h&&0!==u?g.find(".lSAction").hide():g.find(".lSAction").show()},a.goToPrevSlide=function(){if(v>0)n.onBeforePrevSlide.call(this,a,v),v--,a.mode(!1),n.gallery===!0&&t.slideThumb();else if(n.loop===!0){if(n.onBeforePrevSlide.call(this,a,v),"fade"===n.mode){var e=c-1;v=parseInt(e/n.slideMove)}a.mode(!1),n.gallery===!0&&t.slideThumb()}else n.slideEndAnimation===!0&&(a.addClass("leftEnd"),setTimeout(function(){a.removeClass("leftEnd")},400))},a.goToNextSlide=function(){var e=!0;if("slide"===n.mode){var i=t.slideValue();e=i<u-h-n.slideMargin}v*n.slideMove<c-n.slideMove&&e?(n.onBeforeNextSlide.call(this,a,v),v++,a.mode(!1),n.gallery===!0&&t.slideThumb()):n.loop===!0?(n.onBeforeNextSlide.call(this,a,v),v=0,a.mode(!1),n.gallery===!0&&t.slideThumb()):n.slideEndAnimation===!0&&(a.addClass("rightEnd"),setTimeout(function(){a.removeClass("rightEnd")},400))},a.mode=function(e){n.adaptiveHeight===!0&&n.vertical===!1&&a.css("height",s.eq(v).outerHeight(!0)),f===!1&&("slide"===n.mode?t.doCss()&&(a.addClass("lSSlide"),""!==n.speed&&g.css("transition-duration",n.speed+"ms"),""!==n.cssEasing&&g.css("transition-timing-function",n.cssEasing)):t.doCss()&&(""!==n.speed&&a.css("transition-duration",n.speed+"ms"),""!==n.cssEasing&&a.css("transition-timing-function",n.cssEasing))),e||n.onBeforeSlide.call(this,a,v),"slide"===n.mode?t.slide():t.fade(),g.hasClass("ls-hover")||t.auto(),setTimeout(function(){e||n.onAfterSlide.call(this,a,v)},n.speed),f=!0},a.play=function(){a.goToNextSlide(),n.auto=!0,t.auto()},a.pause=function(){n.auto=!1,clearInterval(T)},a.refresh=function(){w.init()},a.getCurrentSlideCount=function(){var e=v;if(n.loop){var i=g.find(".lslide").length,t=a.find(".clone.left").length;e=v<=t-1?i+(v-t):v>=i+t?v-i-t:v-t}return e+1},a.getTotalSlideCount=function(){return g.find(".lslide").length},a.goToSlide=function(e){v=n.loop?e+a.find(".clone.left").length-1:e,a.mode(!1),n.gallery===!0&&t.slideThumb()},a.destroy=function(){a.lightSlider&&(a.goToPrevSlide=function(){},a.goToNextSlide=function(){},a.mode=function(){},a.play=function(){},a.pause=function(){},a.refresh=function(){},a.getCurrentSlideCount=function(){},a.getTotalSlideCount=function(){},a.goToSlide=function(){},a.lightSlider=null,w={init:function(){}},a.parent().parent().find(".lSAction, .lSPager").remove(),a.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),a.children().removeAttr("style"),s.removeClass("lslide active"),a.find(".clone").remove(),s=null,T=null,f=!1,v=0)},setTimeout(function(){n.onSliderLoad.call(this,a)},10),$(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,w.init()},200)}),this}}(jQuery);