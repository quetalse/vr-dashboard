import axios from "axios";

import {
    SET_PERSON_DATA,
    SET_PERSON_LOADING,
    SET_PERSON_ERROR
} from "../../types";

export const showLoading = () => ({type: SET_PERSON_LOADING, payload: true});
export const hideLoading = () => ({type: SET_PERSON_LOADING, payload: false});

export const showError = () => ({type: SET_PERSON_ERROR, payload: true});
export const hideError = () => ({type: SET_PERSON_ERROR, payload: false});

export const getGroupData = () => async dispatch => {

    dispatch(hideError());
    dispatch(showLoading());

    try{
        const result = await axios.get('/stocks.json');
        dispatch({
            type: SET_PERSON_DATA,
            payload: result
        })
    }catch (e) {
        dispatch(showError());
    }finally {
        dispatch(hideLoading());
    }
};