import { useState } from "react";

const GameBoard = ({ updatePlayerStatus, playerStatus }) => {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (paramRowIndex, paramColIndex) => {
    setGameBoard((oldGameBoard) => {
      // oldGameBoard.map((rowArr, rowIndx) =>
      //     rowIndx === paramRowIndex ? rowArr.map((colArr, colIndx) => (colIndx === paramColIndex ? (playerStatus ?  'X' : 'O') : colArr))
      //     : rowArr
      // )
      // oldGameBoard[paramRowIndex][paramColIndex] = (playerStatus ? 'X', 'O');
      // return oldGameBoard;

      const updatedGameBoard = [
        ...oldGameBoard.map((innerArr) => [...innerArr]),
      ];
      updatedGameBoard[paramRowIndex][paramColIndex] = playerStatus ? "X" : "O";
      return updatedGameBoard;
    });

    updatePlayerStatus();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
