import React from 'react';

const Character = ({ character }) => {
  return (
    <div>
      {character.name}
      <img src={character.thumb}/>
      {character.desc}
    </div>
  )
}

export default Character;