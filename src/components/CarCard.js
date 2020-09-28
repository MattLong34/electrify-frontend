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

const useStyles = makeStyles({
	root: {
		maxWidth: 350,
		// minWidth: 350,
		borderRadius: 10,
		padding: 10,
		// margin: '30px',
		// flexGrow: 1,
	},
	card: {
		borderRadius: 10,
		padding: 10,
		justifyContent: "center",
		maxWidth: 330,
	},
	media: {
		borderRadius: 10,
		// maxWidth: 310,
		// minWidth: 310,
		margin: "auto",
	},
	bold: {
		fontWeight: 800,
	},
	button: {
		// textAlign: "center"
	},
	fab: {
		position: "absolute",
	},
});

export default function CarCard(props) {
	const { vehicle } = props;
	const classes = useStyles();

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
				{/* <Typography gutterBottom variant="h5" component="h2">
              {vehicle.year} {vehicle.make} {vehicle.model}
          </Typography> */}
				{/* <CardActionArea> */}
				<CardMedia
					className={classes.media}
					component="img"
					alt={vehicle.model}
					height="140"
					image={vehicle.link}
					title={vehicle.model}
					// justify="center"
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
				{/* </CardActionArea> */}
				<Grid container justify="flex-end" alignItems="flex-end">
					<Fab
						className={classes.fab}
						size="medium"
						color="primary"
						aria-label="add"
					>
						<AddIcon />
					</Fab>
				</Grid>
			</Card>
		</Grid>
	);
}
