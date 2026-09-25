import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RiResetLeftFill } from "react-icons/ri";
import { AppContext } from "../../context/GameContext";
import { useContext } from "react";

const GameHeader = ({ handleRestart }) => {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <div>
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
    </div>
  );
};

export default GameHeader;
