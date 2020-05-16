import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'November Rain', duration: '3:13' },
    { title: 'Always Be My Baby', duration: '4:35' },
    { title: 'Vogue', duration: '2:57' },
    { title: 'Smells Like Teen Spirit', duration: '5:33' },
    { title: 'Wannabe', duration: '4:42' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
