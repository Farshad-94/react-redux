import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './styles/songDetails.scss';

export default function SongDetails({ selectedSong }) {
  
  return (
    !selectedSong ? 
    <div>Please select a song</div> : 
    <div>{selectedSong.title}</div>
  );

}

SongDetails.propTypes = {
  selectedSong: PropTypes.object
}