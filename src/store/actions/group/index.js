import axios from "axios";

import {
    SET_GROUP_DATA,
    SET_GROUP_LOADING,
    SET_GROUP_ERROR
} from "../../types";

export const showLoading = () => ({type: SET_GROUP_LOADING, payload: true});
export const hideLoading = () => ({type: SET_GROUP_LOADING, payload: false});

export const showError = () => ({type: SET_GROUP_ERROR, payload: true});
export const hideError = () => ({type: SET_GROUP_ERROR, payload: false});

export const getGroupData = (data) => async dispatch => {

    dispatch(hideError());
    dispatch(showLoading());

    try{

        const result = await axios.get('https://585d5393-65a7-45fb-aad2-d49356bd0abf.mock.pstmn.io/group');

        dispatch({
            type: SET_GROUP_DATA,
            payload: result.data
        })
    }catch (e) {
        dispatch(showError());
    }finally {

        dispatch(hideLoading());
    }
};