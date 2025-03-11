import { call,put, takeLatest,takeEvery } from "redux-saga/effects";
import { changeUserNameWithSaga } from "../actions/userActions";
import axios from "axios";


function* fetchName(params){  // 2
    // console.log("params",params);
    try {
        const resultFromApi  = yield call(apiData,"hello","hii",params);
        console.log("resultFromApi",resultFromApi);
        // yield put({type:"CHANGE_NAME",payload:resultFromApi});
        yield put(changeUserNameWithSaga(resultFromApi));
    } catch (error) {
        console.log(error);
    }
}

export function* waitForFetchName(){  // 1    // CHANGE_NAME already available inside the userActions, but if we use saga middleware then saga overrides the action

    yield takeEvery("CHANGE_NAME",fetchName) // here automatically pass type and payload as argument

}


const apiData = async(firstArg,secondArg,thirdArg) => {
    console.log("This is From APIDATA",firstArg,secondArg,thirdArg); // output : hello hii {params}
   let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data[0].title;
}
