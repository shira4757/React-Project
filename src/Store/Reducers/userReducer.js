import { SET_ALL_USERS, SET_CURRENT_USER } from "../action_types";
const initialState = {
    currentUser: {},
    users: []
 };
 const reducer = (state = initialState, action) => {
    switch (action.type) {
       case SET_CURRENT_USER:
         return{...state, currentUser : action.payload}
       case SET_ALL_USERS:
          return {...state, users : action.payload}
       default:
          return state;
    }
 }
 export default reducer;