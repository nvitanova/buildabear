import React, {Component} from 'react';
import {Link, useHistory} from "react-router-dom";


const additionsAdd  = (props) => {
    const history=useHistory();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const addOn =  {
            "type": event.target.additiontype.value,
            "color": event.target.color.value,

        }
        props.onSave(addOn);
        history.push("/mybears/add");

    }
     const resetForm = () => {
        document.getElementById("type").value="";
        document.getElementById("color").value="";
    }



        return (
            <div className="container">
                <form className="card-header bg-danger rounded-bottom" id="add-form" onSubmit={handleSubmit}>
                    <h4 className="text-upper text-left">Add Additions</h4>
                    <div className="form-group row">
                        <label className="col-sm-4 offset-sm-1 text-left">type</label>
                        <div className="col-sm-6">
                            <input name="additiontype" type="text" className="form-control" id="type"
                                   placeholder="Type"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="animal" className="col-sm-4 offset-sm-1 text-left">Color</label>
                        <div className="col-sm-6">
                            <input name="color" type="text" className="form-control" id="color"
                                   placeholder="Color"/>
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
                                    className="btn btn-warning text-upper" type="button" onClick={resetForm}>
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

}
export default additionsAdd;