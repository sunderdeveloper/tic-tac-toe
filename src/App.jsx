import { useContext } from "react";
import Welcome from "../components/Welcome/Welcome.jsx";
import DifficultyScree from "../components/Difficulty/DifficultyScreen.jsx";
import Game from "../components/Game/Game.jsx";
import { AppContext } from "../context/GameContext.jsx";
import Winner from "../components/Winner/Winner.jsx";

function App() {
  const { currentPage } = useContext(AppContext);

  return (
    <>
      {currentPage === "welcome" && <Welcome />}
      {currentPage === "DifficultyScreen" && <DifficultyScree />}

      {currentPage === "game" && <Game />}
      {currentPage === "winner" && <Winner />}
    </>
  );
}

export default App;
