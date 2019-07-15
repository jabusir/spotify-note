import React from 'react';

const Dropdown = (props) => {
    return (
        <div>
        {
            props.tracks.length > 0 && props.tracks.map((track) => (
                <div key={track.id}>
                    {track.name}
                </div>
            ))
        }
        </div>
    );
};

export default Dropdown