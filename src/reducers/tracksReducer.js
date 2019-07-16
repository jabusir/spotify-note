export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_SONG':
            return state.concat(action.track)
        default:
            return state;
    }
}