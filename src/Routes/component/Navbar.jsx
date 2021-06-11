function Navbar(){
    return(
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:'#001a33'}}>
                    <button type="button" className=" navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                        <span className=" navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav text-center">
                            <li className=" nav-item">
                                <a href="/" className=" nav-link"> Home </a>
                            </li>
                            <li className=" nav-item">
                                <a href="dress" className=" nav-link"> Fashion </a>
                            </li>
                            <li className=" nav-item">
                                <a href="electronics" className=" nav-link"> Electronics </a>
                            </li>
                            <li className=" nav-item">
                                <a href="#" className=" nav-link"> Customer Service </a>
                            </li>
                            <li className=" nav-item">
                                <a href="#" className=" nav-link"> Today's Deals </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
		</div>
    );
}

export default Navbar;