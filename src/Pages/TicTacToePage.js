import { useEffect, useState } from "react";

import {
  TicTacAppHeader,
  TicTacAppHeadingText,
  RowComponent,
  SquareSpan,
  ClearButton,
} from "../Components/ticTacComponent";

const SquareComponent = (props) => {
  return (
    <SquareSpan
      right={props.right}
      bottom={props.bottom}
      onClick={props.onClick}
    >
      {props.state}
    </SquareSpan>
  );
};

const initialTicTacToeState = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {

  const [gameState, setGameState] = useState(initialTicTacToeState);
  const [isXChance, setIsXChance] = useState(true);


  const handleOnSquareClick = (index) => {
    const strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    setGameState(strings);
    setIsXChance(!isXChance);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`${winner} won the game`);
      setGameState(initialTicTacToeState);
    }

  },[gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  const handleClearGame = (event) => {
    event.preventDefault();
    setIsXChance(true);
    setGameState(initialTicTacToeState);
  };

  return (
    <TicTacAppHeader>
      <TicTacAppHeadingText>Bala's - Tic Tac Toe - v1</TicTacAppHeadingText>
      <div>Next Player : {isXChance ? "X" : "O"}</div>
      <div>State : {JSON.stringify(gameState)}</div>
      <RowComponent>
        <SquareComponent
          bottom={true}
          right={true}
          state={gameState[0]}
          onClick={() => handleOnSquareClick(0)}
        />
        <SquareComponent
          bottom={true}
          right={true}
          state={gameState[1]}
          onClick={() => handleOnSquareClick(1)}
        />
        <SquareComponent
          bottom={true}
          right={false}
          state={gameState[2]}
          onClick={() => handleOnSquareClick(2)}
        />
      </RowComponent>
      <RowComponent>
        <SquareComponent
          bottom={true}
          right={true}
          state={gameState[3]}
          onClick={() => handleOnSquareClick(3)}
        />
        <SquareComponent
          bottom={true}
          right={true}
          state={gameState[4]}
          onClick={() => handleOnSquareClick(4)}
        />
        <SquareComponent
          bottom={true}
          right={false}
          state={gameState[5]}
          onClick={() => handleOnSquareClick(5)}
        />
      </RowComponent>
      <RowComponent>
        <SquareComponent
          bottom={false}
          right={true}
          state={gameState[6]}
          onClick={() => handleOnSquareClick(6)}
        />
        <SquareComponent
          bottom={false}
          right={true}
          state={gameState[7]}
          onClick={() => handleOnSquareClick(7)}
        />
        <SquareComponent
          bottom={false}
          right={false}
          state={gameState[8]}
          onClick={() => handleOnSquareClick(8)}
        />
      </RowComponent>
      <ClearButton onClick={handleClearGame}>Clear Game</ClearButton>
    </TicTacAppHeader>
  );
};
export default TicTacToe;
