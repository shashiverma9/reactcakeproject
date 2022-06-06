import { Component } from "react"
import {Link} from 'react-router-dom'


class Cards extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            user:{}
        }
        // this.NavigationDemo()
    }
        userAuthenticate=()=>{
            // console.log("res",this.props)
            var getToken=localStorage.getItem("tokenId",JSON.stringify("tokenId"))
            // console.log(getToken);
            
        }

    render() {
        // console.log("state,",this.props)
        return (
            <div> 
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div onClick = {this.userAuthenticate} class="card shadow p-3 mb-5 bg-white rounded" style={{width: "15rem" , margin:"1rem",top:"50px",marginLeft:"60px"}}>
            <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>  
                <p class="card-text">{this.props.cakedata.description}</p>                
                <p class="card-text">{this.props.cakedata.likes}</p>                
            </div>
           </div> 
           </Link>
            </div>
        )
    }
}

export default Cards;

