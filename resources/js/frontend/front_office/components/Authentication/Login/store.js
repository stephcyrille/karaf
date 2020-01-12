import { createAction, createReducer } from "redux-act";

const initialState = {
  current: 0,
  loading: false,
  btnLoading: false,
	// Email grabbbed on first steph of login form 
  email: null,
  // This change after email is reconize by the system
  checked: false,
  user: null,
  login: true,
  register: false,
  // Message for unknow user
  unknowMessage: null,
  boxChecked: false,
};

const actions = { name: "loginCStoreActions" };

const store = createReducer({}, initialState); // stores are called reducers


// Initializing state
actions.initialState = createAction("LOGIN__INIT")
store.on(actions.initialState, (state) => (
  {
    ...state, ...initialState
  })
)

// set current value
actions.setCurrentValue = createAction("LOGIN__SET_CURRENT_VALUE")
store.on(actions.setCurrentValue, (state, value) => (
  {
    ...state, current: value
  })
)

// set loading
actions.setLoading = createAction("LOGIN__SET_LOADING")
store.on(actions.setLoading, (state, value) => (
  {
    ...state, loading: value
  })
)
actions.setBtnLoading = createAction("LOGIN__SET_BTN_LOADING")
store.on(actions.setBtnLoading, (state, value) => (
  {
    ...state, btnLoading: value
  })
)

// set checked
actions.setChecked = createAction("LOGIN__SET_CHECKED")
store.on(actions.setChecked, (state, value) => (
  {
    ...state, checked: value
  })
)

// set user value
actions.setUserValue = createAction("LOGIN__SET_USER_VALUE")
store.on(actions.setUserValue, (state, value) => (
  {
    ...state, user: value
  })
)

// set register form
actions.setRegisterForm = createAction("LOGIN__SET_REGISTER_FORM")
store.on(actions.setRegisterForm, (state) => (
  {
    ...state, login: false, register: true
  })
)

// set login form
actions.setLoginForm = createAction("LOGIN__SET_LOGIN_FORM")
store.on(actions.setLoginForm, (state) => (
  {
    ...state, login: true, register: false
  })
)

// set email value
actions.setEmail = createAction("LOGIN__SET_EMAIL")
store.on(actions.setEmail, (state, value) => (
  {
    ...state, email: value
  })
)

// set email value
actions.setUnknwoUserMessage = createAction("LOGIN__SET_UNKNOW_USER_MESSAGE")
store.on(actions.setUnknwoUserMessage, (state, value) => (
  {
    ...state, unknowMessage: value
  })
)

// set checked of checkbox
actions.setCheckBox = createAction("LOGIN__SET_BTN_CHECKED")
store.on(actions.setCheckBox, (state, value) => (
  {
    ...state, boxChecked: value
  })
)



export { store as loginCStore, actions as loginCStoreActions };
