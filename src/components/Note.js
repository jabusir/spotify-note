import React from 'react';
import NoteCard from './NoteCard';
import '../styles/note-card.css'

export default class Note extends React.Component {

    state = {
        songs : [
            {
                name: 'What what in the butt',
                artist: 'oswon',
                id: '0001',
            },
            {
                name: 'danishs song',
                artist: 'danish',
                id: '0002'
            },
            {
                name: 'jejo 3inda beat',
                artist:'dulla mulla',
                id: '0003'
            }
        ]
    }

    handleClick = () => {
        this.setState((prevState) => (prevState.songs.push({
            name: 'new joint',
            artist: 'dideleedoo',
            'id': '0004'
        })))
    }

    render() {
        return (
                <div className="note">
                    <NoteCard songs={this.state.songs}/>
                    <button onClick = {this.handleClick}>Add song</button>
                </div>
        );
    }
}   