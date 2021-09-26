import React from 'react';
import './SelectedSpot.css'

const Total = (props) => {
    const {spot, img} = props.place
    return (
        <div className="row align-items-center p-0 m-0 my-2 selected-spot">
            <div className="col-4 p-0 m-0">
                <img className="w-100 selected-spot-img m-2"  src={img} alt="" />
            </div>
            <div className="col-5">
                <h6>{spot}</h6>
            </div>
            <div className="col-3">
             <button className="btn remove-btn">X</button>
            </div>
        </div>
    );
};

export default Total;