import {
  CREATE_USER,
  CREATE_ITEM,
  CREATE_WORK_CENTER,
  EDIT_WORK_CENTER,
  EDIT_USER,
  EDIT_ORDER,
  GET_WORK_CENTERS,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  LOGIN_USER,
  GET_LIST_OF_USERS,
  GET_LIST_OF_ORDERS,
} from '../actionTypes.jsx';

const initState = {
  load: false,
  error: false,
  message: '',
  data: '',
  userList: [],
  itemList: [],
  workCenterList: [],
  orderList: [],
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
    case GET_LIST_OF_USERS:
      return {
        ...state,
        userList: action.payload,
      };
    case GET_LIST_OF_ORDERS:
      return {
        ...state,
        orderList: action.payload,
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
    case EDIT_ORDER:
      const indexOrder = state.orderList.findIndex((item) => item.id === action.payload.id)
      const copyOrderList = [...state.orderList]
      const copyOrderListItem = { ...copyOrderList[indexOrder] };

      copyOrderListItem.quantity = action.payload.quantity;
      copyOrderListItem.promiseddate = action.payload.promiseddate;
      copyOrderListItem.prioroty = action.payload.prioroty;
      copyOrderList[indexOrder] = copyOrderListItem;

      return {
        ...state,
        userList: copyOrderListItem
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.name,
        jobtitle: action.payload.jobtitle,
        iduser: action.payload.id,
      }

    /* eslint-enable */
    default:
      return state;
  }
}

export default reducer;
