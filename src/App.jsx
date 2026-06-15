import { useState } from "react";
import Welcome from "../components/Welcome/Welcome.jsx";
import DifficultyScree from "../components/Difficulty/DifficultyScreen.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  return (
    <>
      {currentPage === "welcome" && <Welcome setCurrentPage={setCurrentPage} />}
      {currentPage === "DifficultyScreen" && (
        <DifficultyScree setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}

export default App;
