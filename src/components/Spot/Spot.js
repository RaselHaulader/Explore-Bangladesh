import React, { useEffect } from 'react';
import './Spot.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Spot = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    const { spot, img, location, duration, cost, distance } = props.spot
    return (
        <div className="col" data-aos="fade-right"  data-aos-anchor-placement="bottom-bottom" >
            <div className="card h-100 spot">
                <div className="overflow-hidden w-100">
                <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="spot-info">
                        <h4 className="card-title">{spot}</h4>
                        <p><i className="fas fa-map-marker-alt"></i>  {location}</p>
                        <p><i className="fas fa-road"></i> from Dhaka {distance} km</p>
                        <p><i className="far fa-clock"></i> {duration} days plan</p>
                        <p><i className="fas fa-coins"></i> {cost} BDT</p>
                    </div>
                    <div>
                        <button className="add-btn" onClick={() => props.handleTotal(props.spot)}>Add to wishlist  <i className="fas fa-heart heart-icon"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spot;