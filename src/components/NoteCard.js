import React from 'react';
import '../styles/note-card.css'

const NoteCard = (props) => {
    return (
        props.songs.map((song) => (
            <div className="note-card">
                {song.name}
            </div>
        ))
    );
}

export default NoteCard;