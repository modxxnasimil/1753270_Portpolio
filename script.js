 (function ($) {

   $.AdjustZoom = function (options) {

     var option = {

       zoomRatio: 100

     };



     $.extend(option, options);



     // 브라우저 배율이 100% 가 아닌 경우 처리

     if (screen.logicalXDPI != screen.deviceXDPI) {

       try {

         //                alert(screen.availWidth+", "+screen.logicalXDPI+", "+screen.deviceXDPI);

         var ratio = screen.logicalXDPI / screen.deviceXDPI;

         var ratio_reverse = screen.deviceXDPI / screen.logicalXDPI;

         $('body').css('zoom', (ratio * option.zoomRatio) + '%');

         $('body').width(screen.availWidth * ratio_reverse);

       } catch (e) {

         alert("브라우저 배율 보정 중 오류가 발생하였습니다. 창을 닫은 후 다시 열어 주시기 바랍니다.");

       }

     }

   };



 })(jQuery);