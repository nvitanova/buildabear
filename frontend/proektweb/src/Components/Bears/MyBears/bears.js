import React, {Component} from "react";
import {Link} from "react-router-dom";
import BearCard from "../../BearCard/bearcard";
import axios from 'axios'
import qs from "qs";
import ReactPaginate from "react-paginate";
// import ReactPaginate from 'react-paginate';

class Bears extends Component {

    state = {

        kopcinja: {
            crud: true,
            edit: false,
            rate: false
        }
    }
    componentDidMount() {
        this.props.onMyBearsClick();

    }


    render() {

        return(
            <div className="container">
                <div className=" row mt-5 d-flex justify-content-around">

                        {this.props.bears.map((bear) =>
                            <div className="col-auto" key={bear.name}>

                                <BearCard className="pb-3"  name={bear.name}
                                          animal={bear.animal}
                                          color={bear.color}
                                          size={bear.size}
                                          creator={bear.creator.username}
                                          obleka={bear.obleka}
                                          additions={bear.additions}
                                          kopcinja={this.state.kopcinja}
                                />



                            </div>
                        )}



                </div>

            </div>
        );
    }

}
export default Bears;