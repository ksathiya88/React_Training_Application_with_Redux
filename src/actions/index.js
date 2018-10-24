import {
    LOGOUT,
    SET_USER,
    SET_PASSWORD,
    LOGIN_USER,
    CHANGE_NAME,
    CHANGE_POSITION,
    DELETE,
    ADD_EMPLOYEES
} from "../constants/action-types";

export const addEmployees = (employees) =>
    ({type: ADD_EMPLOYEES, payload: employees});

export const changeName = (name, index) =>
    ({type: CHANGE_NAME, payload: {name: name, index: index}});

export const changePosition = (position, index) =>
    ({type: CHANGE_POSITION, payload: {position: position, index: index}});

export const deleteEmployee = index =>
    ({type: DELETE, payload: index});

export const loginUser = (user, password) =>
    ({type: LOGIN_USER, payload: {user: user, password: password}});

export const setUser = user =>
    ({type: SET_USER, payload: user});

export const setPassword = password =>
    ({type: SET_PASSWORD, payload: password});

export const logout = () =>
    ({type: LOGOUT});

