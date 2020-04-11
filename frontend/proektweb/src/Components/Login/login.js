import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./../../Components/BearCard/bearcard.css"
import PasswordMask from "react-password-mask";


class Login extends Component {

    render() {
        return (
            <div className="container">
                <form className="card-header bg-danger rounded-bottom">
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Корисничко име</label>
                        <div className="col-sm-6">
                            <input name={"sound"} type="text" className="form-control" id="username"
                                   placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Пасворд</label>
                        <div className="col-sm-6">
                            <PasswordMask
                                className=" center form-control passBorder"
                                id="password"
                                name="password"
                                placeholder="Enter password"/>
                        </div>
                    </div>
                </form>

            </div>
        );

    }


}
export default Login;