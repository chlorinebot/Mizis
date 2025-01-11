document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById('chessboard');
    const pieces = ["R", "N", "B", "Q", "K", "B", "N", "R"];
    const board = [
        pieces, Array(8).fill("P"),
        Array(8).fill(""), Array(8).fill(""), Array(8).fill(""), Array(8).fill(""),
        Array(8).fill("p"), pieces.map(p => p.toLowerCase())
    ];

    function createBoard() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const square = document.createElement('div');
                square.classList.add('square', (i + j) % 2 === 0 ? 'white' : 'black');
                if (board[i][j]) {
                    square.textContent = board[i][j];
                }
                chessboard.appendChild(square);
            }
        }
    }

    createBoard();
});
