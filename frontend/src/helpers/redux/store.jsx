import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer.jsx';
import rootSaga from './rootSaga.jsx';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});
sagaMiddleware.run(rootSaga);
