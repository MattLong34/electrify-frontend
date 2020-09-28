// import React from 'react'
// // import Hero from '../components/Hero'
// // import Banner from '../components/Banner'
// // import {Link} from 'react-router-dom'
// // import Resources from '../components/Resources'
// // import FeaturedTrails from '../components/FeaturedTrails'

// import TeslaCyberTruck from '../assets/TeslaCyberTruck.jpeg'

// export default function Trucks() {
//     return (
//     <div>
//         <h2>Trucks Page</h2>
//         <img src={TeslaCyberTruck} />
//     </div>
//     )
// }

import React, { Component } from "react";
import TrucksCollection from "../components/TrucksCollection";

const baseURL = "http://localhost:3000/vehicles";

class Trucks extends Component {
	state = {
		vehicles: [],
		trucksArray: [],
	};

	componentDidMount() {
		fetch(baseURL)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					trucksArray: data,
				})
			);
	}

	collectTrucks = (vehicle) => {
		const allTrucks = this.state.vehicles.filter(
			(vehicle) => vehicle.category == "truck"
		);
		this.setState({
			trucksArray: allTrucks,
		});
	};

	render() {
		return (
			<div>
				<TrucksCollection trucksArray={this.state.trucksArray} />
			</div>
		);
	}
}

export default Trucks;
