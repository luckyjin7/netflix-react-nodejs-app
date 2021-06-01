import { combineReducers } from 'redux';
import FetchMylist from './fetchMylist';
import FetchRecommendations from './fetchRecommendations';

const rootReducer = combineReducers({
    mylist: FetchMylist,
    recommendations: FetchRecommendations
})
export default rootReducer;