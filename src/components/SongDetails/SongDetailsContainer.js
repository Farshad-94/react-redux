import { connect } from 'react-redux';
import SongDetails from './SongDetails';


const mapStateToProps = state => {
  return { selectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetails);
