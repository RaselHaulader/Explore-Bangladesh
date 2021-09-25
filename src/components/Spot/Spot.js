import React from 'react';

const Spot = (props) => {
    const { spot, img, location, duration, cost, distance } = props.spot
    return (
        <div className="col" >
            <div className="card h-100">
                <img src={img} style={{ height: "220px",width:"100%" }} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h3 className="card-title">{spot}</h3>
                        <p>Located in: {location}</p>
                        <p>Distance from Dhaka: {distance} km</p>
                        <p>{duration} days plan</p>
                        <p>Cost: {cost} </p>
                    </div>
                    <div>
                        <button className="btn-primary" onClick={()=>props.handleTotal(props.spot)}>Add to wishlist  <i className="fas fa-heart text-danger"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spot;