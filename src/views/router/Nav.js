import React from "react";
import "./nav.scss";
import {

    NavLink
} from "react-router-dom";
class Nav extends React.Component {

    render() {
        return (
            <div className="nav-bar">
                <ul className="nav-bar__list">
                    <li className="nav-bar__item" >
                        <NavLink to="/" exact={true} className={isActive =>
                            "nav-bar__link nav-bar__link--active" + (!isActive ? "nav-bar__link" : "")
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/todo" className={isActive =>
                            "nav-bar__link nav-bar__link--active" + (!isActive ? "nav-bar__link" : "")
                        } >
                            Todo
                        </NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/user" className={isActive =>
                            "nav-bar__link nav-bar__link--active" + (!isActive ? "nav-bar__link" : "")
                        } >
                            ListUser
                        </NavLink>
                        {/* <NavLink to="/about" className={({ isActive }) => (isActive ? " nav-bar__link nav-bar__link--active" : "nav-bar__link ")} >
                            About
                        </NavLink> */}
                    </li>
                </ul>
            </div>
        )
    }
}
export default Nav