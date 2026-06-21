import "./DifficultyCard.css";
import { cardsData } from "../utils/cardsData.js";
import { useState } from "react";

const DifficultyCard = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {cardsData.map((card) => {
        const Icon = card.icon;
        return (
          <div
            className="card"
            key={card.id}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={hovered ? { borderColor: card.color } : {}}
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
    </>
  );
};

export default DifficultyCard;
