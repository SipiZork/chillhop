import React, {useState} from 'react';

import { motion } from 'framer-motion';

const Song = ({ currentSong, songInfo }) => {


  return (
    <div className="song-container">
      <motion.div className={`cover`} initial={{ rotate: 0 }} animate={{ rotate: songInfo.rotate, transition: {ease: "linear"}}} style={{ '--color': currentSong.color[0]}}>
        <img src={currentSong.cover} alt={currentSong.name}/>
      </motion.div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  )
};

export default Song;