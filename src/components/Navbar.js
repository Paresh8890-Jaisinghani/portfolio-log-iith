import React from "react";
import "./Navbar.css";
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar(){


const [click,setclick] = React.useState(false);
const { loginWithRedirect } = useAuth0();
const { logout} = useAuth0();
const {isAuthenticated,user} = useAuth0();

const handleClick = () => setclick(!click);

const [color,setcolor] = React.useState(false);
const changecolor = () =>{
      if(window.scrollY>=100){
            setcolor(true);
      }
      else{
            setcolor(false);
      }
};

window.addEventListener("scroll",changecolor);


  return(
  
 <div className={color ? "header header-bg" : "header"}>

 <Link to= "/">
  <h1>
  Port<span className=" text-blue-700 font-semibold ...">folio</span>
  </h1>
 </Link>

 <ul className={click ? "nav-menu active" : "nav-menu"}>
  <li>
        <Link to="/">Home</Link>
  </li>
  <li>
        <Link to="/about">About</Link>
  </li>
  <li>
        <Link to="/skill">Skills</Link>
  </li>
  <li>
        <Link to="/project">Projects</Link>
  </li>

  {/* {isAuthenticated && 
  <li>
  <p>{user.name}</p> </li>} */}

{isAuthenticated ? 


  <li>
  {/* <Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Link> */}
      
    <Link  to="/contact">Contact</Link>
  </li>

:

  <li>
  <Link onClick={() => loginWithRedirect()}>Log In</Link>;

        {/* <Link to="/contact">Contact</Link> */}
  </li>
}



 </ul>

 <div className="hamburger" onClick={handleClick}>
  {click ? (
    <FaTimes size={20} style = {{color:"#fff"}} /> ) :(

      <FaBars size={20} style = {{color:"#fff"}} />
    )}


 </div>

</div> 
  )
    }

export default Navbar;