$('header nav a').click(function () {
	$('header nav a').removeClass('active');
	$(this).addClass('active');
});

$(window).load(function(){

	$('textarea').autosize();

	$(".dropdown ul").mCustomScrollbar({
	    axis:"y" 
	});

});

$(document).on('click', '.mobile-header .btn_menu', function(){
	$(this).toggleClass('active');
	$(this).parents('.mobile-header').find('.dropdown').toggleClass('active');
	$('.mask').toggleClass('active');
	$('body').toggleClass('active');
});

$(document).on('click', '.mobile-header .categoeies-list li.current', function(){
	$(this).toggleClass('active');
	$(this).parents('.categoeies-list').toggleClass('active');
});

