import {
    LOGIN_REQUEST,
    LOGIN_SUCCEEDED,
    LOGIN_FAILED
} from "actions/login";

const initialState = {
    isFetching: false,
    errors: {}
};

export default (state=initialState, action={}) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isFetching: true, errors: {} };
        case LOGIN_SUCCEEDED:
            return { ...state, isFetching: false, user: action.user };
        case LOGIN_FAILED:
            return { ...state, isFetching: false, errors: action.errors };
        default: return state;
    }
};