import { useContext, useEffect, useState } from "react";
import "./Game.css";
import { IoMdClose } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { AppContext } from "../../context/GameContext";
import ErrorMessage from "./ErrorMessage.jsx";
import GameDetails from "./GameDetails.jsx";
import PlayerDetails from "./PlayerDetails.jsx";
import GameHeader from "./GameHeader.jsx";

const Game = () => {
  const { selectedDimension } = useContext(AppContext);
  const boardNumber = selectedDimension;
  const [cellValue, setCellValue] = useState(
    Array(boardNumber * boardNumber).fill(null),
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [totalSeconds, settotalSeconds] = useState(0);
  const [showError, setShowError] = useState(false);
  const [currentTurn, setCurrentTurn] = useState(true);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const handleClick = (index) => {
    if (cellValue[index] === null) {
      setCellValue((prev) => {
        const newBoard = [...prev];
        newBoard[index] = currentPlayer;

        return newBoard;
      });
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
      setCurrentTurn(!currentTurn);
    }
    cellValue[index] !== null && setShowError(true);
  };

  const handleRestart = () => {
    settotalSeconds(0);
    setCellValue(Array(boardNumber * boardNumber).fill(null));
    setCurrentTurn(true);
    setCurrentPlayer("X");
  };

  useEffect(() => {
    if (!showError) return;

    const errorTimer = setTimeout(() => {
      setShowError(false);
    }, 2500);
    return () => clearTimeout(errorTimer);
  }, [showError]);

  useEffect(() => {
    const timer = setInterval(() => {
      settotalSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  for (let row = 0; row < boardNumber; row++) {
    // console.log(row);
    const single = row * boardNumber;
    const rowCells = [];
    for (let col = 0; col < boardNumber; col++) {
      rowCells.push(single + col);
    }
    const values = rowCells.map((index) => cellValue[index]);

    const firstVal = values[0];

    if (firstVal !== null && values.every((val) => val === firstVal)) {
      // console.log(firstVal, "wins");
    }
  }

  for (let col = 0; col < boardNumber; col++) {
    const colCells = [];
    for (let row = 0; row < boardNumber; row++) {
      colCells.push(row * boardNumber + col);
    }

    // console.log(colCells);
    const colValues = colCells.map((index) => cellValue[index]);

    const firstVal = colValues[0];

    if (firstVal !== null && colValues.every((val) => val === firstVal)) {
      console.log(firstVal, "wins");
    }
  }

  let diagonalCells = [];
  for (let diagonal = 0; diagonal < boardNumber; diagonal++) {
    diagonalCells.push(diagonal * boardNumber + diagonal);
  }
  const firstVal = diagonalCells[0];

  if (firstVal !== null && diagonalCells.every((val) => val === firstVal)) {
    // console.log(firstVal, "wins");
  }

  let diagonalCells2 = [];
  for (let d2Val = 0; d2Val < boardNumber; d2Val++) {
    diagonalCells2.push(boardNumber - 1 + boardNumber * d2Val - d2Val);
  }

  return (
    <>
      <GameHeader handleRestart={handleRestart} />
      <div className="gameBoardBlock">
        <GameDetails
          currentTurn={currentTurn}
          minutes={minutes}
          seconds={seconds}
        />
        <div
          className="boardBlock"
          style={{
            gridTemplateColumns: `repeat(${boardNumber}, 1fr)`,
            gridTemplateRows: `repeat(${boardNumber}, 1fr)`,
          }}
        >
          {Array.from({ length: boardNumber * boardNumber }, (_, index) => (
            <div
              key={index}
              className="boardCell"
              onClick={() => handleClick(index)}
            >
              {cellValue[index] === "X" ? (
                <IoMdClose className="cellIconX" />
              ) : cellValue[index] === "O" ? (
                <FaRegCircle className="cellIconO" />
              ) : null}
            </div>
          ))}
        </div>

        <PlayerDetails />
      </div>

      <ErrorMessage showError={showError} />
    </>
  );
};

export default Game;
