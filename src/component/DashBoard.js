import { useState, useEffect } from "react";
import axios from "axios";
import './Dashboard.css';
import { Link } from "react-router-dom";
// import Loader from "react-loader-spinnner";


function DashBoard() {  
  const [allCakes, setCakes] = useState([]); 
  // let [sortcake , setsortcake]= useState([]);

  useEffect(() => {
    
    axios({
      method: "get",
      url:"https://apifromashu.herokuapp.com/api/allcakes"
    }).then((response) => {      
     console.log(response.data);
    //  setsortcake(response.data.data)
      setCakes(response.data.data)
      // cake()

},
    (error) => {
        console.log(error);
     }
)
  }, [])

  
  let onbuton = () => {
    let bun = allCakes.sort((a, b) => {
      return (a.price - b.price)      
    })
    console.log(bun);
   }
  return (
      <div>  
      <div >
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4" style={{margin:"7em"}}>
          <h3 style={{fontFamily:"cursive"}}>All Cakes</h3>         
         
          <div class="table-responsive" style={{marginTop:'2.5em',marginBottom:"-7em"}}>
            <table class="table" >
              <thead >
                <tr style={{height:'3em'}}>
                  <th style={{width:"110px"}}>ID</th>
                  <th style={{width:"100px"}}>Image</th>
                  <th style={{width:"150px"}}>Name</th>
                  <th style={{width:"100px"}}>Price</th>
                  <th style={{width:"150px"}}> <Link to="/Addcake"><button class="btn btn-sm btn-outline-secondary">New cake</button></Link></th>                  
                </tr>
              </thead>              
            </table>
          </div>
        </main>     
        {         
          allCakes.map((ele, index) => {
            return ( 
              <div >               
                <main role="main" class=" ml-sm-auto col-lg-10 "  style={{marginRight:"6.8em"}}>
                        <div >
                            <table class="table table-striped table-sm"  style={{height:"2em"}}>
                            <tbody>
                                <tr >
                                <td style={{width:"110px"}}>{ele.cakeid}</td>
                                <td style={{width:"100px"}}><img src={ele.image} style={{height:"50px",width:"50px"}}></img></td>
                                <td style={{width:"150px"}}>{ele.name}</td>
                                <td style={{width:"100px"}}>{ele.price}</td>
                                <td style={{width:"150px"}}>
                                <div> 
                                   <Link to="/productForm"><button  class="btn btn-secondary">+</button></Link>
                               <button class="btn btn-secondary">-</button>
                                 </div>
                             </td>
                           </tr>
                      </tbody>
                     </table>
                </div>
           </main>
              </div>)
              })
             }
       </div>
    </div>
  );
}

export default DashBoard;
