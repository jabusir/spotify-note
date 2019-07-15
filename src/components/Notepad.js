import React from 'react';
import NoteCard from './NoteCard';
import '../styles/note-card.css'
import Searchbar from './Searchbar';

export default class Note extends React.Component {

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