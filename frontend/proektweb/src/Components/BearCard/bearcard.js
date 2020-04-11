import React, {Component} from 'react';
import Moment from "react-moment";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./bearcard.css"
import AdditionsOption from "../Additions/AdditionsOption/AdditionsOption";
import qs from "qs";
import axios from "axios";


class BearCard extends Component {
    handleAdditions = (additions) => {
        // debugger;
        // console.log(additions);

        return( additions.map(addon =>
            <div key={addon.id} className="border border-info">
            <div >

                Type: {addon.type}

            </div>
                <div>

                    Color: {addon.color}
                </div>
            </div>
        ));
    }
    render() {

        return (

                <div className="card cardw">
                    <div>
                        {this.cardHeader()}
                        {this.animalBear()}
                        {this.colorBear()}
                        {this.sizeBear()}
                        {this.clothesBear()}
                        {this.additionsBear()}
                        {this.creator()}
                        {this.grade()}
                        {this.Crud()}
                        <hr/>
                    </div>
                </div>

        );
    }


    cardHeader() {
        return (
            <div className="card-header bg-danger">
                <div className="row ">



                    <div className="col-md-6 font-weight-bolder text-xl-center text-white ">
                        {this.props.name}
                    </div>
                    <Link className="btn fa btn-info my-2 my-sm-0 orderBut" to={"/createOrder/" + this.props.name }><i className="">Order</i></Link>




                </div>
            </div>);
    }

    animalBear() {

        return (
            <div className="gol">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6 ">
                        Type: {this.props.animal}
                    </div>


                </div>
            </div>);
    }
    colorBear() {
debugger;
        return (
            <div className="gol">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6">
                        Color: {this.props.color}
                    </div>


                </div>
            </div>);
    }
    sizeBear() {

        return (
            <div className="gol">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6">
                        Size: {this.props.size}
                    </div>


                </div>
            </div>);
    }
    clothesBear() {

        return (
            <div className="gol">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6">
                        Clothes:
                        <div className="border border-info">
                            {this.props.obleka.color} {" "}
                            {this.props.obleka.type} {" "}
                            with {" "}
                            {this.props.obleka.decoration}
                        </div>
                    </div>


                </div>
            </div>);
    }
    additionsBear() {

        return (
            <div className="gol">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6">

                        Add-ons: {this.handleAdditions(this.props.additions)}
                    </div>


                </div>
            </div>);
    }

    grade() {
       if (this.props.kopcinja.rate === true) {
           return (
               <div className="gol">

                   <div className="">
                       <Link className="btn fa fa-star btn-outline-danger my-2 my-sm-0"
                             to={"/opinions/" + this.props.name + "/rate"}><i className="">Rate</i></Link>
                   </div>
               </div>);
       } else if(this.props.kopcinja.edit === true){
           return (
               <div className="gol">
                   <div className="d-flex justify-content-around">
                       <div className="row d-flex justify-content-around border border-danger w-75">
                       <div className="col-md-6">
                           Grade: {this.props.grade}
                           <StarRatings starDimension="20px"
                                        starSpacing="3px"
                                        starRatedColor="red"
                                        rating={this.props.grade}/>
                       </div>



                   </div>
                   </div>




                   <div className="row d-flex justify-content-center">
                       <Link className="btn fa fa-star btn-outline-danger my-2 my-sm-0"
                             to={"/opinions/" + this.props.name + "/editOpinion"}><i className="">Edit</i></Link>
                       <Link className="btn text-center fa fa-trash btn-outline-danger text-upper " to={"/opinions/" + this.props.name + "/delete"}>Delete</Link>
                   </div>
               </div>);
       }

    }
    Crud() {
        if (this.props.kopcinja.crud === true){
            return (
                <div className="gol">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-6">
                            <div className="">
                                <Link className="btn fa fa-plus btn-outline-danger my-2 my-sm-0" to={"/mybears/add"}><i className=""/></Link>
                                <Link className="btn fa fa-pencil btn-outline-danger my-2 my-sm-0" to={"/mybears/" + this.props.name + "/edit"}><i className=""/></Link>
                                <Link className="btn fa fa-trash btn-outline-danger my-2 my-sm-0" to={"/mybears/" + this.props.name + "/delete"}><i className=""/></Link>

                            </div>
                        </div>


                    </div>

                </div>);
        }

    }
    creator() {
        return (
            <div className="gol">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6">
                        Creator: {this.props.creator}
                    </div>


                </div>

            </div>);
    }
}





export default BearCard;