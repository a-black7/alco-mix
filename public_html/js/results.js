$(document).ready(function () {
    //call your ask function when the page loads.
    ask();

    function ask() {
        //these two lines ask the URL for the parameters we have passed through
        const urlParams = new URLSearchParams(window.location.search);
        //in this case drink
        var myDrink = urlParams.get('drink');
        //which we then use in our search

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${myDrink}`)
            .then(res => res.json())
            .then((out) => {

                console.log(out.drinks);
                //console.log(out)
                //window.location.href = "results.html"; 

                //results = "<li>" + "<p>" + out.drinks[0].strDrink + "</p>" + "<img src='" + out.drinks[0].strDrinkThumb + "'>" + "</li>";

               
            //this will display all results...bot you only have enough boxes for 3.
            //Ill show you how to display the first result you can look at diaplaying the other two..
            //I would also investigate displaying a random 3 so its not the same three every time
            
            //for (i in out.drinks) {
            //        if (i != 0) {
            //            results += "<li>" + "<p>" + out.drinks[i].strDrink + "</p>" + "<img src='" + out.drinks[i].strDrinkThumb + "'>" + "</li>";

            //        }
            //    }

            //    $('#output').html(results);
            //})
      
         //   drink = array => {
          //      let randomIndex = Math.floor(Math.random() * array.length)
          //      return array[randomIndex]
          //  }
        

var drink1 = out.drinks[0]
var drink2 = out.drinks[1]
var drink3 = out.drinks[2]
var drink4 = out.drinks[3]
var drink5 = out.drinks[4]
var drink6 = out.drinks[5]
            
            //ok so your first drink is out.drinks[0] and you want to put this in drink1name
            $('#drink1name').text(drink1.strDrink);
            //then you want the image
            $('#drink1box').css({"background": "url("+drink1.strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
	
            $('#drink2name').text(drink2.strDrink);
            $('#drink2box').css({"background": "url("+drink2.strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});

            $('#drink3name').text(drink3.strDrink);
            $('#drink3box').css({"background": "url("+drink3.strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});

            $('#drink4name').text(drink4.strDrink);
            $('#drink4box').css({"background": "url("+drink4.strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});

            $('#drink5name').text(drink5.strDrink);
            $('#drink5box').css({"background": "url("+drink5.strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});

            $('#drink6name').text(drink6.strDrink);
            $('#drink6box').css({"background": "url("+drink6.strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
            

            $('#drink1nameoverlay').text(out.drinks[0].strDrink);
            $('#drink1boxoverlay').css({"background": "url("+out.drinks[0].strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
                        
            $('#drink2nameoverlay').text(out.drinks[1].strDrink);
            $('#drink2boxoverlay').css({"background": "url("+out.drinks[1].strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
            
            $('#drink3nameoverlay').text(out.drinks[2].strDrink);
            $('#drink3boxoverlay').css({"background": "url("+out.drinks[2].strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
            
            $('#drink4nameoverlay').text(out.drinks[3].strDrink);
            $('#drink4boxoverlay').css({"background": "url("+out.drinks[3].strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
            
            $('#drink5nameoverlay').text(out.drinks[4].strDrink);
            $('#drink5boxoverlay').css({"background": "url("+out.drinks[4].strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
         
            $('#drink6nameoverlay').text(out.drinks[5].strDrink);
            $('#drink6boxoverlay').css({"background": "url("+out.drinks[5].strDrinkThumb+")", "background-size": "contain", "background-position-y": "bottom", "background-repeat": "no-repeat"});
          
     
     //$('#drink1').click(function() { 

		
	//ok from the api ingridents searh the return you get contains the drink id...its called idDrink
        //we can use this to make a new call against the api
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+drink1.idDrink)
        .then(res => res.json())
        .then((drinkout) => {
    
      console.log(drinkout);//if you have a look in the console you should see an output containg the full details for the drink
      

var detail1 = drinkout.drinks[0] 


let index = 1;
let ingredientArray = [];
while (detail1['strIngredient' + index]) {
    ingredientArray.push({name: detail1['strIngredient' + index], amount: detail1['strMeasure' + index] ? detail1['strMeasure' + index]: "A dash "});
    index++;
}

ingredientArray.forEach((ingredient) => {
  console.log(`${ingredient.amount} of ${ingredient.name}`)
});


var text = '';

    text += '<b>Ingredients:</b></br>';
    ingredientArray.forEach((ingredient) => {
        text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
    });


    $('#detail1').html(text);     
  
          
      $('#instruction1').text(detail1.strInstructions);
      
        }
                         
        );

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+drink2.idDrink)
        .then(res => res.json())
        .then((drinkout) => {
    
      console.log(drinkout);//if you have a look in the console you should see an output containg the full details for the drink
      

var detail2 = drinkout.drinks[0] 

let index =1;
let ingredientArray1 = [];
while (detail2['strIngredient' + index]) {
    ingredientArray1.push({name: detail2['strIngredient' + index], amount: detail2['strMeasure' + index] ? detail2['strMeasure' + index]: "A dash "});
    index++;
}

ingredientArray1.forEach((ingredient) => {
  console.log(`${ingredient.amount} of ${ingredient.name}`)
});


var text = '';

    text += '<b>Ingredients:</b></br>';
    ingredientArray1.forEach((ingredient) => {
        text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
    });


    $('#detail2').html(text);     

          
      $('#instruction2').text(detail2.strInstructions);

        }

                
        );

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+drink3.idDrink)
        .then(res => res.json())
        .then((drinkout) => {
    
      console.log(drinkout);//if you have a look in the console you should see an output containg the full details for the drink
      

 
 var detail3 = drinkout.drinks[0] 
//  var detail4 = drinkout.drinks[3] 
//  var detail5 = drinkout.drinks[4] 
// var detail6 = drinkout.drinks[5] 




let index = 1;
let ingredientArray2 = [];
while (detail3['strIngredient' + index]) {
    ingredientArray2.push({name: detail3['strIngredient' + index], amount: detail3['strMeasure' + index] ? detail3['strMeasure' + index]: "A dash "});
    index++;
}

ingredientArray2.forEach((ingredient) => {
  console.log(`${ingredient.amount} of ${ingredient.name}`)
});


var text = '';

    text += '<b>Ingredients:</b></br>';
    ingredientArray2.forEach((ingredient) => {
        text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
    });


    $('#detail3').html(text);     

          
      $('#instruction3').text(detail3.strInstructions);

  
        }

                  
        );

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+drink4.idDrink)
        .then(res => res.json())
        .then((drinkout) => {
    
      console.log(drinkout);//if you have a look in the console you should see an output containg the full details for the drink
      


        var detail4 = drinkout.drinks[0] 

        let index = 1;
        let ingredientArray3 = [];
        while (detail4['strIngredient' + index]) {
            ingredientArray3.push({name: detail4['strIngredient' + index], amount: detail4['strMeasure' + index] ? detail4['strMeasure' + index]: "A dash "});
            index++;
        }
        
        ingredientArray3.forEach((ingredient) => {
          console.log(`${ingredient.amount} of ${ingredient.name}`)
        });
        
        
        var text = '';
        
            text += '<b>Ingredients:</b></br>';
            ingredientArray3.forEach((ingredient) => {
                text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
            });
        
        
            $('#detail4').html(text);     
        
                  
              $('#instruction4').text(detail4.strInstructions);

            }

                  
            );

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+drink5.idDrink)
        .then(res => res.json())
        .then((drinkout) => {
    
      console.log(drinkout);//if you have a look in the console you should see an output containg the full details for the drink
      


        var detail5 = drinkout.drinks[0] 

        let index = 1;
        let ingredientArray4 = [];
        while (detail5['strIngredient' + index]) {
            ingredientArray4.push({name: detail5['strIngredient' + index], amount: detail5['strMeasure' + index] ? detail5['strMeasure' + index]: "A dash "});
            index++;
        }
        
        ingredientArray4.forEach((ingredient) => {
          console.log(`${ingredient.amount} of ${ingredient.name}`)
        });
        
        
        var text = '';
        
            text += '<b>Ingredients:</b></br>';
            ingredientArray4.forEach((ingredient) => {
                text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
            });
        
        
            $('#detail5').html(text);     
        
                  
              $('#instruction5').text(detail5.strInstructions);

            }

                  
            );




            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`+drink6.idDrink)
            .then(res => res.json())
            .then((drinkout) => {
        
          console.log(drinkout);//if you have a look in the console you should see an output containg the full details for the drink
          
    
    
            var detail6 = drinkout.drinks[0] 
    
            let index = 1;
            let ingredientArray5 = [];
            while (detail6['strIngredient' + index]) {
                ingredientArray5.push({name: detail6['strIngredient' + index], amount: detail6['strMeasure' + index] ? detail6['strMeasure' + index]: "A dash "});
                index++;
            }
            
            ingredientArray5.forEach((ingredient) => {
              console.log(`${ingredient.amount} of ${ingredient.name}`)
            });
            
            
            var text = '';
            
                text += '<b>Ingredients:</b></br>';
                ingredientArray5.forEach((ingredient) => {
                    text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
                });
            
            
                $('#detail6').html(text);     
            
                      
                  $('#instruction6').text(detail6.strInstructions);
    
                }
    
                      
                );

          
    }

        )

    }

    


});     


	$('.box-one').click(function () {
		$('.overlay, .o-info-one').fadeIn(600);
	});

	$('.box-two').click(function () {
		$('.overlay, .o-info-two').fadeIn(600);
	});

	$('.box-three').click(function () {
		$('.overlay, .o-info-three').fadeIn(600);
	});

	$('.box-four').click(function () {
		$('.overlay, .o-info-four').fadeIn(600);
	});

	$('.box-five').click(function () {
		$('.overlay, .o-info-five').fadeIn(600);
	});

	$('.box-six').click(function () {
		$('.overlay, .o-info-six').fadeIn(600);
	});

	$('.close').click(function () {
		$('.overlay, .overlay-info').fadeOut(600);
	});



	$('.box-one-fav').click(function () {
		$('.overlay, .o-info-one').fadeIn(600);
	});

	$('.box-two-fav').click(function () {
		$('.overlay, .o-info-two').fadeIn(600);
	});

	$('.box-three-fav').click(function () {
		$('.overlay, .o-info-three').fadeIn(600);
	});

	$('.box-four-fav').click(function () {
		$('.overlay, .o-info-four').fadeIn(600);
	});

	$('.box-five-fav').click(function () {
		$('.overlay, .o-info-five').fadeIn(600);
	});

	$('.box-six-fav').click(function () {
		$('.overlay, .o-info-six').fadeIn(600);
	});

	$('.close').click(function () {
		$('.overlay, .overlay-info').fadeOut(600);
	});




//favourites button


// Favorite Button - Heart
$('.favme').click(function() {
	$(this).toggleClass('active');
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favme").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favme").on('animationend', function(){
  $(this).toggleClass('is_animating');
});






