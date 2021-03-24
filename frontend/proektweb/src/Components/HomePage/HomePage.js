import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./../../Components/BearCard/bearcard.css"
import "./homepage.css"
import "react-datepicker/dist/react-datepicker.css";
import SlikLogo from "./mece_org.jpg";
import Join from "./join.png";
import Create from "./create.png";
import Order from "./order.png";
import BearCard from "../BearCard/bearcard";
import More from "./more.png";




class HomePage extends Component {
    state = {

        kopcinja: {
            crud: false,
            edit: false,
            rate: true
        },
        dates: this.props.date
    }



    onChange = (date) => this.setState({ date })
    render() {
        return (


        <div className="mt-lg-5">
            <div className=" bg-light">
                <img src={SlikLogo} className="headImage d-block w-100"/>
            </div>
            <div className = "row circles d-block">
                <Link to={"/register"}><img src={Join} className=" orderJoinCircle mt-xl-5"/></Link>
                <Link to={"/mybears/add"}><img src={Create} className="circles"/></Link>
                <Link to={"/createOrder"}><img src={Order} className="orderJoinCircle mt-xl-5"/></Link>
            </div>

            <div className="container">
                <hr className="hline" />
                <h1 className="text-darkred">Explore some of our toys</h1>
                <hr className="hline" />
            <div className="row d-flex justify-content-around">

                {this.props.bears.slice(0,4).map(bear =>

                    <div className="col-auto" key={bear.name}>

                        <BearCard name={bear.name}
                                  animal={bear.animal}
                                  color={bear.color}
                                  size={bear.size}
                                  creator={bear.creator.username}
                                  obleka={bear.obleka}
                            // addOn={this.handleAdditions}
                                  additions={bear.additions}
                                  kopcinja={this.state.kopcinja}/>

                    </div>
                )}




            </div>
                <Link to={"/explore"}><img src={More} className="morePhoto mt-xl-5"/></Link>
            </div>
        </div>



        );

    }


}
export default HomePage;