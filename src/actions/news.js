import api from "../utils/api"
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, SELECT_LANGUAGE_SUCCESS, SELECT_CATEGORY_SUCCESS, SELECT_CATEGORY_FAILURE, SELECT_LANGUAGE_FAILURE } from "./types"

export const getNews = (param, lang) => async dispatch => {
    try {
        dispatch({
            type: GET_NEWS_REQUEST
        })
        api({
            method: 'GET',
            params: {
                q: param,
                language: lang
            }
        }).then((res) => {
            dispatch({
                type: GET_NEWS_SUCCESS,
                payload: res.data
            })
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: GET_NEWS_FAILURE
        })
    }
}

export const selectCategory = (category) => async dispatch => {
    try {
        dispatch({
            type: SELECT_CATEGORY_SUCCESS,
            payload: category
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: SELECT_CATEGORY_FAILURE
        })
    }
}

export const selectLanguage = (language) => async dispatch => {
    try {
        dispatch({
            type: SELECT_LANGUAGE_SUCCESS,
            payload: language
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: SELECT_LANGUAGE_FAILURE
        })
    }
}