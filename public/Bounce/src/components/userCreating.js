import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './userCreating.scss'


const UserForm = ({
  whichView, passwordValue, passwordDoubleCheckValue, emailValue, prenomValue, nomValue, handleNewUserSubmit, changeValueOfInput, changeViewTo, userIsConnecting
  }) => (
    
<section className="forms-section">
  <h1 className="section-title">BOUNCES </h1>
  <div className="forms">
    <div className={whichView === 'login' ? "form-wrapper is-active" : 'form-wrapper'} >
      <button onClick={() => changeViewTo('login')} type="button" className="switcher switcher-login">
        Se connecter
        <span className="underline"></span>
      </button>
      <form className="form form-login" onSubmit={() => userIsConnecting()}>
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block">
            <label for="login-email">E-mail</label>
            <input id="login-email" type="email" onChange={(event) => changeValueOfInput('email', event)} value={emailValue} required/>
          </div>
          <div className="input-block">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" onChange={(event) => changeValueOfInput('password', event)} value={passwordValue}required/>
          </div>
        </fieldset>
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
    <div className={whichView === 'signup' ? "form-wrapper is-active" : 'form-wrapper'} >
      <button onClick={() => changeViewTo('signup')}type="button" className="switcher switcher-signup">
        S'inscrire
        <span className="underline"></span>
      </button>
      <form className="form form-signup" onSubmit={() => handleNewUserSubmit()}>
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div className="input-block">
            <label for="signup-email">E-mail</label>
            <input id="signup-email" type="email" onChange={(event) => changeValueOfInput('email', event)}value={emailValue} required/>
          </div>
          <div className="input-block">
            <label for="signup-password">Mot de passe</label>
            <input id="signup-password" type="password" onChange={(event) => changeValueOfInput('password', event)} value={passwordValue} required/>
          </div>
          <div className="input-block">
            <label for="signup-password-confirm">Confirmer le mot de passe</label>
            <input id="signup-password-confirm" type="password" onChange={(event) => changeValueOfInput('passwordDoubleCheck', event)} value={passwordDoubleCheckValue}required/>
          </div>
        </fieldset>
        <button type="submit" className="btn-login" >Se connecter</button>
      </form>
    </div>
  </div>
</section>

    
  );

  UserForm.propTypes = {
    changeValueOfInput : PropTypes.func.isRequired,
    handleNewUserSubmit : PropTypes.func.isRequired,
    passwordValue : PropTypes.string.isRequired,
    emailValue : PropTypes.string.isRequired,
    prenomValue : PropTypes.string.isRequired,
    nomValue : PropTypes.string.isRequired,
    passwordDoubleCheckValue : PropTypes.string.isRequired
  };
  
  const mapStateToProps = (state) => ({
    passwordValue: state.passwordValue,
    emailValue: state.emailValue,
    prenomValue: state.prenomValue,
    nomValue : state.nomValue,
    whichView : state.whichView
  }); 
  
  const mapDispatchToProps = (dispatch) => ({
    changeValueOfInput: (value, whatUserIsTyping) => {
      dispatch({ type: 'CHANGE_VALUE_OF_SOMETHING', value: value, whatUserIsTyping: whatUserIsTyping.target.value  });
    },
    handleNewUserSubmit: (event) => {
      event.preventDefault();
      dispatch({ type: 'USER_IS_CREATING_ACCOUNT' });
    },
    userIsConnecting: event => {
      event.preventDefault();
      dispatch({ type: 'USER_IS_TRYING_TO_CONNECT' });
    },
    changeViewTo: (value) => {
      dispatch({type :'CHANGE_VIEW_FORM', value })
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
  