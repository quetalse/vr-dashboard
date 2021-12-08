import { SET_GROUP, SET_PERSON } from "../../types";

export const setPerson = (data) => dispatch => {
    dispatch({
        type: SET_PERSON,
        payload: data
    })
};

export const setGroup = (data) => dispatch => {
    dispatch({
        type: SET_GROUP,
        payload: data
    })
};