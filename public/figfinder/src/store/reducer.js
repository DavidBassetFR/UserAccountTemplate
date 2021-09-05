const initialState = {
    passwordValue : '',
    emailValue : '',
    prenomValue: '',
    nomValue : '',
  };
  
  const reducer = (oldState = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_VALUE_OF_SOMETHING':
        return {
          ...oldState,
          [[action.value + 'Value']]: action.whatUserIsTyping,
        };
      default:
        return {
          ...oldState,
        };
    }
  };
  export default reducer;