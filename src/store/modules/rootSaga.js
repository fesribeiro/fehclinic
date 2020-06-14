import { all } from 'redux-saga/effects';

import register from './register/sagas';

export default function* rootSaga() {
  return yield all([register]);
}
