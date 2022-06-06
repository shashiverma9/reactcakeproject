import { Component } from "react";
import {Link,Redirect} from 'react-router-dom';
import axios from "axios";
import { toast} from "react-toastify";


class Details extends Component {
    
    constructor(props) {
        super(props)
        this.state ={
            product:[]
        }
        
    }
    message={}
    addCart=[]
    addCartPro={}

    addFav=(event)=>{
    if(event.target){
        toast.info("This features will be coming soon...🙂")
    }
}
    
    addToCartCakes=()=>{
        console.log(this.props)
        var cakeinfo={
            cakeid:this.props.cakedata.cakeid,      
            name:this.props.cakedata.name,     
            weight:this.props.cakedata.weight,      
            price:this.props.cakedata.price,
            image:this.props.cakedata.image     
        };
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/addcaketocart",
            data:cakeinfo,
            headers:{"authtoken":localStorage.getItem("tokenId")}
        }).then((res)=>{
            console.log(res.data)
            if(res.data !== "Session Expired"){
                this.addCartPro=res.data.data
                this.addCart.push(this.addCartPro)
                this.setState({
                    product:this.addCart
                })
                console.log(this.state.product);
                toast.success("Product : Add to Cart",{autoClose:"1000"});
            }
            else{
                toast.warning("You must Logged In",{autoClose:"1000"});
            }
        },(err)=>{
            console.log("Error",err)
        })
    }

    render() {
        // console.log("state,", this.props)
        return (
            <div style={{width:"100vw",height:"90vh"}}>
            <div class="card mb-3" style={{ maxWidth: "75vw" ,marginLeft:"10em" ,marginTop:"4em",border:"none" ,}}>
                    <Link to={`/cakedetails/${this.props.cakedata.cakeid}`} style={{textDecorationColor:"#F0F3F4 "}}>                    
            <div  class="card detail-card" style={{marginBottom:"2em",backgroundColor:"#F0F3F4 "}}>
              <div class="row no-gutters" >
                <div class="col-md-4" style={{width:"100%", marginTop:"2em",marginBottom:"6em"}}>
                <img src={this.props.cakedata.image} style={{height:"100%",marginLeft:"2em" ,width:'23vw'}}class="card-img-top cakeImg " alt="..."></img>
                <p class="card-text" style={{ marginTop: "1em", fontSize: "1.4em", color: "black", fontFamily: "cursive" }}>{`${this.props.cakedata.ingredients} `}</p>
                </div>
                <div class="col-md-8">
                  <div class="card-body" >
                      <h1 class="card-title" style={{color:"black",marginTop:"1em",fontFamily:"cursive"}}>{this.props.cakedata.name}</h1>                
                            <p class="card-text" style={{color:"#F3B818",fontSize:"1.5em"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"style={{marginTop:"-7px"}} viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  {this.props.cakedata.ratings}</p>
                            <p class="card-text" style={{fontSize:"1.2em",marginTop:"-1em",color:"black",fontFamily:"cursive"}}>{this.props.cakedata.reviews}  reviews</p>
                            <p class="card-text" style={{fontSize:"1.4em",color:"black",fontFamily:"cursive"}}>{this.props.cakedata.description}</p>
                            <p class="card-text"style={{fontSize:"2em",fontFamily:"cursive",color:"#F3B818"}}><span style={{color:"black",fontFamily:"cursive"}}>CURRENT PRICE : </span>${this.props.cakedata.price}</p> 
                            <p class="card-text"style={{fontSize:"2em",marginTop:"-0.5em",color:"black",fontFamily:"cursive"}}>Weight : {this.props.cakedata.weight} kg</p>
                            <p class="card-text"style={{fontSize:"2em",fontFamily:"cursive",color:"#F3B818"}}><span style={{color:"black",fontFamily:"cursive"}}>FLAVOUR : </span>{this.props.cakedata.flavour}</p>
                            <p class="card-text" style={{color:"black",fontSize:"1.4em",fontFamily:"cursive"}}>Type </p>
                            <p class="card-text" style={{marginTop:"-1em",fontSize:"1.4em",color:"black",fontFamily:"cursive"}}>{this.props.cakedata.type}</p>        
                            <button onClick={(e) => {
                                e.preventDefault()                
                                this.addToCartCakes();                 
                             }} type="button" class="btn btn-success" style={{marginTop:"5em"}}>Add To Cart</button>
                            
                            &emsp;<button type="button" className="btn btn-success"  style={{marginTop:"5em",color:"white"}} onClick={this.addFav}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg></button>                 
                  </div>            
                </div>
                    </div>
                    </div>
                </Link>                
                </div>                
                </div>
        )
    }

}

export default Details;