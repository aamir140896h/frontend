import React from "react";
import useTictactoe from "./hook-tictectoe/use-tic-tac-toe";

const TicTacToe = () => {
  const { board, boardSize, handleClick, getStatusMessage, reset } =
    useTictactoe();
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={reset}>
          Reset Game
        </button>
      </div>
      <div className="board" style={{ "--board-size": boardSize }}>
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
