import React from 'react';
import './Track.css';

class Track extends React.Component {
	renderAction() {
		
	}
	render(){
		return (
			<div className="Track">
  <div className="Track-information">
    <h3>Track name</h3>
    <p>Track artist | track album</p>
  </div>
  <a className="Track-action">+ or - will go here </a>
</div>
		)
	}
}

export default Track;