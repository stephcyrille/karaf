import { createAction, createReducer } from "redux-act";

const initialState = {
  all_publications: [],
  posted_publication: {},
  show_posted: false,
  show_skelleton: true
};
const actions = { name: "publicationCStoreActions" };

const store = createReducer({}, initialState); // stores are called reducers

actions.setAllPublications = createAction("HOME__SET_ALL_PUBLICATIONS");
store.on(actions.setAllPublications, (state, value) => ({
  ...state,
  all_publications: value
}));

actions.setPostedPublication = createAction("HOME__SET_POSTED_PUBLICATION");
store.on(actions.setPostedPublication, (state, value) => ({
  ...state,
  posted_publication: value, show_posted: true
}));

actions.toggleSkeleton = createAction("HOME__TOGGLE_SKELLETON");
store.on(actions.toggleSkeleton, (state, value) => ({
  ...state,
  show_skelleton: value
}));

export { store as publicationCStore, actions as publicationCStoreActions };
