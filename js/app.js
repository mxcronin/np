(function(namespace, $){
		'use strict';
		namespace.main ={
			curdataid: null,
            lang: 'sv',
            count: 1,

			init: function() {
				var boundElement = $('.app')[0];
					ko.cleanNode(boundElement);			
					ko.applyBindings(new this.AppViewModel(), boundElement); 
				$('iframe').on('load' , function(){
					$('.counter').html(app.main.count + ' / 6');
    		  		if(app.main.count >= 6){
    		  			app.main.bind();
    		  			$('.loader-holder').hide();	
    		  		}
    		  		app.main.count++;
    		  	});	
						
			},
			initlang: function(){
				if(this.lang === 'sv'){
				    Globalize.culture('Sverige');
				}
				
			},
			alocalize: function (key) {
						return Globalize.localize(key, this.lang);
			},	
			bind: function() {
    					$('.close-btn').on('click',function(){
							  $('.iframe-wrapper').removeClass('slide-in');
							  $('iframe').hide();
						});
							$('.close-btn').tap(function(){
							  $('.iframe-wrapper').removeClass('slide-in');
							  $('iframe').hide();
						});
						$('.choice-container li').tap(function(evt){
    							var curdataid = $(this).attr('data-id');					
    							$('.'+curdataid).show();
    							$('.iframe-wrapper').addClass('slide-in');
    							//$('.startpage').addClass('slide-out');

    		  			});
    					$('.choice-container li').on('click',function(evt){
    							var curdataid = $(this).attr('data-id');					
    							$('.'+curdataid).show();
    							$('.iframe-wrapper').addClass('slide-in');
    							//$('.startpage').addClass('slide-out');

    		  			});
    		  			
    		},
    		AppViewModel: function() {
                        this.mobile = ko.observable(app.main.alocalize("mobile"));
						this.netbank = ko.observable(app.main.alocalize("netbank"));
						this.locator = ko.observable(app.main.alocalize("locator"));

						this.customer = ko.observable(app.main.alocalize("customer"));
						this.programs = ko.observable(app.main.alocalize("programs"));
						this.savings = ko.observable(app.main.alocalize("savings"));
		
			}			
				
							    
        }

})(window.app = window.app || {}, window.Zepto);

 $( document ).ready(function() {
            app.main.init(); 
  });
        