import { takeEvery, put, call } from 'redux-saga/effects';
import CREATE_USER from '../actionTypes';
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
function* generationUser(action) {
  try {
    const response = yield call(fetchJson('/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    }));
    yield put({ type: CREATE_USER, payload: response });
  } catch (e) {
    console.log(e);
  }
}

function* createItem(action) {
  try{
    const response = yield call(fetchJson('/api/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    }));
    
  }
}

// Watcher
export default function* defaultSaga() {
  yield takeEvery('TEST', loadData);
  yield takeEvery('USER', generationUser);
  yield takeEvery('ITEM', )
}
