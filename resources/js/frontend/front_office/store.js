import {createReducer, createAction } from 'redux-act';

const initialState = {
  developer: "---"
};

const actions = {name: "appCStoreActions"};
const store = createReducer({}, initialState);  // stores are called reducers


actions.setDeveloperName = createAction('APP_STORE__SET_DEVELOPER_NAME');
store.on(actions.setDeveloperName, (state, value) => ({
  ...state, developer: value
}));



export { store as appCStore, actions as appCStoreActions };
