import React from 'react';
import Head from './component/Head';
import Navbar from './component/Navbar';

const Cart = () =>{
    return ( 
        <div className="bg-warning bg-gradient" id="homePage" style={{fontFamily: 'KoHo sans-serif'}}>
                
            <Head/>           {/*............Component*/}
            <Navbar/>			 {/*............Component*/}
        </div>
    );
}

export default Cart;