import CREATE_USER from '../actionTypes';

const initState = {
  load: false,
  data: '',
  userList: [],
};

function reducer(state = initState, action) {
  switch (action.type === 'OK') {
    case CREATE_USER:
      return {
        ...state,
        userList: [...state, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
