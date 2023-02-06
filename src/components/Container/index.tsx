import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import React from "react";

export const useStyles = makeStyles(
	{
		root: {
			width: "100%",
			height: "100%",
			padding: "1.5rem",
		},
	},
	{
		name: "Container",
	}
);

export interface ContainerProps {
	children?: React.ReactNode;
	className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
	const classes = useStyles();

	return <div className={classnames(classes.root, className)}>{children}</div>;
};

export default Container;
