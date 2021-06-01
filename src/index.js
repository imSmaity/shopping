import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';
import cData from './cData';
import Footer from './Footer';


ReactDOM.render(
	<>
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
					/>
				);
				})
			}
			</div>
			<Footer/>
		</div>
	</>,
	document.getElementById('root')
);

