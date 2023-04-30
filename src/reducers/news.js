import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE, SELECT_CATEGORY_SUCCESS, SELECT_LANGUAGE_SUCCESS, CHANGE_THEME_SUCCESS } from "../actions/types"

const initalState = {
    loading: false,
    news:[],
    selectedLanguage:'en',
    selectedCategory:'apple',
    currentTheme:'light'
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
        case SELECT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading:false,
                selectedCategory:payload
            }
        case SELECT_LANGUAGE_SUCCESS:
            return {
                ...state,
                loading:false,
                selectedLanguage:payload
            }
        case CHANGE_THEME_SUCCESS:
            return {
                ...state,
                loading:false,
                currentTheme:payload
            }
        default:
            return state
    }
}