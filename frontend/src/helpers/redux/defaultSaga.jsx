import { takeEvery, put, call } from 'redux-saga/effects';
import {
  createUserAC,
  createItemAC,
  createWorkCenterAC,
  editWorkCenterAC,
  editUserAC,
  editOrderAC,
  editItemAC,
  getWorkCentersAC,
  createUserFailAC,
  createUserSuccessAC,
  loginUserAC,
  loginUserFailAC,
  loginUserSuccessAC,
  getUsersAC,
  getOrdersAC,
  getItemsAC,
  createItemFailAC,
  createItemSuccessAC,
  getLogoutUser,
  createOrderAC,
  createOrderFailAC,
  createOrderSuccessAC,
  takeOrderInWorkAC,
  getOrderInWorkAC,
  submitItemPartsAC,
} from '../actionCreators.jsx';
import { fetchJson } from '../fetchJson.jsx';

// Worker
function* loadData() {
  try {
    const data = yield call(fetchJson, '/');
    yield put({ type: 'OK', payload: { error: true, message: data } });
  } catch (e) {
    yield put({
      type: 'OK',
      payload: { error: true, message: "Can't connect to server" },
    });
  }
}

function* createUser(action) {
  yield put(createUserAC());
  try {
    const response = yield call(fetchJson, '/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    if (response.error) {
      yield put(createUserFailAC(response.message));
    } else {
      yield put(createUserSuccessAC(response.message));
    }
  } catch (e) {
    yield put(createUserFailAC('Connection error'));
  }
}

function* createItem(action) {
  yield put(createItemAC());
  try {
    const response = yield call(fetchJson, '/api/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    if (response.error) {
      yield put(createItemFailAC(response.message));
    } else {
      yield put(createItemSuccessAC(response.message));
    }
  } catch (e) {
    yield put(createItemFailAC('Connection error'));
  }
}
function* createOrder(action) {
  yield put(createOrderAC());
  try {
    const response = yield call(fetchJson, '/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    if (response.error) {
      yield put(createOrderFailAC(response.message));
    } else {
      yield put(createOrderSuccessAC(response.message));
    }
  } catch (e) {
    yield put(createItemFailAC('Connection error'));
  }
}

function* createWorkCenter(action) {
  try {
    const response = yield call(fetchJson, '/api/wc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(createWorkCenterAC(response));
  } catch (e) {
    console.log(e);
  }
}

function* editWorkCenter(action) {
  try {
    const response = yield call(fetchJson, '/api/wc/:id', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(editWorkCenterAC(response));
  } catch (e) {
    console.log(e);
  }
}

function* editUser(action) {
  try {
    const response = yield call(fetchJson, `/api/user/${action.payload.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(editUserAC(response));
  } catch (e) {
    console.log(e);
  }
}
function* editOrder(action) {
  try {
    const response = yield call(fetchJson, `/api/order/${action.payload.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(editOrderAC(response));
  } catch (e) {
    console.log(e);
  }
}

function* editItem(action) {
  try {
    const response = yield call(fetchJson, `/api/item/${action.payload.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(editItemAC(response));
  } catch (e) {
    console.log(e);
  }
}

function* getWorkCenters() {
  try {
    const response = yield call(fetchJson, '/api/wc', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    yield put(getWorkCentersAC(response.message));
  } catch (e) {
    console.log(e);
  }
}
function* loginUser(action) {
  yield put(loginUserAC());
  try {
    const response = yield call(fetchJson, '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    console.log(response);
    if (!response.data.status || response.error) {
      yield put(loginUserFailAC(response.message));
    } else {
      yield put(loginUserSuccessAC(response));
    }
  } catch (e) {
    console.log(e);
    yield put(loginUserFailAC('Connection error'));
  }
}

function* getUsersList() {
  try {
    const response = yield call(fetchJson, '/api/user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    yield put(getUsersAC(response));
  } catch (e) {
    console.log(e);
  }
}
function* getOrdersList(payload) {
  try {
    const response = yield call(fetchJson, `/api/order/${payload.code}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    yield put(getOrdersAC(response));
  } catch (e) {
    console.log(e);
  }
}
function* getItemsList() {
  try {
    const response = yield call(fetchJson, '/api/item', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    yield put(getItemsAC(response.message));
  } catch (e) {
    console.log(e);
  }
}

function* logoutUser() {
  try {
    const response = yield call(fetchJson, '/api/auth/logout');
    yield put(getLogoutUser(response));
  } catch (e) {
    console.log(e);
  }
}

function* takeOrderInWork(action) {
  console.log(action);
  try {
    const response = yield call(fetchJson, '/api/order/progressive/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(takeOrderInWorkAC(response));
  } catch (e) {
    console.log(e);
  }
}

function* getOrderInWork(action) {
  const { userId, wcCode } = action.payload;
  try {
    const response = yield call(fetchJson, `/api/order/worker/${userId}/${wcCode}`);
    if (response.data) {
      yield put(getOrderInWorkAC(response));
    }
  } catch (e) {
    console.log(e);
  }
}

function* submitItemParts(action) {
  try {
    console.log(action);
    const response = yield call(fetchJson, '/api/order/progressive/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(submitItemPartsAC(response));
  } catch (e) {
    console.log(e);
  }
}

// Watcher
export default function* defaultSaga() {
  yield takeEvery('TEST', loadData);
  yield takeEvery('CREATE_USER_SAGA', createUser);
  yield takeEvery('CREATE_ITEM_SAGA', createItem);
  yield takeEvery('WORK_CENTER', createWorkCenter);
  yield takeEvery('EDIT_WC', editWorkCenter);
  yield takeEvery('EDIT_ONE_USER', editUser);
  yield takeEvery('EDIT_ONE_ORDER', editOrder);
  yield takeEvery('EDIT_ONE_ITEM', editItem);
  yield takeEvery('GET_WCS_SAGA', getWorkCenters);
  yield takeEvery('LOGIN_USER_SAGA', loginUser);
  yield takeEvery('GET_USERS_LIST', getUsersList);
  yield takeEvery('LOGOUT_USER_SAGA', logoutUser);
  yield takeEvery('GET_ORDERS_LIST_SAGA', getOrdersList);
  yield takeEvery('GET_ITEMS_LIST_SAGA', getItemsList);
  yield takeEvery('CREATE_ORDER_SAGA', createOrder);
  yield takeEvery('TAKE_ORDER_IN_WORK_SAGA', takeOrderInWork);
  yield takeEvery('GET_ORDER_IN_WORK_SAGA', getOrderInWork);
  yield takeEvery('SUBMIT_PARTS_SAGA', submitItemParts);
}
