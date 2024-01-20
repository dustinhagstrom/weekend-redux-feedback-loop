import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    if (action.type === "FEEDBACK_FROM_DB") {
        return action.data;
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
