let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '🎃'; // Pumpkin starts the game
let gameActive = true;

const statusDisplay = document.getElementById('status');

function handleResultValidation() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            statusDisplay.innerHTML = `Player ${currentPlayer} wins! 🎉`;
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        statusDisplay.innerHTML = 'It\'s a spooky tie!';
    }
}

function makeMove(cell, index) {
    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    cell.innerHTML = currentPlayer;
    handleResultValidation();

    currentPlayer = currentPlayer === '🎃' ? '👻' : '🎃'; // Switch between Pumpkin and Ghost
    if (gameActive) {
        statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = '🎃';
    gameActive = true;
    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
}
