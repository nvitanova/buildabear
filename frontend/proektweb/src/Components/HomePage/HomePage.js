import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./../../Components/BearCard/bearcard.css"
import "./homepage.css"
import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import BearCard from "../BearCard/bearcard";
import Slika from './project.png';
import Bear from './Cute Party_thumb_900x900.png'
import Cat from './catt.png'
import Site from './site1.png'



class Login extends Component {
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

<div className="container">
            <div className="sidebar">

                <div>
                <Link to={"/mybears/add"} className="btn btn-danger font-weight-bold create_kopce btn-xl"><span className="align-text-bottom">CREATE YOUR OWN BEAR</span></Link>
                </div>
                <div>
                <Link to={"/register"} className="btn btn-danger font-weight-bold create_kopce btn-xl"><span className="align-text-bottom">JOIN US</span></Link>
                </div>
                <div>
                    <Link to={"/createOrder"} className="btn btn-danger font-weight-bold create_kopce btn-xl"><span className="align-text-bottom">MAKE ORDER</span></Link>
                </div>


            </div>
    <div className="sidebar-right">
        <div className="m-5">
        <DatePicker className="m-6"
                    inline
                    Format="MM/DD/YYYY"
                    selected={this.state.dates}/>
        </div>
    </div>
    <div className="naslov">

        <div className="card-header bg-transparent rounded">
            <h1 className=""><b>WELCOME TO BUILD A BEAR ONLINE</b></h1>
        </div>
    </div>



        <div className=" m-3 card bg-light">
            <div className="row no-gutters bg-transparent">
                <div className="col-sm-6">
                    <img src={Site} className=" m-4 card-img"/>
                </div>
                <div className=" mt-4 p-3 card-body w-50 col align-self-center">
                    <h4 className="card-title text-black-50">Слон, мече или куче?</h4>
                    <p className="card-text has-text-weight-bold">Кое е вашето омилено животно? Кое животно му е омилено
                        на вашето дете?
                        <br/>
                        Овде можете да креирате плишана играчка во форма на вашите омилени животни. Мали глувчиња и огромни жирафи,
                        нашите играчки можат да бидат во која форма и боја и да посакате, и можат да имаат 6 различни
                        големини.
                    </p>
                    <Link to={"/mybears/add"} className="btn btn-primary btn-sm btn-arrow-right "><span className="align-text-bottom">Create</span></Link>
                </div>
            </div>
        </div>
    <div className=" m-3 card bg-light">
        <div className="row no-gutters bg-transparent">
            <div className="col-sm-6">
                <img src={Bear} className=" m-4 card-img"/>
            </div>
            <div className=" mt-4 p-3 card-body w-50 col align-self-center">
                <h4 className="card-title text-black-50">Нарачајте ја вашата креација</h4>

                <p className="card-text has-text-weight-bold">Дали сакате да му подарите специјална единствена
                    играчка на вашето дете?
                    <br/>
                    Сега можете да ги нарачате вашите или играчките кои ги креирале нашите корисници
                    и ние ќе ви ги доставиме до вашиот дом.

                </p>
                <Link to={"/createOrder"} className="btn btn-primary btn-sm btn-arrow-right "><span className="align-text-bottom">Order</span></Link>
            </div>
        </div>
    </div>
    <div className=" m-3 card bg-light">
        <div className="row no-gutters bg-transparent">
            <div className="col-sm-6">
                <img src={Cat} className=" m-4 card-img"/>
            </div>
            <div className=" mt-4 p-3 card-body w-50 col align-self-center">
                <h4 className="card-title text-black-50">Придружете ни се</h4>
                <p className="card-text ">Придружете ни се сега за можност да креирате свое мече и да го добиете во
                    вашиот дом.
                </p>
                <Link to={"/register"} className="btn btn-primary btn-sm btn-arrow-right "><span className="align-text-bottom">Join us</span></Link>

            </div>
        </div>
    </div>




                </div>



        );

    }


}
export default Login;