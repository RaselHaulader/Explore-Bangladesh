import React, { useEffect, useState } from 'react';
import Spot from '../Spot/Spot';
import Total from '../Total/Total';
import './Places.css';

const Places = () => {
    // contain all spots from server by fetching data
    const [spots, setSpots] = useState([]);
    //contain selected spots 
    const [selectedSpots, setSelectedSpots] = useState([]);
    // contain total cost of selected spots
    const [totalCost, setTotalCost] = useState(0);

    // load data by fetching
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setSpots(data))
    }, []);

    // handle selected spots by click add to wish list
    const handleTotal = (item) => {
        const checkPrevious = selectedSpots.find((spot)=> spot.spot === item.spot);
      if (!checkPrevious) {
        const updatedTotal = [...selectedSpots, item]
        setSelectedSpots(updatedTotal)
      }
    }
    // calculate total cost by click add to wishlist
    useEffect(() => {
        if (selectedSpots.length) {
            let totalCost = 0
            for (const item of selectedSpots) {
                totalCost += item.cost
            }
            setTotalCost(totalCost)
        }
    }, [selectedSpots,totalCost])
    return (
        <div>
            <div className="container mt-5">
                <div className="row w-100 py-2">
                    <div className="col-md-9 col-12">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {spots.map((spot) => <Spot key={spot.spot}  handleTotal={handleTotal} spot={spot}></Spot>)}
                        </div>
                    </div>
                    <div className="col-md-3 col-12 text-white">
                        <Total totalSpots={selectedSpots} totalCost={totalCost}></Total>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;