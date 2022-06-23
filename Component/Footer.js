import React from 'react'
import NavLink from "./NavLink";
function Footer() {
    return (
        <div className=footer>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="About" >About</NavLink>
            <NavLink to="Terms and Privacy" >Terms and Privacy</NavLink>
        </div>
    )
}

export default Footer;