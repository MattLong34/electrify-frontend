import React from "react";
import VehicleCard from '../components/VehicleCard'

function CarsCollection (props){

//   const showCars = props.carsArray.map(car => {
//     return <VehicleCard vehicle={car} />
// })

const result = props.carsArray.filter(vehicle => vehicle.category === "car");
  
  const showCars = result.map(car => {
    return <VehicleCard vehicle={car} />
})

// collectCars = (vehicle) => {
//     const allCars = this.state.allVehicles.filter(vehicle => vehicle.category == "car")
//     this.setState({ 
//       carsArray: allCars
//     })
// }
  
    return (
      <div className="ui four column grid">
        <div className="row">
            <h2>Electric Cars</h2>
          {showCars}
        </div>
      </div>
    );
  
}

export default CarsCollection;