let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$('.header').on( 'click', '.open_menu', function() {
	$(this).parents('.header').addClass('open');
});

$('.header').on( 'click', '.close_menu', function() {
	$(this).parents('.header').removeClass('open');
});

$('.header').on( 'click', 'a', function() {
	$(this).parents('.header').removeClass('open');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".header .menu nav"); // тут указываем ID элемента
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.header').removeClass('open');
	}
});


$('.banner-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	fade: true,
	asNavFor: '.text-slider'
});
$('.text-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.banner-slider',
	arrows: false,
	dots: false,
	centerMode: false,
	focusOnSelect: true
});

$('.about-photo-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}