import { Grid } from "@material-ui/core";
import classnames from "classnames";
import React, { memo } from "react";

import { useStyles } from "./styles";

export interface ProgressBarProps {
	className?: string;
	activeStep: number;
	totalSteps: number;
	isVertical?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = memo(({ className, activeStep, totalSteps, isVertical }) => {
	const classes = useStyles();

	const activeStepCorrected = Math.min(activeStep, totalSteps - 1);
	const barLength = `${(activeStepCorrected / (totalSteps - 1)) * 100}%`;

	const barStyle = { width: barLength };

	return (
		<Grid
			className={classnames(classes.progressBar, className, isVertical && classes.vertical)}
			item
			container
			direction={isVertical ? "row" : "column"}
			justifyContent="flex-start"
			spacing={10}
			wrap="nowrap"
		>
			<Grid className="progressBar-innerContainer" container item>
				<div className="progressBar-bar">
					<div className="progressBar-activeBar" style={barStyle} />
				</div>
			</Grid>
		</Grid>
	);
});

export default ProgressBar;
