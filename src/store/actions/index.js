import axios from 'axios';
export const FETCH_MYLIST = 'FETCH_MYLIST';
export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS';

export function fetchMylist(){
    const mylist = axios.get('http://localhost:5000/mylist/')
                    .then(res => res.data)
                    .catch(error => console.log(error))
    return {
      type: FETCH_MYLIST,
      payload: mylist
    }
}

export function fetchRecommendations(){
  const recommendations = axios.get('http://localhost:5000/recommendations/')
                        .then(res => res.data)
                        .catch(error => console.log(error))
  return {
    type: FETCH_RECOMMENDATIONS,
    payload: recommendations
  }
}