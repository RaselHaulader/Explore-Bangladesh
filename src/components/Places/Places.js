import React, { useEffect, useState } from 'react';
import Spot from '../Spot/Spot';
import Total from '../Total/Total'
import './Places.css'

const Places = () => {
    const [spots, setSpots] = useState([])
    const [selectedSpots, setSelectedSpots] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])
    const handleTotal = (item) => {
        const checkPrevious = selectedSpots.find((spot)=> spot.spot === item.spot);
        console.log(checkPrevious);
      if (!checkPrevious) {
        const updatedTotal = [...selectedSpots, item]
        setSelectedSpots(updatedTotal)
      }else{
           
      }
    }
    useEffect(() => {
        if (selectedSpots.length) {
            let totalCost = 0
            for (const item of selectedSpots) {
                totalCost += item.cost
            }
            setTotalCost(totalCost)
        }
        console.log(selectedSpots);
    }, [selectedSpots])
    return (
        <div>
            <div className="container mt-5">
                <div className="row w-100 py-2">
                    <div className="col-md-9 col-12">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {spots.map((spot) => <Spot key={spot.spot} selectedSpot={selectedSpots} handleTotal={handleTotal} spot={spot}></Spot>)}
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