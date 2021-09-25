import React, { useEffect, useState } from 'react';
import Spot from '../Spot/Spot';
import Total from '../Total/Total';

const Places = () => {
    const [spots, setSpots] = useState([])
    const [totalSpots, setTotalSpots] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])
    const handleTotal = (item) => {
        const updatedTotal = [...totalSpots, item]
        setTotalSpots(updatedTotal)
    }
    useEffect(() => {
        if (totalSpots.length) {
            let totalCost = 0
            for (const item of totalSpots) {
                totalCost += item.cost
            }
            setTotalCost(totalCost)
        }
        console.log(totalSpots);
    }, [totalSpots])
    return (
        <div>
            <div className="row w-100 p-5">
                <div className="col-md-9 col-12">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {spots.map((spot) => <Spot key={spot.spot} handleTotal={handleTotal} spot={spot}></Spot>)}
                    </div>
                </div>
                <div className="col-md-3 col-12 text-white">
                    <div className="p-2" style={{backgroundColor:'rgba(16, 198, 253, 0.595)',width:"100%"}}>
                        <h1>Total Spot: {totalSpots.length}</h1>
                        <h2>Total Cost: {totalCost}</h2>
                        <div className="w-100">
                              {totalSpots.map((item)=><Total key={item.spot} place={item}></Total>)}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;