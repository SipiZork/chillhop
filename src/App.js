import React, {useState, useRef, useEffect} from 'react';

import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import Volume from './components/Volume';

import './styles/app.scss';

import data from './data';
import { logRoles } from '@testing-library/react';

function App() {
  //ref
  const audioRef = useRef(null);
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [mute, setMute] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    rotate: 0,
    totalRotate: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const totalRotate = duration / 60 * 360;
    const rotate = currentTime / 60 * 360;
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      rotate,
      totalRotate,
      animationPercentage
    })
  }

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play(); audioRef.current.volume = volume / 100;
    if (mute) audioRef.current.volume = 0;
    const newSongs = songs.map(song => {
      if (song.id === songs[(currentIndex + 1) % songs.length].id) {
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

  const handleVolume = (e) => {
    setVolume(e.target.value);
    if (!mute) {
      audioRef.current.volume = e.target.value / 100;
    }
  }

  const muteHandler = async () => {
    console.log('mute', mute);
    if (!mute) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = volume / 100;
    }
    setMute(!mute);
  }

  return (
    <div className={`App${libraryStatus ? ' library-active' : ''}`} style={{ background: currentSong.color[0] }}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song
        currentSong={currentSong}
        songInfo={songInfo} />
      <Player
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Volume
        currentSong={currentSong}
        volume={volume}
        handleVolume={handleVolume}
        muteHandler={muteHandler}
        mute={mute}
        audioRef={audioRef}
      />
      <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
