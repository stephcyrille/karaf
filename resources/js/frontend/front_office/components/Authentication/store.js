import { createAction, createReducer } from "redux-act";

const initialState = {
  token: localStorage.getItem("appToken"),
  user: localStorage.getItem("user"),
  // permet au composant login de savoir si l api /rest-auth/user a ete appele
  is_authentication_checked: false,
  isAuthenticated: false,

};

const actions = { name: "authGuardCStoreActions" };

const store = createReducer({}, initialState); // stores are called reducers


// Initializing state
actions.initialState = createAction("AUTH_GUARD__INIT")
store.on(actions.initialState, (state) => (
  {
    ...state, ...initialState
  })
)


// Creation actions for Authentication checking
actions.setAuthChecked = createAction("AUTH_GUARD__SET_AUTH_CHECKED")
store.on(actions.setAuthChecked, (state) => (
  {
    ...state, is_authentication_checked: true
  })
)

actions.unsetAuthChecked = createAction("AUTH_GUARD__UNSET_AUTH_CHECKED")
store.on(actions.unsetAuthChecked, (state) => (
  {
    ...state, is_authentication_checked: false
  })
)


actions.setIsAuthenticate = createAction("AUTH_GUARD__SET_IS_AUTHENTICATE", {});
store.on(actions.setIsAuthenticate, (state, token) => ({
  ...state, token: token, isAuthenticated: true,
}));

actions.unsetIsAuthenticate = createAction("AUTH_GUARD__UNSET_IS_AUTHENTICATE", {});
store.on(actions.unsetIsAuthenticate, (state, token) => ({
  ...state, token: null, isAuthenticated: false,
}));



export { store as authGuardCStore, actions as authGuardCStoreActions };
