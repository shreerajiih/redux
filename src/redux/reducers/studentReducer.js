
// const initialState = { // we can write here initial state or iside the createstore function inside store.js file
//     studentId:1234,
//     name:"Ram bhai",
//     age:23,
//     city:"Delhi"
// }


const studentReducer = (state = null , action) => {
    switch (action.type) {
        case "CHANGE_NAME_STUDENT":
            return {
                ...state,
                name:action.payload // change name
            }
        case "CHANGE_AGE_STUDENT":
            return {
                ...state,
                age:action.payload // change age
            }
        case "CHANGE_CITY_STUDENT":
            return {
                ...state,
                city:action.payload // change city
            }
        default:
            return state
    }
}

export default studentReducer;