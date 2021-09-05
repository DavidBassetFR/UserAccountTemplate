import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './userCreating.scss'


const UserForm = ({
    passwordValue, emailValue, prenomValue, nomValue, handleNewUserSubmit, changeValueOfInput
  }) => (
    
  <form className="userForm" onSubmit={handleNewUserSubmit}>
      <div className="eachInputInUserForm">
        <label> Nom </label>
        <input onChange={(event) => changeValueOfInput('nom', event)} name="nom"id="nom" type="text" value={nomValue}/>
      </div>
        
      <div className="eachInputInUserForm">
        <label>Prenom</label>
        <input onChange={(event) => changeValueOfInput('prenom', event)} name="prenom" id="prenom"type="text" value={prenomValue}/>
      
      </div> 
      <div className="eachInputInUserForm">
        <label>Email</label>
        <input onChange={(event) => changeValueOfInput('email', event)} name="mail" id="mail" type="text" value={emailValue}/>
      </div>  
      <div className="eachInputInUserForm">
        <label>Password</label>
        <input onChange={(event) => changeValueOfInput('password', event)} name="password" id="password" type="password" value={passwordValue}/>
      </div> 
    <button type="SUBMIT"> Créer un compte </button>
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
    changeValueOfInput: (value, whatUserIsTyping) => {
      dispatch({ type: 'CHANGE_VALUE_OF_SOMETHING', value: value, whatUserIsTyping: whatUserIsTyping.target.value  });
    },
    handleNewUserSubmit: (event) => {
      event.preventDefault();
      dispatch({ type: 'USER_IS_CREATING_ACCOUNT' });
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
  