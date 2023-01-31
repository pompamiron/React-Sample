import { Button, Card, Grid, Box, CardContent, Typography, Tooltip, CardActionArea } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { AvatarAddWrapper, CardAddAction, ListItemAvatarWrapper } from "./styles";

export const Wallets = () => {
	return (
		<Grid item container>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				sx={{
					pb: 3,
				}}
			>
				<Typography variant="h3">Wallets</Typography>
				<Button size="small" variant="outlined" startIcon={<AddTwoToneIcon fontSize="small" />}>
					Add new wallet
				</Button>
			</Box>
			<Grid container spacing={3}>
				<Grid xs={12} sm={6} md={3} item>
					<Card
						sx={{
							px: 1,
						}}
					>
						<CardContent>
							<ListItemAvatarWrapper>
								<img alt="BTC" src="/img/logo/bitcoin.png" />
							</ListItemAvatarWrapper>
							<Typography variant="h5" noWrap>
								Bitcoin
							</Typography>
							<Typography variant="subtitle1" noWrap>
								BTC
							</Typography>
							<Box
								sx={{
									pt: 3,
								}}
							>
								<Typography variant="h3" gutterBottom noWrap>
									$3,586.22
								</Typography>
								<Typography variant="subtitle2" noWrap>
									1.25843 BTC
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} sm={6} md={3} item>
					<Card
						sx={{
							px: 1,
						}}
					>
						<CardContent>
							<ListItemAvatarWrapper>
								<img alt="Ripple" src="/img/logo/ripple.png" />
							</ListItemAvatarWrapper>
							<Typography variant="h5" noWrap>
								Ripple
							</Typography>
							<Typography variant="subtitle1" noWrap>
								XRP
							</Typography>
							<Box
								sx={{
									pt: 3,
								}}
							>
								<Typography variant="h3" gutterBottom noWrap>
									$586.83
								</Typography>
								<Typography variant="subtitle2" noWrap>
									5,783 XRP
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} sm={6} md={3} item>
					<Card
						sx={{
							px: 1,
						}}
					>
						<CardContent>
							<ListItemAvatarWrapper>
								<img alt="Cardano" src="/img/logo/cardano.png" />
							</ListItemAvatarWrapper>
							<Typography variant="h5" noWrap>
								Cardano
							</Typography>
							<Typography variant="subtitle1" noWrap>
								ADA
							</Typography>
							<Box
								sx={{
									pt: 3,
								}}
							>
								<Typography variant="h3" gutterBottom noWrap>
									$54,985.00
								</Typography>
								<Typography variant="subtitle2" noWrap>
									34,985 ADA
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} sm={6} md={3} item>
					<Tooltip arrow title="Click to add a new wallet">
						<CardAddAction>
							<CardActionArea
								sx={{
									px: 1,
								}}
							>
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
