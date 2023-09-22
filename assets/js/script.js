//Deck of cards object array
let cards = [
    {
        name: "ace",
        suit: "spades",
        value: 11,
        image: "ace-spades.png"
    },
    {
        name: "king",
        suit: "spades",
        value: 10,
        image: "king-spades.png"
    },
    {
        name: "queen",
        suit: "spades",
        value: 10,
        image: "queen-spades.png"
    },
    {
        name: "jack",
        suit: "spades",
        value: 10,
        image: "jack-spades.png"
    },
    {
        name: "ten",
        suit: "spades",
        value: 10,
        image: "10spades.png"
    },
    {
        name: "nine",
        suit: "spades",
        value: 9,
        image: "9spades.png"
    },
    {
        name: "eight",
        suit: "spades",
        value: 8,
        image: "8spades.png"
    },
    {
        name: "seven",
        suit: "spades",
        value: 7,
        image: "7spades.png"
    },
    {
        name: "six",
        suit: "spades",
        value: 6,
        image: "6spades.png"
    },
    {
        name: "five",
        suit: "spades",
        value: 5,
        image: "5spades.png"
    },
    {
        name: "four",
        suit: "spades",
        value: 4,
        image: "4spades.png"
    },
    {
        name: "trey",
        suit: "spades",
        value: 3,
        image: "3spades.png"
    },
    {
        name: "3ce",
        suit: "spades",
        value: 2,
        image: "2spades.png"
    },
    {
        name: "ace",
        suit: "clubs",
        value: 11,
        image: "ace-clubs.png"
    },
    {
        name: "king",
        suit: "clubs",
        value: 10,
        image: "king-clubs.png"
    },
    {
        name: "queen",
        suit: "clubs",
        value: 10,
        image: "queen-clubs.png"
    },
    {
        name: "jack",
        suit: "clubs",
        value: 10,
        image: "jack-clubs.png"
    },
    {
        name: "ten",
        suit: "clubs",
        value: 10,
        image: "10clubs.png"
    },
    {
        name: "nine",
        suit: "clubs",
        value: 9,
        image: "9clubs.png"
    },
    {
        name: "eight",
        suit: "clubs",
        value: 8,
        image: "8clubs.png"
    },
    {
        name: "seven",
        suit: "clubs",
        value: 7,
        image: "7clubs.png"
    },
    {
        name: "six",
        suit: "clubs",
        value: 6,
        image: "6clubs.png"
    },
    {
        name: "five",
        suit: "clubs",
        value: 5,
        image: "5clubs.png"
    },
    {
        name: "four",
        suit: "clubs",
        value: 4,
        image: "4clubs.png"
    },
    {
        name: "trey",
        suit: "clubs",
        value: 3,
        image: "3clubs.png"
    },
    {
        name: "deuce",
        suit: "clubs",
        value: 2,
        image: "2clubs.png"
    },
    {
        name: "ace",
        suit: "hearts",
        value: 11,
        image: "ace-hearts.png"
    },
    {
        name: "king",
        suit: "hearts",
        value: 10,
        image: "king-hearts.png"
    },
    {
        name: "queen",
        suit: "hearts",
        value: 10,
        image: "queen-hearts.png"
    },
    {
        name: "jack",
        suit: "hearts",
        value: 10,
        image: "jack-hearts.png"
    },
    {
        name: "ten",
        suit: "hearts",
        value: 10,
        image: "10hearts.png"
    },
    {
        name: "nine",
        suit: "hearts",
        value: 9,
        image: "9hearts.png"
    },
    {
        name: "eight",
        suit: "hearts",
        value: 8,
        image: "8hearts.png"
    },
    {
        name: "seven",
        suit: "hearts",
        value: 7,
        image: "7hearts.png"
    },
    {
        name: "six",
        suit: "hearts",
        value: 6,
        image: "6hearts.png"
    },
    {
        name: "five",
        suit: "hearts",
        value: 5,
        image: "5hearts.png"
    },
    {
        name: "four",
        suit: "hearts",
        value: 4,
        image: "4hearts.png"
    },
    {
        name: "trey",
        suit: "hearts",
        value: 3,
        image: "3hearts.png"
    },
    {
        name: "deuce",
        suit: "hearts",
        value: 2,
        image: "2hearts.png"
    },
    {
        name: "ace",
        suit: "diamonds",
        value: 11,
        image: "ace-diamonds.png"
    },
    {
        name: "king",
        suit: "diamonds",
        value: 10,
        image: "king-diamonds.png"
    },
    {
        name: "queen",
        suit: "diamonds",
        value: 10,
        image: "queen-diamonds.png"
    },
    {
        name: "jack",
        suit: "diamonds",
        value: 10,
        image: "jack-diamonds.png"
    },
    {
        name: "ten",
        suit: "diamonds",
        value: 10,
        image: "10diamonds.png"
    },
    {
        name: "nine",
        suit: "diamonds",
        value: 9,
        image: "9diamonds.png"
    },
    {
        name: "eight",
        suit: "diamonds",
        value: 8,
        image: "8diamonds.png"
    },
    {
        name: "seven",
        suit: "diamonds",
        value: 7,
        image: "7diamonds.png"
    },
    {
        name: "six",
        suit: "diamonds",
        value: 6,
        image: "6diamonds.png"
    },
    {
        name: "five",
        suit: "diamonds",
        value: 5,
        image: "5diamonds.png"
    },
    {
        name: "four",
        suit: "diamonds",
        value: 4,
        image: "4diamonds.png"
    },
    {
        name: "trey",
        suit: "diamonds",
        value: 3,
        image: "3diamonds.png"
    },
    {
        name: "deuce",
        suit: "diamonds",
        value: 2,
        image: "2diamonds.png"
    },
]

