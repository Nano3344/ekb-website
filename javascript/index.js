$(document).ready(function() {

    var UD_MENU_ELEMENTS = $('nav li a');

    var UD_AKTUELL = 0;

    var UD_OBJEKT = $(UD_MENU_ELEMENTS[0]);
    UD_OBJEKT.addClass('ud_menu_active');

    $(window).scroll(function() {
      for(var i = 0; i < UD_MENU_ELEMENTS.length; i++) {
          var UD_LINK = $(UD_MENU_ELEMENTS[i]).attr('href');

          if($(UD_LINK).length) {
            UD_OBJEKT_TOP = $(UD_LINK).offset().top;
          }

          var UD_SCROLL_TOP = $(window).scrollTop();
          var UD_DIF = Math.abs(UD_SCROLL_TOP - UD_OBJEKT_TOP);

          if(i === 0) {
            UD_AKTUELL = UD_DIF;
            UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
            $('div a img').removeClass('ud_menu_aktive');
            UD_OBJEKT.addClass('ud_menu_aktive');
          } else {
            if(UD_DIF < UD_AKTUELL || UD_DIF === UD_AKTUELL) {
              UD_AKTUELL = UD_DIF;
              UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
              $('div a img').removeClass('ud_menu_aktive');
              UD_OBJEKT.addClass('ud_menu_aktive');
            }
          }
      }

    });
});
