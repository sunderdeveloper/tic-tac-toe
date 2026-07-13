import "./BoardModal.css";
import { useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

const BoardModal = ({ sizes, closeModal }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleBoxClick = (index) => {
    setSelectedSize(index);
  };

  const cellSize = window.innerWidth <= 767 ? "8vw" : "2.5vw";
  return (
    <>
      <div className="boardSizeContainer">
        <p className="challengeTxt"> </p>
        <span className="closeIcon" onClick={closeModal}>
          &times;
        </span>
        <h1 className="selectionTxt">Select Board Size</h1>
        <p className="tagLine">choose your board dimensions for medium level</p>

        <div className="boxesContainer">
          {sizes.map((box, index) => {
            return (
              <div
                key={index}
                className={`box ${selectedSize === index ? "hovered" : ""}`}
                onClick={() => handleBoxClick(index)}
              >
                <FaCircleCheck
                  className="checkIcon"
                  style={{ display: selectedSize === index ? "block" : "none" }}
                />
                <h3 className="cellsNum">
                  {box} x {box}
                </h3>
                <div
                  className="boxMain"
                  style={{ gridTemplateColumns: `repeat(${box}, ${cellSize})` }}
                >
                  {Array.from({ length: box * box }, (_, i) => (
                    <div key={i}></div>
                  ))}
                </div>
                <h3 className="cellsCount">{box * box} cells</h3>
              </div>
            );
          })}
        </div>
        <div className="modalFooter">
          <div className="leftBlock">
            <IoBulbOutline className="bulbIcon" />
            <p className="footerCaption">
              Bigger boards = More Moves. Think ahead and win!
            </p>
          </div>
          <button
            className="gameStart"
            style={{
              cursor: selectedSize !== null ? "pointer" : "not-allowed",
            }}
          >
            {" "}
            Start Game
          </button>
        </div>
      </div>
    </>
  );
};

export default BoardModal;
