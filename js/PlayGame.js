import Game from './Game.js';

const board = document.querySelector('.board');
const playBtn = document.querySelector('.playBtn');
const addPlayer = document.querySelector('.addPlayer');
const dice = document.querySelector('.dice');

let cells = [];
let players = [];

function playGame() {
    generateBoard();
    let game = new Game(1, players, 100, "EASY", cells);
    game.startGame()
}

function generateBoard() {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            div.innerText = (i * 10) +  (j + 1);
            div.setAttribute('data-pos', (i * 10) + (j + 1));
            row.appendChild(div);
        }
        fragment.appendChild(row);
    }

    // for (let i = 0; i < 100; i++) {
    //     let div = document.createElement('div');
    //     div.classList.add('cell');
    //     div.innerText = i + 1;
    //     div.setAttribute('data-pos', i + 1);
    //     fragment.appendChild(div);
    // }
    board.appendChild(fragment);
}

function addPlayers(name) {
    this.players.push(name)
}

function rollDice() {

}

playGame();

addPlayer.addEventListener("click", addPlayers);
playBtn.addEventListener("click", playGame);
dice.addEventListener("click", rollDice);
