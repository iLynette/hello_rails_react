import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
    greeting: ''
  };

  function GreetingsReducer(state = initialState, action = {}) {
    console.log(action.type);
    switch (action.type) {
      case "GET_GREETINGS_SUCCESS":
        return { ...state, greeting: action.json };
        default:
          return state;
    }
  }

  const rootReducer = combineReducers({ GreetingsReducer });

 
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  export default store;