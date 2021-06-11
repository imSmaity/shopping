import React from 'react';
import {ItemCard} from './component/Card';
import Head from './component/Head';
import Navbar from './component/Navbar';
import {masksCData} from './component/cData';

const Masks = () =>{
    return ( 
        
        <>    
            <Head/>           {/*............Component*/}
            <Navbar/>			 {/*............Component*/}

            {
                masksCData.map((val,index)=>{
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

export default Masks;