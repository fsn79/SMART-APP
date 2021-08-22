import { takeEvery, put, call } from 'redux-saga/effects';
import {
  createUserAC,
  createItemAC,
  createWorkCenterAC,
  editWorkCenterAC,
} from '../actionCreators';
import { fetchJson } from '../fetchJson.jsx';

// Worker
function* loadData() {
  try {
    const data = yield call(fetchJson('/'));
    yield put({ type: 'OK', payload: { error: true, message: data } });
  } catch (e) {
    yield put({ type: 'OK', payload: { error: true, message: "Can't connect to server" } });
  }
}
function* createUser(action) {
  try {
    const response = yield call(fetchJson('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    }));
    yield put(createUserAC(response));
  } catch (e) {
    console.log(e);
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
    const response = yield call(fetchJson('/api/wc/:id', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    }));
    yield put(editWorkCenterAC(response));
  } catch (e) {
    console.log(e);
  }
}

// Watcher
export default function* defaultSaga() {
  yield takeEvery('TEST', loadData);
  yield takeEvery('USER', createUser);
  yield takeEvery('ITEM', createItem);
  yield takeEvery('WORK_CENTER', createWorkCenter);
  yield takeEvery('EDIT_WC', editWorkCenter);
}
