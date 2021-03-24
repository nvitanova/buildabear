import React, {Component} from 'react';
import {Link} from "react-router-dom";
import BearCard from "../../BearCard/bearcard";
import axios from "axios";
import ReactPaginate from "react-paginate";



class Opinions extends Component{
    state = {

        kopcinja: {
            crud: false,
            edit: true,
            rate: false
        }
    }
    componentDidMount() {
        this.props.onOpinionsClick();
    }



    render() {

        return(
            <div className="container">
                <div className="row mt-5 d-flex justify-content-around">

                    {this.props.bears.map((bear) =>
                        <div className="col-auto" key={bear.name}>

                            <BearCard className="pb-3"  name={bear.bear.name}
                                      animal={bear.bear.animal}
                                      color={bear.bear.color}
                                      size={bear.bear.size}
                                      creator={bear.bear.creator.username}
                                      obleka={bear.bear.obleka}
                                      additions={bear.bear.additions}
                                      grade={bear.grade}
                                      kopcinja={this.state.kopcinja}/>

                        </div>
                    )}



                </div>
            </div>
        );
    }

}
export default Opinions;
