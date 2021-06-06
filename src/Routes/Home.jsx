import React from 'react';
import cData from './component/cData';
import Head from './component/Head';
import Navbar from './component/Navbar';
import Carousel from './component/Carousel';
import Card from './component/Card';
import Footer from './component/Footer';

const Home = () =>{
    return ( 
        <div className="bg-warning bg-gradient" id="homePage" style={{fontFamily: 'KoHo sans-serif'}}>
                
            <Head/>           {/*............Component*/}
            <Navbar/>			 {/*............Component*/}
            <Carousel/>				 {/*............Component*/}
            <div className="row" style={{marginTop:'10px'}}>
            {
                cData.map((val,index)=>{
                return (
                    <Card
                        key={val.id}
                        srcImg={val.srcImg}
                        cardTitle={val.cardTitle}
                        links={val.links}
                    />
                );
                })
            }
            </div>
            <Footer/>
        </div>
    );
}
export default Home;