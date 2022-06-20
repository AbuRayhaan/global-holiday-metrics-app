import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countrysReducer from './country/country';

const reducer = combineReducers({
  country: countrysReducer 
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
