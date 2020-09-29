import React from "react";
import CarCard from "./CarCard";
import { Grid } from "@material-ui/core";

function CarsCollection(props) {
	//   const showCars = props.carsArray.map(car => {
	//     return <VehicleCard vehicle={car} />
	// })

	const result = props.carsArray.filter(
		(vehicle) => vehicle.category === "car"
	);

	const showCars = result.map((car) => {
		return <CarCard vehicle={car} />;
	});

	// collectCars = (vehicle) => {
	//     const allCars = this.state.allVehicles.filter(vehicle => vehicle.category == "car")
	//     this.setState({
	//       carsArray: allCars
	//     })
	// }

	return (
		<div>
			<div>
				<div>
					<h2>Electric Cars</h2>
					{/* <h4>Add cars to compare them!</h4>
					<h5>
						Grid with gray (light orange? light green?) background, adding cars
						populates them here, plus button turns into red x button, need a
						clear all button as well.
					</h5> */}
				</div>
				<Grid container spacing={6} justify="center">
					{showCars}
				</Grid>
			</div>
		</div>
	);
}

export default CarsCollection;
