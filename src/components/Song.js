import React, {useState} from 'react';

const Song = ({ currentSong, isPlaying, songInfo, newSong, setNewSong }) => {

  if (newSong) {
    setTimeout(() => {
      setNewSong(false);
    }, 1000);
  }

  return (
    <div className="song-container">
      <div className={`cover`} style={{ transform: `rotateZ(${songInfo.rotate}deg)`}}>
        <img src={currentSong.cover} alt={currentSong.name}/>
      </div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  )
};

export default Song;