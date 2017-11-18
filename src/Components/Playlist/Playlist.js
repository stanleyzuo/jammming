import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import './Playlist.css';


class Playlist extends React.Component {
	render(){
		return (
			<div className="Playlist">
			<input defaultValue={'New Playlist'}/>
			<TrackList />
			<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		)
	}
}

export default Playlist;