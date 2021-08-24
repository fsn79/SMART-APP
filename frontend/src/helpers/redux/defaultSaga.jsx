import { takeEvery, put, call } from 'redux-saga/effects';
import {
  createUserAC,
  createItemAC,
  createWorkCenterAC,
  editWorkCenterAC,
  editUserAC,
  getWorkCentersAC,
  createUserFailAC,
  createUserSuccessAC,
  loginUserAC,
  loginUserFailAC,
  loginUserSuccessAC,
  getUsersAC,
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
  try {
    const response = yield call(fetchJson, '/api/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(createItemAC(response));
  } catch (e) {
    console.log(e);
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
  console.log(action.payload.id);
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
    if (!response.message.status || response.error) {
      yield put(loginUserFailAC(response.message));
    } else {
      console.log('true');
      yield put(loginUserSuccessAC(response.message));
    }
    // yield put(loginUserAC(response.message));
  } catch (e) {
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

// Watcher
export default function* defaultSaga() {
  yield takeEvery('TEST', loadData);
  yield takeEvery('CREATE_USER_SAGA', createUser);
  yield takeEvery('ITEM', createItem);
  yield takeEvery('WORK_CENTER', createWorkCenter);
  yield takeEvery('EDIT_WC', editWorkCenter);
  yield takeEvery('EDIT_ONE_USER', editUser);
  yield takeEvery('GET_WCS', getWorkCenters);
  yield takeEvery('LOGIN_USER_SAGA', loginUser);
  yield takeEvery('GET_USERS_LIST', getUsersList);
}
