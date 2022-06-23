import React from "react";

const NavLink =(props)=>{
    return(
        <div className="nav-link">
            -<a className="search-a" href=props.href>props.value</a>
        </div>
    )
}
export default NavLink;