import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	progressBar: {
		padding: "1.4rem",
		"&.activeonly": {
			"& > .progressBar-innerContainer > .progressBar-bar > .progressBar-activeBar": {
				width: "3rem",
				background: theme.palette.primary.main,
				transition: "top 0.1s linear",
			},
		},
		"& >.progressBar-innerContainer": {
			padding: 0,
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "1.7rem",
			marginLeft: "auto",
			marginRight: "auto",
			"& .progressBar-bar": {
				position: "relative",
				height: "2rem",
				width: "100%",
				background: theme.palette.primary.main,

				"& >.progressBar-activeBar": {
					position: "absolute",
					left: 0,
					top: 0,
					height: "100%",
					borderRadius: 0,
					background:
						"linear-gradient(90deg, rgba(123, 97, 255, 0.9) 0.07%, rgba(255, 235, 196, 0.9) 100.07%)",
				},
			},
		},
	},
	vertical: {
		padding: 0,
		paddingTop: "1.7rem",
		paddingBottom: "1.7rem",
		"&.activeonly": {
			"& > .progressBar-innerContainer > .progressBar-bar > .progressBar-activeBar": {
				width: "100%",
				height: "3rem",
			},
		},
		"& >.progressBar-innerContainer": {
			height: "100%",
			width: "1.9rem",
			marginLeft: 0,
			marginRight: 0,

			"& .progressBar-bar": {
				width: "0.5rem",
				height: "100%",

				"& >.progressBar-activeBar": {
					width: "100%",
					background:
						"linear-gradient(180deg, rgba(123, 97, 255, 0.9) 0.07%, rgba(255, 235, 196, 0.9) 100.07%)",
				},
			},
			"& .progressBar-labelContainer .stepLabel": {
				marginTop: "-0.75rem",
				marginLeft: "10%",
			},
		},
	},
}));
