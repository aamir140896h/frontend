import { useState } from "react";
// const initialBoard = () => Array(9).fill(null);

const useTictactoe = (boardSize = 4) => {
  const totalCells = boardSize * boardSize;
  const [board, setBoard] = useState(Array(totalCells).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  //   Winning patter
  const generateWinningPatterns = () => {
    const patterns = [];

    // Rows
    for (let r = 0; r < boardSize; r++) {
      const row = [];
      for (let c = 0; c < boardSize; c++) {
        row.push(r * boardSize + c);
      }
      patterns.push(row);
    }

    // Columns
    for (let c = 0; c < boardSize; c++) {
      const col = [];
      for (let r = 0; r < boardSize; r++) {
        col.push(r * boardSize + c);
      }
      patterns.push(col);
    }

    // Diagonal (top-left to bottom-right)
    const diag1 = [];
    for (let i = 0; i < boardSize; i++) {
      diag1.push(i * boardSize + i);
    }
    patterns.push(diag1);

    // Diagonal (top-right to bottom-left)
    const diag2 = [];
    for (let i = 0; i < boardSize; i++) {
      diag2.push(i * boardSize + (boardSize - i - 1));
    }
    patterns.push(diag2);

    return patterns;
  };

  const winningPatterns = generateWinningPatterns();

  //   const winning_Patter = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 4, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [2, 4, 6],
  //   ];
  const calculateWinner = (currentBoard) => {
    //////////////////////////////////////////////////////////////////////////
    // 3*3 board
    // for (let i = 0; i < winningPatterns.length; i++) {
    //   const [a, b, c] = winningPatterns[i];
    //   console.log([a, b, c], winningPatterns[i]);
    //   if (
    //     currentBoard[a] &&
    //     currentBoard[a] === currentBoard[b] &&
    //     currentBoard[a] === currentBoard[c]
    //   ) {
    //     return currentBoard[a];
    //   }
    // }
    // return null;
    ///////////////////////////////////////////////////////////////////////////////
    //dynamic board
    for (let pattern of winningPatterns) {
      const first = currentBoard[pattern[0]];
      console.log(first);

      if (first && pattern.every((index) => currentBoard[index] === first)) {
        return first;
      }
    }
    return null;
  };
  const handleClick = (index) => {
    //check winner
    const winner = calculateWinner(board);
    console.log(winner);

    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} Win's`;
    if (!board.includes(null)) return `Its a draw`;
    return `Player ${isXNext ? "X" : "O"} turns`;
  };

  const reset = () => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setIsXNext(true);
  };

  return {
    board,
    isXNext,
    winningPatterns,
    boardSize,
    calculateWinner,
    handleClick,
    getStatusMessage,
    reset,
  };
};

export default useTictactoe;
