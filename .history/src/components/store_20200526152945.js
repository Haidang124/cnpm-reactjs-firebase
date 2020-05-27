import { auth, db } from "../firebaseConnect";
var redux = require("redux");
const InitialState = {
  userAuth: {},
  userProfile: {},
};
com
export const allReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, userAuth: { ...action.userParameter } };
    case "setProfile":
      return { ...state, userProfile: { ...action.profileParameter } };
    case "updateFirebase":
      db.collection(action.collection).doc(action.doc).update(action.dataUpdate);
      return state;
    default:
      return state;
  }
};
const store = redux.createStore(allReducer);
store.subscribe(() => console.log(store.getState()));
export default store;
