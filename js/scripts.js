var counter = 0;
var suitCounter = 0;
var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
var numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

$(document).ready(function() {
debugger;
suits.forEach(function(suit) {
  debugger;
  suit = suits[suitCounter];
  numbers.forEach(function(number){
    debugger;
    number = numbers[counter];
    $("#listHold").append("<li>" + numbers[counter] + " of " + suit + "</li>")
    counter ++;
  });
  counter = 0;
  suitCounter++;
});

});
