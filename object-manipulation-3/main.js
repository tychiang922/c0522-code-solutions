console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Step 7 Function
function game(array, playerAmt) {

  // Step 1
  var player = [];
  for (var playerAmtIndex = 0; playerAmtIndex < playerAmt; playerAmtIndex++) {
    player.push({ name: array[playerAmtIndex], hand: [], handValue: 0 });
  }
  console.log(player);

  // Step 2
  var pokerCard = [];
  var cardRank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var cardValue = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var suitIndex = 0; suitIndex < cardSuit.length; suitIndex++) {
    for (var rankIndex = 0; rankIndex < cardRank.length; rankIndex++) {
      pokerCard.push({ rank: cardRank[rankIndex], suit: cardSuit[suitIndex], value: cardValue[rankIndex] });
    }
  }
  console.log('value of pokerCard: ', pokerCard);

  // Step 3
  var shuffle = _.shuffle(pokerCard);
  console.log('value of shuffle: ', shuffle);
  console.log('value of pokerCard: ', pokerCard);

  // Step 4 + Step 5
  for (var playerIndex = 0; playerIndex < player.length; playerIndex++) {
    for (var cardDraw = 0; cardDraw < 2; cardDraw++) {
      player[playerIndex].hand.push(shuffle[0]);
      player[playerIndex].handValue += shuffle[0].value;
      shuffle.splice(0, 1);
    }
  }
  console.log('value of player: ', player);
  console.log('value of shuffle after splice: ', shuffle);

  // Step 6
  var winner = player[0];
  for (var pIndex = 1; pIndex < player.length; pIndex++) {
    if (player[pIndex].handValue > winner.handValue) {
      winner = player[pIndex];
    }
  }
  console.log('value of winner: ', winner);
  console.log('value of winner.name: ', winner.name);
}
