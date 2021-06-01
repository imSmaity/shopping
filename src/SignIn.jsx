import React from 'react';

const SignIn=()=>{
    return(
        <div className="modal fade" id="popUpSignin">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Sign in</h1>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label><i className="fa fa-envelope"></i> E-mail:</label>
                                <input type="text"  id="" name="email" className="form-control"/>
                            </div>
                            {/* <div className="form-group">
                                <label><i className="fa fa-user"></i> Username:</label>
                                <input type="text" name="uName" className="form-control"/>
                            </div> */}
                            <div className="form-group">
                                <label><i className="fa fa-lock"></i> Password:</label>
                                <input type="password" id="" name="pass" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label><i className="fa fa-lock"></i> Re-Enter Password:</label>
                                <input type="password" id="" name="pass2" className="form-control"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="submit" className="btn btn-danger" data-dismiss="modal">Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;