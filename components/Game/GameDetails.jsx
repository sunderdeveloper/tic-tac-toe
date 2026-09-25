import React from "react";
import { BsBarChartFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { IoMdTime } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { FaRegCircle } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../context/GameContext";
import "./GameDetails.css";

const GameDetails = ({ currentTurn, minutes, seconds }) => {
  const { selectedDimension, difficulty } = useContext(AppContext);
  return (
    <div>
      <div className="gameDetails">
        <div className="difficultyBlock">
          <BsBarChartFill className="icon" />
          <div className="difficultyTextBlock">
            <span>Difficulty</span>
            <h3>{difficulty}</h3>
          </div>
        </div>
        <div className="boardSizesBlock">
          <RxDashboard className="icon" />
          <div className="boardSizeTexts">
            <span>Board Size</span>
            <h3>
              {selectedDimension} x {selectedDimension}
            </h3>
          </div>
        </div>
        <div className="playerBlock">
          {currentTurn ? (
            <IoMdClose className="iconX" />
          ) : (
            <FaRegCircle className="iconO" />
          )}

          <div className="playerText">
            <span>Current Turn</span>
            <h3>Player {currentTurn ? "X" : "O"}</h3>
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
    </div>
  );
};

export default GameDetails;
