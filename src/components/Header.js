import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles'

import logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  logo: {
    height: '7em',
    cursor: 'pointer'
  }
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}



export default function Header(props) {
// below not needed? connected to pushing content down
  const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="w">
        <Toolbar>
          {/* <Typography variant="h5" color="primary">Electrify</Typography> */}
          <img src={logo} className={classes.logo} alt="electrify-logo" component={Link} to="/"/>
          <Button variant="contained" color="primary" component={Link} to="/">Cars</Button>
          <Button variant="contained" color="primary">Trucks</Button>
          <Button variant="contained" color="primary">Why EV?</Button>
          <Button variant="contained" color="primary">About Us</Button>
          <Button variant="contained" color="primary">About Us</Button>

          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/">Cars</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/">Trucks</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/">Why EV?</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/about/">About Us</MenuItem>
        </Menu>
          
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {/* below pushes content down from header - not needed? */}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
