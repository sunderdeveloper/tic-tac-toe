import "./BoardModal.css";

const BoardModal = ({ sizes, showModal }) => {
  return (
    <>
      <div className="boardSizeContainer">
        <p className="challengeTxt"> </p>
        <span className="closeIcon" onClick={showModal && showModal(false)}>
          &times;
        </span>
        <h1 className="selectionTxt">Select Board Size</h1>
        <p className="tagLine">choose your board dimensions for medium level</p>

        <div className="boxesContainer">
          {sizes.map((box, index) => {
            return (
              <div key={index} className="box">
                <h3 className="cellsNum">
                  {box} x {box}
                </h3>
                <div
                  className="boxMain"
                  style={{ gridTemplateColumns: `repeat(${box}, 36px` }}
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
      </div>
    </>
  );
};

export default BoardModal;
