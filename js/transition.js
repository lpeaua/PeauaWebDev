$(document).ready(function () {
	
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	$("#button").on("click", randomColor () {
		$('body').css('background', randomColor());
	});
});