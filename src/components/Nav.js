import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>SipiZork's Vibes</h1>
      <button className={`library-btn${ libraryStatus ? ' active' : ''}`} onClick={() => setLibraryStatus(!libraryStatus)}>
        Könyvtár{` `}
         <FontAwesomeIcon icon={faMusic} />
        </button>
    </nav>
  )
}

export default Nav;