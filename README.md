# Electrify

> Find and compare Electric Vehicles!

## Table of Contents

- [General Info](#general-info)
- [Intro Video](#intro-video)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Examples](#code-examples)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)
- [License](#license)

## General Info

Electrify is a full-stack application that allows the user to find and compare Electric Vehicles! A user can view electric cars and trucks currently on the market as well as those coming soon and compare them side-by-side.

Dive in and find the perfect Electric Vehicle for you! The world is surging forward. Are you?

<!-- ## Sneak Peek

![Electrify Image](https://github.com/MattLong34/electrify-frontend/src/assets/ElectrifyScreenshot.png) -->

## Intro Video

[Electrify on YouTube](https://youtu.be/nzWYBCkjfmE)

## Technologies

- HTML5
- CSS
- JavaScript
- React
- Material UI
- Flaticon
- Animista
- Ruby
- Rails
- PostgreSQL

## Setup

Electrify is live! Visit Electrify out in the wild at https://get-electrified.web.app today. No further setup required!

## Code Examples

```javaScript
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
			(vehicle) => vehicle.category == "car"
		);
		this.setState({
			carsArray: allCars,
		});
	};
```

```javascript
function CarsCollection(props) {
	const result = props.carsArray.filter(
		(vehicle) => vehicle.category === "car"
	);

	const showCars = result.map((car) => {
		return (
			<CarCard
				vehicle={car}
				action={props.addCar}
				carsCompare={props.carsCompare}
				color={
					props.carsCompare.find((favorite) => favorite.id === car.id)
						? "gray"
						: "primary"
				}
				iconBoolean={true}
			/>
		);
	});

	return (
		<div>
			<Grid container spacing={6} justify="center">
				{showCars}
			</Grid>
		</div>
	);
}
```

## Features

- View electric cars and trucks currently on the market
- View electric cars and trucks coming to market soon
- Compare electric vehicles and their stats side-by-side to find the right fit for you
- Fully responsive web-app that looks clean on all devices

## Status

Version 1.0 is complete and deployed (https://get-electrified.web.app)!

Future versions may include an expanded vehicle inventory, vehicle sort features, and UI/UX improvements.

## Inspiration

The inspiration for Electrify came from my personal interest in Electric Vehicles. EV's offer better performance and long term cost of ownership as compared to most fossil-fuel powered vehicles. Largescale EV adoption is also a massively important step in protecting the environment while also utilizing modern technology and transportation.

I built Electrify after identifying that there are very few quality resources for finding and comparing Electric Vehicles. Many EV's are still a few years away from coming to market (as of 2020), and thus they do not show up on many current car websites.

Electify is designed to be a tool that aids you in your journey of finding and comparing Electric Vehicles, whether they are currently on sale or coming to market soon.

I hope that you find using Electrify to be enjoyable and helpful!

## Contact

[Matt Long](https://www.linkedin.com/in/mattlong34/)

Feel free to contact me with any questions or suggestions!

## License

[Click to view](https://github.com/MattLong34/electrify-frontend/blob/master/LICENSE.md)
