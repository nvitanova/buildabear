import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../../BearCard/bearcard.css"
import PasswordMask from "react-password-mask";
import axios from 'axios'


class AdditionsOption extends Component {


    render() {
        return (
            <option value={this.props.id}>
                {this.props.color + " " + this.props.opcija}
                </option>
        );

    }


}
export default AdditionsOption;