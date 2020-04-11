import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";



class OpinionDelete extends Component {
    constructor(props){
        super(props);
        this.state = {
            bearName: this.props.match.params.bearName,
            redirect: false
        }


    }

    componentDidMount() {
        const opinion = {
            "username": "natv",
            "name": this.state.bearName,

        }
        this.props.onDelete(opinion);
        this.id = setTimeout(() => this.setState({ redirect: true }), 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Redirect to="/" />
            : <div className="container ">
                <p className="card-header bg-danger rounded-bottom">The opinion was deleted</p>
            </div>
    }




}
export default OpinionDelete;