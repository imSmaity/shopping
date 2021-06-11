import React from 'react';
import Images, { Images2 } from './Images';

function Card(props)
{
    return (
        
        <div className="d-flex justify-content-center p-3 col-lg-3 col-md-4 col-6">
            <div className="card" style={{width:'22rem'}}>
                <div className="card-body">
                    <h3 className="card-title"><span>{props.cardTitle}</span></h3>
                        <Images srcImg={props.srcImg}/>
                    <a className="card-link" href={props.links}>See more</a>
                        
                </div>
            </div>
        </div>
        
    );
}

function ItemCard(props)
{
    return (
        <div className="row border-bottom border-black p-3">
            <div className="col-2">

                <a href="#"><Images2 srcImg={props.srcImg}/></a>
            </div>
            <div className="col-10">
                            
                <a href="#"><span>{props.productTitle}</span></a>
                <p>{props.price}</p>
                    
            </div>
        </div>
    );
}


export default Card;
export {ItemCard};