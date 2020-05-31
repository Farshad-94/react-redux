import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

import './styles/main.scss';


const App = () => {
  return (
      <div className="hero">
        <div className="hero__songs">
          <SongList />
        </div>
        <div  className="hero__list">
          <SongDetails/>
        </div>
      </div>
  );
};

export default App;
