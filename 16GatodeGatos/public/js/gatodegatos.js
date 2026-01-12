const ultimateBoardElement = document.getElementById('ultimate-board');
const messageDisplay = document.getElementById('message');
const currentPlayerDisplay = document.getElementById('current-player');
const resetButton = document.getElementById('reset-button');

let currentPlayer = "X";
let ultimateGameActive = true;
let nextMiniBoardIndex = null;
let isSaving = false;
let board = Array(9).fill(null).map(() => Array(9).fill(""));
let ultimateBoardState = Array(9).fill(""); 

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

const createBoard = () => {
    ultimateBoardElement.innerHTML = '';
    for (let m = 0; m < 9; m++) {
        const miniBoard = document.createElement('div');
        miniBoard.classList.add('mini-board');
        miniBoard.setAttribute('data-mini-index', m);

        for (let c = 0; c < 9; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-cell-index', c);
            cell.setAttribute('data-mini-index', m);
            cell.addEventListener('click', handleCellClick);
            miniBoard.appendChild(cell);
        }
        ultimateBoardElement.appendChild(miniBoard);
    }
};

const updateBoardDisplay = () => {
    const miniBoards = document.querySelectorAll('.mini-board');
    miniBoards.forEach((miniBoard, m) => {
        miniBoard.classList.remove('active', 'won-x', 'won-o', 'draw', 'won');
        miniBoard.removeAttribute('data-winner');

        const isActive = nextMiniBoardIndex === null || nextMiniBoardIndex === m;

        if (isActive && ultimateBoardState[m] === "" && ultimateGameActive) {
            miniBoard.classList.add('active');
        }

        if (ultimateBoardState[m] !== "") {
            miniBoard.classList.add('won');
            if (ultimateBoardState[m] !== "draw") {
                miniBoard.classList.add(`won-${ultimateBoardState[m].toLowerCase()}`);
                miniBoard.setAttribute('data-winner', ultimateBoardState[m]);
            } else {
                miniBoard.classList.add('draw');
                miniBoard.setAttribute('data-winner', '-');
            }
        }

        const cells = miniBoard.querySelectorAll('.cell');
        cells.forEach((cell, c) => {
            cell.classList.remove('playable');
            if (ultimateGameActive && ultimateBoardState[m] === "") {
                if (board[m][c] === "" && (nextMiniBoardIndex === null || nextMiniBoardIndex === m)) {
                    cell.classList.add('playable');
                }
            }
        });
    });
};

const handleCellClick = (event) => {
    if (!ultimateGameActive || isSaving) return;

    const clickedCell = event.target;
    const miniIndex = parseInt(clickedCell.getAttribute('data-mini-index'));
    const cellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (nextMiniBoardIndex !== null && nextMiniBoardIndex !== miniIndex) {
        messageDisplay.innerHTML = "¡Debes jugar en el tablero resaltado!";
        return;
    }

    if (board[miniIndex][cellIndex] !== "") return;

    board[miniIndex][cellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
    
    const miniWin = checkMiniBoardWin(miniIndex);
    if (miniWin !== "") {
        ultimateBoardState[miniIndex] = miniWin;
        checkUltimateWin();
    } else if (!board[miniIndex].includes("")) {
        ultimateBoardState[miniIndex] = "draw";
    }

    if (ultimateBoardState[cellIndex] === "") {
        nextMiniBoardIndex = cellIndex;
    } else {
        nextMiniBoardIndex = null; 
    }
    
    if (ultimateGameActive) {
        changePlayer();
        updateBoardDisplay();
    }
};

const checkUltimateWin = () => {
    let winner = null;

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (ultimateBoardState[a] !== "" && 
            ultimateBoardState[a] !== "draw" && 
            ultimateBoardState[a] === ultimateBoardState[b] && 
            ultimateBoardState[a] === ultimateBoardState[c]) {
            winner = ultimateBoardState[a];
            break;
        }
    }

    if (winner) {
        messageDisplay.innerHTML = `¡El Jugador ${winner} ha ganado!`;
        ultimateGameActive = false;
        saveScore(`Jugador ${winner}`);
    } else if (!ultimateBoardState.includes("")) {
        messageDisplay.innerHTML = `¡Empate!`;
        ultimateGameActive = false;
        saveScore("Empate");
    }
};

const checkMiniBoardWin = (miniIndex) => {
    const miniBoard = board[miniIndex];
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (miniBoard[a] !== "" && miniBoard[a] === miniBoard[b] && miniBoard[a] === miniBoard[c]) {
            return miniBoard[a];
        }
    }
    return "";
};

const changePlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    currentPlayerDisplay.innerHTML = currentPlayer;
    messageDisplay.innerHTML = "";
};

const saveScore = async (winner) => {
    if (isSaving) return; 
    isSaving = true;

    try {
        const response = await fetch('/save-score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ganador: winner })
        });
        const data = await response.json();
        console.log('Score guardado:', data.success);
    } catch (error) {
        console.error('Error al guardar el score:', error);
        isSaving = false;
    }
};

const handleReset = () => {
    window.location.reload(); 
};

const startGame = () => {
    createBoard();
    updateBoardDisplay();
};

resetButton.addEventListener('click', handleReset);

document.addEventListener('DOMContentLoaded', startGame);