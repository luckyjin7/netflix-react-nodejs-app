import { FETCH_MYLIST } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
      case FETCH_MYLIST:
        return { ...state, 
                mylist:action.payload.data}
      default:
        return state;
    }
  }