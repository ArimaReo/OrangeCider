/*!
 * JQuery MyTooltip Plugin by Taufik Nurrohman
 * https://plus.google.com/108949996304093815163/about
 * Licence: http://creativecommons.org/licenses/by-sa/3.0/
 */
(function(a){a.fn.myTooltip=function(c,b){c=c||"title";b=jQuery.extend({top:20,left:20,fade:false,time:200},b);return this.each(function(){var e=a(window).width(),d=a(window).height();a(window).resize(function(){e=a(this).width(),d=a(this).height()});a(this).on({mouseenter:function(i){var g=a(this).attr(c),j=i.pageY,f=i.pageX;a(document.body).append('<span class="tooltip" style="position:absolute;z-index:99999;display:none;">'+g+"</span>");if(b.fade){a(".tooltip").fadeIn(b.time)}else{a(".tooltip").show()}if(a(this).attr("data-custom")){a(".tooltip").addClass(a(this).data("custom"))}var h=a(".tooltip").outerWidth()+30;a(this).removeAttr(c).mousemove(function(l){var m=l.pageY,k=l.pageX;if(k+h>e){k=e-h-b.left}a(".tooltip").offset({top:m+b.top,left:k+b.left})})},mouseleave:function(){a(this).attr(c,a(".tooltip").html());a(".tooltip").remove()}})})}})(jQuery);
