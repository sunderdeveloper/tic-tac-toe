import "./DifficultyCard.css";
import { cardsData } from "../utils/cardsData.js";
import { useState } from "react";
import BoardModal from "./BoardModal";

const DifficultyCard = () => {
  const [hovered, setHovered] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [boardSizes, setBoardSizes] = useState([]);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      {cardsData.map((card) => {
        const Icon = card.icon;
        return (
          <div
            className="card"
            key={card.id}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            style={
              hovered === card.id
                ? {
                    borderColor: card.color,
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  }
                : {}
            }
            onClick={() => {
              setShowModal(true);
              setBoardSizes(card.boardSize);
            }}
          >
            <div className="cardImage" style={{ borderColor: card.color }}>
              <Icon className="image" style={{ color: card.color }} />
            </div>
            <h3 className="difficultyName" style={{ color: card.color }}>
              {card.difficulty}
            </h3>
            <p className="tagLine">{card.tagLine}</p>

            <div className="boardSizes">
              <p className="sizeText" style={{ color: card.color }}>
                Board Sizes:
              </p>
              <ul>
                {card.boardSize.map((size, index) => {
                  return (
                    <li key={index}>
                      {size}X{size}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}

      {showModal && <BoardModal sizes={boardSizes} closeModal={closeModal} />}
    </>
  );
};

export default DifficultyCard;
