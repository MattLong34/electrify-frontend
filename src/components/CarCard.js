import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Button,
	Typography,
	Fab,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
	root: {
		maxWidth: 350,
		borderRadius: 10,
		padding: 10,
	},
	card: {
		borderRadius: 10,
		padding: 10,
		justifyContent: "center",
		maxWidth: 330,
	},
	media: {
		borderRadius: 10,
		margin: "auto",
	},
	bold: {
		fontWeight: 800,
	},
	fab: {
		position: "absolute",
	},
});

export default function CarCard(props) {
	const { vehicle, action, iconBoolean } = props;
	const classes = useStyles();

	function handleClick() {
		action(vehicle);
	}

	return (
		<Grid
			className={classes.root}
			direction="row"
			alignItems="center"
			item
			xs={12}
			sm={6}
		>
			<Card elevation={5} className={classes.card}>
				<CardMedia
					className={classes.media}
					component="img"
					alt={vehicle.model}
					height="140"
					image={vehicle.link}
					title={vehicle.model}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{vehicle.year}
					</Typography>
					<Typography gutterBottom variant="h5" component="h2">
						{vehicle.make} {vehicle.model}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Starting Price:{" "}
						<span className={classes.bold}>{vehicle.price}</span>
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Maximum Range: <span className={classes.bold}>{vehicle.range}</span>
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Best 0 to 60:{" "}
						<span className={classes.bold}>{vehicle.toSixty}</span>
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Horsepower:{" "}
						<span className={classes.bold}>{vehicle.horsePower}</span>
					</Typography>
				</CardContent>
				<Grid container justify="flex-end" alignItems="flex-end">
					<Fab
						onClick={handleClick}
						className={classes.fab}
						size="medium"
						aria-label="add"
						color={props.color}
					>
						{iconBoolean ? <AddIcon /> : <CloseIcon />}
					</Fab>
				</Grid>
			</Card>
		</Grid>
	);
}
