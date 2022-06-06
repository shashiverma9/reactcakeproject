import {useState,useEffect} from "react"
import queryString from "query-string"
import axios from "axios"
import Cards from "./Cards"
import Loader from "react-loader-spinner"


function Search(props){
    var [Cakeresult,setCakes]=useState([]);
    var [isloading,setloading]=useState(false);
    
    var query=queryString.parse(props.location.search)
    console.log("aa gyi ",query.q);
    
    useEffect(()=>{
        var apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
        setloading(true)
        axios({
            method:"get",
            url:apiurl            
        }).then((res)=>{
            console.log("response",res.data);
            setCakes(res.data.data)
            setloading(false);
        },(err)=>{
            console.log("Error",err);
        })
    },[query.q])

    return(
        <div className="row">
            {isloading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20em" }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />                        
                    </div>}
              
            {!isloading && Cakeresult.map((each)=>{        
                return <Cards cakedata={each}/>
            })}
               
                {!isloading && Cakeresult.length<=0 && <div>
                        <div class="card" style={{marginLeft:"16em",marginTop:"10em"}}>
                            <div class="card-header">
                                    <b>Oop!</b> 
                                </div>
                                <div class="card-body">
                                    <blockquote class="blockquote mb-0">
                            <p>Sorry, no results found!</p>               
                        </blockquote>
                        <h4>Please check the spelling or try searching for something else</h4>
                        </div>            
                    </div>
                </div>}
            
        </div>
    )

}

export default Search