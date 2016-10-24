
var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
var numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

$(document).ready(function() {
suits.forEach(function(suit) {
  numbers.forEach(function(number){
    $("#listHold").append("<li>" + number + " of " + suit + "</li>");
  });
});

});

// var suits =["clubs", "diamonds", "spaces", "hearts"];
// var faceValue =["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
// var cards = [];
//
// suits.forEach(function(suits){
//   faceValue.forEach(function (value){
//     cards.push(value + " of " + suits);
//   });
// });
//
//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//
//      cards.forEach(function (card){
//        $("ul").append("<li>" + card + "</li>");
//      });
//      $("#result").fadeIn();
//     event.preventDefault();
//   });
// });
