/**
* LightBox
* Below code is for lightBox.
* 
* @project   		Lightbox
* @date      		2015-12-08
* @author    		Anand Deep Singh
* @author-email    	singh.ananddeep@gmail.com
* @licensor  		Lightbox
* @site      		Lightbox
*
* @dependency 		jquery library
*
*/

window.cssLightBox = window.cssLightBox || {};						// namespace

(function($,window,document,undefined){

	$.fn.cssLightBox = function(){									// Plugin Name
		
			defaults = {
				lightBoxAnchor : document.getElementById("lightBox"),
				contentBox : $("#lightBoxWrapper").find("#contentBox"),
				shadeBox : $("#lightBoxWrapper").find("#shadeBox")
			},
			
			init = function(){
				var _this = this;									// caching
				
				_this.eventHandler();
				
				return this;
			},
			
			eventHandler = function(){
				var _this = this;									// caching
				
				//open lightBox
				$(defaults.lightBoxAnchor).on("click",openContentBox);
				
				//close lightBox
				$(defaults.shadeBox).on("click",_this.closeContentBox);
				
				//on press esc key
				$(document).keyup(function(e){
					if(e.keyCode == 27){
						$(defaults.shadeBox).hide();
						$(defaults.contentBox).hide();
					}					
				})
				return this;
			},
			
			openContentBox = function(){
				
				$(defaults.contentBox).show();
				$(defaults.shadeBox).show();
				return this;
			},
			
			closeContentBox = function(){
				$(defaults.contentBox).hide();
				$(defaults.shadeBox).hide();
				return this;
			}
			
			init();
	};
	
})(jQuery,this,this.document)