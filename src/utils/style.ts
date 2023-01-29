import { Theme } from "@mui/material/styles";

export type ColorName =
	| "default"
	| "primary"
	| "secondary"
	| "error"
	| "warning"
	| "info"
	| "success"
	| "false"
	| "true";

export const paperStyle = (theme: Theme) => ({
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(1),
	paddingLeft: theme.spacing(2),
	paddingRight: theme.spacing(2),
});

export const formStyle = (theme: Theme) => ({
	width: "100%",
	maxWidth: "40rem",
});

export const dialogStyles = (
	theme: Theme
): { xButton: any; paper: any; formControl: any; content: any; actions: any } => ({
	xButton: {
		position: "absolute",
		right: theme.spacing(0.5),
		top: theme.spacing(0.5),
	},
	paper: {
		[theme.breakpoints.up("md")]: {
			minWidth: theme.breakpoints.values.md / 2,
		},
		[theme.breakpoints.down("md")]: {
			minWidth: theme.breakpoints.values.sm / 2,
		},
	},
	formControl: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	content: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	actions: {
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
	},
});

export const filledStylesByNames = (theme: Theme) => ({
	default: {
		backgroundColor: theme.palette.grey[300],
		color: "rgba(0, 0, 0, 0.87)",
	},
	primary: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
	secondary: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
	},
	error: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.error.contrastText,
	},
	warning: {
		backgroundColor: theme.palette.warning.main,
		color: theme.palette.warning.contrastText,
	},
	info: {
		backgroundColor: theme.palette.info.main,
		color: theme.palette.info.contrastText,
	},
	success: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.success.contrastText,
	},
	false: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.error.contrastText,
	},
	true: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.success.contrastText,
	},
});

export const textStylesByNames = (theme: Theme) => ({
	default: {},
	primary: {
		color: theme.palette.primary.main,
	},
	secondary: {
		color: theme.palette.secondary.main,
	},
	error: {
		color: theme.palette.error.main,
	},
	warning: {
		color: theme.palette.warning.main,
	},
	info: {
		color: theme.palette.info.main,
	},
	success: {
		color: theme.palette.success.main,
	},
	false: {
		color: theme.palette.error.main,
	},
	true: {
		color: theme.palette.success.main,
	},
});

export const buttonStylesByNames = (theme: Theme) => ({
	default: {
		backgroundColor: theme.palette.grey[300],
		color: "rgba(0, 0, 0, 0.87)",
		"&:hover": {
			backgroundColor: theme.palette.grey[400],
			color: "rgba(0, 0, 0, 0.87)",
		},
		"&:disabled": {
			backgroundColor: theme.palette.grey[300],
			color: "rgba(0, 0, 0, 0.26)",
		},
	},
	primary: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
			color: theme.palette.primary.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.primary.light,
		},
	},
	secondary: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.secondary.dark,
			color: theme.palette.secondary.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	error: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.error.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.error.dark,
			color: theme.palette.error.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.error.light,
		},
	},
	warning: {
		backgroundColor: theme.palette.warning.main,
		color: theme.palette.warning.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.warning.dark,
			color: theme.palette.warning.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.warning.light,
		},
	},
	info: {
		backgroundColor: theme.palette.info.main,
		color: theme.palette.info.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.info.dark,
			color: theme.palette.info.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.info.light,
		},
	},
	success: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.success.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.success.dark,
			color: theme.palette.success.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.success.light,
		},
	},
	false: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.error.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.error.dark,
			color: theme.palette.error.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.error.light,
		},
	},
	true: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.success.contrastText,
		"&:hover": {
			backgroundColor: theme.palette.success.dark,
			color: theme.palette.success.contrastText,
		},
		"&:disabled": {
			backgroundColor: theme.palette.success.light,
		},
	},
});
