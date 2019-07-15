import React from 'react';
import '../styles/note-card.css'

const NoteCard = (props) => {
    return (
        props.songs.map((song) => (
            <div className="note-card">
                {song.name}
                {song.artist}
            </div>
        ))
    );
}

export default NoteCard;