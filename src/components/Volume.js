import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Volume = ({ volume, handleVolume, mute, muteHandler }) => {
  
  return (
    <div className="volume-settings">
      <div className="settings">
        <div className="mute" onClick={() => muteHandler()} >
          <FontAwesomeIcon icon={mute ? faVolumeMute : faVolumeUp} />
        </div>
        <input type="range" className="volume-slider" onChange={handleVolume} min={0} max={100} value={volume} disabled={mute ? true : false} />
      </div>
    </div>
  )
}

export default Volume;