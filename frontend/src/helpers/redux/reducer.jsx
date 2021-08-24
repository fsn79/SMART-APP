import {
  CREATE_USER,
  CREATE_ITEM,
  CREATE_WORK_CENTER,
  EDIT_WORK_CENTER,
  EDIT_USER,
  GET_WORK_CENTERS,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_LIST_OF_USERS,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
} from '../actionTypes.jsx';

const initState = {
  load: false,
  error: false,
  message: '',
  data: '',
  userList: [],
  itemList: [],
  workCenterList: [],
  currentOrderId: null,
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
    case LOGIN_USER_FAIL:
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
    // CREATE ITEM
    case CREATE_ITEM:
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case CREATE_ITEM_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        message: action.payload,
      };
    // CREATE ITEM - END
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
    case GET_LIST_OF_USERS:
      return {
        ...state,
        userList: action.payload,
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
    // LOGIN USER
    case LOGIN_USER:
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case LOGIN_USER_SUCCESS:
      console.log(action);
      return {
        ...state,
        load: false,
        error: false,
        user: action.payload.name,
        jobtitle: action.payload.jobtitle,
        iduser: action.payload.id,
        status: action.payload.status,
        message: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
     // LOGIN USER - END
    /* eslint-enable */
    default:
      return state;
  }
}

export default reducer;
