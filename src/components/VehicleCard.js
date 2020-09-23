// import React from "react";

// function VehicleCard(props) {
//   const { vehicle } = props
  
//     return (
//       <div className="ui column">
//           <p>
//             This is a {vehicle.year} {vehicle.make} {vehicle.model} card.
//           </p>
//           <p>
//             Starting Price: {vehicle.price} - Range: {vehicle.range} - 0 to 60 in {vehicle.toSixty}
//           </p>
//       </div>
//     );
// };

// export default VehicleCard;



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// add others from core next to Grid below?
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import AstonMartinRapideE from '../assets/AstonMartinRapideE.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    minWidth: 350,
    // margin: '30px',
    // flexGrow: 1,
  }
});

export default function VehicleCard(props) {
    const { vehicle } = props

    const classes = useStyles();

  return (
    <Grid container spacing={6} justify="center">
        <Grid direction="row" alignItems="center" item xs={12} sm={3}>
            <Card elevation={5} className={classes.root}>
            {/* <Typography gutterBottom variant="h5" component="h2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                </Typography> */}
            <CardActionArea>
                <CardMedia
                component="img"
                alt={vehicle.model}
                height="140"
                // image={AstonMartinRapideE}
                image={vehicle.link}
                title={vehicle.model}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Starting Price: {vehicle.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Maximum Range: {vehicle.range}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Best 0 to 60: {vehicle.toSixty}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Add to Compare
                <AddCircleOutlineIcon />
                </Button>
                {/* <Button size="small" color="primary">
                View from Manufacturer (link)
                </Button> */}
            </CardActions>
            {/* <IconButton>
                <AddCircleOutlineIcon />
            </IconButton> */}
            </Card>
        </Grid>
        <Grid item xs={6}>
          <Card />
      </Grid>
    </Grid>

  );
}
