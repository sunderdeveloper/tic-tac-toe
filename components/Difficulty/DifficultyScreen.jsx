import React from "react";
import "./Difficulty.css";
import DifficultyCard from "../../Ui_Components/DifficultyCard";
import { FaArrowLeft } from "react-icons/fa6";

const DifficultyScreen = ({ setCurrentPage }) => {
  return (
    <>
      <span onClick={() => setCurrentPage("welcome")} className="back">
        <FaArrowLeft />
      </span>
      <div className="difficultyScreenContainer">
        <p className="challengeTxt">Choose your challenge </p>
        <h1 className="selectionTxt">Select Difficulty</h1>
        <p className="tagLine">
          Pick a difficulty level to start your Tic Tac Toe adventure!
        </p>
        <div className="cardsContainer">
          <DifficultyCard setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  );
};

export default DifficultyScreen;
