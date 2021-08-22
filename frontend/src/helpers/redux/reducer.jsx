const initState = {
  load: false,
  data: '',
  list: []
};

function reducer(state = initState, action) {
  switch (action.type === 'OK') {
    case 'CREATE_USER':
      return {
        ...state,
        list: [...state, action.payload]
      }

    default:
      return state;
  }
}

export default reducer;
