import {Component} from "react"
import Carousel from './Carousel'
import Cards from "./Cards"
import axios from "axios"
import Loader from "react-loader-spinner"
class Home extends Component{
    constructor(){
        super()
        this.state={
            cakes:[],
            isloading:false
        }
    }
    // get request to api
    componentDidMount(){
        let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
        this.setState({isloading:true})
        axios({
            url:apiurl,
            method:"get"
        }).then((res)=>{
            // console.log("response",res.data);
            this.setState({
                cakes:res.data.data,
                isloading:false
            })
        },(err)=>{
            console.log(err);
        })
    }
    render(){
        const {isloading}=this.state;
        return(
            <div>
                {isloading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20em" }}>
                        <Loader type="Grid" color="#00BFFF" height={80} width={100} />                        
                    </div>}
                {!isloading && <Carousel/>}
                {!isloading && <div className="row" style={{margin:"1.5rem"}}>
                    {
                        this.state.cakes.map((each)=>{
                            return <Cards cakedata={each}></Cards>
                        })
                    }
                </div>}
            </div>
        )
    }

}

export default Home;