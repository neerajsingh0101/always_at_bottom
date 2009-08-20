/**
 * jQuery plugin always_at_bottom
 *
 * If the content of web page is tiny then footer shows up in the middle of the page.
 * This plugin ensures that footer is always at the bottom.
 *
 * Usage:
 * $('#footer').always_at_bottom();
 *
 * This plugin depends on jQuery 1.3+
 *
 * Author: Neeraj
 * Blog: www.neeraj.name
 * version: 0.0.1
 * Last updated: 19-August-2009
 *
 */
(function($){
 
  $.fn.always_at_bottom = function(){
 
    return this.each(function(){
      var $this = $(this);
 
      if($(document.body).height() < $(window).height()){
        
        //exteranl css properties are available only on window.onLoad (safari/chrome)
        $(window).load(function(){
          var footer_width = $this.css('width');
          var footer_margin_bottom = $this.css('margin-bottom');
          var footer_margin_bottom_d = getDigitFromDigitPX(footer_margin_bottom);
          var footer_bottom_position_should_be = 0  - footer_margin_bottom_d;
          $this.css({position: "absolute", bottom:(footer_bottom_position_should_be + "px"), 'width':footer_width});
        });

      }; // end of if statement
 
      // getDigitFromDigitPX('20px') => 20 
      function getDigitFromDigitPX(input){
        var re = new RegExp(/(\d*)px/);
        var m = re.exec(input);
        if (m == null) {
          return 0;
        } else {
          return  parseInt(m[1]);
        }
      };// end of function getDigitFromDigitPX


    }); // end of return this.each(function())
  }; // end of pluging
})(jQuery);
