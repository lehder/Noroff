function generateDeckOfCards() {
  const cardExample = { suit: "heart", value: 11 }

  const deck = [];
  const suits = ["heart, spade", "club", "diamond"];

  for (const suit of suits) {
    for (let i = 1; i <= 13; i++) {
      deck.push({
        suit: suit,
        value: i
      });
    }
  }
      return deck;
}

module.exports = generateDeckOfCards;