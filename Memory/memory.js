// FLIP CARD WHEN CLICK
const cards = document.querySelectorAll('.memory-card');
// is the first or second card
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', function () {
    if(lockBoard)return;
    if(card === firstCard)return;
    card.classList.add('flip');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = card;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = card;
        //do cards match
        //console.log(firstCard.dataset.framework)
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            //it's a match
            firstCard.removeEventListener('click',firstCard);
            secondCard.removeEventListener('click',secondCard);
        }else{
            //not a match
            lockBoard = true;
            setTimeout(() =>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                lockBoard = false;
            },1500);

        }
    }
}));
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false,false];
    [firstCard, secondCard] = [null,null];
    
}
(function randomSort(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();
// REFACTOR CODE NOT WORK CHECK IT 
// cards.forEach(card => card.addEventListener('click', function () {
//     card.classList.add('flip');
//     if (!hasFlippedCard) {
//         //first click
//         hasFlippedCard = true;
//         firstCard = card;
//     }
//     //second click
//     hasFlippedCard = false;
//     secondCard = card;
//     checKForMatch();
// }));
// function checKForMatch() {
//     let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//     isMatch ? disabledCards() : unFlipCards();

// }
// function disabledCards() {
//     //it's a match
//     firstCard.removeEventListener('click', firstCard);
//     secondCard.removeEventListener('click', secondCard);
// }
// function unFlipCards() {
//     //not a match
//     setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//     }, 1500);
// }
