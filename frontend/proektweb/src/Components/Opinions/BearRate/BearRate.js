import React, {Component} from 'react';
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";
import BearCard from "../../BearCard/bearcard";



class BearRate extends Component {
    constructor(props){
        super(props);
        this.state = {
            bearName: this.props.match.params.bearName
        }


    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const rate =  {
            "user": 'natv',
            "bear": this.state.bearName,
            "grade": event.target.rating.value

        }
        console.log(rate);
        this.props.onSaveRate(rate, this.state.bearName);
        this.props.history.push("/explore");

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="container">

                <label htmlFor="amount" className=" text-center text-dark">Rating</label>
                <div className=" -align-right">
                    <input name="rating" type="number" max="5" className="fa-text-width center" id="amount"
                           placeholder="5.00"/>
                </div>
                <div className="d-flex justify-content-center p-3">
                <button className="btn text-center fa fa-save btn-success btn-lg text-upper" type="submit">Save</button>

                </div>
            </div>
            </form>
            );

    }


}
export default BearRate;