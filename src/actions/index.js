
// Action creator
export function selectSong (song) {
  //returns an action: (type: required, payload: optional)
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

