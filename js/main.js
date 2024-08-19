$(function () {
	$('.popular__slider').slick({
		arrows: false,
		cssEase: 'linear',
		slidesToShow: 3,
		infinite: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})

	$('.popular__slider-prev').on('click', function (e) {
		e.preventDefault()
		$('.popular__slider').slick('slickPrev')
	})
	$('.popular__slider-next').on('click', function (e) {
		e.preventDefault()
		$('.popular__slider').slick('slickNext')
	})

	$('.burger').on('click', function (e) {
		e.preventDefault()
		$('.header__top').toggleClass('header__top--open')
	})
})
