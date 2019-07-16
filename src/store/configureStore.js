import { createStore } from 'redux';
import tracksReducer from '../reducers/tracksReducer';


export default () => {
    const store = createStore(
        tracksReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    return store
}