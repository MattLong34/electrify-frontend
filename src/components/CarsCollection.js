import React from "react";
import CarCard from "./CarCard";
import { Grid } from "@material-ui/core";

function CarsCollection(props) {
	const result = props.carsArray.filter(
		(vehicle) => vehicle.category === "car"
	);

	const showCars = result.map((car) => {
		return (
			<CarCard
				vehicle={car}
				action={props.addCar}
				carsCompare={props.carsCompare}
				color={
					props.carsCompare.find((favorite) => favorite.id === car.id)
						? "gray"
						: "primary"
				}
				iconBoolean={true}
			/>
		);
	});

	return (
		<div>
			<Grid container spacing={6} justify="center">
				{showCars}
			</Grid>
		</div>
	);
}

export default CarsCollection;
