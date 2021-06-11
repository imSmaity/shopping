import React from 'react';

function Images(props){
    return <img src={props.srcImg} style={{height:'170px'}} alt="Mask" className="card-img-top"></img>;

}
function Images2(props){
    return <img src={props.srcImg} style={{height:'120px'}} alt="Mask" className=""></img>;

}


export default Images;
export {Images2};