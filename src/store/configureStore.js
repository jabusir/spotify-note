import { createStore, applyMiddleware, compose } from 'redux';
import tracksReducer from '../reducers/tracksReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        tracksReducer, 
        composeEnhancers(applyMiddleware(thunk))
        )
    return store
}