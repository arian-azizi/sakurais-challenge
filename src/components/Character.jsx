import React from 'react';

const Character = ({ character }) => {
  return (
    <div>
      {character.name}
      <img src={character.thumb}/>
    </div>
  )
}

export default Character;