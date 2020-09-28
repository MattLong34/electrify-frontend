import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/tabs";
import Tab from "@material-ui/core/tab";

import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
	},
	logo: {
		height: "7em",
		cursor: "pointer",
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
	},
	tabButton: {
		...theme.typography.tabButton,
	},
}));

function ScrollTop(props) {
	const { children } = props;
	const classes = useStyles();

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor"
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" });
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
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, value) => {
		setValue(value);
	};

	const resetChange = (event, value) => {
		setValue(0);
	};

	// useEffect(() => {
	//   if (window.location.pathname === '/' && value !== 0) {
	//     setValue(0)
	//   } else if (window.location.pathname === '/cars' && value !== 1) {
	//     setValue(1)
	//   } else if (window.location.pathname === '/trucks' && value !== 2) {
	//     setValue(2)
	//   } else if (window.location.pathname === '/why-ev' && value !== 3) {
	//     setValue(3)
	//   } else if (window.location.pathname === '/about' && value !== 4) {
	//     setValue(4)
	//   }
	// }, [value])

	// let test = "primary"
	// function clearChange() {
	//   let test = "primary"
	// }

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
					<Link onClick={resetChange} to="/">
						<img
							src={logo}
							className={classes.logo}
							alt="electrify-logo"
							component={Link}
							to="/"
						/>
					</Link>
					<Tabs
						value={value}
						onChange={handleChange}
						className={classes.tabContainer}
						indicatorColor="primary"
					>
						<Tab className={classes.tab} label="Home" component={Link} to="/" />
						<Tab
							className={classes.tab}
							label="Cars"
							component={Link}
							to="/cars/"
						/>
						<Tab
							className={classes.tab}
							label="Trucks"
							component={Link}
							to="/trucks/"
						/>
						<Tab
							className={classes.tab}
							label="Why EV?"
							component={Link}
							to="/why-ev/"
						/>
						<Tab
							className={classes.tab}
							label="About Us"
							component={Link}
							to="/about/"
						/>
					</Tabs>

					<Button
						className={classes.tabButton}
						variant="contained"
						color="primary"
						component={Link}
						to="/compare/"
					>
						Compare EV's
					</Button>

					{/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></Button> */}
					{/* <MenuIcon /> */}
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose} component={Link} to="/">
							Home
						</MenuItem>
						<MenuItem onClick={handleClose} component={Link} to="/">
							Cars
						</MenuItem>
						<MenuItem onClick={handleClose} component={Link} to="/">
							Trucks
						</MenuItem>
						<MenuItem onClick={handleClose} component={Link} to="/">
							Why EV?
						</MenuItem>
						<MenuItem onClick={handleClose} component={Link} to="/about/">
							About Us
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
			<Toolbar id="back-to-top-anchor" />
			<ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
