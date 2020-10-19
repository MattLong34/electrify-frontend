import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	CssBaseline,
	useScrollTrigger,
	Fab,
	Zoom,
	Menu,
	MenuItem,
	Tabs,
	Tab,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
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
						{/* <Tab
							className={classes.tab}
							label="About Us"
							component={Link}
							to="/about/"
						/> */}
					</Tabs>

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
