import React from 'react';
import Searchbar from './Searchbar';
import { connect } from 'react-redux';

import '../styles/note-card.css'



class Notepad extends React.Component {

    state = {
        token: ''
    }

    componentDidMount() {
        this.fetchToken().then((payload) => {
        })
    }

    fetchToken = () => {
        const url = 'https://kdx1yhs4xb.execute-api.us-east-2.amazonaws.com/dev/tokens'
        return fetch(url)
            .then((res) => res.json())
            .then((res) => this.setState(() => ({ token: res.body.done.json.access_token })))
    };


    handleClick = () => {
    }

    render() {
        return (
            <div>
                <Searchbar token={this.state.token}/>
                <div className="track-cards-container">
                    {
                        this.props.tracks.map((track) => (
                            <div className="track-card">
                            <img className="track-image" src={track.image} height="100px" width="100px" alt="album"/>   
                            <div className="track-name">
                                {track.name}
                            </div>
                            <div>{track.artist}</div>
                        </div>
                        ))
                    }
                </div>
            </div>    
        );
    }
}  

const mapStateToProps = (state) => ({
    tracks: state
})

export default connect(mapStateToProps)(Notepad);