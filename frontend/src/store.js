import { legacy_createStore as createStore, applyMiddleware,compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import React from 'react';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers/rootReducer';



const initialState = {};
const middleware = [thunk];


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
//   return (
//     <div>store</div>
//   )
);

export default store;