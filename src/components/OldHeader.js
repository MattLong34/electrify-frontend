// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Button from '@material-ui/core/Button';
// import {Link} from 'react-router-dom'

// import PropTypes from 'prop-types';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Zoom from '@material-ui/core/Zoom';

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     position: 'fixed',
// //     bottom: theme.spacing(2),
// //     right: theme.spacing(2),
// //   },
// // }));

// function ScrollTop(props) {
//   const { children, window } = props;
//   const classes = useStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//       [theme.breakpoints.down('xs')]: {
//         flexGrow: 1
//       },
//       headerOptions: {
//           display: "flex",
//           flex: 1,
//           justifyContent: "space-evenly"
//       }
//   }
// }));

// export default function OldHeader() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className={classes.root}>
//     {/* <CssBaseline /> */}
//       <AppBar position="static">
//         <Toolbar id="back-to-top-anchor">
//           <Typography variant="h6" className={classes.title}>
//             Electrify
//           </Typography>
//             <div>
//                 { isMobile ? (
//                 <>
//                 <IconButton
//                      edge="start"
//                      className={classes.menuButton}
//                      color="inherit"
//                      aria-label="menu"
//                      onClick={handleMenu}
//                      >
//                  <MenuIcon />
//                </IconButton>
//                    <Menu
//                      id="menu-appbar"
//                      anchorEl={anchorEl}
//                      anchorOrigin={{
//                        vertical: 'top',
//                        horizontal: 'right',
//                      }}
//                      keepMounted
//                      transformOrigin={{
//                        vertical: 'top',
//                        horizontal: 'right',
//                      }}
//                      open={open}
//                      onClose={handleClose}
//                    >
//                      <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
//                      <MenuItem onClick={handleClose} component={Link} to="/">Cars</MenuItem>
//                      <MenuItem onClick={handleClose} component={Link} to="/">Trucks</MenuItem>
//                      <MenuItem onClick={handleClose} component={Link} to="/">Why Electrify?</MenuItem>
//                      <MenuItem onClick={handleClose} component={Link} to="/about/">About</MenuItem>
//                    </Menu>
//                    </>)
//                    : (
//                     <div className={classes.headerOptions}>
//                         <Button variant="contained" color="secondary">Cars</Button>
//                         <Button variant="contained" color="secondary">Trucks</Button>
//                         <Button variant="contained" color="secondary">Why Electrify?</Button>
//                         <Button variant="contained" color="secondary" onClick={handleClose} component={Link} to="/about/">About Us</Button>
//                     </div>
//                 )
//             }
//             </div>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Box my={2}>
//           {[...new Array(12)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//             )
//             .join('\n')}
//         </Box>
//       </Container>
//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </div>
//   );
// }
