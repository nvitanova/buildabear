import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import AdditionsOption from "../../Additions/AdditionsOption/AdditionsOption";
import Select from "react-select";
import Promise from 'react-promise'
import AdditionAdd from '../../Additions/AdditionsAdd/additionsAdd'

class BearAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            bearName: this.props.match.params.bearName,
            bearToEdit: '',
            clothes: [],
            formView: false
        }


    }

    componentDidMount() {
        let urlString='http://localhost:8081/mybears/get/bear?bear=' + this.state.bearName;
        console.log(urlString);
        axios.get(urlString)
            .then(res => {
                // console.log(res);
                this.setState({
                    bearToEdit: res.data,
                });
            })
        axios.get('http://localhost:8081/clothes/')
            .then(res => {
                console.log(res);
                this.setState({
                    clothes: res.data
                });
            })


    }
    handleSubmit = (event) =>{
        event.preventDefault();
        var valueList = [];
        var select = document.getElementById ("mySelect");
        for (let i = 0, l = select.options.length; i < l; i++) {

            if (select.options[i].selected) {
                console.log(valueList);
                valueList.push(select.options[i].value);
            }
        }


        const bear =  {
            "name": this.state.bearName,
            "animal": event.target.animal.value,
            "color": event.target.color.value,
            "size": event.target.size.value,
            "clothes": event.target.clothes.value

        }
        console.log(bear);
        this.props.onSave(bear, this.state.bearName);
        this.props.goBack();
        this.props.history.push("/mybears");

    }

    resetForm = () => {
            document.getElementById("animal").value="";
            document.getElementById("color").value="";
            document.getElementById("size").value="";

        }



    render() {
        return (
            <div className="container">
                <form className="card-header bg-danger rounded-bottom" id="add-form" onSubmit={this.handleSubmit}>
                    <h4 className="text-upper text-left">Add Bear</h4>
                    <div className="form-group row">
                        <label htmlFor="animal" className="col-sm-4 offset-sm-1 text-left">Animal</label>
                        <div className="col-sm-6">
                            <input name="animal"  type="text" className="form-control" id="animal"
                                   placeholder={this.state.bearToEdit.animal}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="color" className="col-sm-4 offset-sm-1 text-left">Color</label>
                        <div className="col-sm-6">
                            <input name="color"  type="text" className="form-control" id="color"
                                   placeholder={this.state.bearToEdit.color}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="size" className="col-sm-4 offset-sm-1 text-left">Size</label>
                        <div className="col-sm-6">
                            <input name="size" type="text" className="form-control" id="size"
                                   placeholder={this.state.bearToEdit.size}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 offset-sm-1 text-left">Clothes</label>
                        <div className="col-md-6">
                            <select id="mySelect" name="clothes" className="form-control">
                                {this.state.clothes.map((opcija)=>
                                    <AdditionsOption key = {opcija.id} opcija={opcija.type}
                                                     id={opcija.id}
                                                     color={opcija.color}/>
                                )}
                            </select>

                        </div>

                    </div>


                    <div className="gol">
                        <div className="form-group row">
                            <div
                                className="offset-sm-1 col-sm-3">
                                <button className="btn text-center fa fa-save btn-success btn-lg text-upper" type="submit">Save</button>

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
                </form>
                <div className='form-container'>
                    {(this.state.formView) ?
                        <AdditionAdd/> : ''}
                </div>
            </div>);

    }


}
export default BearAdd;