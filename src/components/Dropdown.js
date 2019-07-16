import React from 'react';
import { addTrackCard } from '../actions/addTrackCard';
import { connect } from 'react-redux'
import DropdownCard from './DropdownCard';

import '../styles/dropdown.css'

class Dropdown extends React.Component {
    state = {
        track: {}
    }

    handleClick = () => {
    }

    render() {
        return (
            <div className="dropdown-container">
            {
                this.props.tracks.length > 0 && this.props.tracks.map((track) => (
                        <DropdownCard track={track} key={track.id}/>
                ))
            }
            </div>
        );
    }
}

export default connect()(Dropdown)