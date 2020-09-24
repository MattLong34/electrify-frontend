import React from "react";
import CarCard from './CarCard'
import { Grid } from '@material-ui/core';


function CarsCollection (props){

//   const showCars = props.carsArray.map(car => {
//     return <VehicleCard vehicle={car} />
// })

const result = props.carsArray.filter(vehicle => vehicle.category === "car");
  
  const showCars = result.map(car => {
    return <CarCard vehicle={car} />
})

// collectCars = (vehicle) => {
//     const allCars = this.state.allVehicles.filter(vehicle => vehicle.category == "car")
//     this.setState({ 
//       carsArray: allCars
//     })
// }
  
    return (
      <div>
        <div>
            <h2>Electric Cars</h2>
            <Grid container spacing={6} justify="center">
                {showCars}
            </Grid>
        </div>
      </div>
    );
  
}

export default CarsCollection;