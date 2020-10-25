let scores, reoundScore, activePlayer, gamePlaying;
initiate();

document.querySelector('.btn--roll').addEventListener('click', function() {
    if(gamePlaying) {
        let dice = Math.floor((Math.random()*6)) +1;
        const diceDom = 
        document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = './images/dice' + dice + '.jpg';
        
        if (dice!==1) {
            reoundScore +=dice;
            document.querySelector('#current--' + activePlayer).textContent = reoundScore;
    
        } else {
           nextPlayer();
        }
    }
    
});

function nextPlayer() {
    activePlayer = activePlayer === 0 ?  1 :  0;
    reoundScore = 0; 

document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.player--0').classList.toggle('active');
document.querySelector('.player--1').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--hold').addEventListener('click', function(){
    scores[activePlayer] += reoundScore;
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer]>=100) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('Winner');
        document.querySelector('.player--' + activePlayer).classList.remove('active');
        gamePlaying = false;

    } else {
        nextPlayer();
    }
});

document.querySelector('.btn--new').addEventListener('click', initiate);

function initiate() {
     scores = [0,0];
     reoundScore = 0;
     activePlayer = 0;
    gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('Winner');
document.querySelector('.player--1').classList.remove('Winner');
document.querySelector('.player--0').classList.remove('active');
document.querySelector('.player--1').classList.remove('active');
document.querySelector('.player--0').classList.add('active');

}