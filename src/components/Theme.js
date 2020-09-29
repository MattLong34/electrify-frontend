import { createMuiTheme } from "@material-ui/core/styles";

const lightGreen = "#81c784";
const darkGreen = "#3F8D43";
const orange = "#F59300";

export default createMuiTheme({
	palette: {
		// common: {
		// 	green: `${lightGreen}`,
		// 	orange: `${orange}`,
		// 	darkGreen: `${darkGreen}`,
		// },
		primary: {
			main: `${lightGreen}`,
		},
		secondary: {
			main: `${orange}`,
		},
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			fontSize: "1.5rem",
			fontWeight: "500",
			textTransform: "none",
		},
		tabButton: {
			fontFamily: "Raleway",
			fontSize: "1.5rem",
			fontWeight: "500",
			textTransform: "none",
			borderRadius: "10px",
			marginLeft: "50px",
			marginRight: "25px",
			height: "50px",
		},
	},
});
