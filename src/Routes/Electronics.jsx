import React from 'react';
import Head from './component/Head';
import {ItemCard} from './component/Card';
import Navbar from './component/Navbar';
import {electronicsCData} from './component/cData';

const Electronics = () =>{
    return ( 
        <>    
            <Head/>           {/*............Component*/}
            <Navbar/>			 {/*............Component*/}

            {
                electronicsCData.map((val,index)=>{
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

export default Electronics;