import React from "react";
import NavLink from "./NavLink";

const DestinationCard =()=>{
    return(
        <div className=DestinationCard>
            <p className="destination-title"> destination-title</p>
            <img src="images/logo.jpg" alt="BigCo Inc. logo"/>
            <p className="destination-description">description</p>
            <div>
                <NavLink href="" value="more info">More info</NavLink>
                <NavLink href="" value="book now">Book now</NavLink>
            </div>


        </div>
    )
}
export default DestinationCard;