$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})


$(document).ready(function () {
	$('.slider').slick({
		variableWidth: false,
		autoplay: true,
		autoplaySpeed: 10000,
	});
});