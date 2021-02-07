import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setIsPlaying, setSongs, libraryStatus, currentSong }) => {
  


  return (
    <div className={`library${libraryStatus ? ' active' : ''}`}>
      <h2>Könyvtár</h2>
      <div className="library-songs">
        {songs.map(song => <LibrarySong songs={songs} song={song} key={song.id} id={song.id} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setSongs={setSongs} />)}
      </div>
    </div>
  )
}

export default Library;