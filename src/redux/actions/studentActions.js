
export const changeStudentName = (name) =>{
    return {
        type:"CHANGE_NAME_STUDENT",
        payload:name
    }
}

export const changeStudentAge = (age) =>{
    return {
        type:"CHANGE_AGE_STUDENT",
        payload:age
    }
}

export const changeStudentCity = (city) =>{
    return {
        type:"CHANGE_CITY_STUDENT",
        payload:city
    }
}