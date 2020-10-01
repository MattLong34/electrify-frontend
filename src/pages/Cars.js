import React, { Component } from "react";
import CarsCollection from "../components/CarsCollection";
import CarsCompare from "../components/CarsCompare";

const baseURL = "http://localhost:3000/vehicles";

class Cars extends Component {
	state = {
		allVehicles: [],
		carsArray: [],
		carsCompare: [],
	};

	componentDidMount() {
		fetch(baseURL)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					carsArray: data,
				})
			);
	}

	collectCars = (vehicle) => {
		const allCars = this.state.allVehicles.filter(
			(vehicle) => vehicle.category === "car"
		);
		this.setState({
			carsArray: allCars,
		});
	};

	addToCarsCompare = (vehicle) => {
		if (
			!this.state.carsCompare.find((currentCar) => currentCar.id === vehicle.id)
		) {
			this.setState({
				carsCompare: [...this.state.carsCompare, vehicle],
			});
		}
	};

	removeFromCarsCompare = (vehicle) => {
		const newCarsCompare = this.state.carsCompare.filter(
			(card) => card.id !== vehicle.id
		);
		this.setState({
			carsCompare: newCarsCompare,
		});
	};

	render() {
		return (
			<div>
				<CarsCompare
					carsArray={this.state.carsArray}
					carsCompare={this.state.carsCompare}
					addCar={this.addToCarsCompare}
					removeCar={this.removeFromCarsCompare}
				/>
				<CarsCollection
					carsArray={this.state.carsArray}
					addCar={this.addToCarsCompare}
					carsCompare={this.state.carsCompare}
				/>
			</div>
		);
	}
}

export default Cars;
