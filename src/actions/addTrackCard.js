import database  from '../firebase/firebase';

export const addTrackCard = (track) => ({
    type: 'ADD_SONG',
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