import { Button, Card, Grid, Box, CardContent, Typography, Tooltip, CardActionArea } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { AvatarAddWrapper, CardAddAction, ListItemAvatarWrapper } from "./styles";
import { asset } from "./types";
interface WalletsProps {
	assets: asset[];
}

export const Wallets: React.FC<WalletsProps> = ({ assets }) => {
	return (
		<Grid item container>
			<Grid justifyContent="space-between" alignItems="center" item container sx={{ pb: 3 }}>
				<Grid item>
					<Typography variant="h3">Wallets</Typography>
				</Grid>
				<Grid item>
					<Button size="small" variant="outlined" startIcon={<AddTwoToneIcon fontSize="small" />}>
						Add new wallet
					</Button>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				{assets.slice(0, 3).map(({ alt, name, logo, value, amount }) => (
					<Grid xs={12} sm={6} md={3} item key={alt}>
						<Card sx={{ px: 1 }}>
							<CardContent>
								<ListItemAvatarWrapper>
									<img alt={alt} src={logo} />
								</ListItemAvatarWrapper>
								<Typography variant="h5" noWrap>
									{name}
								</Typography>
								<Typography variant="subtitle1" noWrap>
									{alt}
								</Typography>
								<Box sx={{ pt: 3 }}>
									<Typography variant="h3" gutterBottom noWrap>
										{value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
									</Typography>
									<Typography variant="subtitle2" noWrap>
										{amount.toLocaleString("en-US", { style: "currency", currency: alt  })}
									</Typography>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
				<Grid xs={12} sm={6} md={3} item>
					<Tooltip arrow title="Click to add a new wallet">
						<CardAddAction>
							<CardActionArea sx={{ px: 1 }}>
								<CardContent>
									<AvatarAddWrapper>
										<AddTwoToneIcon fontSize="large" />
									</AvatarAddWrapper>
								</CardContent>
							</CardActionArea>
						</CardAddAction>
					</Tooltip>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Wallets;
