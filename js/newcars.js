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
		var navmodule = (function(){
			//add the animation class: animate the anchor on hover
			//add the animation class for mobile for the drop down. 
			//on click of nav link scroll to the section.

			$("nav.js-nc-nav div:first-child").on("click",function(){
				//$("nav.js-nc-nav").find("ul:first-of-type").toggleClass("hidden-xs").addClass("");
				$('.m-nav-top').modal('show');
			});	

			/*
			var _getSectionObjForHash = function(){


			}
			*/

			var _scrollToSection = function(obj$){					
		        $('html,body').animate({
		          scrollTop: obj$.offset().top
		        }, 1000);
			};


			var onnavclick =function(){				
				$("nav.js-nc-nav li>a").on("click", function(){
						var classOfTarget = $(this).attr("href");
						classOfTarget = classOfTarget.substring(1);
						var target = $("."+classOfTarget);
						_scrollToSection(target);
						return false;
				});	
				


				/*
			  $('a[id=ncvariantid][href*=#]:not([href=#])').click(function() {
			  		console.log("Sdfdsfds");
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top
			        }, 1000);       
			    
			                 
			      }
			    }
			  });				
			*/
	

			}
			onnavclick();
			return {};
		}());
		
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
					$("#d-gallery-carousel").removeClass("hidden",400);
					//$("#d-gallery-carousel").show("400");
				}
			});			
		};
		
		var onscroll = function(){				
		}
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

	quikr.cars.nc.view.inputFields = (function(){
		 $( ".uline-input" ).each(function() {
          if($(this).val() !== ''){
            $(this).parent().addClass('txt-focus');
          }
          if($(this).attr('disabled')){
            $(this).parent().addClass('input-disabled');
          }
          else{
            $(this).parent().removeClass('input-disabled');
          }
          $(this).focus(function(){
            console.log($(this).val());
           
          $(this).parent().addClass("txt-focus");
        }).blur(function(){
            $(this).parent().removeClass("txt-focus");
            if($(this).val() !== ''){
              $(this).parent().addClass("txt-focus");
            }
          });
        });

        $(".popular-select-input").on("input", function() {
            var text_value=$(this).val();
             if(text_value!='') 
               {
                $(this).parent().addClass('open pap-ddm-open');
                }
                else{
                    $(this).parent().removeClass('open pap-ddm-open');
                }
        });

        $(".select-ddm .selectalbe-list li ").click(function(){
          $(this).parents(".pap-ddm").children('.uline-select-ph').addClass('lbl-focus');
        });

        $(".selectalbe-list li").click(function(){
        $(this).parents(".dropdown").find('button').html($(this).text());
        $(this).parents(".pap-ddm").find('input').val($(this).children().text());
        $(this).parents(".dropdown").find('input').val($(this).text());
        $(this).parents('.pap-ddm').removeClass('pap-ddm-open');
        });
		
	}());

	quikr.cars.nc.model = (function(){
		
		return {};
	}());
	
	quikr.cars.nc.data = (function(){
	}());
	

	quikr.cars.nc.applyFilter = function(element){
		var url = $(element).attr('href');
		var ajaxUrl=$(element).attr('href')+'/?ajax=true';
		//var url ="http://www.quikr.com/cars-bikes/new+Ashok-Leyland+Mumbai+17/?ajax=true";
		$.ajax({
			url:ajaxUrl,
			dataType:'json',
			success:function(result){
				$('.js-nc-filters').html(result['filters']);
				$('.js-nc-breadcrumb').html(result['breadcrumb']);
				$('.js-nc-snbcard-column').html(result['searchResults']);
				quikr.cars.nc.attachEventsToFilters();
				window.history.pushState(result, "Quikr New Cars", url);
				window.onpopstate = quikr.cars.nc.changeHtmlOnPopState;
			},
			error:function(error){
				console.log(error);
			}
		});
	};

quikr.cars.nc.changeHtmlOnPopState = function(e){
    if(e.state){
        var filters = e.state.filters;
        var breadcrumb = e.state.breadcrumb;
        var searchResults = e.state.searchResults;
        $('.js-nc-filters').html(filters);
		$('.js-nc-breadcrumb').html(breadcrumb);
		$('.js-nc-snbcard-column').html(searchResults);
		quikr.cars.nc.attachEventsToFilters();
        document.title = e.state.pageTitle;
    }
    else{
    	window.location.href = window.location.href
    }
};

quikr.cars.nc.attachEventsToFilters = function(){
	$(".js-nc-filters a").click(function(e){
	e.preventDefault();
	quikr.cars.nc.applyFilter(this);
	});
	$(".js-nc-breadcrumb li.clear a").click(function(e){
	e.preventDefault();
	quikr.cars.nc.applyFilter(this);
	});
	$(".js-nc-breadcrumb li.reset a").click(function(e){
	e.preventDefault();
	quikr.cars.nc.applyFilter(this);
	});
}

quikr.cars.nc.attachEventsOnModelPage = function(e){
	$(".js-desktop-images figure").click(quikr.cars.nc.corouselLazyLoad);
}

quikr.cars.nc.changeCity = function(city){
	windo.location.href = window.location.href;
}


$(document).ready(function(){
	quikr.cars.nc.attachEventsToFilters();
	quikr.cars.nc.attachEventsOnModelPage();
	$(".lazy").lazyload({
		threshold:400
	});
});


quikr.cars.nc.corouselLazyLoad = function(){
	$(".js-desktop-corousel .item img").each(function(){
		$(this).attr('src',$(this).attr('data-original'));
	});
};

quikr.cars.nc.model.onroadcalculator = (function(){
	var _bindPopStateHandler = function(){
		$(window).on('popstate', function(e){
		    if(e.state){
		        var result = e.state.result;
		        $("#js-onroad-page-container").html(result);
		        document.title = e.state.pageTitle;
		    }
		    else{
		    	window.location.href = window.location.href
		    }
		});
	}
	
	var _onRoadCalculatorFromOnRoadPage = function(element){
		var url = $(element).attr('href');
		var ajaxUrl=url+'/?ajax=true';
		$.ajax({
			url:ajaxUrl,
			dataType:'text',
			success:function(result){
				$("#js-onroad-page-container").html(result);
				var stateObj = { result: result };
				window.history.pushState(stateObj, "Quikr New Cars", url);
				_bindPopStateHandler();
				attachOnRoadCalculator();
			},
			error:function(error){
				console.log(error);
			}
		});
	};

	var _onRoadCalculatorFromSnb = function(element){
		var url = $(element).attr('href');
		var ajaxUrl=url+'/?ajax=true&from=SNB';
		$.ajax({
			url:ajaxUrl,
			dataType:'text',
			success:function(result){

				$("#js-snb-onroadPrice-container").html(result);
				//console.log(result);
				attachOnRoadCalculator();
			},
			error:function(error){
				console.log(error);
			}
		});

	};
	var attachOnRoadCalculator = function(){
		
		$(".js-snb-onroadprice-list li a,#js-submit-onprice-calculator-snb").on("click",function(e){
			e.preventDefault();
			_onRoadCalculatorFromSnb(this);
		});
		
		
		$(".js-dropdown-list li a").on("click",function(e){
			e.preventDefault();
			_onRoadCalculatorFromOnRoadPage(this);
		});
		
	};

	attachOnRoadCalculator();
}());
