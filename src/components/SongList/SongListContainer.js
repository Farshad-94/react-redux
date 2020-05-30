import { connect } from 'react-redux';
import SongList from './SongList';
import { selectSong } from '../../actions';


const mapDispatchToProps = {
  selectSong
};

const mapStateToProps = (state) => {
  console.log(state);
  
  return { songs: state.songs }
  // above means: this.props === {songs: state.songs}
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
