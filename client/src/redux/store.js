import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import mealReducer from './reducer';

const rootReducer = combineReducers({
    meals: mealReducer,
    // other reducers can be added here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;