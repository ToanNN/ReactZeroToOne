import { useState } from "react";

function Square({value, onSquareClick}) {
   

  return (
    <button
      className="square"
      onClick={onSquareClick}
     >
      {value}
    </button>
  );
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    // create a copy of the squares
    const nextSquares = squares.slice()

    nextSquares[i] ='X';

    // Calling set method lets React know the state of the component has changed
    // Trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).
    setSquares(nextSquares)
  }
// You cannot invoke function directly handleClick(0). YOu have to define an event handler
  return (
    <>
      <div className="board-row">        
        <Square value ={squares[0]} onSquareClick={()=>handleClick(0)} />
        <Square value ={squares[1]} onSquareClick={()=>handleClick(1)} />
        <Square value ={squares[2]} onSquareClick={()=>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value ={squares[3]} onSquareClick={()=>handleClick(3)} />
        <Square value ={squares[4]} onSquareClick={()=>handleClick(4)} />
        <Square value ={squares[5]}  onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square  value ={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square  value ={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square  value ={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}
