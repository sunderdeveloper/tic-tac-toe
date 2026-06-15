import "./welcome.css";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Welcome = ({ setCurrentPage }) => {
  return (
    <div className="welcomeContainer">
      <p className="welcomeBefore">Welcome to</p>
      <h1 className="welcome">
        <span>TIC</span> TAC <span>TOE</span>
      </h1>
      <div className="description">
        The classic game. Endless fun!
        <div className="leftLine"></div>
        <div className="rightLine"></div>
      </div>

      <div className="centerImage">
        <img src="../../src/assets/welcomeBoard.png" alt="" />
      </div>
      <button
        className="startGame"
        onClick={() => setCurrentPage("DifficultyScreen")}
      >
        <FaPlay />
        Start Game
      </button>
      <p className="bottomTagLine">
        <FaStar className="star" /> Beat your best. Have fun!{" "}
      </p>

      <div className="random">
        <span>O</span>
        <span>X</span>
        <span>X</span>
        <span>O</span>
      </div>
    </div>
  );
};

export default Welcome;
