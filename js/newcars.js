	var quikr = quikr || {};
	quikr.cars = quikr.cars || {};
	quikr.cars.nc = {};
	quikr.cars.nc.init = (function(){

		this.MOBILE = "767";
		this.TABLET = "991";
		this.DESKTOP = "1199";
		this.WINDOW_WIDTH = $(window).width();
		quikr.cars.nc.isMobile  = false;

		if( this.WINDOW_WIDTH <=this.MOBILE){
			quikr.cars.nc.isMobile  = true;
		}
		$(document).ready(function(){
				$("[data-class='animate-cta']").addClass("animate-cta");
		});

		$("[data-class='animate-mask']").addClass("animate-mask");

		$("[data-class='animate-cta']").addClass("animate-cta");	

		//
	}());
	quikr.cars.nc.view = (function(){		
		var onnavclick = function(){
			//add the animation class: animate the anchor on hover
			//add the animation class for mobile for the drop down. 
			//on click of nav link scroll to the section.

			$("nav.js-nc-nav div:first-child").on("click",function(){
				//$("nav.js-nc-nav").find("ul:first-of-type").toggleClass("hidden-xs").addClass("");
				$('.m-nav-top').modal('show');
			});		
		};
		
		/*		
		var onNavClick = function(){
			$(".m-nav-overview").on("click", function(){
				$('.m-nav-top').modal('show');

			});
		};	
		*/
		var ongallerythumbclick = function(){
			//can i provide the object to show with some animation effect.
			/*
			$("figure").on("click", function(){
				$(".carousel").show("400");				
			});
			*/
			$("figure").on("click", function(){	
				if(quikr.cars.nc.isMobile) {
					$("#gallery-carousel-mobile").hide();
					$('#gallerymodal').modal('show');
				}
				else{
					console.log($("#d-gallery-carousel").css("display"));
					$("#d-gallery-carousel").removeClass("hidden");
					$("#d-gallery-carousel").show("400");
				}
			});			
		};
		
		var onscroll = function(){				
		}
		onnavclick();
		onscroll();
		ongallerythumbclick();

		return {};
	}());
	quikr.cars.nc.view.carousel = (function(){
		var hidecarouselonload = function(){
			$("#carousel-example-generic").hide();
		}
		var closecarousel = (function(){
			$(".icon-arrows_remove").on("click",function(){
				$("#carousel-example-generic").hide("400");
			});
		});
		closecarousel();
		hidecarouselonload();	
	}());

	quikr.cars.nc.view.modal = (function(){
		//$('#gallerymodal').modal('show');
	}());

	quikr.cars.nc.view.scroll = (function(){
		$(window).scroll(function() {
			$("[data-class='animate-colors'],[data-class='animate-variants'],[data-class='animate-cta'],[data-class='animate-gallery']").each(function(){
				var dataclass = $(this).data('class');
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass(dataclass);
				}
			});		
		});				
	}());

	quikr.cars.nc.view.effectwave = (function(){
	    //Waves.init();
	    //Waves.attach('.btn');
	}());

	/*
	nc.view.mSwipe =  (function(){
	   $(".carousel").swiperight(function() {
	      $(this).carousel('prev');
	    });
	   $(".carousel").swipeleft(function() {
	      $(this).carousel('next');
	   });
	}());
	*/
	quikr.cars.nc.model = (function(){
		
		return {};
	}());
	
	quikr.cars.nc.data = (function(){
	}());
	
	quikr.cars.nc.applyFilter = function(element){
		var url=$(element).attr('href')+'?ajax=true';
		$.ajax({
			url:url,
			dataType:'json',
			success:function(result){
				console.log(result);
			},
			error:function(result){
				console.log('error');
			}
		});
	};
