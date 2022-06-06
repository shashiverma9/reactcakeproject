import React, { Component } from 'react'
import CheckOut from './CheckOut'
import Sidebar from './Sidebar'
 
class CartUi extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <CheckOut/>
            </div>
        )
    }
}

export default CartUi
