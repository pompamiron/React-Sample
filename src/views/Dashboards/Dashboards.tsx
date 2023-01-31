import { Grid } from "@mui/material";
import { AccountBalance } from "./AccountBalance";
import { Wallets } from "./Wallets";
import { AccountSecurity } from "./AccountSecurity";
import { WatchList } from "./WatchList";

export const Dashboards = () => {
	return (
		<Grid item spacing={7} container>
			<Grid item container>
				<AccountBalance />
			</Grid>
			<Grid item container spacing={7}>
				<Grid item lg={8} xs={12}>
					<Wallets />
				</Grid>
				<Grid item lg={4} xs={12}>
					<AccountSecurity />
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<WatchList />
			</Grid>
		</Grid>
	);
};

export default Dashboards;
