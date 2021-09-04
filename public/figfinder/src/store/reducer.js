const initialState = {
    passwordValue : '',
    emailValue : '',
    prenomValue: '',
    nomValue : '',
  };
  
  const reducer = (oldState = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_VALUE_OF_SOMETHING':
        const valueToChange = action.value
        const newValue = valueToChange + 'Value'
        console.log(newValue);
        return {
          ...oldState,
          idofChange: action.idofChange,
        };
      default:
        return {
          ...oldState,
        };
    }
  };
  export default reducer;