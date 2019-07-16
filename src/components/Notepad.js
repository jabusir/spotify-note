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
            </div>    
        );
    }
}  

const mapStateToProps = (state) => ({
    tracks: state
})

export default connect(mapStateToProps)(Notepad);