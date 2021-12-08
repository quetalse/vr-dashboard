import { SET_GROUP, SET_PERSON } from "../../types";

export const setPerson = (data) => ({
    type: SET_PERSON,
    payload: data
});

export const setGroup = (data) => ({
    type: SET_GROUP,
    payload: data
});