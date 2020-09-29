import React from "react";
import CarCard from "./CarCard";
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

function CarsCompare(props) {
	const classes = useStyles();

	const showCompareCars = props.carsCompare.map((car) => {
		return (
			<CarCard
				vehicle={car}
				action={props.removeCar}
				carsCompare={props.carsCompare}
				color="secondary"
				iconBoolean={false}
			/>
		);
	});

	return (
		<div>
			<Typography className={classes.title} variant="p" color="secondary">
				Electric Cars
			</Typography>
			<div className={classes.compareBin}>
				<h2>Add Electric Cars to Compare</h2>
				<Grid container spacing={6} justify="center">
					{showCompareCars}
				</Grid>
			</div>
		</div>
	);
}

export default CarsCompare;
