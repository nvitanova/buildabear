import React from 'react'
import "./Footer.css";
import Logo from "../Header/56981bdd-2399-48f7-af87-425c71403d6c_200x200.png"

const footer = (props) => {
return (
    <footer className="mb-0 text-white bg-darkred pt-0 mt-3 pb-0 h-50">
        <div className=" no-gutters pb-2 justify-content-center d-flex">
            <div className=" text-center">
                <div className="mt-5 text-center">

                    <a href="https://www.facebook.com/" className="text-white"><i
                        className="fa fa-facebook-f fa-2x pr-2 pt-3"></i></a>
                    <a href="https://www.twitter.com/" className="text-white"><i
                        className="fa fa-twitter fa-2x pr-2 pt-3"></i></a>
                    <a href="https://www.google.com/" className="text-white"><i className="fa fa-google fa-2x pt-3"></i></a>
                    <br/><br/>
                    <small>Copyright &copy; Build-A-Bear</small>
                </div>
            </div>



        </div>
    </footer>
);
}

export default footer