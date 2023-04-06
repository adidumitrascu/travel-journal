import React from "react"
import logo from "/src/assets/logo.png"

export default function Navbar() {
return (
        <nav>
           <img className="nav--logo" src={logo} /> 
           <p>my travel journal</p>
        </nav>
    )
}