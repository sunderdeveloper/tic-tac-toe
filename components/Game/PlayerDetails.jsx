import { IoMdClose } from "react-icons/io";

import { FaRegCircle } from "react-icons/fa";
import "./PlayerDetails.css";

const PlayerDetails = () => {
  return (
    <>
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
    </>
  );
};

export default PlayerDetails;
