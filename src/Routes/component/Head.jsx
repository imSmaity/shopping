import React from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';

function Head()
{
    return (
    <div className="row p-3" style={{backgroundColor:'black'}}>
        <div className="col-3">
            <h2 style={{}}><a href="home" className="text-white" style={{textDecoration: 'none'}}>Shop.IN</a></h2>
        </div>
        <div className="col-6">
            <form action="">
                <div className="input-group" align="center">
                    <input type="text" className="form-control" name="search" placeholder="Search..."/>
                    <div className="input-group-btn">
                        <button className="btn btn-default">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="col-2" >
            <button className="btn btn-outline-primary " style={{float: 'right'}} data-target="#popUpLogin" data-toggle="modal">Login</button>
            <button className="btn btn-outline-primary " style={{float: 'right',marginRight: '5px'}} data-target="#popUpSignin" data-toggle="modal">Sign in</button>
            <SignIn/>
            <LogIn/>
        </div>
        <div className="col-1" >
            <button className="btn btn-default bg-white float-right">
                <i className="fas fa-shopping-cart"></i>
            </button>
        </div>
    </div>);
}
export default Head;