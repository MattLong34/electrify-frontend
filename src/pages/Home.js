import React from "react";
// import Hero from '../components/Hero'
// import Banner from '../components/Banner'
// import {Link} from 'react-router-dom'
// import Resources from '../components/Resources'
// import FeaturedTrails from '../components/FeaturedTrails'
import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import mountains from "../assets/mountains.svg";
import forest from "../assets/forest.svg";
import cloud from "../assets/cloud.svg";
import car from "../assets/eco-car.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
	title: {
		position: "relative",
		bottom: 650,
		left: 350,
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

export default function Home() {
	const classes = useStyles();

	return (
		<div className="backdrop">
			<Typography className={classes.title} variant="p" color="secondary">
				Your Home for Comparing Electric Vehicles
			</Typography>
			<img src={mountains} className="mountains" />
			<img src={car} className="car slide-in-right" />
			<img src={forest} className="forest1" />
			<img src={forest} className="forest2" />
			<hr className="hr" />
			<img src={cloud} className="cloud vibrate-1" />
		</div>
	);
}
