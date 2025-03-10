import React from 'react'
import { connect } from 'react-redux'

const About = ({name,age,city}) => {
  return (
    <div>
      This is About Component for Students



    <div>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>City : {city}</p>
    </div>

    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        name : state.student.name,
        age : state.student.age,
        city : state.student.city
    }
}

export default connect(mapStateToProps)(About)
