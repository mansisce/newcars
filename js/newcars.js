	var nc = {};
	nc.init = (function(){

		nc.MOBILE = "768px";
		nc.DESKTOP = "";

		$(document).ready(function(){
				$("[data-class='animate-cta']").addClass("animate-cta");
		});

		$("[data-class='animate-mask']").addClass("animate-mask");

		$("[data-class='animate-cta']").addClass("animate-cta");	

		//

	}());
	nc.view = (function(){
		
		var onnavclick = function(){
			//add the animation class: animate the anchor on hover
			//add the animation class for mobile for the drop down. 
			//on click of nav link scroll to the section.

			$("nav.js-nc-nav div:first-child").on("click",function(){
				$("nav.js-nc-nav").find("ul:first-of-type").toggleClass("hidden-xs").addClass("");
			});		
		};
		
		var ongallerythumbclick = function(){
			//can i provide the object to show with some animation effect.
			/*
			$("figure").on("click", function(){
				$(".carousel").show("400");				
			});
			*/
			$("figure").on("click", function(){	
				$("#gallery-carousel-mobile").hide();
				$('#gallerymodal').modal('show');
			});			
		};
		
		var onscroll = function(){				
		}
		onnavclick();
		onscroll();
		ongallerythumbclick();

		return {};
	}());
	nc.view.carousel = (function(){
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

	nc.view.modal = (function(){
		//$('#gallerymodal').modal('show');
	}());

	nc.view.scroll = (function(){
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

	nc.view.effectwave = (function(){
	    //Waves.init();
	    //Waves.attach('.btn');
	}());
	
	nc.model = (function(){
		
		return {};
	}());
	
	nc.data = (function(){
		var datajson = function(){
			var model = 
							{
								"modal": [
									{
										"modal_name": "Maruti Suzuki Baleno",
										"features": {
											"price": "S",
											"engine": ""
										},
										"color": [
											"red",
											"urban titanium black"
										],
										"variants": [
											{
												"variant_name": "HoVTEC",
												"features": {
													"price": "S",
													"engine": ""
												},
												"price": "5.20"
											},
											{
												"variant_name": "asdsadas",
												"features": {
													"price": "S",
													"engine": ""
												},
												"price": "5.20"
											}
										]
									},
									{
										"name": "Maruti Suzuki Baleno",
										"features": {
											"price": "S",
											"engine": ""
										},
										"color": [
											"red",
											"urban titanium black"
										],
										"variants": [
											{
												"variant_name": "HoVTEC",
												"features": {
													"price": "S",
													"engine": ""
												},
												"price": "5.20"
											},
											{
												"variant_name": "asdsadas",
												"features": {
													"price": "S",
													"engine": ""
												},
												"price": "5.20"
											}
										]
									},
									{
										"modal_name": "Maruti Suzuki Baleno",
										"features": {
											"price": "S",
											"engine": ""
										},
										"color": [
											"red",
											"urban titanium black"
										],
										"variants": [
											{
												"variant_name": "HoVTEC",
												"features": {
													"price": "S",
													"engine": ""
												},
												"price": "5.20"
											},
											{
												"variant_name": "asdsadas",
												"features": {
													"price": "S",
													"engine": ""
												},
												"price": "5.20"
											}
										]
									}
								]
							} /* JSON closes */
			
			return model;
		}		
	}());
	
