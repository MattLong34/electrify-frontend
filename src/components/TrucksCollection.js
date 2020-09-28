import React from "react";
import TruckCard from "./TruckCard";
import { Grid } from "@material-ui/core";

function TrucksCollection(props) {
	//   const showCars = props.carsArray.map(car => {
	//     return <VehicleCard vehicle={car} />
	// })

	const result = props.trucksArray.filter(
		(vehicle) => vehicle.category === "truck"
	);

	const showTrucks = result.map((truck) => {
		return <TruckCard vehicle={truck} />;
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
				<h2>Electric Trucks</h2>
				<Grid container spacing={6} justify="center">
					{showTrucks}
				</Grid>
			</div>
		</div>
	);
}

export default TrucksCollection;
