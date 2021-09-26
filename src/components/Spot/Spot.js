import React from 'react';
import './Spot.css'

const Spot = (props) => {
    const { spot, img, location, duration, cost, distance } = props.spot
    return (
        <div className="col" >
            <div className="card h-100 spot">
                <img src={img}  className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="spot-info">
                        <h4 className="card-title">{spot}</h4>
                        <p><i className="fas fa-map-marker-alt"></i>  {location}</p>
                        <p><i className="fas fa-road"></i> from Dhaka {distance} km</p>
                        <p><i className="far fa-clock"></i> {duration} days plan</p>
                        <p><i className="fas fa-coins"></i> {cost} BDT</p>
                    </div>
                    <div>
                        <button className="add-btn" onClick={()=>props.handleTotal(props.spot)}>Add to wishlist  <i className="fas fa-heart heart-icon"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spot;