import {
  CREATE_USER,
  CREATE_WORK_CENTER,
  CREATE_ITEM,
  CREATE_ORDER,
  EDIT_USER,
  EDIT_WORK_CENTER,
  EDIT_ITEM,
  EDIT_ORDER,
  GET_WORK_CENTERS,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_LIST_OF_USERS,
  GET_LIST_OF_ORDERS,
  GET_LIST_OF_ITEMS,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
  LOGOUT_USER,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  TAKE_ORDER_IN_WORK,
  GET_ORDER_IN_WORK,
  SUBMIT_ITEM_PARTS,
  CLOSE_ORDER,
  GET_RANDOM_ORDER_NUM,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
} from './actionTypes.jsx';

// CREATE USER AC
export function createUserAC(payload) {
  return { type: CREATE_USER, payload };
}
export function createUserSuccessAC(payload) {
  return { type: CREATE_USER_SUCCESS, payload };
}
export function createUserFailAC(payload) {
  return { type: CREATE_USER_FAIL, payload };
}
// CREATE USER AC - END

// LOGIN USER AC
export function loginUserFailAC(payload) {
  return { type: LOGIN_USER_FAIL, payload };
}
export function loginUserAC(payload) {
  return { type: LOGIN_USER, payload };
}
export function loginUserSuccessAC(payload) {
  return { type: LOGIN_USER_SUCCESS, payload };
}
// LOGIN USER AC - END

export function createWorkCenterAC(payload) {
  return { type: CREATE_WORK_CENTER, payload };
}

// CREATE ITEM AC
export function createItemAC(payload) {
  return { type: CREATE_ITEM, payload };
}
export function createItemSuccessAC(payload) {
  return { type: CREATE_ITEM_SUCCESS, payload };
}
export function createItemFailAC(payload) {
  return { type: CREATE_ITEM_FAIL, payload };
}
// CREATE ITEM AC - END
export function getItemsAC(payload) {
  return { type: GET_LIST_OF_ITEMS, payload };
}
// CREATE ORDER AC
export function createOrderAC(payload) {
  return { type: CREATE_ORDER, payload };
}
export function createOrderFailAC(payload) {
  return { type: CREATE_ORDER_FAIL, payload };
}
export function createOrderSuccessAC(payload) {
  return { type: CREATE_ORDER_SUCCESS, payload };
}
// CREATE ORDER AC - END
// EDIT USER AC
export function editUserAC(payload) {
  return { type: EDIT_USER, payload };
}
export function editUserSuccessAC(payload) {
  return { type: EDIT_USER_SUCCESS, payload };
}
export function editUserFailAC(payload) {
  return { type: EDIT_USER_FAIL, payload };
}
// EDIT USER AC - END
export function editWorkCenterAC(payload) {
  return { type: EDIT_WORK_CENTER, payload };
}

export function editItemAC(payload) {
  return { type: EDIT_ITEM, payload };
}

export function editOrderAC(payload) {
  return { type: EDIT_ORDER, payload };
}

export function getWorkCentersAC(payload) {
  return { type: GET_WORK_CENTERS, payload };
}

export function getUsersAC(payload) {
  return { type: GET_LIST_OF_USERS, payload };
}

export function getLogoutUser(payload) {
  return { type: LOGOUT_USER, payload };
}

export function getOrdersAC(payload) {
  return { type: GET_LIST_OF_ORDERS, payload };
}

export function takeOrderInWorkAC(payload) {
  return { type: TAKE_ORDER_IN_WORK, payload };
}

export function getOrderInWorkAC(payload) {
  return { type: GET_ORDER_IN_WORK, payload };
}

export function submitItemPartsAC(payload) {
  return { type: SUBMIT_ITEM_PARTS, payload };
}

export function closeOrderAC() {
  return { type: CLOSE_ORDER };
}

export function getRandomOrderNumAC(payload) {
  return { type: GET_RANDOM_ORDER_NUM, payload };
}
