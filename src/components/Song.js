import React, {useState} from 'react';

const Song = ({ currentSong, songInfo }) => {


  return (
    <div className="song-container">
      <div className={`cover`} style={{ transform: `rotateZ(${songInfo.rotate}deg)`, '--color': currentSong.color[0]}}>
        <img src={currentSong.cover} alt={currentSong.name}/>
      </div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  )
};

export default Song;