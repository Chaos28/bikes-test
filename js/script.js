const iconMenuButton = document.querySelector('.icon-menu');
const  menu = document.querySelector('.menu__body');

iconMenuButton.addEventListener("click", function() {
	iconMenuButton.classList.toggle("active");
	menu.classList.toggle("active");
});

$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		draggable: false
	});
});