console.log('Lodash is loaded:', typeof _ !== 'undefined');

/* Break game down to steps: define a function with parameter of (an array of player names, amount of cards to draw)
Step 1) Want to create an array to store objects for each specific player. Amount of objects will be determined by the length of the array.
- input array will have player name at each index
- each player will have a hand of cards that will hold an array of cards
- each player will have a total value of their cards to compare
Use a loop to push all 3 values into an object inside the array at index

Step 2) Want to create an array holding every single card inside its own object with a rank property, suit property, and value property
- know that Rank correlates with value
- 52 cards
- each suit has a rank that correlates closely with value
define empty pokercard array, rank strings array, value numbers array, and rank strings array
  order the rank strings array to match the value numbers array
Use a loop to cycle thru suit
  Use another loop to cycle thru rank
    push into pokercard array an object containing the rank at rank index, suit card at suit index, and value at the rank index

Step 3) Shuffle the poker cards array
use the .shuffle lodash method to shuffle pokercards and assign to shuffled varriable

Step 4) Deal 'x' amt of cards to each player
- 'x' amt of cards is from input amount
- want to push objects from shuffle into player.hand array
use a for loop to cycle through the players
  use a for loop to set the amt of push to run according to 'x' amt of cards
    Push shuffle at 0 into player.hand array
    Assign and add shuffle[0].value to player.hand.value
    Splice shuffle at 0 to remove from shuffle deck

Step 5) Want to find the player[s] with the highest score
- its possible there's more than 1 winning player
- loop the function if there's more than 1 winning player
Assign an array to hold all the winners with the highest value
Assign a number that will hold the value of the largest number
Use a for loop through current player to find the largest value and assign it to the winningvalue
Use another for loop to find and push players that hold the winning value into the winner array
Create a condition where if there's more than 1 winner, rerun the function until only 1
Console log the winner's name
*/

// Step 7 Function
function game(array, cardAmt) {
  var player = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    player.push({ name: array[arrayIndex], hand: [], handValue: 0 });
  }

  var pokerCard = [];
  var cardRank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var cardValue = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var suitIndex = 0; suitIndex < cardSuit.length; suitIndex++) {
    for (var rankIndex = 0; rankIndex < cardRank.length; rankIndex++) {
      pokerCard.push({ rank: cardRank[rankIndex], suit: cardSuit[suitIndex], value: cardValue[rankIndex] });
    }
  }

  var shuffle = _.shuffle(pokerCard);

  for (var playerIndex = 0; playerIndex < player.length; playerIndex++) {
    for (var cardDraw = 0; cardDraw < cardAmt; cardDraw++) {
      player[playerIndex].hand.push(shuffle[0]);
      player[playerIndex].handValue += shuffle[0].value;
      shuffle.splice(0, 1);
    }
  }

  var winner = [];
  var winningValue = 0;
  for (var pIndex = 0; pIndex < player.length; pIndex++) {
    if (player[pIndex].handValue > winningValue) {
      winningValue = player[pIndex].handValue;
    }
  }
  for (var winIndex = 0; winIndex < player.length; winIndex++) {
    if (player[winIndex].handValue === winningValue) {
      winner.push(player[winIndex]);
    }
  }
  if (winner.length > 1) {
    game(winner, cardAmt);
    return;
  }
  console.log('value of winner[0].name: ', winner[0].name);
}

var classMates = ['cody', 'fred', 'nick', 'andy', 'scarlett', 'dennis', 'sharon', 'james', 'luisa', 'nathan', 'brian', 'tim', 'yuhan', 'nolan', 'chase', 'Andrew'];
game(classMates, 2);
