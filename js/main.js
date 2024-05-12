const swiper = new Swiper('.swiper-one', {
	slidesPerView: 1,
	loop: true, // зацикливание, true = да, false = нет
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Если не нужен автоплей, то удалить
	autoplay: {
		delay: 3000, // 1000мс = 1сек
	},
});
