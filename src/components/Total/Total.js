import React from 'react';

const Total = (props) => {
    const {spot, img} = props.place
    return (
        <div className="row align-items-center p-0 m-0 my-2" style={{backgroundColor:"rgba(97, 75, 151, 0.2)"}}>
            <div className="col-4">
                <img style={{width:"100%", height:"70px"}} src={img} alt="" />
            </div>
            <div className="col-5">
                <h6>{spot}</h6>
            </div>
            <div className="col-3">
             <button className="btn btn-danger">X</button>
            </div>
        </div>
    );
};

export default Total;