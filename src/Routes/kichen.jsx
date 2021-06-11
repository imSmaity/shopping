import React from 'react';
import Head from './component/Head';
import {ItemCard} from './component/Card';
import Navbar from './component/Navbar';
import {kichenCData} from './component/cData';

const Kichen = () =>{
    return ( 
        <>    
            <Head/>           {/*............Component*/}
            <Navbar/>			 {/*............Component*/}

            {
                kichenCData.map((val,index)=>{
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

export default Kichen;