import { all, put, takeLatest } from 'redux-saga/effects';

import { registerAnimalSucess } from './actions';

export function* register(data) {
  yield put(registerAnimalSucess(data.payload));
}

export default all([takeLatest('@register/ADD_NEW_ANIMAL', register)]);
