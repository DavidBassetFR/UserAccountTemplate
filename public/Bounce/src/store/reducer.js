const initialState = {
    passwordValue : '',
    emailValue : '',
    prenomValue: '',
    nomValue : '',
    whichView : 'login',
  };
  
  const reducer = (oldState = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_VALUE_OF_SOMETHING':
        return {
          ...oldState,
          [[action.value + 'Value']]: action.whatUserIsTyping,
        };
        case 'CHANGE_VIEW_FORM': {
          return {
            ...oldState,
            whichView : action.value
          }
        }
      default:
        return {
          ...oldState,
        };
    }
  };
  export default reducer;