import {
  CREATE_USER,
  CREATE_ITEM,
  CREATE_WORK_CENTER,
  EDIT_WORK_CENTER,
  EDIT_USER,
  EDIT_ORDER,
  EDIT_ITEM,
  GET_WORK_CENTERS,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_LIST_OF_USERS,
  GET_LIST_OF_ORDERS,
  GET_LIST_OF_ITEMS,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
  LOGOUT_USER,
  CREATE_ORDER,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  CLEAR_MESSAGE,
  TAKE_ORDER_IN_WORK,
  GET_ORDER_IN_WORK,
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
  currentOrderId: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    // CREATE USER
    case CLEAR_MESSAGE:
      return {
        ...state,
        error: false,
        message: '',
      };
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
    case GET_LIST_OF_ORDERS:
      console.log(action);
      return {
        ...state,
        orderList: [...action.payload.message],
      };
    case GET_LIST_OF_ITEMS:
      return {
        ...state,
        itemList: action.payload,
      };
    case EDIT_WORK_CENTER:
      /* eslint-disable */
      const index = state.workCenterList.findIndex(
        (item) => item.id === action.payload.id,
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
      const indexOrder = state.orderList.findIndex(
        (item) => item.id === action.payload.id,
      );
      const copyOrderList = [...state.orderList];
      const copyOrderListItem = { ...copyOrderList[indexOrder] };

      copyOrderListItem.quantity = action.payload.quantity;
      copyOrderListItem.promiseddate = action.payload.promiseddate;
      copyOrderListItem.prioroty = action.payload.prioroty;
      copyOrderList[indexOrder] = copyOrderListItem;

      return {
        ...state,
        userList: copyOrderList,
      };

    case EDIT_ITEM:
      const indexItem = state.itemList.findIndex(
        (item) => item.id === action.payload.id,
      );
      const copyItemList = [...state.itemList];
      const copyItemListItem = { ...copyItemList[indexItem] };

      copyItemListItem.workcenter1 = action.payload.workcenter1;
      copyItemListItem.descrroute1 = action.payload.descrroute1;
      copyItemListItem.cycletime1 = action.payload.cycletime1;
      copyItemListItem.workcenter2 = action.payload.workcenter2;
      copyItemListItem.descrroute2 = action.payload.descrroute2;
      copyItemListItem.cycletime2 = action.payload.cycletime2;
      copyItemListItem.workcenter3 = action.payload.workcenter3;
      copyItemListItem.descrroute3 = action.payload.descrroute3;
      copyItemListItem.cycletime3 = action.payload.cycletime3;
      copyItemListItem.status = action.payload.status;
      copyItemList[indexItem] = copyItemListItem;

      return {
        ...state,
        itemList: copyItemList,
      };

    // LOGIN USER
    case LOGIN_USER:
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        user: action.payload.data.name,
        jobtitle: action.payload.data.jobtitle,
        iduser: action.payload.data.id,
        wccode: action.payload.data.wccode,
        status: action.payload.data.status,
        message: action.payload.message,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    // LOGIN USER - END
    // LOGOUT USER
    case LOGOUT_USER:
      return {
        ...initState,
      };
    // LOGIN USER - END
    // GET ITEMS
    case GET_LIST_OF_ITEMS:
      return {
        ...state,
        error: false,
        itemList: [...action.payload],
      };
    // GET ITEMS - END
    // CREATE ORDER
    case CREATE_ORDER:
      return {
        ...state,
        error: false,
        load: true,
        message: '',
      };
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        error: true,
        load: false,
        message: action.payload,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        error: false,
        load: false,
        message: action.payload,
      };
    // CREATE ORDER - END
    case TAKE_ORDER_IN_WORK:
      return {
        ...state,
        currentOrderId: action.payload.orderId,
      };
    case GET_ORDER_IN_WORK:
      return {
        ...state,
        currentOrder: action.payload.data,
        currentOrderId: action.payload.data.id,
      };
    /* eslint-enable */
    default:
      return state;
  }
}

export default reducer;
