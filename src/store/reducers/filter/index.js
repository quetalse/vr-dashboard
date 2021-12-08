import {SET_PERSON, SET_GROUP} from "../../types";

const handlers = {

    [SET_PERSON]: (state, {payload}) => ({ ...state, data: payload}),
    [SET_GROUP]: (state, {payload}) => ({ ...state, data: payload}),
    DEFAULT: state => state
};

const initialState = {
    person: null,
    group: null
};

export const filter = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
}