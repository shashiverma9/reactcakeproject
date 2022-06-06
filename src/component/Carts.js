import axios from 'axios';
import React, { Component } from 'react'
import Product from './Product';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Loader from "react-loader-spinner"

 class Carts extends Component {
     constructor(props) {
         super(props)         
         this.state = {
             cake:[],
             isloading:false
            }
        }
        // cakes=[]
     componentDidMount() {
         console.log(this.props);
         this.setState({isloading:true})
         axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{ 
            headers:{"authtoken":localStorage.tokenId}
         }).then((res)=>{
            //  console.log("res",res.data);
            //  this.cakes.push(res.data.data)
            this.setState({
                cake:res.data.data,
                isloading:false
            })
            this.props.dispatch({
                type:"PLACE_ORDER",
                payload:res.data
            })
            // console.log(this.state.cake)
         },(err)=>{
             console.log("Error",err);
         })
     }
          
    render() {
        // console.log(this.state.cake)
        const {isloading} =this.state
        return (
            <div>
                {isloading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20em" }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />                        
                    </div>}

           {!this.state.cake.length <=0 && <div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{top:"6em",right:"10em"}}>   
           <Link to="/routes"><button className="btn btn-outline-primary"  style={{top:"6em",marginLeft:"900px"}}>CheckOut</button></Link>  
            <table class="table">            
                     <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
            </table>
            
                </div>
           }         
                   {!isloading && <div  className="row">
                  {this.state.cake.map((ele)=>{
                      return <Product cakecart={ele}/>
                  })}
                    </div>}


                    {/* loading */}
                    {!isloading && this.state.cake.length <= 0 && <div>
                        <div class="card" style={{marginTop:"10em"}}>
                        <div class="card-body">                        
                        <h1> <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>Your Shopping Cart Is Empty.😕</h1>
                        <p>Click here to <Link to="/">Add Item</Link> In cart.🙂</p>
                        </div>            
                        </div>
                     </div>
                          }
                </div>
    
    
        )
    }
}
export default connect((state,props)=>{
console.log(state)
return{
    order_place:state["order_place"]
}
})(Carts)