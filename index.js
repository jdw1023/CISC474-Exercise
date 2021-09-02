$(document).ready(function () {
	// https://api.jquery.com/submit/
	$("#nameform").submit(function (event) {
		let fname = $("#fname").val();
		let lname = $("#lname").val();
		$("#jumbotron").text(fname + " " + lname).show();
		return;
	});
	console.log("ready!");
});

