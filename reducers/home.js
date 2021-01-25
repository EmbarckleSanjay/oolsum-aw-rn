import * as actionTypes from '../actions/actionTypes/home';

// Initial State
const initialState = {
  progressData: [],
  categories: [],
  foodImpacts: [],
  articles: [],
};

// Redux: Home Screen Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROGRESS_BAR_RESPONSE: {
      return {
        ...state,
        progressData: action.payload,
      };
    }
    case actionTypes.CATEGORIES_RESPONSE: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case actionTypes.FETCH_FOOD_IMPACTS_RESPONSE: {
      return {
        ...state,
        foodImpacts: action.payload,
      };
    }
    case actionTypes.ARTICLES_RESPONSE: {
      return {
        ...state,
        articles: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

// Exports
export default homeReducer;