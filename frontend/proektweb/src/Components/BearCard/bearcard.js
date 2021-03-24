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

                <div className="card cardw mt-5">

                        {this.cardHeader()}
                        {this.animalBear()}
                        {this.colorBear()}
                        {this.sizeBear()}
                        <div className="row d-flex justify-content-center">
                        {this.clothesBear()}
                        {this.additionsBear()}
                        </div>
                        {this.creator()}
                        {this.grade()}
                        {this.Crud()}

                </div>

        );
    }


    cardHeader() {
        return (
            <div className="card-header bg-dark">
                <div className="row ">



                    <div className="col-md-6 font-weight-bolder text-xl-center text-white ">
                        {this.props.name}
                    </div>
                    <Link className="btn col-auto px-3 fa btn-info my-2 my-sm-0 orderBut" to={"/createOrder/" + this.props.name }><i className="">Order</i></Link>




                </div>
            </div>);
    }

    animalBear() {

        return (
            <div className="gol mt-4">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6 ">
                        Type: {this.props.animal}
                    </div>


                </div>
            </div>);
    }
    colorBear() {
        return (
            <div className="gol mt-4">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6">
                        Color: {this.props.color}
                    </div>


                </div>
            </div>);
    }
    sizeBear() {
        let sizes = ["XS", "S", "M", "L", "XL"];
        return (
                    <div className={"mt-4"}>
                    <div >Size:</div>
                    <div className=" mt-3 d-flex justify-content-around">
                        {sizes.map(item =>
                            <div className={item === this.props.size ? "rounded bg-dark text-white w-same border border-dark border-3" : "rounded w-same border border-dark border-3"}>{item}</div>
                        )}
                    </div>
                    </div>
        );
    }
    clothesBear() {

        return (
            <div className={"mt-4 col-auto "}>
                <div className={"card"}>
                    <div className={"card-header  bg-info"}>
                        Clothes:
                    </div>
                    <div className={"card-body "}>
                        {this.props.obleka.color} {this.props.obleka.type} with {this.props.obleka.decoration}
                    </div>
                </div>
            </div>
            );
    }
    additionsBear() {

        return (
            <div className={"mt-4 col-auto "}>
                <div className={"card"}>
                    <div className={"card-header text-white bg-danger"}>
                        Additions:
                    </div>
                    <div className={"card-body bg-white"}>
                        <ul >
                            {this.props.additions.map(addon =>
                                <li className={"mr-2"}>{addon.color} {addon.type}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            );
    }

    grade() {
       if (this.props.kopcinja.rate === true) {
           return (
               <div className="gol card-body">

                   <div className="">
                       <Link className="btn fa fa-star btn-outline-danger my-2 my-sm-0"
                             to={"/opinions/" + this.props.name + "/rate"}><i className="">Rate</i></Link>
                   </div>
               </div>);
       } else if(this.props.kopcinja.edit === true){
           return (
               <div className="gol card-body">
                   <div className="">
                       <div className="">
                       <div className="">
                           <div >My Grade:</div>
                           <StarRatings starDimension="30px"
                                        starSpacing="6px"
                                        starRatedColor="red"
                                        rating={this.props.grade}/>
                       </div>
                   </div>
                   </div>
                   <div className="mt-3">
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
                <div className="">
                    <div className="">
                        <div className="mt-3">
                            <div className="">
                                <Link className="btn fa fa-plus btn-outline-danger my-2 ml-2 my-sm-0" to={"/mybears/add"}><i className=""/></Link>
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
            <div className="mt-4 gol">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6">
                        Creator: {this.props.creator}
                    </div>


                </div>

            </div>);
    }
}





export default BearCard;