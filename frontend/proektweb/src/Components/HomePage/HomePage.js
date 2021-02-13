import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./../../Components/BearCard/bearcard.css"
import "./homepage.css"
import "react-datepicker/dist/react-datepicker.css";
import SlikLogo from "./My Post(2).jpg";
import Join from "./join.png";
import Create from "./create.png";
import Order from "./order.png";
import BearCard from "../BearCard/bearcard";




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
                <img src={SlikLogo} className="headImage"/>
            </div>
            <div className = "row circles d-flex justify-content-center">
                <Link to={"/register"}><img src={Join} className="orderJoinCircle mt-xl-5"/></Link>
                <Link to={"/mybears/add"}><img src={Create} className="circles"/></Link>
                <Link to={"/createOrder"}><img src={Order} className="orderJoinCircle mt-xl-5"/></Link>


            </div>

            <div className="container">
                <hr className="hline" />
                <h1 className="text-darkred">Explore some of our toys</h1>
                <hr className="hline" />
            <div className="row d-flex justify-content-around">

                {this.props.bears.map(bear =>
                    <div className="" key={bear.name}>

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
            </div>
        </div>



        );

    }


}
export default HomePage;