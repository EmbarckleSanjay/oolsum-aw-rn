import * as actionTypes from '../../actions/actionTypes/home';
// Imports: Dependencies
import { takeLatest, put } from 'redux-saga/effects';
import { articleResponse, categoriesResponse, learnMoreAboutFoodResponse, statusDataResponse } from '../../actions/home';

// Get Staus Level Data Async
function* fetchProgressData() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
    const customData = require('../../jsondata/statusbar.json'); // Make API Request to change it dynamic in future
  
    // Dispatch Action To Redux Store
    yield put(statusDataResponse(customData));
  }
  catch (error) {
    console.log(error);
  }
}


// Get Categories Data Async
function* fetchCategories() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
    const customData = require('../../jsondata/categories.json'); // Make API Request to change it dynamic in future
  
    // Dispatch Action To Redux Store
    yield put(categoriesResponse(customData));
  }
  catch (error) {
    console.log(error);
  }
}


// Get Food Impacts Data Async
function* fetchFoodImpacts() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
    const customData = require('../../jsondata/foodImpacts.json'); // Make API Request to change it dynamic in future
  
    // Dispatch Action To Redux Store
    yield put(learnMoreAboutFoodResponse(customData));
  }
  catch (error) {
    console.log(error);
  }
}

// Get Articles Data Async
function* loadArticles() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
    const customData = require('../../jsondata/articles.json'); // Make API Request to change it dynamic in future
  
    // Dispatch Action To Redux Store
    yield put(articleResponse(customData));
  }
  catch (error) {
    console.log(error);
  }
}


// Generator: Watch Home Screen API Requests and responses
export function* watchHomeScreen() {
  // Take Last Action
  yield takeLatest(actionTypes.FETCH_PROGRESS_BAR, fetchProgressData);
  yield takeLatest(actionTypes.FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(actionTypes.FETCH_FOOD_IMPACTS, fetchFoodImpacts);
  yield takeLatest(actionTypes.FETCH_ARTICLES, loadArticles)
}