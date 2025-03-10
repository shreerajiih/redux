import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'

import userReducer from './reducers/userReducer';
import studentReducer from './reducers/studentReducer';
import { thunk } from 'redux-thunk';
// import logger from 'redux-logger'; // for console logging to track previous & next states
import { composeWithDevTools } from 'redux-devtools-extension'; // for debugging redux stats in browser dev tools -- recommanded 

const mainReducers = combineReducers({
    user: userReducer,
    student: studentReducer
});

let commanoInitialObject = {  // if we dont want to [pass] any initial state inside the reducer then we can pass as 2nd argument in       createstore
    // here we can create different file for initial states

    user: {  // use object name same as passed in combined reducers like here "user"
        userId: 1234,
        name: "Ram bhai",
        age: 23,
        isMarried: false,
        city: "Delhi"
    },
    student: {
        studentId: 1234,
        name: "Ram bhai",
        age: 23,
        city: "Delhi"
    }
}

const store = createStore(
    mainReducers,
    commanoInitialObject,
    composeWithDevTools(applyMiddleware(thunk))
    // applyMiddleware(thunk)
    //   applyMiddleware(thunk,logger) // for logging :: AMAZING
);

export default store;
