import React, { Component } from "react";
import CarsCollection from '../components/CarsCollection'

const baseURL = "http://localhost:3000/vehicles"

class Cars extends Component {
    
    state = {
        allVehicles: [],
        carsArray: [],
    }
    
    componentDidMount() {
        fetch(baseURL)
        .then(response => response.json())
        .then(data => this.setState({
            carsArray: data
        }))
    }

    collectCars = (vehicle) => {
        const allCars = this.state.allVehicles.filter(vehicle => vehicle.category == "car")
        // const allCars = this.state.carsArray.filter(vehicle => vehicle.category == "car")
        this.setState({ 
          carsArray: allCars
        })
    }
    
    render() {
        return <div>
            <CarsCollection carsArray={this.state.carsArray}/>
        </div>
    }
}

export default Cars
