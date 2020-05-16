import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './styles/songList.scss';

export default function SongList({ songs }) {
  return (
    <Container maxWidth="md">   
        {songs.map(song =>
          <div className="songList-card" key={song.title}>
            <div className="songList-card__title">
              {song.title}
            </div>
            <div className="songList-card__duration">
              Duration: {song.duration}
            </div>

            <CardActions>
              <Button variant="contained" color="primary">
                Select
              </Button>
            </CardActions>

          </div>
        )}
    </Container>
  );
}

SongList.propTypes = {
  songs: PropTypes.array
}