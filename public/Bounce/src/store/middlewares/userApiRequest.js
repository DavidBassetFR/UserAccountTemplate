import axios from 'axios';

//import { BASE_URL } from '../../settings';
const userMiddleware = (store) => (next) => (action) => {
  if (action.type === 'USER_IS_CREATING_ACCOUNT') {
    const state = store.getState();
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/addNewUser',
      data:{ 
        form : {
          prenom:`${state.prenomValue}`,
          nom:`${state.nomValue}`,
          mail:`${state.emailValue}`,
          password: `${state.passwordValue}`,
      }
        
      }
      
};
console.log(options)
axios.request(options).then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.error(error);
});}

next(action);
};

export default userMiddleware;