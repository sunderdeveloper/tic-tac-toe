import { BsEmojiSmile } from "react-icons/bs";

const DifficultyCard = () => {
  return (
    <>
      <div className="card">
        <div className="cardImage">
          <BsEmojiSmile />
        </div>
        <h3 className="difficultyName">Easy</h3>
        <p className="tagLine">
          Perfect for beginners! Smaller boards, simple and fun.
        </p>

        <div className="boardSizes">
          <ul>
            <li>3x3</li>
            <li>4x4</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DifficultyCard;
