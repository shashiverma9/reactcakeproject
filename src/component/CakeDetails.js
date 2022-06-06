import Details from "./Details";
// import Cake from "./Cake";
import axios from 'axios';
import { useState, useEffect } from "react";




function CakeDetails(props){

    var [cakeresult, setCakes] = useState({}); 
    var [isloading,setloading]=useState(true)   
    let qq= props.match.params.id;


    useEffect(() => {
        var apiurl = "https://apifromashu.herokuapp.com/api/cake/"+qq;
      axios({
        method:"get",
        url:apiurl
      }).then((res)=>{
        // console.log("res",res.data);
        setCakes(res.data.data)
        setloading(false)
      },(err)=>{
        console.log("Error",err);
      })
    },[props.match.params.id]);
        
        return (
            <div>
                {isloading && <div>
                <div class="d-flex justify-content-center" style={{margin:"100px 100px"}}>
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
                </div>
                </div></div>}
              
                  {!isloading && <div className="row">
                    <Details cakedata={cakeresult} />
                  </div>}
            </div>
        )
    }
export default CakeDetails;

