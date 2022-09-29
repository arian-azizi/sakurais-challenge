import React from 'react';
import '../index.css';

const Character = ({ character }) => {
  return (
    <div>
      {character.id}
      <img src={character.thumb} class='character-img'/>
    </div>
  )
}

export default Character;