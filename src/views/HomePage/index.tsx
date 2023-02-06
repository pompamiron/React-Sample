import React from "react";
import { Grid } from "@mui/material";
import { Dashboards } from "../Dashboards";

export const HomePage: React.FC = () => {
	return (
		<Grid item container>
			<Dashboards />
		</Grid>
	);
};

export default HomePage;
