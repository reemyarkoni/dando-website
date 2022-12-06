import "./Nav.css";
import {NavLink} from "react-router-dom"

function Nav(): JSX.Element {

    let activeStyle = {color : "red"}

    function Style(isActive : boolean){
        return isActive ? activeStyle : undefined
    }

    return (
        <div className="Nav">
            <span className="navLinks">
            <NavLink style={ ({ isActive }) => Style(isActive)} to={"/Home"}>Home</NavLink>
            <NavLink style={ ({ isActive }) => Style(isActive)} to={"/Short"}>Short Courses</NavLink>
            <NavLink style={ ({ isActive }) => Style(isActive)} to={"/Summer"} >Summer Courses</NavLink>
            </span>
        </div>
    );
}

export default Nav;
