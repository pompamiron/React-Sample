import { Grid, Typography, Button } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

import RecentOrders from "./RecentOrders";

export const Transactions = () => {
	return (
		<Grid item container spacing={7}>
			<Grid item container justifyContent="space-between" alignItems="center">
				<Grid item>
					<Typography variant="h3" gutterBottom>
						Transactions
					</Typography>
					<Typography variant="subtitle2">These are your recent transactions</Typography>
				</Grid>
				<Grid item>
					<Button
						sx={{ mt: { xs: 2, md: 0 } }}
						variant="contained"
						startIcon={<AddTwoToneIcon fontSize="small" />}
					>
						Create transaction
					</Button>
				</Grid>
			</Grid>
			<Grid item container>
				<RecentOrders />
			</Grid>
		</Grid>
	);
};

export default Transactions;
