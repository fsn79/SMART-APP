import { takeEvery, put, call } from 'redux-saga/effects';
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
function* generationUser(data) {
  try {
    const response = yield call(fetchJson('/api/user', data));
    yield put( { type: 'CREATE_USER', payload: response });
  } catch (e) {
    console.log(e);
  }
}

// Watcher
export default function* defaultSaga() {
  yield takeEvery('TEST', loadData);
  yield takeEvery('USER', generationUser);
}
