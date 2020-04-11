import React, {Component} from 'react';
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
import BearsService from "../../Repository/axiosRepository";
import AdditionsOption from "../Additions/AdditionsOption/AdditionsOption";

class makeOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            bearName: this.props.match.params.bearName,
            date: new Date(),
            bears: []

        }


    }
    onChange = (date) => this.setState({ date })
    componentDidMount() {
        if(this.state.bearName != null) {
            document.getElementById("bear").value=this.state.bearName;
        } else {
            BearsService.loadExplore().then((res) => {
                this.setState({
                    bears: res.data
                });
            });
        }
        console.log("SOSTOJBA" + this.state.bears);
    }

    handleSubmit = (event) =>{
        event.preventDefault();

           const order = {
                "u": "natv",
                "b": event.target.bear.value,

            }



        this.props.onSave(order, this.state.date);

           this.props.history.push("/ordered")

    }
    resetForm = () => {
        if(this.state.bearName == null) {
            document.getElementById("bear").value="";
        }
    }


    render() {
        if (this.state.bearName) {
            return (
                <div className="container">
                    <form className="card-header bg-danger rounded-bottom" id="add-form" onSubmit={this.handleSubmit}>
                        <h4 className="text-upper text-left">Create Order</h4>
                        <div className="form-group row">
                            <label className="col-sm-4 offset-sm-1 text-left">Bear</label>
                            <div className="col-sm-6">
                                <input name="bear" type="text" className="form-control" id="bear"
                                       placeholder="Bear" disabled/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 offset-sm-1 text-left">Date to deliver:</label>
                            <div className="col-sm-6">
                                <DatePicker className="form-control"
                                            onChange={this.onChange}
                                            selected={this.state.date}
                                            />
                            </div>
                        </div>


                        <div className="gol">
                            <div className="form-group row">
                                <div
                                    className="offset-sm-1 col-sm-3">
                                    <button className="btn text-center fa fa-save btn-success btn-lg text-upper"
                                            type="submit">Save
                                    </button>

                                </div>
                                <div
                                    className="offset-sm-1 col-sm-3  text-center">
                                    <button
                                        className="btn btn-warning text-upper" onClick={this.resetForm}>
                                        Reset
                                    </button>

                                </div>
                                <div
                                    className="offset-sm-1 col-sm-3  text-center">
                                    <Link className="btn btn-info" to={"/mybears"}>Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>);
        } else {
            return (
                <div className="container">
                    <form className="card-header bg-danger rounded-bottom" id="add-form" onSubmit={this.handleSubmit}>
                        <h4 className="text-upper text-left">Create Order</h4>
                        <div className="form-group row">
                            <label className="col-sm-4 offset-sm-1 text-left">Bear</label>
                            <div className="col-sm-6">
                                <select name="bear" className="form-control">
                                    {this.state.bears.map((opcija)=>
                                        <AdditionsOption key = {opcija.id} opcija={opcija.name}
                                                         id={opcija.name}
                                                         color={opcija.animal}/>
                                    )}
                                </select>

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 offset-sm-1 text-left">Date to deliver:</label>


                                <div className="col-sm-6">
                                    <DatePicker className="form-control"
                                                onChange={this.onChange}
                                                selected={this.state.date}/>
                                </div>

                        </div>


                        <div className="gol">
                            <div className="form-group row">
                                <div
                                    className="offset-sm-1 col-sm-3">
                                    <button className="btn text-center fa fa-save btn-success btn-lg text-upper"
                                            type="submit">Save
                                    </button>

                                </div>
                                <div
                                    className="offset-sm-1 col-sm-3  text-center">
                                    <button
                                        className="btn btn-warning text-upper" type="button" onClick={this.resetForm}>
                                        Reset
                                    </button>

                                </div>
                                <div
                                    className="offset-sm-1 col-sm-3  text-center">
                                    <Link className="btn btn-info" to={"/mybears"}>Cancel</Link>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </form>
                </div>);

        }
    }


}
export default makeOrder;