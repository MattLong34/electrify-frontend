import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mountains from "../assets/mountains.svg";
import forest from "../assets/forest.svg";
import cloud from "../assets/cloud.svg";
import car from "../assets/eco-car.svg";

const useStyles = makeStyles({
	title: {
		position: "relative",
		bottom: 650,
		left: 350,
		borderRadius: 10,
		padding: 10,
		fontWeight: 800,
		fontSize: 32,
		backgroundColor: "#EAEBEA",
	},
});

export default function Home() {
	const classes = useStyles();

	return (
		<div>
			<Typography className={classes.title} variant="p" color="secondary">
				Your Home for Comparing Electric Vehicles
			</Typography>
			<img src={mountains} className="mountains" alt="mountain" />
			<img src={car} className="car slide-in-right" alt="moving car" />
			<img src={forest} className="forest1" alt="forest" />
			<img src={forest} className="forest2" alt="forest" />
			<hr className="hr" />
			<img src={cloud} className="cloud vibrate-1" alt="moving cloud" />
		</div>
	);
}
