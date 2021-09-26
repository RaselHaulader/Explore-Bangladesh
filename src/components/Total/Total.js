import React from 'react';
import SelectedSpot from '../SelectedSpot/SelectedSpot';
import './Total.css'

const Total = (props) => {
    console.log(props);
    const { totalSpots, totalCost } = props
    return (
        <div className="p-2 total-container rounded" >
             <div className="text-center mb-5 mt-3">
              <h4>Total selected Spot: {totalSpots.length}</h4>
              <h5>Total Cost: {totalCost} TK</h5>
             </div>
            <div className="w-100">
                {totalSpots.map((item)=> <SelectedSpot key={item.spot} place={item}></SelectedSpot>)}
            </div>

        </div>
    );
};

export default Total;