import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// add others from core next to Grid below?
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

export default function VehicleCard(props) {
    const { vehicle } = props
    const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={6} justify="center">
            <Grid direction="row" alignItems="center" item xs={12} sm={3}>
                <Card elevation={5} className={classes.root}>
                {/* <Typography gutterBottom variant="h5" component="h2">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                    </Typography> */}
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        component="img"
                        alt={vehicle.model}
                        height="140"
                        // image={AstonMartinRapideE}
                        image={vehicle.link}
                        title={vehicle.model}
                        justify="center"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                {vehicle.year}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {vehicle.make} {vehicle.model}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Starting Price: <span className={classes.bold}>{vehicle.price}</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Maximum Range: <span className={classes.bold}>{vehicle.range}</span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Best 0 to 60: <span className={classes.bold}>{vehicle.toSixty}</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Grid container justify="flex-end" alignItems="flex-end">    
                        <Fab className={classes.fab} size="medium" color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}
