import { useState ,useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function Addcake() {
    const [imageSelected, setImageSelected] = useState("");
    // const [ingrident,setingrident]=useState([])
    const uploadImage = () => {        
        const formData = new FormData()
        formData.append("file",imageSelected)        
        axios.post("https://apifromashu.herokuapp.com/api/upload",formData,{
            headers:{"authtoken":localStorage.tokenId}
        })
            .then((res) => {
                console.log(res.data.imageUrl);
                NewCake.image = res.data.imageUrl;
        })
    }
    var NewCake = {}
    var userName=(event)=>{
        NewCake.name=event.target.value
    }   
    var weight=(event)=>{
        NewCake.weight=event.target.value
    }
    var description=(event)=>{
        NewCake.description=event.target.value
    }
    var ingredients=(event)=>{
        NewCake.ingredients=event.target.value
     }
     var type=(event)=>{
        NewCake.type=event.target.value
     }
     var eggless=(event)=>{
        NewCake.eggless=event.target.value
     }
     var price=(event)=>{
        NewCake.price=event.target.value
    }    
    var save=(e)=>{
        e.preventDefault();
        // console.log(NewCake);
        axios.post("https://apifromashu.herokuapp.com/api/addcake",NewCake,{
            headers:{"authtoken":localStorage.tokenId}
        })
            .then((res) =>{
                // console.log(res, "New Cake added");
                toast.success("New Cake Added Successfuly",{autoClose:2000});
        })
    }
   
   return (
            <div>                
                <form style={{ marginTop: "4em", padding: "1.5em 28em", backgroundColor: "#F7F2F2" }}>
                <h3 style={{ backgroundColor: "#F7F2F2", color: "tomato" ,fontFamily:"monospace" }}>New cake </h3>
            <hr></hr>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Name</label>
    <input type="text" class="form-control" onChange={userName} style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group">
      <label for="validationTooltip04">Weight</label>
      <input type="number" onChange={weight}  class="form-control" style={{height:"2em"}}  min="0" aria-describedby="emailHelp" ></input>
                </div>    
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Description</label>
    <input type="text" onChange={description}  class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Ingredients</label>
    <input type="text" onChange={ingredients}  class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Type</label>
    <input type="text" onChange={type}  class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>

                    <div class="form-group">
      <label for="validationTooltip04">Eggless</label>
      <input type="text" onChange={eggless}  class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>
                    
                    <div class="form-group">
    <label for="price" style={{fontSize:"1.1em"}}>Price</label>
    <input type="number" onChange={price}  style={{height:"2em"}} class="form-control" min="0"></input>
                    </div>                 
                    
                    <div class="form-group">
    <label for="exampleFormControlFile1" style={{fontSize:"1.1em",marginRight:"20em"}}>Cake Image:</label>
         <input type="file"   name="image" style={{ height: "2em" }} class="form-control-file" id="exampleFormControlFile1" onChange={(event) => {setImageSelected(event.target.files[0])}} style={{marginLeft:"17em",marginTop:"-2.4em"}}></input>
    <button  class="btn btn-link" onClick={uploadImage} style={{color:"black",backgroundColor:"#979A9A ", marginLeft:"25em",marginTop:"-3.1em"}} type="button" id="inputGroupFileAddon04">UPLOAD</button>
                    </div>
                  
  <button type="submit" class="btn btn-primary" onClick={save}>Add cake</button>
</form>  
      
            </div>
        )
    
}
export default Addcake;
