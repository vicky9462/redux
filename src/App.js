import React from 'react'
import CakeContainer from './CakeContainer'
import './App.css'
import IceCreamContainer from './IceCreamContainer'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import NewCakeContainer from './NewCakeContainer'
function App() {
  return (
    <Provider store={Store} >
    <div className='App'>
      <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
    </div>
    </Provider>
  )
}

export default App




































// import React from 'react'
// import { createStore } from 'redux'
// import { createLogger } from 'redux-logger'
//  import { redux } from 'react-redux'
//  import { ThunkMiddleware } from 'redux-thunk'
//  import axios from 'axios'
 

// import { applyMiddleware } from 'redux'

// const logger=reduxLogger.createLogger()

// const BUY_CAKES= 'BUY_CAKES'
// const buyCake=()=>{
//   return{
//     type:BUY_CAKES,
//     info:'FIRST redux action'

//   }
// }

// const initialState={
//   noOfCake:10
// }

// const reducer=(state=initialState,action)=>{
//   switch(action.type){
//     case BUY_CAKES:return{
//       ...state,
//       noOfCake:state.noOfCake.noOfCake-1
//     }
// default : return state
//   }

// }
// const store=createStore(rootReducer,applyMiddleware(logger))
// function App() {
//   return (
//     <>
//     jkn 
//     </>
//   )
// }

// export default App

