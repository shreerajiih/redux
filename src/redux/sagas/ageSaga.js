import { call,put, takeLatest,takeEvery } from "redux-saga/effects";
import { changeUserAgeWithSaga } from "../actions/userActions";
import axios from "axios";



function* fetchAge(params){  // 2
    // console.log("params",params);
    try {
        const resultFromApi  = yield call(apiData,"hello","hii",params);
        console.log("resultFromApi",resultFromApi);
        // yield put({type:"CHANGE_AGE",payload:resultFromApi});
        yield put(changeUserAgeWithSaga(resultFromApi));
    } catch (error) {
        console.log(error);
    }
}


export function* waitForFetchAge(){  // 1    // CHANGE_NAME already available inside the userActions, but if we use saga middleware then saga overrides the action

    yield takeEvery("CHANGE_AGE",fetchAge) // here automatically pass type and payload as argument

}

const apiData = async(firstArg,secondArg,thirdArg) => {
    console.log("This is From APIDATA",firstArg,secondArg,thirdArg); // output : hello hii {params}
   let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return "40";
}