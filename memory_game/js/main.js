console.log("Up and running!");





var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};

var flipcard = function(cardId) {

checkForMatch();

console.log("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]);

};

flipcard(0);
flipcard(2);

