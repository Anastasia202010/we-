const swiper2 = new Swiper('.swiper-three', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1000: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		},
	},
});
