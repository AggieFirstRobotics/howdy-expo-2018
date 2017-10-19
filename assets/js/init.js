$("body").removeClass("no-js");
window.smoothScroll = function (input) {

	let location = input;

	if(typeof input.preventDefault === "function") {
		input.preventDefault();
		console.log('Event Callback [smoothScroll] called');
		location = $(this).attr("href");
	}

	if(location === "#" || $(location).length) {
		let scrollTop = (location == "#") ? 0 :
			($(location).offset().top - $("header").height() + 1);
		$("html, body").animate({scrollTop});
		window.location.hash = location;
		return true;
	} else {
		console.warn('Unable to scroll to', location, 'because it does not exist');
		return false;
	}
};

$(document).ready(function () {

	const hash = window.location.hash;

	if(hash.indexOf('#') >= 0) {
		console.log('Hash exists - attempting to update position');
		if(window.smoothScroll(hash))
			console.log("...success");
	}

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(".smoothscroll, .smooth-scroll").click(window.smoothScroll);
});