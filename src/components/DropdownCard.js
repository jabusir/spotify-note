import React from 'react';
import { connect } from 'react-redux';
import { addTrackCard } from '../actions/addTrackCard';

import '../styles/dropdown.css';

class DropdownCard extends React.Component {
    state = {
        track: {}
    }

    handleClick = () => {
        this.props.dispatch(addTrackCard(this.props.track))
    }

    render() {
        return(
        <div className="dropdown-item" onClick={this.handleClick}>
            <img className="track-image" src={this.props.track.album.images[0].url} height="100px" width="100px" alt="album"/>   
            <div className="track-name">
                {this.props.track.name}
            </div>
        </div>
        )
    }
}
    

    export default connect()(DropdownCard);