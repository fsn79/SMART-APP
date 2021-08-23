import {
  CREATE_USER,
  CREATE_ITEM,
  CREATE_WORK_CENTER,
  EDIT_WORK_CENTER,
  EDIT_USER,
  GET_WORK_CENTERS,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
} from '../actionTypes.jsx';

const initState = {
  load: false,
  error: false,
  message: '',
  data: '',
  userList: [],
  itemList: [],
  workCenterList: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    // CREATE USER
    case CREATE_USER:
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        message: action.payload,
      };
    // CREATE USER - END
    case CREATE_ITEM:
      return {
        ...state,
        itemList: [...state, action.payload],
      };
    case CREATE_WORK_CENTER:
      return {
        ...state,
        workCenterList: [...state, action.payload],
      };
    case GET_WORK_CENTERS:
      return {
        ...state,
        workCenterList: action.payload,
      };
    case EDIT_WORK_CENTER:
      /* eslint-disable */
      const index = state.workCenterList.findIndex(
        (item) => item.id === action.payload,
      );

      const newState = {
        ...state,
        workCenterList: [...state.workCenterList],
      };

      newState.workCenterList.splice(index, 1, action.payload);
      return newState;

    case EDIT_USER:
      const indexUser = state.userList.findIndex((item) => {
        item.id === action.payload.id;
      });

      const newStateUser = {
        ...state,
        userList: [...state.userList],
      };

      newStateUser.userList.splice(indexUser, 1, action.payload);
      return newState;

    /* eslint-enable */
    default:
      return state;
  }
}

export default reducer;
