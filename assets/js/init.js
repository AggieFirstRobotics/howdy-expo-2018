$(document).ready(function () {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(".scroller").click(function (event) {
    	event.preventDefault();

    	$("html,body").animate({
    		scrollTop: $("#secondary").offset().top - $("header").height()
    	}, 1000);
   	})
})