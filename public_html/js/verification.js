
$(document).ready(function () {

//when the page loads it checks "did this person click the "remember me" box on a prior visit and, if so, did they 
//finish verifying they were over 21? if yes load the next page"
//but I'm not sure if the variable declaration below repeats when the page reloads, which is a problem
//I can't check without the transition working.

var checkmark = false;
var priortransition = false;

if (checkmark === true){
    if (priortransition === true){
            window.location.href = "search";
    }
}


//then the "remember me" button itself. the priortransition variable is so they can't just click the 
//remember me button and refresh to skip the verification
$("#vehicle1").click(function () {
    checkmark = true;
});

jQuery.validator.addMethod("twentyone", function (value) {
    var today = new Date(),
           dd = today.getDate(),
           mm = today.getMonth() + 1,
        yyyy = today.getFullYear();

    if ($("#dob-year").val() == (yyyy - 18)) {
        if ($("#dob-month").val() == mm) {
            if ($("#dob-day").val() > dd) {
                return false;
            } else {
                return true;
            }
        } else if ($("#dob-month").val() > mm) {
            return false;
        } else {
            return true;
        }
    } else if ($("#dob-year").val() > (yyyy - 18)) {
       return false;
    } else {
        return true;
    }
 }, "You must verify that you are 18 years old.");



$("form").validate({
    rules: {
        "dob-month": "required",
        "dob-day": "required",
        "dob-year": {
            required: true,
            twentyone: true
        }
    },
    submitHandler: function(form) {
         	// form.submit();
             alert("Thank you for verifying you are over 18.");

        priortransition = true;
        //.transition is the thing that makes the page animation, changing it starts the animation
        $(".transition").toggleClass("anim-trans"); 
        //then put the transition to the next page here
        PageTransition();
        
        //$(".martini").delay(800).fadeOut(800);  
        //$("body").delay(2500).fadeOut(800);}     
        // ^^ cool page fade before transition. Interferes with page load so its been left like this.    
        //form.submit(); <-- don't know if this part is necessary? we're not actually submitting a form, just checking it.
    }
    
});

function PageTransition() {

    setTimeout(function() {
        window.location.href = "/search";
      }, 2300);

     // $("body").delay(2500).fadeOut(800, function () {
     //   alert("VERIFICATION.JS IS WORKING TEST 3");
     //   window.location.href = "/search";
   // );  
   // ^^this is the "ideal" version of the transition that has a fade effect
   //but it doesn't work for some reason so a more jarring effect is in use for now



}



});
