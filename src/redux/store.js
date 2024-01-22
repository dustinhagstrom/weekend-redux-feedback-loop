import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    if (action.type === "ADD_FEEDBACK") {
        return [ ...state, action.data];
    }
    return state;
};

const store = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

export default store;
