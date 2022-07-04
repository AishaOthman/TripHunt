import React from "react";
import NavLink from "./NavLink";
import {EditDestinations} from "../Serves/firebase";
const NavSearchbar =()=>{
    return(
        <div>
            <NavLink href="" value="Flights"/>
            <NavLink href="" value="Hotels"/>
            <NavLink href="" value="CarRental"/>
            <NavLink href="" value="Plans"/>
            <NavLink href="" value="Cruse"/>
            <NavLink href="" value="Discover Nearby"/>
            <button className="btn" onClick={EditDestinations}>Edit Destinations</button>
            <form>
                <label>
                    Name:
                    <input type="text" placeholder="Search for a destination" name="search" />
                </label>
                <input type="submit" value="Search" />
            </form>
        </div>


    )
}
export default NavSearchbar;