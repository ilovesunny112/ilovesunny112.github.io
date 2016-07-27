$(function() {
	'use strict';
	var sidebar = $("#sidebar"),
		mask = $(".mask"),
		sidebarTrigger = $("#sidebartrigger"),
		backtop = $(".backtotop");

	sidebarTrigger.on("click", function() {
		console.log(1);
		sidebar.css({

			transform: "translateX(0)"
		})
		mask.fadeIn();
	})
	sidebar.on("click", function() {
		sidebar.css({
			transform: "translateX(300px)"
		});
		mask.fadeOut()
	})
	mask.on("click", function() {
		sidebar.css({
			transform: "translateX(300px)"
		});
		mask.fadeOut()
	})

	$(window).on("scroll", function() {
		if ($(window).scrollTop() > $(window).height()) {
			backtop.fadeIn()
		} else {
			backtop.fadeOut()
		}
	})

	$(window).trigger("scroll")


	backtop.on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 800)
	})
})