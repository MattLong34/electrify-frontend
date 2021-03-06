import React from "react";
import TruckCard from "./TruckCard";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	compareBin: {
		paddingTop: 10,
		paddingBottom: 50,
		marginTop: 30,
		marginBottom: 30,
		backgroundColor: "#B9DFBB",
	},
	title: {
		borderRadius: 10,
		padding: 10,
		fontWeight: 800,
		fontSize: 32,
		backgroundColor: "#EAEBEA",
	},
});

function TrucksCompare(props) {
	const classes = useStyles();

	const showCompareTrucks = props.trucksCompare.map((truck) => {
		return (
			<TruckCard
				vehicle={truck}
				action={props.removeTruck}
				trucksCompare={props.trucksCompare}
				color="secondary"
				iconBoolean={false}
			/>
		);
	});

	return (
		<div>
			<Typography className={classes.title} variant="p" color="secondary">
				Electric Trucks
			</Typography>
			<div className={classes.compareBin}>
				<h2>Add Electric Trucks to Compare</h2>
				<Grid container spacing={6} justify="center">
					{showCompareTrucks}
				</Grid>
			</div>
		</div>
	);
}

export default TrucksCompare;
