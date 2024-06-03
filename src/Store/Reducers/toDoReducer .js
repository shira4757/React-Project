
import { DELETE_TASK, SET_ALL_TASK ,SET_ONE_TASK} from "../action_types";

const initialState = {
    allTasks: []
 };
 const reducer = (state = initialState, action) => {
    switch (action.type) {
       case DELETE_TASK:
        // return{...state, task : action.payload}
       case SET_ALL_TASK:
          //return {...state, allTasks : action.payload}
      case SET_ONE_TASK:
       //   return {...state, task : action.payload}
       default:
          return state;
    }
    
 }
 //export default reducer;