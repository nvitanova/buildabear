import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./register.css"
import PasswordMask from "react-password-mask";



class Register extends Component {
    handleSubmit = (event) =>{
        event.preventDefault();


        const user =  {
            "username": event.target.username.value,
            "name": event.target.name.value,
            "last_name": event.target.lname.value,
            "password": event.target.password.value,
            "address": event.target.address.value,
            "Email": event.target.Email.value

        }
        console.log(user);
        this.props.onSave(user);
        this.props.history.push("/");

    }
    resetForm = () => {
        document.getElementById("Name").value="";
        document.getElementById("LName").value="";
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("address").value="";
        document.getElementById("email").value="";
    }

    render() {
        return (
            <div className="container">
                <form className="card-header bg-danger rounded-bottom" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Име</label>
                    <div className="col-sm-6">
                        <input name={"name"} type="text" className="form-control" id="Name"
                               placeholder="Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Презиме</label>
                    <div className="col-sm-6">
                        <input name={"lname"} type="text" className="form-control" id="LName"
                               placeholder="Last Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Корисничко име</label>
                    <div className="col-sm-6">
                        <input name={"username"} type="text" className="form-control" id="username"
                               placeholder="Username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-4 offset-sm-1 text-left">Пасворд</label>
                    <div className="col-sm-6">
                        <PasswordMask
                            className=" center form-control passBorder"
                            id="password"
                            name="password"
                            placeholder="Enter password"/>
                    </div>

                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Адреса</label>
                    <div className="col-sm-6">
                        <input name={"address"} type="text" className="form-control" id="address"
                               placeholder="Address"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left ">Е-маил</label>
                    <div className="col-sm-6">
                        <input name={"Email"} type="text" className="form-control" id="email"
                               placeholder="E-mail"/>
                    </div>
                </div>
                <div
                    className="offset-sm-1 col-sm-3">
                    <button type={"submit"} className="btn text-center fa fa-save btn-success btn-xl fa-text-height form-control" to={"/"}>Submit</button>

                </div>
                </form>
            </div>
        );

    }


}
export default Register;