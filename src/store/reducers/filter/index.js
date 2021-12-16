import {SET_PERSON, SET_GROUP} from "../../types";
// import filterButton from "../../../partials/actions/FilterButton";
import {filters} from "../../configData";

const handlers = {

    [SET_PERSON]: (state, {payload}) => ({ ...state, person: payload}),
    [SET_GROUP]: (state, {payload}) => ({ ...state, group: payload}),
    DEFAULT: state => state
};

const initialState = {
    person: null,
    group: {
        age: filters.ageList.map(item => item.id),
        gender: filters.genderList.map(item => item.id),
        kind: filters.kindList.map(item => item.id),
        // age: null,
        // gender: null,
        // kind: null
    }
};

export const filter = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
}