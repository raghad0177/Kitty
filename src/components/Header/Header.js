import React from "react";
import { Link } from "react-router-dom";
import logo from './82ca6be6-3cf5-474a-9e40-ca95f53d20de.jpg'; 

export default function Header() {
   return (
     <>
       <div style={{ width: "100%", backgroundColor: "teal", height: "75px", display: "flex", alignItems: "center", padding: "0 20px" }}>
         <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
           <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
           <h1 style={{ color: "white" }}>Masar</h1>
         </Link>
       </div>
     </>
   );
}
