



// JavaScript Document

 //if the user is not logged in redirect them to the login page
 if (!req.session.loggedin) { res.redirect('/login'); return; }

 //otherwise perfrom a search to return all the documents in the people collection
db.collection('people').find().toArray(function (err, result) {
  if (err) throw err;
  // the result of the query is sent to the users page as the "users" array
  res.render('pages/users', {
	users: result
  })
 });

var loginstatus = false;

$(document).ready(function () {
	$("body").on('click', '.top', function () {
		$("nav.menu").toggleClass("menu_show");
	});

	alert("LOGIN IS WORKING TEST 1");

});

$('.loginbutton').click(function () {
	validate();
	alert("LOGIN IS WORKING TEST 2");

});




// Below function Executes on click of login button.
function validate() {

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	alert("LOGIN IS WORKING TEST 3");

	if (username == "username" && password == "password") {

		window.location = "loginsuccess.html"; // Redirecting to other page.

		return false;
	} else {

		alert("Incorrect username and password");

	}

}

//responsive menu
$(document).ready(function () {
	'use strict';

	$('.menu-button').click(function () {
		$('.resp-menu').slideToggle(600);


	});



	$(window).scroll(function () {
		if ($(this).scrollTop()) {
			$('.button2').fadeIn();
		} else {
			$('.button2').fadeOut();
		}
	});

	$(".button").click(function () {
		//1 second of animation time
		//html works for FFX but not Chrome
		//body works for Chrome but not FFX
		//This strange selector seems to work universally
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});

});







