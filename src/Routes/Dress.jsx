import React from 'react';
import Head from './component/Head';
import {ItemCard} from './component/Card';
import Navbar from './component/Navbar';
import {dressCData} from './component/cData';

const Dress = () =>{
    return ( 
        <>    
            <Head/>           {/*............Component*/}
            <Navbar/>			 {/*............Component*/}

            {
                dressCData.map((val,index)=>{
                    return (
                        <ItemCard                  
                            srcImg={val.srcImg}
                            productTitle={val.productTitle}
                            price={val.price}
                        />             
                    );
                })
                
            }
        </>
    );
}

export default Dress;