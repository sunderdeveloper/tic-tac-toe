import React, { useEffect, useState } from "react";
import "./Game.css";
import { FaArrowLeft } from "react-icons/fa6";
import { RiResetLeftFill } from "react-icons/ri";
import { BsBarChartFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const Game = ({ setCurrentPage }) => {
  const boardNumber = 6;
  const [cellValue, setCellValue] = useState(
    Array(boardNumber * boardNumber).fill(null),
  );
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [totalSeconds, settotalSeconds] = useState(0);
  const [showError, setShowError] = useState(false);
  const [currentTurn, setCurrentTurn] = useState("X");

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
    }
    cellValue[index] !== null && setShowError(true);
    !showError && handleCurrentPlayer();
  };

  const handleRestart = () => {
    settotalSeconds(0);
    setCellValue(Array(boardNumber * boardNumber).fill(null));
    setCurrentTurn("X");
    setCurrentPlayer("X");
  };

  const clearShowError = () => {
    if (!showError) return;

    setTimeout(() => {
      setShowError(false);
    }, 2500);
  };
  clearShowError();

  const handleCurrentPlayer = () => {
    setCurrentTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      settotalSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="gameHeader">
        <button
          className="Home"
          onClick={() => setCurrentPage("DifficultyScreen")}
        >
          <FaArrowLeft /> Home
        </button>
        <button className="restart" onClick={handleRestart}>
          <RiResetLeftFill /> Restart
        </button>
      </div>

      <div className="gameBoardBlock">
        <div className="gameDetails">
          <div className="difficultyBlock">
            <BsBarChartFill className="icon" />
            <div className="difficultyTextBlock">
              <span>Difficulty</span>
              <h3>Medium</h3>
            </div>
          </div>
          <div className="boardSizesBlock">
            <RxDashboard className="icon" />
            <div className="boardSizeTexts">
              <span>Board Size</span>
              <h3>5 x 5</h3>
            </div>
          </div>
          <div className="playerBlock">
            {currentTurn === "X" ? (
              <IoMdClose className="iconX" />
            ) : (
              <FaRegCircle className="iconO" />
            )}

            <div className="playerText">
              <span>Current Turn</span>
              <h3>Player {currentTurn}</h3>
            </div>
          </div>
          <div className="timerBlock">
            <IoMdTime className="icon" />
            <div className="timerText">
              <span>TIMER</span>
              <h3>
                <span>{minutes.toString().padStart(2, "0")}</span>:
                <span>{seconds.toString().padStart(2, "0")}</span>
              </h3>
            </div>
          </div>
        </div>

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
        <div className="playerDetails">
          <div className="playersBlock">
            <h3>players</h3>
            <div className="playerX">
              <IoMdClose className="playerIcon" />
              <p>Player X</p>
              <span className="shadeTxt">You</span>
            </div>
            <div className="vsText">
              <p>VS</p>
            </div>
            <div className="playerO">
              <FaRegCircle className="playerIcon" />
              <p>Player O</p>
              <span>Opponent</span>
            </div>
            <div className="scoreBoard">
              <h3>score board</h3>
            </div>
            <div className="playerX">
              <IoMdClose className="playerIcon" />
              <p>Player X</p>
              <h3 className="scoreBoardNum">4</h3>
            </div>
            <div className="playerO">
              <FaRegCircle className="playerIcon" />
              <p>Player O</p>
              <h3 className="scoreBoardNum">2</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={`errorMessage ${showError ? "showError" : ""}`}>
        <MdError className="errorIcon" />
        <div className="errorText">
          <p className="msg">Cell already occupied!</p>
          <span>You can't change the move once its placed</span>
        </div>
      </div>
    </>
  );
};

export default Game;
