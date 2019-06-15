export const FETCH_CHAMPS = 'fetch_champs';

// Fetch all champs
export function fetchChamps(fighter) {
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
