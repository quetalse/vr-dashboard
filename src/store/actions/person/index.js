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

export const getPersonData = (personId) => async dispatch => {

    dispatch(hideError());
    dispatch(showLoading());

    try{
        const result = await axios.get(`http://195.208.101.55/person/stats?id=${personId}`);

        console.log('result', result)

        dispatch({
            type: SET_PERSON_DATA,
            payload: result.data
        })
    }catch (e) {
        dispatch(showError());
    }finally {
        dispatch(hideLoading());
    }
};