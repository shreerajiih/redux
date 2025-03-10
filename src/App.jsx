import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connect , useDispatch , useSelector} from 'react-redux'
import { changeUserAge, changeUserCity, changeUserName } from './redux/actions/userActions'
import { changeStudentAge, changeStudentCity, changeStudentName } from './redux/actions/studentActions'
import About from './components/About'

function App(props) {
  const [count, setCount] = useState(0)

  // useSelector is used to get the state from store

  // const hookData = useSelector((state) => {  // without customize variables
  //   return state
  // });

  const hookData = useSelector((state) => {  // with customize variables
    return {
      userDetails : state.user,
      studentDetails : state.student
    }
  });

  console.log("Hook DAta",hookData);

  const dispatch = useDispatch();


  const changeFunction = (what,WHO) => {
    setCount((prev) => prev + 1);

    if(WHO === "USER"){

    switch (what) {
      case "name":
        // props.changeName(`New Ram bhai ${count}`);
        dispatch(changeUserName(`New Ram bhai ${count}`));  // direct use actionFunctions inside the dispatch 
        break;
      case "city":
        // props.changeCity(`New Delhi ${count}`);
        dispatch(changeUserCity(`New Delhi ${count}`));
        break;
      case "age":
        // props.changeAge(`23 + ${count}`);
        dispatch(changeUserAge(`23 + ${count}`));
        break;
      default:
        break;
    }
  }
    else if(WHO === "STUDENT"){

      switch (what) {
        case "name":
          // props.changeStudentName(`New Student ${count}`);
          dispatch(changeStudentName(`New Student ${count}`));
          break;
        case "city":
          // props.changeStudentCity(`New banglore ${count}`);
          dispatch(changeStudentCity(`New banglore ${count}`));
          break;
        case "age":
          // props.changeStudentAge(`18 + ${count}`);
          dispatch(changeStudentAge(`18 + ${count}`));
          break;
        default:
          break;
      }

    }

  }


  return (
    <>
      <h1>{hookData.userDetails.name}</h1>
      <div className="card">
        <button onClick={() => changeFunction("name","USER")}>
          Change Name USER
        </button>
        <button onClick={() => changeFunction("city","USER")}>
          Change City USER
        </button>
        <button onClick={() => changeFunction("age","USER")}>
          Change Age USER
        </button>
        <button onClick={() => changeFunction("name","STUDENT")}>
          Change Name STUDENT
        </button>
        <button onClick={() => changeFunction("city","STUDENT")}>
          Change City STUDENT
        </button>
        <button onClick={() => changeFunction("age","STUDENT")}>
          Change Age STUDENT
        </button>STUDENT
      </div>
      <p className="read-the-docs">
        {hookData.userDetails.userId} --- {hookData.userDetails.name} --- {hookData.userDetails.age} --- {hookData.userDetails.isMarried} --- {hookData.userDetails.city}
      </p>
      <hr></hr>
      <About/>
    </>
  )
}

// 1 : using connect()()

// const mapStateToProps = (state) => {
//   console.log("State Is the", state); // from store
//   return {
//     userDetails: state.user, // create variable userDetails and assign state
//     studentDetails: state.student, // create variable userDetails and assign state
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {

//     // changeName: (name) => {
//     //   dispatch({
//     //     type: "CHANGE_NAME",
//     //     payload: name
//     //   })
//     // },

//     // changeAge: (age) => {
//     //   dispatch({
//     //     type: "CHANGE_AGE",
//     //     payload: age
//     //   })
//     // },
//     // changeCity: (city) => {
//     //   dispatch({
//     //     type: "CHANGE_CITY",
//     //     payload: city
//     //   })
//     // }
    
//     // we can create seperate folder to define actions and import them

//     changeName: (name) => dispatch(changeUserName(name)),
//     changeAge: (age) => dispatch(changeUserAge(age)),
//     changeCity: (city) => dispatch(changeUserCity(city)),
//     changeStudentName: (name) => dispatch(changeStudentName(name)),
//     changeStudentAge: (age) => dispatch(changeStudentAge(age)),
//     changeStudentCity: (city) => dispatch(changeStudentCity(city))

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App); // Connect the App

// 2 : using hooks { useSelector(), useDispatch() } that is on top {short cutt}


export default App;