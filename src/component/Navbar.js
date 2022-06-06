import {Component} from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"



class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={
            searchtext:undefined,
            
        }
    }
    searchtext
    getSearchText=(event)=>{
       this.setState({
           searchtext:event.target.value
       })
    }

    componentDidMount() {
        console.log(this.props.isloggedin);
        
    }

    // logout
    logout=()=>{
       localStorage.clear()  
        window.location.href="/"
    }
    render()
    {
        console.log(this.state.isloggedin);
        return(
        <div>
            {/* #A93226 */}
          <nav className="navbar  navbar-expand-lg fixed-top navbar-light" style={{backgroundColor:"#A93226",zIndex:30}} >
                <Link to="/"><a className="navbar-brand" href="#" style={{color:"#fff" ,fontWeight:"bold",fontFamily:"sans",fontSize:"1.5rem"}}><span style={{color:"#F39898"}}>My Cake </span>Shop</a></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                
                &emsp;<div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <form className="form-inline my-2 my-lg-0" >
                    <input onChange={this.getSearchText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                   <Link to={`/search?q=${this.state.searchtext}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{color:"#fff"}} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <                 path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg></button></Link>
                    
                    {this.props.isloggedin && <Link to="/dashboard">&emsp;<button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg></button></Link>}
                    </form>
                    </li>

                    <li>{this.props.isloggedin &&<p style={{ marginLeft: "2em", fontFamily: "cursive", fontSize: "1.2em",color:"#fff" }}>{`Welcome  ${localStorage.name}`}</p>}</li>   
                  
                    &emsp;<li>{this.props.isloggedin && <Link to="/cart"><button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg></button>&emsp;&emsp;</Link>}</li>
                  
                    <li>{this.props.isloggedin && <Link to="/orderlist"><button type="button" class="btn btn-light" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    </svg></button>&emsp;&emsp;</Link>}</li>
                    
                    </ul>

                    {this.props.isloggedin && <button type="button" className="btn btn-outline-info" onClick={this.logout.bind(this)}>Logout</button>}
                  
                   {!this.props.isloggedin && <Link to="/login"><button  className="btn btn-outline-info" style={{color:"#fff"}}>Login</button></Link>} 
                
                </div>
            </nav>
        </div>
        )
    }
}
export default connect((state, props) => {
    // console.log(state);
    // alert(state.isloggedin)
    return {
      isloggedin:state["isloggedin"]}
  })(Navbar)