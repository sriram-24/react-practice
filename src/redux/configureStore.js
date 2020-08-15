import { createStore, combineReducers,applyMiddleware,compose } from "redux"
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from "redux-thunk";
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const configureStore=()=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store=createStore(
      combineReducers({
        dishes:Dishes,
        comments:Comments,
        promotions:Promotions,
        leaders:Leaders,
          ...createForms({
              feedback: InitialFeedback
          })
      }),
        composeEnhancers(
                applyMiddleware(thunk)
        )
        
    )
    return store;
}