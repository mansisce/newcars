	$(".head-search").hide();
	var quikr = quikr || {};
	quikr.cars = quikr.cars || {};
	quikr.cars.nc = {};
	quikr.cars.nc.modelPage = {};
	quikr.cars.nc.helpermodule = {};
	quikr.cars.nc.contentTabModule = {};

	quikr.cars.nc.carouselModule = {};

	quikr.cars.nc.carouselModule = (function(){

		$('#d-variant-carousel').on('slide.bs.carousel', function (e) {
		       var $this = $(this);

		       /*
			 if($('#d-variant-carousel .carousel-inner .item:first').hasClass('active')) {
			    $this.children('.left.carousel-control').hide();
			  } else if($('#d-variant-carousel .carousel-inner .item:last').hasClass('active')) {
			    $this.children('.right.carousel-control').hide();
			  }	
			  */
			// if($('#d-variant-carousel .carousel-inner .item').hasClass("hidden"))
		});

		/*
		  $('.carousel').carousel({
		   }).on('slide', function (e) {
		       var xx = $(this);
		       setTimeout(function() {
		           xx.find('.active').next().find('.slab').slabText();
		       } , 0);
		   });		
		 */  

	})();
	quikr.cars.nc.contentTabModule = (function(){
		var changeTabClass = function(obj){
			objOfUnorderedList$ =  $(obj).parent().parent();
			objOfUnorderedList$.find("a").removeClass("btn-filled").addClass("btn-border");
			$(obj).removeClass("btn-border").addClass("btn-filled");
		}		
		var changeTabClassFromModal = function(obj){
			/*
			objOfUnorderedList$ =  $(obj).parent().parent();
			objOfUnorderedList$.find("a").removeClass("btn-filled").addClass("btn-border");
			$(obj).removeClass("btn-border").addClass("btn-filled");
			*/
		}		
		var getContentClasses = function(obj){	
			var allLi = $(obj).parent().parent();
			var arr =  [];
			var arrparent = [];
			var objAllAnchor$ = $(allLi).find("a");
			objAllAnchor$.each(function(){					
				var classOfTarget = $(this).attr("href");
					classOfTarget = classOfTarget.substring(1);			
					arr.push("."+classOfTarget);
					arrparent.push("."+classOfTarget+"-parent");

			});
			return {arr,arrparent};
		};
		var getAllSelectVal = function(selector){
			var arr = [];
			var arrparent = [];
			console.log(selector);
			//debugger;
			$(selector+">option").each(function() {
			   arr.push("."+$(this).val());
			   arrparent.push("."+$(this).val()+"-parent");
			});

			return {arr,arrparent};
		};		

		var hideOtherTabContent = function(arrClassNamesWithDot,classNameWithDot){
			//remove 

			var arrOfClassToHide = quikr.cars.nc.helpermodule.removeItemFromArr(arrClassNamesWithDot,classNameWithDot);
			var objOfItemToDisable = arrOfClassToHide.toString();

			$(objOfItemToDisable).addClass("hidden");
			$(classNameWithDot).removeClass("hidden");
		};

		var addOpacityOnTabContentChange = function(arrParentClassNamesWithDot,parentClassNameWithDot){
			var arrOfClassToHide = quikr.cars.nc.helpermodule.removeItemFromArr(arrParentClassNamesWithDot,parentClassNameWithDot);
			var objOfItemToDisable = arrOfClassToHide.toString();

			$(objOfItemToDisable).css("opacity","0");
			$(parentClassNameWithDot).css("opacity","1");
		};


		
		var killItem = function(objClickedTab, carouselobj$){	
			$(carouselobj$).find(".item-hidden").removeClass("item-hidden").addClass("item");
			var classNameWithDot = $(objClickedTab).attr("href");
			classNameWithDot = "."+classNameWithDot.substring(1);	
			var itemobj$ = carouselobj$.find(".item");
			itemobj$.each(function(i,objOfItem){	
				var lengthOfTabSelectedClass = $(objOfItem).find(classNameWithDot).length;
				if(lengthOfTabSelectedClass<=0){
					$(objOfItem).addClass("item-hidden");
					$(objOfItem).removeClass("item");
				}
				else {
					$(objOfItem).removeClass("hidden");	
				}
			});
		};

		var contentTabTogglingForDesktop = function(objClickedTab){
			var classNameWithDot = $(objClickedTab).attr("href");
			classNameWithDot = "."+classNameWithDot.substring(1);	
			parentClassNameWithDot = classNameWithDot+"-parent";
			var objArr = getContentClasses(objClickedTab);
			hideOtherTabContent(objArr.arr,classNameWithDot);	
			//changeTabClass(objClickedTab);
			addOpacityOnTabContentChange(objArr.arrparent,parentClassNameWithDot);
		};	
		var contentTabTogglingForMobile = function(objClickedTab,selector){

			var classOfTarget = $(objClickedTab).val();
			console.log("ssfs"+classOfTarget);
			//return;			
			var parentClass = classOfTarget+'-parent';
			var objArr = getAllSelectVal(selector);
			hideOtherTabContent(objArr.arr,"."+classOfTarget);	
			addOpacityOnTabContentChange(objArr.arrparent,"."+parentClass);
		};

		/*
		var contentTabTogglingForDesktop = function(objClickedTab, carouselobj$){
			_killItem()
		};
		*/

		return {contentTabTogglingForDesktop,contentTabTogglingForMobile,changeTabClass,killItem};
	})();

	quikr.cars.nc.helpermodule = (function(){
		var goToCarouselItem = function( carousel$ ,pos){
			var posInt = parseInt(pos, 10);	
			carousel$.carousel(posInt);
		}
		var removeItemFromArr = function(arrInput,removeItem){
			var arr = [];
			$.each(arrInput,function(i,value){
				if(value != removeItem) {
					arr.push(value);
				}
			});
			return arr;
		}


		var filterForSection = function(arrOfClassToHide, keyClassToHide){
			var arrOfClassToHide = quikr.cars.nc.helpermodule.removeItemFromArr(arrOfClassToHide,"."+keyClassToHide);
			var objOfItemToDisable = arrOfClassToHide.toString();
			$("."+keyClassToHide).removeClass("hidden");
			$(objOfItemToDisable).addClass("hidden");			
		}

		return {removeItemFromArr,filterForSection,goToCarouselItem};
	})();

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

			var _scrollToSection = function(obj$,offset){
				var offset = offset || 0;
				var val = obj$.offset().top+offset;
				console.log("offset is"+offset);
		        $('html,body').animate({
		          scrollTop: val
		        }, 1000);
			};

			var onnavclick =function(){
				//attach event for mobile and desktop
				$("nav.js-nc-nav li>a").on("click", function(){
						var offset = $(".nc-heading").height();
						var classOfTarget = $(this).attr("href");
						classOfTarget = classOfTarget.substring(1);
						var target = $("."+classOfTarget);
						_scrollToSection(target,-offset);
						return false;
				});
				$("nav.js-nc-nav select").on("change", function(){
						var offset = $(".nc-heading").height();
						var classOfTarget = $(this).val();
						var target = $("."+classOfTarget);
						_scrollToSection(target,-offset);
						return false;
				});					
			}
			var _getwindowpos = function(){
				var pos = $(window).scrollTop();
				return pos;
			};
			var stickyheader = function(){
				var offset;
				$(window).scroll(function() {
						
						var headerNavPos = $(".nc-mask").offset().top;
						var ctaPricePos = $(".nc-cta").offset().top+100;

						var topOfWindow = _getwindowpos();

						if (headerNavPos < topOfWindow) {
							$(".nc-heading").addClass("navbar-fixed");
							$(".nc-share").addClass("hidden");
						}	
						else {
							$(".nc-share").removeClass("hidden");
							$(".nc-heading").removeClass("navbar-fixed").addClass("");
						}

						var headernav = $(".nc-heading");
						var share = $(".nc-share");

						//alert("hi in mask");
					//});		

					//$(".nc-cta").each(function(){
						//alert("hi in cta");
					//});


				});
			};
			onnavclick();
			stickyheader();
			return {};
		}());
		
		/*		
		var onNavClick = function(){
			$(".m-nav-overview").on("click", function(){
				$('.m-nav-top').modal('show');

			});
		};	
		*/
		var variantModule = (function(){

			var _onTabClick = function(){
				$(".nc-variants ul.nav-btn>li>a").on("click",function(){
					quikr.cars.nc.contentTabModule.contentTabTogglingForDesktop(this);
					quikr.cars.nc.helpermodule.goToCarouselItem($("#d-variant-carousel"),0);					
					quikr.cars.nc.contentTabModule.killItem(this,$("#d-variant-carousel"));
				});
				$(".nc-variants select").on("change",function(){

					/*
					$(".js-mobile-page-variants .item ."+parentClass+":not(.active) ."+classOfTarget).addClass('hidden');
					*/
					quikr.cars.nc.contentTabModule.contentTabTogglingForMobile(this,".nc-variants select");

				});				
				/* attach for mobile as well. */
				//.nc-m-menu 
			}

			var hideCarousel = function(){
				var itemAll = $(".nc-variants #d-variant-carousel .nc-desc.js-tabAll");
				if(itemAll.length<=6) {
					$("#d-variant-carousel .carousel-indicators").addClass("hidden");
					$("#d-variant-carousel .carousel-control").addClass("hidden");					
				}
			}

			var _mobileAddModelPageVariants = function(){
				var carousalhtml$ = $(".js-desktop-page-variants");
				if(carousalhtml$){
					$( ".js-mobile-page-variants" ).prepend( carousalhtml$.html());
					var mobileDiv$ = $(".js-mobile-page-variants");
					//var carousalhtml-item$ = mobileDiv$.fin
					$(".js-mobile-page-variants .item>div").children("div").addClass("hidden");
					$(".js-mobile-page-variants .item:first-child>div").children("div.js-tabAll").removeClass("hidden");
					//$( ".js-mobile-page-variants .item" ).removeClass("row");
					//$(".js-mobile-page-variants .item:not(.active) .js-tabAll").addClass('hidden');
					//$(".js-mobile-page-variants .item.active").removeClass('active').children().addClass('active');
				}
			};
			_mobileAddModelPageVariants();
			hideCarousel();
			_onTabClick();
		})();

		var gallerymodule = (function(){

			var _getTabs = function(obj){
				var allLi = $(obj).parent().parent();
				var arr =  [];
				var objAllAnchor$ = $(allLi).find("a");
				objAllAnchor$.each(function(){					
					var classOfTarget = $(this).attr("href");
						classOfTarget = classOfTarget.substring(1);			
						arr.push("."+classOfTarget);
				});
				return arr;
			};


			var onTabClick = function(objNavTab){

				var classOfTarget = $(objNavTab).attr("href");
				classOfTarget = classOfTarget.substring(1);			
				var objOfItem$ = $("."+classOfTarget);
				var arrOfTab = _getTabs(objNavTab);
				var arrOfClassToHide = quikr.cars.nc.helpermodule.removeItemFromArr(arrOfTab,"."+classOfTarget);

				var objOfItemToDisable = arrOfClassToHide.toString();
				objOfItem$.removeClass("hidden");
				$(objOfItemToDisable).addClass("hidden");

			}

			var _onThumbnailClick = function(pos){
				$("#m-thumbnail-all .thumbnail").on("click",function(){
					var gallerycarouselmobile$  = $("#m-gallery-carousel");
						var topCarouselSlideTo = $(this).parent().attr("data-slideto")-1;
						quikr.cars.nc.helpermodule.goToCarouselItem(gallerycarouselmobile$,topCarouselSlideTo);
				});
			}
			var _toggleThumbnail = function(){
				$(".m-toggle-thumbnail").on("click", function() {
					$(".modal-footer").toggleClass("hideThumbCarousel");

					if($(".modal-footer").hasClass("hideThumbCarousel")) {
						$(this).addClass("showThumb");
					}
					else{
						$(this).removeClass("showThumb");
					}
					//$(".m-gallery-thumbnail>ul,.m-gallery-thumbnail>div.tab-content").toggleClass("hidden").toggleClass("ani-thumbnail");
				});
			}
			var _onGalleryTabClick = function(){
				$(".m-gallery-thumbnail ul>li>a").on("click",function(){
					//onTabClick(this);
					quikr.cars.nc.contentTabModule.contentTabTogglingForDesktop(this);
					quikr.cars.nc.contentTabModule.killItem(this,$("#m-gallery-carousel"));
					quikr.cars.nc.contentTabModule.killItem(this,$("#m-thumbnail-all"));

					quikr.cars.nc.helpermodule.goToCarouselItem($("#m-gallery-carousel"),0);	
					quikr.cars.nc.helpermodule.goToCarouselItem($("#m-thumbnail-all"),0);		

				});
				$(".nc-gallery-head ul.nav-btn>li>a").on("click",function(){
					quikr.cars.nc.contentTabModule.contentTabTogglingForDesktop(this);
					quikr.cars.nc.helpermodule.goToCarouselItem($("#d-gallery-carousel"),0);
					quikr.cars.nc.contentTabModule.killItem(this,$("#d-gallery-carousel"));

				});
				$(".nc-gallery select").on("change",function(){
					quikr.cars.nc.contentTabModule.contentTabTogglingForMobile(this,".nc-gallery select");

				});
			}
			var _desktopAddGalleryCarousal = function(){
				var carousalhtml$ = $("#m-gallery-carousel"); 
				if(carousalhtml$){
					$( "#d-gallery-carousel" ).append( carousalhtml$.html() );
					$("#d-gallery-carousel").find(".carousel-control").attr("href","#d-gallery-carousel");
				}
			}

			var _ongalleryfigureclick = function(){
				$("figure").on("click", function(){			
					var dataslideto = $(this).attr("data-slideto")-1;
					if(quikr.cars.nc.isMobile) {
						$('#gallerymodal').modal('show');
						quikr.cars.nc.helpermodule.goToCarouselItem($("#m-gallery-carousel"),dataslideto);
					}
					else{
						$("#d-gallery-carousel").removeClass("hidden",1400);
						quikr.cars.nc.helpermodule.goToCarouselItem($("#d-gallery-carousel"),dataslideto);
					}
				
				});			
			}
			
			var _pauseCarousel = function(){
			   $('#d-gallery-carousel.carousel,#m-gallery-carousel.carousel,#m-thumbnail-all.carousel').each(function(){
			        $(this).carousel({
			            interval: false
			        });
			    });
			}
    		
    		_onThumbnailClick();
			_onGalleryTabClick();
			_toggleThumbnail();
			_desktopAddGalleryCarousal();
			_ongalleryfigureclick();			
			_pauseCarousel();
			return {onTabClick};
		}());

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
			var offset = "";
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

		var animatelabel = function(){
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
    	}
    	return {animatelabel:animatelabel};
		
	}());

	quikr.cars.nc.model = (function(){
		
		return {};
	}());
	
	quikr.cars.nc.data = (function(){
	}());
	

	quikr.cars.nc.applyFilter = function(element,url){
		var url = url || $(element).attr('href');
		var ajaxUrl=url+'/?ajax=true';
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

	$('.min-max-container .max-values li').click(function(e){
		var minPrice = $('#newCarsSNBFilterMinPrice').val();
		var maPrice =  $(this).data('val');
		var price = minPrice+'_'+maPrice;
		var priceSelected = true;
		var urlPath = document.location.pathname;
		var urlComponentArray = urlPath.split('/');
		var lastComponent = urlComponentArray.pop();
		if(lastComponent == ''){
			lastComponent = urlComponentArray.pop();
		}
		var urlParameters = lastComponent.split('+');
		var attributeArray = urlParameters.pop().split('');
		if($.inArray('3',attributeArray) == -1){
			attributeArray.push('3');
			var priceSelected = false;
		}
		attributeArray = attributeArray.sort();
		var newUrlParameters = ['new'];
		for(var i=0;i<attributeArray.length;i++){
			if(attributeArray[i] == '3'){
				newUrlParameters.push(price);
				if(priceSelected){
					urlParameters.splice(i+1,1);
				}
			}
			else if(attributeArray[i] < '3'){
				newUrlParameters.push(urlParameters[i+1]);
			}
			else{
				newUrlParameters.push(urlParameters[i]);
			}
		}
		newUrlParameters.push(attributeArray.join(''));
		var url = 'http://www.quikr.com/cars-bikes/'+newUrlParameters.join('+');
		quikr.cars.nc.applyFilter(this,url);
	});
	$(".lazy").lazyload({
		threshold:400
	});
}

