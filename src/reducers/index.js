import {
    LOGOUT,
    SET_USER,
    SET_PASSWORD,
    LOGIN_USER,
    CHANGE_NAME,
    CHANGE_POSITION,
    DELETE, ADD_EMPLOYEES
} from "../constants/action-types";

let employees = [];
const initialState = {employees: [], user: '', password: '', loggedin: false, error: ''};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEES:
            return {...state, employees: action.payload};
        case CHANGE_NAME:
            employees = [...state.employees];
            employees[action.payload.index].name = action.payload.name;
            return {
                ...state,
                employees: employees
            };
        case CHANGE_POSITION:
            employees = [...state.employees];
            employees[action.payload.index].position_held = action.payload.position;
            return {
                ...state,
                employees: employees
            };
        case DELETE:
            employees = [...state.employees];
            // delete the element by index
            employees.splice(action.payload.index, 1);
            return {...state, employees: employees};
        case LOGIN_USER:
            if (action.payload.user === "user" &&
                action.payload.password === "pass") {
                return {...state, loggedin: true}
            } else {
                return {...state, error: 'Not Valid User'};
            }
        case SET_USER:
            return {...state, user: action.payload};
        case SET_PASSWORD:
            return {...state, password: action.payload};
        case LOGOUT:
            return {...state, loggedin: false};
        default:
            return state;
    }
};
export default rootReducer;