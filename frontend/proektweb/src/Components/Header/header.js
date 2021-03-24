import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./header.css"
import Teddy from "./56981bdd-2399-48f7-af87-425c71403d6c_200x200.png"


class Header extends Component{
    render() {

        return(
        <header>

            <nav className="navbar fixed-top navbar-expand-lg bg-beige text-danger">
                <div className="logo">
                    <Link to={"/"} class="mr-4"><img src={Teddy} className=""/></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="ToggleNavigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-lg-between" id="navbarSupportedContent">
                    <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-darkred" to={"/"}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-darkred" to={"/explore"}>Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-darkred" to={"/mybears"}>My Bears</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-darkred" to={"/opinions"}>Opinions</Link>
                        </li>
                    </ul>
                    </div>
                    <div className={"m-3"}>
                    <div className="hov">
                        <Link className="btn-darkred" to={"/login"}>Log in</Link>
                    </div>
                    </div>
                </div>
            </nav>

        </header>
        );
    }
}
export default Header;
