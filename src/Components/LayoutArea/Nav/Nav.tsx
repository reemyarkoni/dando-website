import "./Nav.css";
import {NavLink} from "react-router-dom"

function Nav(): JSX.Element {

    let activeStyle = {color : "rgb(105, 153, 93)"}

    function Style(isActive : boolean){
        return isActive ? activeStyle : undefined
    }

    return (
        <div className="Nav">
            <span className="navLinks">
            <NavLink style={ ({ isActive }) => Style(isActive)} to={"/Summer"} >סדנאות קיץ</NavLink>
            <NavLink style={ ({ isActive }) => Style(isActive)} to={"/Short"}>סדנאות הכירות</NavLink>
            <NavLink style={ ({ isActive }) => Style(isActive)} to={"/Home"}>בית</NavLink>
            </span>
        </div>
    );
}

export default Nav;
