if($.browser.mozilla||$.browser.opera ){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}
jQuery.event.remove( window, "load", jQuery.ready );
jQuery.event.add( window, "load", function(){ jQuery.ready(); } );
jQuery.extend({
	includeStates:{},
	include:function(url,callback,dependency){
		if ( typeof callback!='function'&&!dependency){
			dependency = callback;
			callback = null;
		}
		url = url.replace('\n', '');
		jQuery.includeStates[url] = false;
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onload = function () {
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.onreadystatechange = function () {
			if ( this.readyState != "complete" && this.readyState != "loaded" ) return;
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.src = url;
		if ( dependency ) {
			if ( dependency.constructor != Array )
				dependency = [dependency];
			setTimeout(function(){
				var valid = true;
				$.each(dependency, function(k, v){
					if (! v() ) {
						valid = false;
						return false;
					}
				})
				if ( valid )
					document.getElementsByTagName('head')[0].appendChild(script);
				else
					setTimeout(arguments.callee, 10);
			}, 10);
		}
		else
			document.getElementsByTagName('head')[0].appendChild(script);
		return function(){
			return jQuery.includeStates[url];
		}
	},
	readyOld: jQuery.ready,
	ready: function () {
		if (jQuery.isReady) return;
		imReady = true;
		$.each(jQuery.includeStates, function(url, state) {
			if (! state)
				return imReady = false;
		});
		if (imReady) {
			jQuery.readyOld.apply(jQuery, arguments);
		} else {
			setTimeout(arguments.callee, 10);
		}
	}
});
///// include js files ////////////
$.include('js/coin-slider.js');
$.include('js/floatdialog.js');
$.include('js/superfish.js');
$.include('js/atooltip.jquery.js');
$.include('js/runonload.js');
$.include('js/contact-form.js');
$.include('js/scrollTop.js');
$.include('js/flashobject.js');
$.include('js/tabs.js');
$.include('js/hover-image.js');
$.include('js/jquery.prettyPhoto.js');
$.include('js/jquery.galleriffic.js');
$.include('js/jquery.opacityrollover.js');
$.include('js/jquery.twitter.search.js');
$.include('js/jquery.cycle.all.latest.js');
$.include('js/kwicks-1.5.1.pack.js');
$.include('js/jquery.equalheights.js');
$.include('js/jquery.easing.1.3.js');			
		$(document).ready(function() {				
			// coin slider
			if ($("#coin-slider").length) {
				$('#coin-slider').coinslider({
					width: 934, // width of slider panel
					height: 348 // height of slider panel
				});
			}	
			//superfish menu init
			jQuery('ul.sf-menu').superfish();				
			// initiate tool tip
			// basic usage  
			$('.normaltip').aToolTip(); 				
			// fixed tooltip  
			$('.fixedtip').aToolTip({  
				fixed: true  
			});
			$('.clicktip').aToolTip({  
				clickIt: true,  
				tipContent: 'Hello I am aToolTip with content from param'  
			});			
			if ($("#demo6").length) {
				$("#demo6").floatdialog("dialog6", {move: 'down', effect: false});
			};		
			///// jumper ////////////
			$('.top1').click(
				function(e){
					$('html, body').animate({scrollTop: '0px'}, 800);
					return false;
				}
			);		
			// accordion
			$("#accordion dt").eq().addClass("active");
			$("#accordion dd").eq().show();		
			$("#accordion dt").click(function(){
				$(this).next("#accordion dd").slideToggle("slow").siblings("#accordion dd:visible").slideUp("slow");
				$(this).toggleClass("active");
				$(this).siblings("#accordion dt").removeClass("active");
				return false;
			});			
			// slideDown
			$(".slideDown dt").click(function(){
				$(this).toggleClass("active").parent(".slideDown").find("dd").slideToggle();
			});			
			// kwicks gallery
			$('.kwicks').kwicks({
				max : 800,
				spacing : 0,
				event : 'mouseover'
			});			
			///// code grabber ////////////
			$(".code a.code-icon").toggle(function(){
				$(this).find("i").text("-");
				$(this).next("div.grabber").slideDown().find("i").text("-");
			}, function(){
				$(this).find("i").text("+");
				$(this).next("div.grabber").slideUp();
			})			
			// Twitter
			if ($("#twitter").length) {
				$("#twitter").getTwitter({
					userName: "lorem_ipsum_dol",
					numTweets: 3,
					loaderText: "Loading tweets...",
					slideIn: true,
					showHeading: false,
					headingText: "Latest Tweets",
					showProfileLink: true
				});
			}			
			//prettyPhoto
			if ($('.lightbox-image').length) {
				// prettyPhoto
				$('.lightbox-image').prettyPhoto({theme:'facebook',slideshow:6000, autoplay_slideshow: true,social_tools:false,animation_speed:'normal'});				
				///// codegrabber ////////////
				$(".code a.code-icon").toggle(function(){
					$(this).addClass("minus").next("p").slideDown();
				}, function(){
					$(this).removeClass("minus").next("p").slideUp();
				});
			}			
			if ($("#shuffle").length) {	
				$.include('js/jquery.easing.1.3.js');
					$('#shuffle').cycle({
						fx:     'shuffle',
						easing: 'backout',
						delay:  -40
					});
			}			
			if ($("#zoom").length) {
				$('#zoom').cycle({
					fx:    'zoom',
					sync:  false,
					delay: -2000
				});
			}			
			if ($("#fade").length) {
				$('#fade').cycle();
			}			
			if ($("#curtainX").length) {
				$('#curtainX').cycle({
					fx:    'curtainX',
					sync:  false,
					delay: -2000
				 });
			}			
			if ($("#scrollDown").length) {	
				$('#scrollDown').cycle({ 
					fx:      'scrollDown', 
					speedIn:  2000, 
					speedOut: 500, 
					easeIn:  'bounceout', 
					easeOut: 'backin', 
					delay:   -2000 
				});
			}			
			if ($("#fade_nav").length) {
				$('#fade_nav').cycle({ 
					fx:     'fade', 
					speed:  'fast', 
					timeout: 0, 
					next:   '#next', 
					prev:   '#prev' 
				});
			}			
			if ($("#text_slider").length) {	
				$('#text_slider').cycle({ 
					fx:     'scrollHorz', 
					height: 'auto',
					speed:  'slow', 
					timeout: 0, 
					next:   '#next2', 
					prev:   '#prev2',
					after: onAfter
				});
			}			
			if ($("#multi_effects").length) {
				$('#multi_effects').cycle({ 
					fx:      'all', 
					speed:  'slow',
					timeout: 2000
				});	
			}
		});			
		function onAfter(curr, next, opts, fwd) {
		//get the height of the current slide
		var $ht = $(this).height();
		//set the container's height to that of the current slide
		$(this).parent().animate({height: $ht});
		};			
		$(window).load(function(){
			if ($("#thumbs").length) {
				$('div.content').css('display', 'block');
				// Initially set opacity on thumbs and add
				// additional styling for hover effect on thumbs
				var onMouseOutOpacity = 1.0;
				$('#thumbs ul.thumbs li').opacityrollover({
					mouseOutOpacity:   onMouseOutOpacity,
					mouseOverOpacity:  0.5,
					fadeSpeed:         'fast',
					exemptionSelector: '.selected'
				});		
				// Initialize Advanced Galleriffic Gallery
				var gallery = $('#thumbs').galleriffic({
					delay:                     6000,
					numThumbs:                 13,
					preloadAhead:              10,
					enableTopPager:            false,
					enableBottomPager:         false,
					maxPagesToShow:            7,
					imageContainerSel:         '#slideshow',
					controlsContainerSel:      '#controls',
					captionContainerSel:       '#caption',
					loadingContainerSel:       '#loading',
					renderSSControls:          false,
					renderNavControls:         false,
					playLinkText:              'Play Slideshow',
					pauseLinkText:             'Pause Slideshow',
					prevLinkText:              '&lsaquo; Previous Photo',
					nextLinkText:              'Next Photo &rsaquo;',
					nextPageLinkText:          'Next &rsaquo;',
					prevPageLinkText:          '&lsaquo; Prev',
					enableHistory:             false,
					autoStart:                 true,
					syncTransitions:           true,
					defaultTransitionDuration: 900,
					onSlideChange:             function(prevIndex, nextIndex) {
					// 'this' refers to the gallery, which is an extension of $('#thumbs')
					this.find('ul.thumbs').children()
						.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
						.eq(nextIndex).fadeTo('fast', 0.5);
					},
					onPageTransitionOut:       function(callback) {
						this.fadeTo('fast', 0.0, callback);
					},
					onPageTransitionIn:        function() {
						this.fadeTo('fast', 1.0);
					}
				});
			}
		});