//Control button calls function on click
let deal = document.getElementById('deal-btn').addEventListener('click', startGame);
let hit = document.getElementById('hit-btn').addEventListener('click', drawCard);
let bet = document.getElementById('bet-btn').addEventListener('click', selectBetSize);

//Chip selecton calls function on click
let chip50 = document.getElementById('50-chip').addEventListener('click', bet50);

let playerSum = 0;

/**
 * Start game by importing player cards
 * Display sum of players cards
 * Hide betting buttons
 * Display play buttons
 */
function startGame() {
    // Selects random number between 0 and 51 for two inital cards
    let firstPlayerCard = Math.floor(Math.random() * 52);
    let secondPlayerCard = Math.floor(Math.random() * 52);
    // Display a sum of player card values
    playerSum = cards[firstPlayerCard].value + cards[secondPlayerCard].value;
    //Create first card image
    let displayFirstCard = document.createElement('img');
        displayFirstCard.src = `assets/images/cards/${cards[firstPlayerCard].image}`;
        displayFirstCard.alt = `${cards[firstPlayerCard].name}`;
    //Create second card image
    let displaySecondCard = document.createElement('img');
        displaySecondCard.src = `assets/images/cards/${cards[secondPlayerCard].image}`;
        displaySecondCard.alt = `${cards[secondPlayerCard].name}`;
    //DIsplay deal and reset buttons and players field section on repeat game
    document.getElementById('deal-btn').style.display ='unset';
    document.getElementById('reset-btn').style.display ='unset';
    document.getElementById('players-field').style.display ='unset';
    //Import player cards
    document.getElementById('players-card-container').appendChild(displayFirstCard);
    document.getElementById('players-card-container').appendChild(displaySecondCard);
    //Display sum of players cards
    document.getElementById('players-count').textContent = playerSum;
    //Hide betting buttons and display play buttons
    document.getElementById('deal-btn').style.display ='none';
    document.getElementById('reset-btn').style.display ='none';
    document.getElementById('hit-btn').style.display ='unset';
    document.getElementById('stand-btn').style.display ='unset';
    //Hide chip selection
    document.getElementById('bet-section').style.visibility ='hidden';
    if (playerSum === 21) {
        console.log('win!')
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
        document.getElementById('bet-btn').style.display ='unset';
    } 
}

/**
 * Rearange the elements so player can select new bet when hand is over
 * Display deal nad reset buttons
 * Hides other buttons
 * Hides player cards and count
 * Clears previous cards
 */
function selectBetSize() {
    document.getElementById('bet-section').style.visibility ='visible';
    document.getElementById('bet-btn').style.display ='none';
    document.getElementById('deal-btn').style.display ='unset';
    document.getElementById('reset-btn').style.display ='unset';
    document.getElementById('players-field').style.display ='none';
    document.getElementById('players-card-container').innerHTML = '';
}

/**
 * Draws a new card 
 * Updates players cards sum number
 */
function drawCard() {
    let drawnCard = Math.floor(Math.random() * 52);
    drawOneCard = document.createElement('img');
    drawOneCard.src = `assets/images/cards/${cards[drawnCard].image}`;
    drawOneCard.alt = `${cards[drawnCard].name}`;
    document.getElementById('players-card-container').appendChild(drawOneCard);
    playerSum += cards[drawnCard].value;
    document.getElementById('players-count').textContent = playerSum;
    if (playerSum > 21) {
        console.log('game over')
        document.getElementById('bet-btn').style.display ='unset';
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
    } else if (playerSum === 21) {
        console.log('21')
        document.getElementById('bet-btn').style.display ='unset';
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
    }
}

/**
 * Clears current bet 
 * Bets 50$ chip
 */
function bet50() {
    document.getElementById('bet-position').innerHTML = '';
    bet50Chips = document.createElement('img');
    bet50Chips.src = "assets/images/chips/50-slanted.png";
    bet50Chips.alt = "50$ chip has been bet";
    document.getElementById('bet-position').appendChild(bet50Chips);
}