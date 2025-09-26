import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {
  const [playerState, setPlayerState] = useState(true);

  function updatePlayerState() {
    setPlayerState((pState) => !pState);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={playerState} />
          <Player initialName="Player 2" symbol="O" isActive={!playerState} />
        </ol>
        <GameBoard
          updatePlayerStatus={() => updatePlayerState()}
          playerStatus={playerState}
        />
      </div>
    </main>
  );
}

export default App;
