import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
// import Loader from 'react-loader-spinner'
import { toast } from 'react-toastify'

class Product extends Component {
    // cakes=[]
    constructor() {
        super()
        this.state = {
        qty:1,
        cakeInfos:[]
        }
    }
    // for store all cake details
    cakeinfos=[]
    componentDidMount() {
        this.cakeinfos.push(this.props.cakecart);
        this.setState({
            cakeInfos:this.cakeinfos
        })
    }
    

    remove = () => {
        // console.log(this.props.cakecart)
        this.setState({isloading:true})
        axios.post('https://apifromashu.herokuapp.com/api/removecakefromcart', { cakeid: this.props.cakecart.cakeid },  //404 cakeid: 
            { headers: { "authtoken": localStorage.tokenId } })
            .then((res) => {            
            // console.log(res.data);      
            if(res.data.message === "Removed  item from cart"){
                toast.warn("Item is removed");
                this.setState({
                    cakeinfos:this.cakeinfos.splice(0,1)
                })         
                window.location.href="/cart"
            }
            else{
                toast.warn(" Not 404 Found")// it a msg do not be 
            }
        }, (err) => {
            console.log(err)
        })
    }
    //  For Total price
    price={}
  
    render() {
        // console.log(this.state.cakeInfos)
        return (
            <div>           

        {!this.state.cakeInfos.length-1 && <div>
        <div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{top:"6em",right:"3rem"}}>            
        <table class="table">   
            <tbody>
                <tr>
                <td style={{width:"100px"}} ><img style={{height:"50px",width:"50px"}} src={this.props.cakecart.image} class="card-img-top" alt="..."></img></td>
                <td style={{width:"300px"}} >{this.props.cakecart.name}</td>
                <td style={{width:"130px"}} >Rs{this.props.cakecart.price}</td>     
                <td style={{width:"250px"}} >{this.props.cakecart.weight}</td>     
                <td style={{width:"260px"}} ><button type="button" class="btn" >+</button>{this.state.qty}<button type="button" class="btn"  disabled={this.state.qty < 2}>-</button></td>                             
                <td style={{width:"250px"}} >
                    <button type="button"  onClick={this.remove} class="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg></button>
                </td>
                </tr>  
            </tbody>  
            </table> 
            </div>
           </div>}
           
        </div>
           )
    }
}
// total:this.props.cakecart*this.state.qty
export default  connect((state,props)=>{
// console.log(state)
})(Product)