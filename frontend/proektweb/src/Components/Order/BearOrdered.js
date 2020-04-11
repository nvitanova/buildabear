import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";



class BearOrdered extends Component {
    constructor(props){
        super(props);
        this.state = {
            bearName: this.props.match.params.bearName,
            redirect: false
        }


    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 3000)

    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Redirect to="/" />
            : <div className="container ">
                <p className="card-header bg-danger rounded-bottom">Your order was saved. You can now see it on the calendar</p>
            </div>
    }




}
export default BearOrdered;