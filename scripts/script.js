// $('body').css("background-color", "yellow");

// when button is clicked
//IIFE = immediately invoked function expression
$("#btnGetAnimal").on("click", function(){
  // get the user name
  let bakerName = $("#bakerName").val();
  // var variableName = ... let(const)
  
  $("#greetingArea").text("Hi there, " + bakerName + "!");
  // give them a personalized greeting
  
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))];
  
  // next, also tell spirit animal
   $("#animalArea").text("Your spirit animal is: " + randomAnimal);
})

  let spiritAnimals = ["🦅","🦅","🦆","🐟","🐠","🦈","🐈","file not found"]