$(function () {
   $(window).scroll(function () {
      let scrolled = $(this).scrollTop(); /// значение текущего скролла

      if (scrolled > 40) {
         $(".header").css({
            "background-color": "#180D5B",
         });
      } else if (scrolled < 40) {
         $(".header").css({
            "background-color": "transparent",
         });
      }
      /// если скролл больше чем позиция элемента даём body доп класс и задаем элементу следующему за блоком #sticky отступ сверху равный высоте прилипшего блока
   });
});
// !burger

$(function () {
   $('#burger').click(function(){
      $('#mob-menu').toggleClass('active');
      $('#burger--item').toggleClass('active');
   })
});

// !burger-end

