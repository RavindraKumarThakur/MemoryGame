const scoreDisplay = document.getElementById("Score");

const cardArraay = [

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }

];

cardArraay.sort(() =>0.5 - Math.random());

let cardChosen = [];

let cardChosenIds = [];

const cardWon = [];

const grid = document.querySelector('#grid');
const resultDisplay = document.getElementById('Score');

function createBoard(){
    for(let i = 0; i < cardArraay.length; i++){
       const card = document.createElement('img');
       card.setAttribute('src','images/blank.png');
       card.setAttribute('data-id',i);
       grid.appendChild(card);
       card.addEventListener('click',flipcard);
    }
};

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    console.log(cards);
    const optiononeId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];

    if(optiononeId == optionTwoId){
        alert("Sorry!!! You have chosen same card.");
        cards[optiononeId].setAttribute('src','images/blank.png');
    }
    else{
        console.log("Check for a match.");
        if(cardChosen[0] === cardChosen[1]){
            alert("You found a match!!!");
            cards[optiononeId].setAttribute('src','images/white.png');
            cards[optionTwoId].setAttribute('src','images/white.png');
            cards[optiononeId].removeEventListener('click',flipcard);
            cards[optionTwoId].removeEventListener('click',flipcard);
            cardWon.push(cardChosen);
        }
        else{
            alert("Try again!!!");
            cards[optiononeId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
        }
        resultDisplay.textContent = cardWon.length;
    }
    console.log(cardWon.length);
    if(cardWon.length == cardArraay.length/2){
        resultDisplay.textContent = "You have found them all.";
    }
    cardChosen = [];
    cardChosenIds = [];
}

function flipcard(){
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArraay[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute('src',cardArraay[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch,500);
    }
}