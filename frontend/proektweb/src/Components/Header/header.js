import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./header.css"
import Teddy from "./teddy-bear-png-28.png"


class Header extends Component{
    render() {

        return(
        <header>

            <nav className="navbar fixed-top navbar-expand-lg bg-danger text-white rounded-bottom">
                {/*<div className="container">*/}
                <img src={Teddy} className="navbar-brand" href="#"></img>
                {/*</div>*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="ToggleNavigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-white" to={"/"}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-white" to={"/explore"}>Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-white" to={"/mybears"}>My Bears</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand nav-link text-white" to={"/opinions"}>Opinions</Link>
                        </li>
                    </ul>
                    <form className="hov">
                        <Link className="btn btn-outline-inf border-white text-white " to={"/login"}>Log in</Link>
                    </form>

                </div>
            </nav>

        </header>
        );
    }
}
export default Header;
