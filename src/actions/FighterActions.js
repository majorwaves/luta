import axios from 'axios';

export const FETCH_FIGHTER = 'fetch_fighter';

// Fetch a single fighters
export function fetchFighter(fighter) {
  return (dispatch) => {
    return axios.get(`/api/fighter/${fighter}`)
    .then(fighter => {
      return dispatch({
        type: FETCH_FIGHTER,
        payload: fighter.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
