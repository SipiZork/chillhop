import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ audioRef, songInfo, setSongInfo, isPlaying, setIsPlaying, songs, setSongs, currentSong, setCurrentSong, mute }) => {

  const activeLibraryHandler = (nextSong) => {
    const newSongs = songs.map(song => {
      if (song.id === nextSong.id) {
        return {
          ...song,
          active: true
        };
      } else {
        return {
          ...song,
          active: false
        };
      }
    });
    setSongs(newSongs);
  }

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value
    })
  }

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }

  const skipTrackHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextSong;
    if (direction === 'skip-back') {
      if (currentIndex === 0) {
        nextSong = songs[songs.length - 1];
      } else {
        nextSong = songs[currentIndex - 1];
      }
    } else if(direction === 'skip-forward') {
      nextSong = songs[(currentIndex + 1) % songs.length];
    }
    await setCurrentSong(nextSong);
    activeLibraryHandler(nextSong);
    if (isPlaying) audioRef.current.play();
  }

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track" style={{ background: `linear-gradient(to right, ${currentSong.color[1]}, ${currentSong.color[0]})`}}>
          <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} />
          <div className="animate-track" style={trackAnim}></div>
        </div>
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} onClick={() => skipTrackHandler('skip-back')} />
        <FontAwesomeIcon onClick={playSongHandler}className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} onClick={() => skipTrackHandler('skip-forward')}/>
      </div>
    </div>
  )
}

export default Player;