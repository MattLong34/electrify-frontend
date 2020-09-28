import React from "react";
// import Hero from '../components/Hero'
// import Banner from '../components/Banner'
// import {Link} from 'react-router-dom'
// import Resources from '../components/Resources'
// import FeaturedTrails from '../components/FeaturedTrails'
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import mountains from "../assets/mountains.svg";
import forest from "../assets/forest.svg";
import cloud from "../assets/cloud.svg";

export default function Home() {
	return (
		<div className="backdrop">
			<h2>Compare electric vehicles</h2>
			<h2>Find the right fit for you</h2>
			<img src={mountains} className="mountains" />
			<img src={forest} className="forest1" />
			<img src={forest} className="forest2" />
			<hr className="hr" />
			<img src={cloud} className="cloud vibrate-1" />
		</div>
	);
}
