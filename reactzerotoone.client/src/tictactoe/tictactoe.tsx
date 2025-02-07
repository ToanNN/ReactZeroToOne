import { useState } from "react";
import Board from "./dashboard";

function Tictactoe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length -1];

  function handlePlay(nextSquares){
    //creates a new array that contains all the items in history, followed by nextSquares
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }  

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext ={xIsNext} squares ={currentSquares} onPlay={handlePlay}></Board>
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

export default Tictactoe;
