import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

class Tracklist extends React.Component {
	render() {
	return (
	<div className="TrackList">
    <ul>
	    <li> Track 1</li>
	    <li> Track 2</li>
	    <li> Track 3</li>
    </ul>
</div>
	)
	}
}

export default Tracklist;