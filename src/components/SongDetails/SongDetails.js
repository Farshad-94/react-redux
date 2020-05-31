import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles/songDetails.scss';

export default function SongDetails({ selectedSong }) {
  
  return (
    <Card>
      <CardContent>
      {!selectedSong ?
      <div className="main">
        <div className="main__title">
            Please select a song
        </div>
      </div>
      :
      <div>
        <div className="main">
          <Typography variant="h6" gutterBottom>
            {selectedSong.title}
          </Typography>
        </div>
        <Typography variant="caption" display="block" gutterBottom>
          Duration: <br />
          {selectedSong.duration}
        </Typography>
      </div>
      }
      </CardContent>
    </Card>
  );

}

SongDetails.propTypes = {
  selectedSong: PropTypes.object
}