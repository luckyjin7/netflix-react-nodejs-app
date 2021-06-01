import { FETCH_RECOMMENDATIONS } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
      case FETCH_RECOMMENDATIONS:
        return { ...state, 
                recommendations:action.payload.data}
      default:
        return state;
    }
  }