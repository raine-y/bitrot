function generateDeck() {

    const majorArcana = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"];
    const suits = ["Cups", "Wands", "Pentacles", "Swords"];
    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "Queen", "King"];

    let deck = new Array();

    let mLength = majorArcana.length;
    let sLength = suits.length;
    let rLength = ranks.length;

    for (m = 0; m < mLength; m++) {
        let card = majorArcana[m];
        deck.push(card);
    }

    for (s = 0; s < sLength; s++) {
        for (r = 0; r < rLength; r++) {
            let rank = ranks[r];
            let suit = suits[s];
            let card = rank + " of " + suit;
            deck.push(card);
        }
    }

    shuffleDeck(deck);

    console.log(deck);
    console.log(deck.length);

}

function shuffleDeck(d) {  // Fisher-Yates style (for effect)
    for (let i = d.length - 1; i > 0; i--) {
        const s = Math.floor(Math.random() * (i + 1));
        [d[i], d[s]] = [d[s], d[i]];
    }
    return d;
}