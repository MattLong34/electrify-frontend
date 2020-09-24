import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Fab, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    minWidth: 350,
    borderRadius: 10,
    padding: 10
    // margin: '30px',
    // flexGrow: 1,
  },
  media: {
    borderRadius: 10,
    maxWidth: 330,
    minWidth: 330,
    margin: 'auto'
  },
  bold: {
      fontWeight: 800
  },
  button: {
    // textAlign: "center"
  },
  fab: {
    position: 'absolute',
  },
});

export default function CarCard(props) {
    const { vehicle } = props
    const classes = useStyles();

  return (
      <div className={classes.root}>
       {/* <div> */}
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            >
            <Grid item xs>
                Test Card {vehicle.model}
            </Grid>
            <Grid item xs>
                Test Card {vehicle.model}
            </Grid>

            </Grid>
    </div>
  );
}
