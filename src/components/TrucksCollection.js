import React from "react";
import TruckCard from "./TruckCard";
import { Grid } from "@material-ui/core";

function TrucksCollection(props) {
	const result = props.trucksArray.filter(
		(vehicle) => vehicle.category === "truck"
	);

	const showTrucks = result.map((truck) => {
		return (
			<TruckCard
				vehicle={truck}
				action={props.addTruck}
				trucksCompare={props.trucksCompare}
				color={
					props.trucksCompare.find((favorite) => favorite.id === truck.id)
						? "gray"
						: "primary"
				}
				iconBoolean={true}
			/>
		);
	});

	return (
		<div>
			<div>
				<Grid container spacing={6} justify="center">
					{showTrucks}
				</Grid>
			</div>
		</div>
	);
}

export default TrucksCollection;
