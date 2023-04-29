import { useSelector } from "react-redux"
import api from "../utils/api"
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, SELECT_LANGUAGE_SUCCESS, SELECT_CATEGORY_SUCCESS, SELECT_CATEGORY_FAILURE, SELECT_LANGUAGE_FAILURE } from "./types"
import store from "../store"

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
        const lang = store.getState().news.selectedLanguage
        dispatch({
            type: SELECT_CATEGORY_SUCCESS,
            payload: category
        })
        dispatch(getNews(category, lang))
    } catch (err) {
        console.log(err)
        dispatch({
            type: SELECT_CATEGORY_FAILURE
        })
    }
}

export const selectLanguage = (language) => async dispatch => {
    try {
        const category = store.getState().news.selectedCategory
        dispatch({
            type: SELECT_LANGUAGE_SUCCESS,
            payload: language
        })
        dispatch(getNews(category, language))
    } catch (err) {
        console.log(err)
        dispatch({
            type: SELECT_LANGUAGE_FAILURE
        })
    }
}