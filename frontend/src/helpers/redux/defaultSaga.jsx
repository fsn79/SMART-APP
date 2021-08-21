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

// Watcher
export default function* defaultSaga() {
  yield takeEvery('TEST', loadData);
}
