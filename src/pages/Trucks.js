import React, { Component } from "react";
import TrucksCollection from "../components/TrucksCollection";
import TrucksCompare from "../components/TrucksCompare";

const baseURL = "http://localhost:3000/vehicles";

class Trucks extends Component {
	state = {
		vehicles: [],
		trucksArray: [],
		trucksCompare: [],
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

	addToTrucksCompare = (vehicle) => {
		if (
			!this.state.trucksCompare.find(
				(currentTruck) => currentTruck.id === vehicle.id
			)
		) {
			this.setState({
				trucksCompare: [...this.state.trucksCompare, vehicle],
			});
		}
	};

	//   removeFromTrucksCompare = (bot) => {
	// 		const newArmy = this.state.botArmy.filter(card => card.id !== bot.id)
	// 		this.setState({
	// 		  botArmy: newArmy
	// 		})
	// 	}

	render() {
		return (
			<div>
				<h2>Electric Trucks</h2>
				<TrucksCompare
					trucksArray={this.state.trucksArray}
					trucksCompare={this.state.trucksCompare}
					addTruck={this.addToTrucksCompare}
				/>
				<TrucksCollection
					trucksArray={this.state.trucksArray}
					addTruck={this.addToTrucksCompare}
				/>
			</div>
		);
	}
}

export default Trucks;
