import * as actionTypes from '../actionTypes/home';


export const fetchStatusData = () => {
    return { type: actionTypes.FETCH_PROGRESS_BAR };
}

export const statusDataResponse = (payload) => {
    return { type: actionTypes.PROGRESS_BAR_RESPONSE, payload }
}

export const fetchCategories = () => {
    return { type: actionTypes.FETCH_CATEGORIES }
}

export const categoriesResponse = (payload) => {
    return { type: actionTypes.CATEGORIES_RESPONSE, payload }
}

export const learnMoreAboutFood = () => {
    return { type: actionTypes.FETCH_FOOD_IMPACTS }   
}

export const learnMoreAboutFoodResponse = (payload) => {
    return { type: actionTypes.FETCH_FOOD_IMPACTS_RESPONSE, payload }   
}

export const loadArticles = () => {
    return { type: actionTypes.FETCH_ARTICLES } 
}

export const articleResponse = (payload) => {
    return { type: actionTypes.ARTICLES_RESPONSE, payload } 
}