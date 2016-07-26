$(function() {
	'use strict';
	var sidebar = $("#sidebar"),
		mask = $(".mask"),
		sidebarTrigger = $("#sidebartrigger");

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
})