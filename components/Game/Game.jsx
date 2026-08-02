import React from "react";
import "./Game.css";
import { FaArrowLeft } from "react-icons/fa6";
import { RiResetLeftFill } from "react-icons/ri";
import { BsBarChartFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoMdTime } from "react-icons/io";

const Game = ({ setCurrentPage }) => {
  const boardNumber = 5;
  return (
    <>
      <div className="gameHeader">
        <button
          className="Home"
          onClick={() => setCurrentPage("DifficultyScreen")}
        >
          <FaArrowLeft /> Home
        </button>
        <button className="restart">
          <RiResetLeftFill /> Restart
        </button>
      </div>
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
          <IoMdClose className="icon" />
          <div className="playerText">
            <span>Current Turn</span>
            <h3>Player X</h3>
          </div>
        </div>
        <div className="timerBlock">
          <IoMdTime className="icon" />
          <div className="timerText">
            <span>TIMER</span>
            <h3>00:00</h3>
          </div>
        </div>
      </div>
      <div className="gameBoardBlock">
        <div className="playerDetails"></div>
        <div
          className="boardBlock"
          style={{ gridTemplateColumns: `repeat(${boardNumber}, 40px)` }}
        >
          {Array.from({ length: boardNumber * boardNumber }, (_, index) => (
            <input key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
