import { createStore } from "redux"
import {reducer, initialState} from './reducer'

export const configureStore=()=>{
    const store=createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
}