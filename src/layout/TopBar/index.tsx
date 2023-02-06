import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface Props {
	endNode?: ReactNode;
	startNode?: ReactNode;
	title?: string;
}

/**
 * Renders TopBar composition
 * @component TopBar
 */
export const TopBar: FunctionComponent<Props> = ({ endNode, startNode, title = "", ...restOfProps }) => {
	return (
		<AppBar component="div" {...restOfProps}>
			<Toolbar disableGutters sx={{ paddingX: 1 }}>
				<Grid item container alignItems="center" justifyContent="space-between">
					<Grid item>{startNode}</Grid>
					<Grid item>
						<Grid item container alignItems="center" spacing={4}>
							<Grid item>
								<Typography
									variant="h6"
									sx={{
										textAlign: "center",
										whiteSpace: "nowrap",
									}}
								>
									{title}
								</Typography>
							</Grid>
							<Grid item>{endNode}</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
