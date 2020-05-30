import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const App = () => {
  return (
    <React.Fragment>
      <div>
        <SongList />
      </div>
      <div>
        <SongDetails />
      </div>
    </React.Fragment>
  );
};

export default App;
