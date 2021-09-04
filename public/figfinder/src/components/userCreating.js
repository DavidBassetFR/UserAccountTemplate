import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const UserForm = ({
    passwordValue, emailValue, prenomValue, nomValue, handleNewUserSubmit, changeValueOfInput
  }) => (
    
  <form method="POST"  onSubmit={handleNewUserSubmit}>
    <label>Nom</label>
        <input onChange={() => changeValueOfInput('nom')} id="nom" type="text" value={nomValue}/>
        <label>Prenom</label>
        <input onChange={() => changeValueOfInput('prenom')} id="prenom"type="text" value={prenomValue}/>
        <label>Email</label>
        <input onChange={() => changeValueOfInput('email')} id="email" type="text" value={emailValue}/>
       
        <label>Password</label>
         <input onChange={() => changeValueOfInput('password')} id="password" type="password" value={passwordValue}/>
    </form>
    
  );

  UserForm.propTypes = {
    changeValueOfInput : PropTypes.func.isRequired,
    handleNewUserSubmit : PropTypes.func.isRequired,
    passwordValue : PropTypes.string.isRequired,
    emailValue : PropTypes.string.isRequired,
    prenomValue : PropTypes.string.isRequired,
    nomValue : PropTypes.string.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    passwordValue: state.passwordValue,
    emailValue: state.emailValue,
    prenomValue: state.prenomValue,
    nomValue : state.nomValue
  });
  
  const mapDispatchToProps = (dispatch) => ({
    changeValueOfInput: (valueofChange) => {
      dispatch({ type: 'CHANGE_VALUE_OF_SOMETHING', value: valueofChange });
    },
    handleNewUserSubmit: () => {
      dispatch({ type: 'USER_IS_CREATING_ACCOUNT' });
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
  