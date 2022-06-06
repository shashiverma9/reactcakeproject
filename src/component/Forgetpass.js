import {Component}  from "react"

import axios from "axios"
import { toast } from "react-toastify"

class Forgetpass extends Component{
    constructor(){
        super()
        this.state={}
    }

    user={}

    getEmail=(event)=>{
        this.user.email=event.target.value;
    }

    getnewpass=(event)=>{
        event.preventDefault()
        console.log("user",this.user);
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/recoverpassword",
            data:this.user
        }).then((res)=>{
            console.log("res",res);
            if (res.data.message=="Password Sent to your email") {
                toast.success("Password has been sent to Your mail");
                this.props.history.push('/login')
                console.log("response", res);
              } else {
                toast.warning("No Such Email exists")
              }
        },(err)=>{
            console.log("err",err);
        })
    }


    render(){
        return(
            <div style={{backgroundColor:"lightgray" ,height:"450px"}}>
            <div style={{height:"300px" ,width:"400px" ,margin:"100px 450px"}}>
            <form>
                <h1 style={{color:"red"}}>getPassword</h1>
            <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" onChange={this.getEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
           
        <button type="submit" className="btn btn-primary" onClick={this.getnewpass}>Submit</button>
        </form>
        </div>
        </div>
        )
    }

}

export default Forgetpass