quikr.cars.nc.attachEventsOnModelPage = function(e){
	$(".js-desktop-images figure").click(quikr.cars.nc.corouselLazyLoad);
}

quikr.cars.nc.getSpecificSNBPage = function(){
	var url = document.location.href+'?ajax=true&page='+quikr.cars.nc.page;
	$.ajax({
		url:url,
		success:function(result){
			$('.js-nc-snbcard-column').append(result['searchResults']);
			quikr.cars.nc.scrollRunning=0;
			quikr.cars.nc.page++;
			$('.lazy').lazyload();
		},
		error:function(error){
			console.log(error);
		}
	});
}

quikr.cars.nc.attachEventsToSNBPage = function(e){
	quikr.cars.nc.page = 1;
	quikr.cars.nc.scrollRunning=0;
	 $(document).scroll(function(e){
		if(quikr.cars.nc.scrollRunning==0){
		  if(($(this).scrollTop() / $(this).height())*100 > 75) {
			quikr.cars.scrollRunning=1;
			quikr.cars.nc.getSpecificSNBPage();
		  }
		}
	 });
}

$(document).ready(function(){
	quikr.cars.nc.attachEventsToFilters();
	quikr.cars.nc.attachEventsToSNBPage();
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
		var selectedCity=$("#js-selected-city").val()
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
		quikr.cars.nc.view.inputFields.animatelabel();
		$(".js-snb-onroadprice-list li a,#js-submit-onprice-calculator-snb,#js-snb-another-button").on("click",function(e){
			e.preventDefault();
			_onRoadCalculatorFromSnb(this);
		});
		
		
		$(".js-dropdown-list li a").on("click",function(e){
			e.preventDefault();
			_onRoadCalculatorFromOnRoadPage(this);
		});

		$("#js-result-city-list li a").on("click",function(e){
			e.preventDefault();
			var url=window.location.href
			var city=$(this).html();
			var replaceCity=url.split("+");
			replaceCity[replaceCity.length-1]=city
			url=replaceCity.join("+");
			$(this).attr("href",url);
			_onRoadCalculatorFromOnRoadPage(this);
		})
		$("#js-result-city-list-snb li a").on("click",function(e){
			e.preventDefault();
			var url=$("#js-result-city-list-snb").attr("common-href");
			var city=$(this).html();
			var replaceCity=url.split("+");
			replaceCity[replaceCity.length-1]=city
			url=replaceCity.join("+");
			$(this).attr("href",url);
			_onRoadCalculatorFromSnb(this);
		})

		$("#js-submit-onprice-calculator").on("click",function(e){
			e.preventDefault();
			var url=$(this).attr("href")
			var city=$("#js-selected-city").val();
			var replaceCity=url.split("+");
			replaceCity[replaceCity.length-1]=city
			url=replaceCity.join("+");
			window.location.href=url;
		})



		$("body").on('keyup',".popular-select-input",function(event){
		    var searchKey = jQuery(this).val().toLowerCase();
		    var list=$(this).nextAll("ul").find("li a");
		    //console.log(className);
		    if(searchKey.length > 0){
		      list.hide();
		      list.each(function(){
		        var attrVal = jQuery(this).html();
		        attrVal = jQuery.trim(attrVal);
		        var subStr = attrVal.substr(0,searchKey.length).toLowerCase();
		        if( searchKey == subStr ) {
		          jQuery(this).css('display','block');
		        }        
		      });
		    }
		    if( searchKey == '' ) {
		      list.show();
		    }   

		  })
	
	};

	attachOnRoadCalculator();
}());
//on road price calculator Page
/*
quikr.cars.nc.applyOnRoadPriceFilters = function(element){
	var url = $(element).attr('href');
	var ajaxUrl=url+'/?ajax=true';
	$.ajax({
		url:ajaxUrl,
		dataType:'text',
		success:function(result){
			$("#js-onroad-page-container").html(result);
			var stateObj = { result: result };
			window.history.pushState(stateObj, "Quikr New Cars", url);
			quikr.cars.nc.attachEventsToOnRoadPriceFileters();
		},
		error:function(error){
			console.log(error);
		}
	});
};

quikr.cars.nc.attachEventsToOnRoadPriceFileters = function(){
	$(".js-dropdown-list li a").click(function(e){
		e.preventDefault();
		quikr.cars.nc.applyOnRoadPriceFilters(this);
	});
}

window.onpopstate = function(e){
    if(e.state){
        var result = e.state.result;
        $("#js-onroad-page-container").html(result);
        document.title = e.state.pageTitle;
    }
    else{
    	window.location.href = window.location.href
    }
};
//SNB


quikr.cars.nc.applyOnRoadPriceFiltersSNB = function(element){
	var url = $(element).attr('href');
	var ajaxUrl=url+'/?ajax=true&from=SNB';
	$.ajax({
		url:ajaxUrl,
		dataType:'text',
		success:function(result){
			$("#js-snb-onroadPrice-container").html(result);
			quikr.cars.nc.attachEventsToOnRoadPriceFiletersSNB();
		},
		error:function(error){
			console.log(error);
		}
	});
};

quikr.cars.nc.attachEventsToOnRoadPriceFiletersSNB = function(){
	$(".js-snb-onroadprice-list li a,#js-submit-onprice-calculator-snb").click(function(e){
		e.preventDefault();
		quikr.cars.nc.applyOnRoadPriceFiltersSNB(this);
	});
}

*/

quikr.cars.nc.cityRedirect =function(city){
	if(city == 'www')
		city = 'All India';
	var urlPath = document.location.pathname;
	var urlComponentArray = urlPath.split('/');
	var lastComponent = urlComponentArray.pop();
	if(lastComponent == ''){
		lastComponent = urlComponentArray.pop();
	}
	var urlParameters = lastComponent.split('+');
	var currCity = urlParameters.pop();
	if(!isNaN(currCity)){
		currCity = urlParameters.pop();
	}
	var newCity = city.replace(/\b./g, function(m){ return m.toUpperCase(); });
	newCity = newCity.replace(' ','-');
	var url = document.location.href;
	url = url.replace(currCity,newCity);
	window.location.href = url;
}
//End on road price calculator
