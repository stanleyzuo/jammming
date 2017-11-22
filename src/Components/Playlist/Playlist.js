import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';


class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render(){
    return (
      <div className="Playlist">
      <input value={this.props.name} onChange={this.handleNameChange}/>
      <Tracklist tracks={this.props.tracks} onRemove={this.props.onRemove}/>
      <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;