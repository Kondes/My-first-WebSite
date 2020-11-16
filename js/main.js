$(function () {
  $('.photo__slider').slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="image/left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="image/right.svg" alt=""></button>',
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
});
