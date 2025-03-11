import {all} from 'redux-saga/effects';

import {waitForFetchName} from './sagas/userSaga';
import {waitForFetchAge} from './sagas/ageSaga';

export default function* rootSaga(){ // we will import into the store
    yield all([
        waitForFetchName(),
        waitForFetchAge()
    ])
};