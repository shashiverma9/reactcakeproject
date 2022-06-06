import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {toast} from 'react-toastify'

 class CheckOut extends Component {
     constructor(props) {
         super(props)
         this.state={
            // price:0
         }
     }
     total=0
    //  cartcakes=[]
    componentDidMount() {
        console.log(this.props.order_place.data)
        this.props.order_place.data.map((each)=>{
            console.log(each)
            this.total=this.total+each.price;
            // this.setState({
            //     price:this.total
            // })
        });
        // console.log(this.cakes)
        // console.log(this.total);  
        this.placeOrder.price=this.total
        // this.placeOrder.cakes=this.cakes
        
    }
    placeOrder={}

     userName=(event)=>{
        this.placeOrder.name=event.target.value
     }   
     address=(event)=>{
        this.placeOrder.address=event.target.value
     }
     city=(event)=>{
         this.placeOrder.city=event.target.value
     }
     pin=(event)=>{
         this.placeOrder.pincode=event.target.value
     }
     phone=(event)=>{
        this.placeOrder.phone=event.target.value
    }
    
    orderPlace=(event)=>{
        event.preventDefault()
        this.placeOrder.cakes=this.props.order_place.data
        console.log(this.placeOrder);     
        let apiurl="https://apifromashu.herokuapp.com/api/addcakeorder"
        
            axios({
                method:"post",
                url:apiurl,
                data:this.placeOrder,
                headers:{"authtoken":localStorage.tokenId}
            }).then((res)=>{
                if(res.data.messageg==="order placed"){
                    toast.success("Your Order is placed 😍",{autoClose:2000})           
                }else{
                    toast.warn("Please fill all fields are required !🙂")
                }
            },(err)=>{
                toast.warn("Please Fill All Details")    
            })
    }
    
    render(){
        // console.log(this.state.price);
        return (
            <div>
        <main role="main" class=" ml-sm-auto col-lg-9">         
            <div class="table-responsive" >
            <form style={{ marginTop: "10em" ,width:"60vw"}}>
            <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationServer01" style={{width:"50vw" ,fontSize:"1em"}}>Name</label>
                  <input type="text" onChange={this.userName.bind(this)} class="form-control" style={{width:"50vw" ,height: "3em" }} id="validationServer01"  placeholder="First name" required />
                  <div id="validationServer01Feedback" class="invalid-feedback">
                    Please provide a valid Name.
                 </div>
                </div> 
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationServer02" style={{width:"50vw",fontSize:"1em"}}>Phone</label>
                  <input type="number" onChange={this.phone.bind(this)} class="form-control" style={{width:"50vw" ,height: "3em" }} id="validationServer02" placeholder="Phone" required />
                  <div id="validationServer02Feedback" class="invalid-feedback">
                     Please provide a valid PhoneNo.
                </div> 
                </div> 
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationServer03" style={{width:"50vw" ,fontSize:"1em"}}>Address</label>
                  <input type="text" onChange={this.address.bind(this)} class="form-control" style={{width:"50vw" ,height: "3em" }} id="validationServer03" placeholder="Address" required />
                  <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid Address.
                    </div>
                </div> 
            </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                    <label for="validationServer04">City</label>
                    <input type="text" class="form-control" onChange={this.city.bind(this)} id="validationServer04" placeholder="City" required />
                    <div id="validationServer04Feedback" class="invalid-feedback">
                     Please provide a valid city.
                    </div>
                    </div>    
                    <div class="col-md-3 mb-3">
                    <label for="validationServer05">Pincode</label>
                    <input type="number" class="form-control" onChange={this.pin.bind(this)} id="validationServer05" placeholder="Pin Code" required />
                    <div id="validationServer05Feedback" class="invalid-feedback">
                         Please provide a valid pin code.
                     </div>
                    </div>
                </div>  
                <button class="btn btn-primary" type="submit" onClick={this.orderPlace} style={{ marginRight:"2em",marginTop:"1em"}}>Place Order</button>
                </form>
                 </div>
          </main>  
      </div>)
    }
}
export default connect((state,props)=>{
console.log(state);
return{
    order_place:state["order_place"]
}
})(CheckOut)