import { BsEmojiSmile } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";

export const cardsData = [
  {
    id: 1,
    difficulty: "Easy",
    boardSize: [3, 4],
    tagLine: "Perfect for beginners! Smaller boards, simple and fun.",
    icon: BsEmojiSmile,
    color: "#2563EB",
  },
  {
    id: 2,
    difficulty: "Medium",
    boardSize: [5, 6, 7],
    tagLine: "A balanced challenge! More moves, more excitment",
    icon: FaRegStar,
    color: "#F97316",
  },
  {
    id: 3,
    difficulty: "Hard",
    boardSize: [8, 9, 10],
    tagLine: "Only for the brave! Larger boards, strategic gameplay.",
    icon: GoTrophy,
    color: "#F97316",
  },
];
