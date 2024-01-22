import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    if (action.type === "ADD_FEEDBACK") {
        return [ ...state, action.payload];
    } else if (action.type === "CLEAR_STORE") {
        return action.payload;
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
