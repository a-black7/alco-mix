



//var testfavorites = user.favourites;
var testfavorites = ["Long island ice tea", "Negroni", "Honeybee",];
var loginstatus = false;
//loginstatus is supposed to change based on whether the person is logged in or not
//need to test to see if ANY of this is working


//this is the actual favourites button
$( ".star1").click(function(){ 

    document.getElementById('.drinkname1').innerHtml = currentfavorite;
      testfavorites.push(currentfavorite); 

      if(testfavorites.contains(this.types,currentfavorite)){
            //"if favoritesexample is already in the array, remove it"
            var index = this.types.indexOf(currentfavorite);
            this.types.splice(index,1);
        }
        else{
            //"otherwise, add it to the array"
            this.types.push(currentfavorite);
        }

  });

  $( ".star2").click(function(){ 

    document.getElementById('.drinkname2').innerHtml = currentfavorite;
      testfavorites.push(currentfavorite); 

      if(testfavorites.contains(this.types,currentfavorite)){
            //"if favoritesexample is already in the array, remove it"
            var index = this.types.indexOf(currentfavorite);
            this.types.splice(index,1);
        }
        else{
            //"otherwise, add it to the array"
            this.types.push(currentfavorite);
        }
  });

  $( ".star3").click(function(){ 

    document.getElementById('.drinkname3').innerHtml = currentfavorite;
      testfavorites.push(currentfavorite); 

      if(testfavorites.contains(this.types,currentfavorite)){
            //"if favoritesexample is already in the array, remove it"
            var index = this.types.indexOf(currentfavorite);
            this.types.splice(index,1);
        }
        else{
            //"otherwise, add it to the array"
            this.types.push(currentfavorite);
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




var x = 0;



$(document).ready(function () {
      
      //"if the person is actually logged in...."
       if(loginstatus = true){
               
            //for each value in the array, perform the "getResults" function on the current entry in the array
            testfavorites.forEach(getResults);



       } else{
            //"if they are not logged in, display this message"
            $(".favouritesbox").text("Sorry! You must be logged in to use this feature.");
      }


});



//this function is getting the results through the API key
function getResults (value){
      //Here is the API through AJAX
      var url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + value;

      //alert("getResults is firing");
      //^^ this one works

      //each time this function is perfomed, it also starts the printJSON function
      $.getJSON(url, function(jsondata){
        alert("getJSONis firing");
          printJSON(jsondata);
          //^^ this one does not work, so something is wrong
      });
  }


  //this function prints the actual returned data
  function printJSON(jsondata){
      alert("printJSON pt 1 is firing");

      var normal = JSON.stringify(jsondata);
      console.log(normal);

      alert("printJSON pt 2 is firing");
      
      //THEN PRINT THE FUNCTION, PUT IT HERE
      //copying the search function from the other page doesn't work since the search is different
      //not using one terms for many results, using many terms for many results.
      //so it has to be formatted "for this entry of the array, search and print the current results"

      var detail = testfavorites.drinks[0] 

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