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
} from './actionTypes';

export function createUserAC(payload) {
  return { type: CREATE_USER, payload };
}

export function createWorkCenterAC(payload) {
  return { type: CREATE_WORK_CENTER, payload };
}

export function createItemAC(payload) {
  return { type: CREATE_ITEM, payload };
}

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
