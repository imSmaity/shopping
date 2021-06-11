import React from 'react';
import Head from './component/Head';
import {ItemCard} from './component/Card';
import {oxygenCData} from './component/cData';
import Navbar from './component/Navbar';


const Oxygen = () =>{
    return ( 
        <>    
            <Head/>           {/*............Component*/}
            <Navbar/>			 {/*............Component*/}

            {
                oxygenCData.map((val,index)=>{
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

export default Oxygen;