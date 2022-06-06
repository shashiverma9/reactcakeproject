import React from 'react'
import {Link} from 'react-router-dom'

 function Sidebar() {
    return (
        <div>
            <div>
            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-2 d-none d-md-block sidebar" style={{backgroundColor:"#F7F2F2 "}}>
                    <div class="sidebar-sticky">
                            <p style={{ marginTop: "1em", fontSize: "2em", fontFamily: "cursive" }}> Checkout Step</p>
                            <ul>
                            <Link to="/cartsumary"><li style={{ marginTop: "2em", fontSize: "1.4em"}}>Cart Summary</li></Link> 
                            <hr></hr>
                            <Link to="/addres"><li style={{ marginTop: "2em", fontSize: "1.4em"}}>Address</li></Link>
                            <hr></hr>                  
                            </ul>
                        </div>
                        </nav>
                </div>
                    </div>
            </div> 
    </div>
    )
}

export default Sidebar
