export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_TRACK':
            return state.concat(action.track)
        case 'SET_TRACKS':
            return action.tracks
        default:
            return state
    }
}