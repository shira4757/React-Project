import { SET_ALL_USERS, SET_CURRENT_USER } from "../action_types";

const setAllUsers = (users) => {
    return {
        type: SET_ALL_USERS,
        payload: users
    }
}

const setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT_USER,
        payload: currentUser
    }
}

export {setAllUsers, setCurrentUser}