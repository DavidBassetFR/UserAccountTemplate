import axios from 'axios';
import { BASE_URL } from '../../settings';
const userMiddleware = (store) => (next) => (action) => {
  if (action.type === 'USER_IS_CREATING_ACCOUNT') {
    const state = store.getState();
    const config = {
      method: 'POST',
      url: `${BASE_URL}/addNewUser`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `"Bearer ${state.accessToken}"`,
      },
      body : {
        nom: state.nom,
        prenom : state.prenom,
        email : state.email,
        password : state.password,
      }

    };
    axios(config)
      .then((response) => {
        store.dispatch({ type: 'THE USER HAS CREATED AN ACCOUNT'});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next(action);
};

export default userMiddleware;