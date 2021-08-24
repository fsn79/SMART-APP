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
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
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
export function createOrderAC(payload) {
  return { type: CREATE_ORDER, payload };
}

export function editUserAC(payload) {
  return { type: EDIT_USER, payload };
}

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

export function loginUserAC(payload) {
  return { type: LOGIN_USER, payload };
}

export function getUsersAC(payload) {
  return { type: GET_LIST_OF_USERS, payload };
}