$(function () {
   $(window).scroll(function () {
      let scrolled = $(this).scrollTop(); /// значение текущего скролла

      if (scrolled > 40) {
         $(".header").css({
            "background": "linear-gradient(270deg, #00C6FF 0%, #0072FF 101.47%)",
         });
      } else if (scrolled < 40) {
         $(".header").css({
            "background": "transparent",
         });
      }
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

