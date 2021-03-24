import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import axios from "axios";
import AdditionsOption from "../../Additions/AdditionsOption/AdditionsOption";
import AdditionsAdd from "../../Additions/AdditionsAdd/additionsAdd";
import ClothesAdd from "../../Clothes/ClothesAdd";
import BearsService from "../../../Repository/axiosRepository";

class BearAdd extends Component {
    constructor(props){
        super(props)
        this.state = {
            // history: useHistory(),
            additions: [],
            clothes: [],
            viewForm: false,
            whichForm: '',



        };
    }

    componentDidMount() {

        axios.get('http://localhost:8081/additions/')
            .then(res => {
                // console.log(res);
                this.setState({
                    additions: res.data,
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
            "name": event.target.bearname.value,
            "animal": event.target.animal.value,
            "color": event.target.color.value,
            "size": event.target.size.value,
            "creator": "natv",
            "additions": valueList,
            "clothes": event.target.clothes.value

        }
        console.log(bear);
        this.props.onSave(bear);
        this.props.goBack();
        this.props.history.push("/mybears");


    }
    resetForm = () => {
        document.getElementById("bearname").value="";
        document.getElementById("animal").value="";
        document.getElementById("color").value="";
        document.getElementById("size").value="";
        document.getElementById("mySelect").value="";
    }
    addAdd = () => {
        this.setState({
            viewForm: true,
            whichForm: <AdditionsAdd onSave={this.addAddition}/>
        })
    }
    clAdd = () => {
        this.setState({
            viewForm: true,
            whichForm: <ClothesAdd onSave={this.addClothes}/>
        })
    }
    addAddition = (newAddOn) => {
        BearsService.addAddition(newAddOn).then((response) => {
            const newCl = response.data;
            this.setState((prevState) => {
                const additions = prevState.additions.concat(newCl)
                return {
                    additions
                }
            });




        });

    };

    addClothes = (newCl) => {
        BearsService.addClothes(newCl).then((response) => {
            const newCl = response.data;
            this.setState((prevState) => {
                const clothes = prevState.clothes.concat(newCl)
                return {
                    clothes
                }
            });




        });
    };




    render() {
        return (
            <div className="container mt-5">
                <form className="card-header bg-danger rounded-bottom" id="add-form" onSubmit={this.handleSubmit}>
                    <h4 className="text-upper text-left">Add Bear</h4>
                    <div className="form-group row">
                        <label className="col-sm-4 offset-sm-1 text-left">Bear name</label>
                        <div className="col-sm-6">
                            <input name="bearname" type="text" className="form-control" id="bearname"
                                   placeholder="Bear name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="animal" className="col-sm-4 offset-sm-1 text-left">Animal</label>
                        <div className="col-sm-6">
                            <input name="animal"  type="text" className="form-control" id="animal"
                                   placeholder="Animal"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="color" className="col-sm-4 offset-sm-1 text-left">Color</label>
                        <div className="col-sm-6">
                            <input name="color"  type="text" className="form-control" id="color"
                                   placeholder="Color"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="size" className="col-sm-4 offset-sm-1 text-left">Size</label>
                        <div className="col-sm-6">
                            <input name="size" type="text" className="form-control" id="size"
                                   placeholder="XS, S, M, L or XL"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 offset-sm-1 text-left">Clothes</label>
                        <div className="col-md-6">
                            <select name="clothes" className="form-control">
                                {this.state.clothes.map((opcija)=>
                                    <AdditionsOption key = {opcija.id} opcija={opcija.type}
                                                     id={opcija.id}
                                                     color={opcija.color}/>
                                )}
                            </select>

                        </div>
                        <Link className="btn fa fa-female btn-success h-75" onClick={this.clAdd}>Add</Link>
                    </div>
                    <div className="form-group row">

                        <label className="col-sm-4 offset-sm-1 text-left"> Additions</label>
                        <div className="col-md-6">
                            <select name="additions" className="form-control" id="mySelect" multiple>
                                {this.state.additions.map((opcija)=>
                                    <AdditionsOption key = {opcija.id} opcija={opcija.type}
                                                    id={opcija.id}
                                                     color={opcija.color}/>
                                )}
                            </select>

                        </div>


                        <Link className="btn fa fa-puzzle-piece btn-success h-75" onClick={this.addAdd}>Add</Link>
                    </div>


                    <div className="gol">
                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3">
                            <button
                                className="btn text-center fa fa-save btn-success btn-lg text-upper"

                                type="submit">Save</button>

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
                    {(this.state.viewForm) ?
                        this.state.whichForm : ''}
                </div>

            </div>);

    }


}
export default withRouter(BearAdd);