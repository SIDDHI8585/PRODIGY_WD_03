let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // empty cells
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart-btn');

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]  // diagonals
];

// Handle cell click
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');

        if (gameBoard[index] === '' && !gameOver) {
            gameBoard[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

// Check for a winner
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }

    // Check for a tie
    if (!gameBoard.includes('')) {
        gameOver = true;
        alert("It's a tie!");
    }
}

// Restart the game
restartButton.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
});
