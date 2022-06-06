import {Component} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

class Signup extends Component{

    constructor(){
        super()
        this.state={
            // signups:[],
            signups:{},
            nameErr:"",
            passErr:""
            
        }
    }
   signup={}

// handler
getEmail=(event)=>{
    this.signup.email=event.target.value;
    this.setState({
        signups:this.signup
    })
}
getPass=(event)=>{
    this.signup.password=event.target.value;
    this.setState({
        signups:this.signup
    })
}

getName=(event)=>{
    this.signup.name=event.target.value;
    this.setState({
        signups:this.signup
    })
}

// add to json
userSignup=(e)=>{
    e.preventDefault();
    console.log(this.signup);
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/register",
            data:this.signup
        }).then((res)=>{
            console.log("response",res.data.message);
            if(res.data.message !=="User Already Exists"){
               toast.success("Register Successdfully");
            }
            else{
                toast.warn("User Is Already Registered");
            }
        },(err)=>{
            console.log("error",err);
        })  
}


    render(){
        return(
            <div style={{backgroundColor:"lightgray"}}>
            <div style={{width:"400px" ,margin:"100px 450px"}}>
                <form>
                    <h1 style={{color:"red"}}>SignUp Form</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.getEmail}></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.getPass}></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={this.getName}></input>
                </div>
                
                <Link to="/login"><button type="submit" className="btn btn-primary" onClick={this.userSignup} >SignUp</button></Link>
                </form>
            </div>
            </div>
        )
    }

}

export default Signup