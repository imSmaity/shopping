import React from 'react';

const Footer=()=>{
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="col-12 p-3" style={{backgroundColor:'rgb(28, 35, 65)'}}>
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-4">
                            <h5 className="text-uppercase text-white">Get to Know Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="">About Us</a></li>
                                <li><a href="">Shopping Cares</a></li>
                                <li><a href="">Gift a Smile</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h5 className="text-uppercase text-white">Connect with Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="">Facebook</a></li>
                                <li><a href="">Twitter</a></li>
                                <li><a href="">Instagram</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h5 className="text-uppercase text-white">Let Us Help You</h5>
                            <ul className="list-unstyled">
                                <li><a href="">COVID-19 and Shop.IN</a></li>
                                <li><a href="">Your Account</a></li>
                                <li><a href="">Returns Centre</a></li>
                                <li><a href="">100% Purchase Protection</a></li> 
                                <li><a href="">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center bg-black text-white"  style={{backgroundColor:'black'}}> © 1996-2021 </div>
        </footer>
    );
}
export default Footer;