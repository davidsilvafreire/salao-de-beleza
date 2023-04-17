/* Verifica se o cookie existe */
function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length == 2) return parts.pop().split(';').shift();
}

$(document).ready(function () {
  //carrousel header
  $('.carousel-home').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    loop: true,
    items: 1,
    dotData: true,
    nav: false,
    smartSpeed: 1000,
  });

  if (!getCookie('warning_cookie')) {
    // Se ainda não existir cookie, mostra a barra, por padrão está com display none
    $('.container-cookie-message').fadeIn();
  }

  $('.cookie-btn').click(function () {
    // Quando clica no botão cria um cookie e apaga a barra
    var d = new Date();
    d.setTime(d.getTime() + 3600 * 24 * 30 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = 'warning_cookie=true;' + expires + '; path=/';
    $('.container-cookie-message').fadeOut();
  });

  //carrousel
  $('.carrousel').owlCarousel({
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    items: 1,
    dotData: true,
    nav: false,
    smartSpeed: 1000,
    margin: 10,
  });

  //seta carrousel
  var owl = $('.carrousel');
  owl.owlCarousel();
  // Go to the next item
  $('.arrow-left').click(function () {
    owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.arrow-right').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
  });
});

$(window).on('load', function () {
  var height = $('.cada-img').height();
  $('.cada-img').css('height', height);

  //Scroll buttons site

  var scrollY = window.innerWidth;

  if (scrollY > 1250) {
    $('.button-down').on('click', function () {
      var scroll = $('.section-form').position().top;
      $('html, body').animate({ scrollTop: scroll }, 800);
    });
    $('.button, .button-informacoes').on('click', function () {
      var scroll = $('.header').position().top;
      $('html, body').animate({ scrollTop: scroll }, 800);
    });
  } else {
    $('.button-down, .button, .button-informacoes').on('click', function () {
      var scroll = $('.section-form').position().top;
      $('html, body').animate({ scrollTop: scroll }, 800);
    });
  }
});
