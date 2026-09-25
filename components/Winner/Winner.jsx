import "./Winner.css";

const Winner = () => {
  return (
    <>
      <div className="winnerBlock">
        <img src="../../public/cup.png" alt="" />
        <h1 className="winnerPlayerTxt">
          Player <span className="winnerIcon">X</span>{" "}
          <span className="winnerText">Wins</span>
          <p className="winner_Txt_Message">Great game! Well played.</p>
        </h1>
      </div>
    </>
  );
};

export default Winner;
