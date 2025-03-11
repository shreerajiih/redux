import axios from 'axios'

export const changeUserName = (name) =>{
    return {
        type:"CHANGE_NAME",
        payload:name
    }
}

export const changeUserNameWithSaga = (name) =>{
    return {
        type:"CHANGE_NAME_SAGA",
        payload:name
    }
}

export const changeUserAge = (age) =>{
    return {
        type:"CHANGE_AGE",
        payload:age
    }
}

export const changeUserAgeWithSaga = (age) =>{
    return {
        type:"CHANGE_AGE_SAGA",
        payload:age
    }
}
// export const changeUserCity = (city) =>{
//     return {
//         type:"CHANGE_CITY",
//         payload:city
//     }
// }

export const changeUserCity = (city) =>{
    return (dispach)=>{ // pass dispatch as argument
       let url = "https://jsonplaceholder.typicode.com/posts";
       axios.get(url).then((res)=>{
        console.log(res.data);
        dispach({
            type:"CHANGE_CITY",
            payload:res.data[0].title
        })
       })
       
    }
}