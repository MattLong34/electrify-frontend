import React from "react";
import TruckCard from "./TruckCard";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		maxWidth: 350,
		// minWidth: 350,
		borderRadius: 10,
		padding: 10,
		// margin: '30px',
		// flexGrow: 1,
	},
	card: {
		borderRadius: 10,
		padding: 10,
		justifyContent: "center",
		maxWidth: 330,
	},
	media: {
		borderRadius: 10,
		// maxWidth: 310,
		// minWidth: 310,
		margin: "auto",
	},
	bold: {
		fontWeight: 800,
	},
	button: {
		// textAlign: "center"
	},
	fab: {
		position: "absolute",
	},
	compareBin: {
		paddingTop: 10,
		paddingBottom: 50,
		marginTop: 30,
		marginBottom: 30,
		backgroundColor: "#B9DFBB",
	},
	title: {
		// position: "relative",
		// bottom: 650,
		// left: 350,
		borderRadius: 10,
		// marginBottom: 50,
		padding: 10,
		fontWeight: 800,
		fontSize: 32,
		// color: "#337136",
		backgroundColor: "#EAEBEA",
		// border: "1px solid black",
	},
});

function TrucksCompare(props) {
	const classes = useStyles();

	const showCompareTrucks = props.trucksCompare.map((truck) => {
		return <TruckCard vehicle={truck} action={props.removeTruck} />;
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
