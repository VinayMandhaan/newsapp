import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from "../actions/types"

const initalState = {
    loading: false,
    news:[]
}


export default function (state = initalState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_NEWS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                loading:false,
                news:payload
            }
        case GET_NEWS_FAILURE:
            return {
                ...state,
                loading:false,
                news:[]
            }
        default:
            return state
    }
}