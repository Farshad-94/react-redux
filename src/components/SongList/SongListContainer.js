import { connect } from 'react-redux';
import SongList from './SongList';

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  songs: state.songs
  // above means: this.props === {songs: state.songs}
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
