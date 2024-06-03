import { DELETE_TASK, SET_ALL_TASK ,SET_ONE_TASK} from "../action_types";

const deleteTask = () => {
    return {
         type: DELETE_TASK,
        
    }
}
const setAllTask = () => {
    return {
      type:SET_ALL_TASK,
    }
}
const setOneTask = () => {
    return {
        type:SET_ONE_TASK,
    }
}
export {deleteTask, setAllTask,setOneTask}