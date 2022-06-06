import {createStore} from "redux"
import {shashi} from "./reducer" //initials value declared in reducer


var store  = createStore(shashi,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//initial value

store.dispatch({
    type:"PLACE_ORDER"
})
// store.dispatch({
//     type:"PLACED_ORDERS"
// })
store.dispatch({
    type:"ORDER_LIST"
})


// console.log("after dispatch store ka state" , store.getState()) //to get the state from reducer

export default store