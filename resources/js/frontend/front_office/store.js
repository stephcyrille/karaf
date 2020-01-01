import {createReducer } from 'redux-act';

const initialState = {
  developer: "---"
};
const actions = {name: "appCStoreActions"};
const store = createReducer({}, initialState);  // stores are called reducers

export { store as appCStore, actions as appCStoreActions };
