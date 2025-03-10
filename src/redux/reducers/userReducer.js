
// const initialState = {
//     userId:1234,
//     name:"Ram bhai",
//     age:23,
//     isMarried:false,
//     city:"Delhi"
// }


const userReducer = (state = null, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name:action.payload
            }
        case "CHANGE_AGE":
            return {
                ...state,
                age:action.payload
            }
        case "CHANGE_CITY":
            return {
                ...state,
                city:action.payload
            }
        default:
            return state
    }
}

export default userReducer;