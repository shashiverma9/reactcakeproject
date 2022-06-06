import {Component} from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { connect } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component{
    constructor(props){
        super(props)
        this.getEmail=this.getEmail.bind(this);
        this.getPass=this.getPass.bind(this);
        this.fetchuseraxios=this.fetchuseraxios.bind(this);
        this.state={
            login:{},
            nameErr:"",
            passErr:""
        }
    }
    // for vaildation
    vaild=()=>{
        if(!this.state.login.email ){
            this.setState({
                nameErr:"please enter your Email",
                
            })
        }
        else if(!this.state.login.password){
            this.setState({
                passErr:"please fill your vaild password"
            })
        }
        else if(!this.state.login.email && !this.state.login.password || !this.state.login.email.includes("@")){
            this.setState({
                nameErr:"Invaild Credentails",
                passErr:"Password length must be aleast 4 or above Character"
            })
        }
        else if(this.state.login.email && !this.state.login.email.includes("@")){
            this.setState({
                nameErr:"Invaild Email"
            })
        }
        
        else if(!this.state.login.password || this.state.login.password.length<4){
            this.setState({
                passErr:"Please Enter Your Vaild Password"
            })
        }
        else if(!this.state.login.password  && this.state.login.password.length<4){
            this.setState({
                passErr:"Password length must be aleast 4 or above Character"
            })
        }
        else{
            return true;
        }
    }
    login={}
    message={}
    // get value from form
    getEmail=(event)=>{ 
        this.login.email=event.target.value
        this.setState({
            login:this.login
        })
    }
    getPass=(event)=>{
        this.login.password=event.target.value;
        this.setState({
            login:this.login
        })
    }
    fetchuseraxios=(e)=>{
        this.setState({
            nameErr:"",
            passErr:""
        })
        e.preventDefault();
        // console.log(this.state.login);
        if(this.vaild()){ 
            console.log(this.state.login);
            axios({
                method:"post",
                url:"https://apifromashu.herokuapp.com/api/login",
                data:this.state.login        
            }).then((res) => {
                console.log("my mess", res);
                console.log(res.data.token);
                this.message = res.data;
                if(this.message.message !== 'Invalid Credentials'){
                    toast.success("Welcome to Our CakeShop",{autoClose:"2000"});                    
                    console.log("message ;.....",this.message);
                  // Set localstorage
                    localStorage.setItem("tokenId",res.data.token)
                    localStorage.setItem("name",res.data.name)
                    localStorage.setItem("role",res.data.role)
                    this.props.dispatch({
                        type:"LOGIN",
                        payload:res.data
                    })
                    this.props.history.push('/');
                } else {
                    toast.warning("Please Check Your Email or Password",{autoClose:"2000"});
                }              
            },(err)=>{
                // console.log("error",err);
                toast.warning("Please Fill all Field ");
            })                     
        }      
    }
    render(){
        return(
        <div style={{backgroundColor:"lightgray" ,height:"350px"}}>
            <div style={{height:"300px" ,width:"400px" ,margin:"100px 450px"}}>
                <form>
                    <h1 style={{color:"red"}}>Login Form</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.getEmail}></input>
                    <p style={{color:"red"}}>{this.state.nameErr}</p>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.getPass}></input>
                <p style={{color:"red"}}>{this.state.passErr}</p>
                </div>
              <button type="submit" className="btn btn-primary" onClick={this.fetchuseraxios}>Login</button>
              <br></br>
                 <span>Create Account<Link to="/signup">SignUp</Link></span>&emsp;&emsp;
                &emsp;&emsp; 
                <Link to="/Forgetpass"><a href="">Forgetpassword?</a></Link>
                </form>
            </div>
        </div>
        )
    }
}
export default connect()(Login)