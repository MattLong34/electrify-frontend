import React, { Component } from "react";
import CarsCollection from '../components/CarsCollection'
// import Hero from '../components/Hero'
// import Banner from '../components/Banner'
// import {Link} from 'react-router-dom'
// import Resources from '../components/Resources'
// import FeaturedTrails from '../components/FeaturedTrails'

import AstonMartinRapideE from '../assets/AstonMartinRapideE.jpg'

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
        this.setState({ 
          carsArray: allCars
        })
    }
    
    render() {
        return <div>
            <h2>Cars Page</h2>
            <img src={AstonMartinRapideE} />
            <CarsCollection carsArray={this.state.carsArray}/>

        </div>
    }
}

export default Cars
