import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sidebar from './Sidebar'
import CartSummary from './CartSummary'
import ConfirmCheckout from './ConfirmCheckout'
// import CheckOut from './CheckOut'
import CartUi from './CartUi'

function Routes() {
    return (
        <div>
            <ConfirmCheckout/>
        <div>
        <BrowserRouter>
            <Sidebar/>
            <Switch>
                <Route path="/cartsummary" exact component={CartSummary}/>
                {/* <Route path="/checkout" component={CheckOut}/> */}
                <Route path="/cartui" component={CartUi}/>
            </Switch>
        </BrowserRouter>
        </div>
        </div>
    )
}

export default Routes;