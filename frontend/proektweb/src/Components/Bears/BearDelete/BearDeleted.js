import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";



class BearDeleted extends Component {
    constructor(props){
        super(props);
        this.state = {
            bearName: this.props.match.params.bearName,
            redirect: false
        }


    }

    componentDidMount() {
        this.props.onDelete(this.state.bearName);
        this.props.goBack();
        this.id = setTimeout(() => this.setState({ redirect: true }), 1000)

    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Redirect to="/mybears" />
            : <div className="container ">
                <p className="card-header bg-danger rounded-bottom">Your bear was deleted</p>
            </div>
    }




}
export default BearDeleted;