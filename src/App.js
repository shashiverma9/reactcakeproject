import React, { Suspense } from 'react';
import './App.css';
import {BrowserRouter , Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Cards from './component/Cards';
import Forgetpass from './component/Forgetpass';
import Search from './component/Search';
import { ToastContainer } from 'react-toastify';
import DashBoard from './component/DashBoard';
import Content from "./component/Content";
import CakeDetails from "./component/CakeDetails";
import Details from "./component/Details"
import Carts from './component/Carts';
import Product from './component/Product';
// import CheckOut from './component/CheckOut';
import OrderList from './component/OrderList';
import AddCake from './component/AddCake';
import Routes from './component/Routes';
import CartUi from './component/CartUi';
import {connect} from 'react-redux'
const OtherComponent = React.lazy(() => import('./component/DashBoard'));

function App(props) {
  // console.log("sss",props)
  props.dispatch({
    type:"Initialcase"
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div>      
        <Route path="/" exact component={Home}></Route>
        <Route path="/card" exact component={Cards}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Search" exact component={Search}></Route>
        <Route path="/Forgetpass" exact component={Forgetpass}></Route>
        <Route path="/dashboard" exact component={DashBoard}>
        <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
        </Suspense>
        </Route>
        <Route path="/content" exact component={Content}></Route>
        <Route exact path="/cakedetails/:id" exact component={CakeDetails} />
        <Route exact path="/details/:id"component={Details}/>
        <Route path="/cart"  component={Carts}/>
        <Route path="/products" component={Product}/>
        <Route exact path="/routes" component={Routes}/>
        {/* <Route path="/checkout" component={CheckOut}/> */}
        <Route path="/orderlist" component={OrderList}/>
        <Route path="/cartui" component={CartUi}/>
        <Route path="/addCake" component={AddCake}/>
      </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
export default connect()(App)
