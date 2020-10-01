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
			(vehicle) => vehicle.category === "truck"
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

	removeFromTrucksCompare = (vehicle) => {
		const newTrucksCompare = this.state.trucksCompare.filter(
			(card) => card.id !== vehicle.id
		);
		this.setState({
			trucksCompare: newTrucksCompare,
		});
	};

	render() {
		return (
			<div>
				<TrucksCompare
					trucksArray={this.state.trucksArray}
					trucksCompare={this.state.trucksCompare}
					addTruck={this.addToTrucksCompare}
					removeTruck={this.removeFromTrucksCompare}
				/>
				<TrucksCollection
					trucksArray={this.state.trucksArray}
					addTruck={this.addToTrucksCompare}
					trucksCompare={this.state.trucksCompare}
				/>
			</div>
		);
	}
}

export default Trucks;
