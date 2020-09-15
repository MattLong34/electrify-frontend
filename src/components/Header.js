import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      [theme.breakpoints.down('xs')]: {
        flexGrow: 1
      },
      headerOptions: {
          display: "flex",
          flex: 1,
          justifyContent: "space-evenly"
      }
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Electrify
          </Typography>
            <div>
                { isMobile ? (
                <>
                <IconButton 
                     edge="start" 
                     className={classes.menuButton} 
                     color="inherit" 
                     aria-label="menu" 
                     onClick={handleMenu}
                     >
                 <MenuIcon />
               </IconButton>
                   <Menu
                     id="menu-appbar"
                     anchorEl={anchorEl}
                     anchorOrigin={{
                       vertical: 'top',
                       horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                       vertical: 'top',
                       horizontal: 'right',
                     }}
                     open={open}
                     onClose={handleClose}
                   >
                     <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                     <MenuItem onClick={handleClose} component={Link} to="/">Cars</MenuItem>
                     <MenuItem onClick={handleClose} component={Link} to="/">Trucks</MenuItem>
                     <MenuItem onClick={handleClose} component={Link} to="/">Why Electrify?</MenuItem>
                     <MenuItem onClick={handleClose} component={Link} to="/about/">About</MenuItem>
                   </Menu> 
                   </>)
                   : (
                    <div className={classes.headerOptions}>
                        <Button variant="contained" color="secondary">Cars</Button>
                        <Button variant="contained" color="secondary">Trucks</Button>
                        <Button variant="contained" color="secondary">Why Electrify?</Button>
                        <Button variant="contained" color="secondary" onClick={handleClose} component={Link} to="/about/">About Us</Button>
                    </div>
                )
            }
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
