import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const updateEditingStatus = () => {
    setIsEditing(editing => !editing)
  }

  const handleInputChange = (event) => {
    setPlayerName(event.target.value)
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input onChange={(e) => handleInputChange(e)} type="text" value={playerName} required/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => updateEditingStatus()}>{isEditing ? 'Save' : 'Edit' }</button>
    </li>
  );
};

export default Player;
