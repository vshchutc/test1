import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers/appReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    appReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}