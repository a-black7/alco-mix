

$(document).ready(function () {

    $('#submit').click(function () {
        //don't run ask now..you need to load the results page first. 
        //ask()
        //ask the input text box what its current value is 
        let query = $("#input").val();
        //so we now have a var with the query text in it
        //and all we do is call the result page....with the query as a parameter, it is called drinks.
        window.location.href = "results?drink="+query;
    })

});
	
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {


		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top - 50
			}, 800, function () {

			});
		} // End if
	});