import database  from '../firebase/firebase';

export const addTrackCard = (track) => ({
    type: 'ADD_TRACK',
    track
})

export const startAddTrackCard = (trackData = {}) => {
    return (dispatch) => {
        const {
            id = '',
            name = '',
            artist = '',
            image = '',
            uri = ''
        } = trackData
        const track = { id, name, artist, image, uri }

        database.ref('tracks').push(track).then((ref) => {
            dispatch(addTrackCard({
              firebase_id: ref.key,
              ...track 
            }))
        })
    }
}

export const setTracks = (tracks) => ({
    type: 'SET_TRACKS',
    tracks
})

export const startSetTracks = () => {
    return (dispatch) => {
        return database.ref('tracks').once('value').then((snapshot) => {
            const tracks = []

            snapshot.forEach((childSnapshot) => {
                tracks.push({
                    ...childSnapshot.val()
                })
            })

            dispatch(setTracks(tracks))
        })
    }
}