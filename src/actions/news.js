import api from "../utils/api"
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from "./types"

export const getNews = (param,lang) => async dispatch => {
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