import { Button, Card, Box, Grid, Typography, useTheme, ListItem, ListItemText, List } from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { AvatarSuccess, ListItemAvatarWrapper } from "./styles";

export const AccountBalance = () => {
	const theme = useTheme();
	const chartOptions: ApexOptions = {
		chart: {
			background: "transparent",
			stacked: false,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			pie: {
				donut: {
					size: "50%",
				},
			},
		},
		colors: ["#ff9900", "#1c81c2", "#333", "#5c6ac0"],
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + "%";
			},
			style: {
				colors: [theme.colors.alpha.trueWhite[100]],
			},
			background: {
				enabled: true,
				foreColor: theme.colors.alpha.trueWhite[100],
				padding: 8,
				borderRadius: 4,
				borderWidth: 0,
				opacity: 0.3,
				dropShadow: {
					enabled: true,
					top: 1,
					left: 1,
					blur: 1,
					color: theme.colors.alpha.black[70],
					opacity: 0.5,
				},
			},
			dropShadow: {
				enabled: true,
				top: 1,
				left: 1,
				blur: 1,
				color: theme.colors.alpha.black[50],
				opacity: 0.5,
			},
		},
		fill: {
			opacity: 1,
		},
		labels: ["Bitcoin", "Ripple", "Cardano", "Ethereum"],
		legend: {
			labels: {
				colors: theme.colors.alpha.trueWhite[100],
			},
			show: false,
		},
		stroke: {
			width: 0,
		},
		theme: {
			mode: theme.palette.mode,
		},
	};

	const assets: {
		alt: string;
		name: string;
		logo: string;
		percentage: string;
		changes: number;
	}[] = [
		{
			alt: "BTC",
			name: "Bitcoin",
			logo: "/img/logo/bitcoin.png",
			percentage: "20",
			changes: 2.54,
		},
		{
			alt: "XRP",
			name: "Ripple",
			logo: "/img/logo/ripple.png",
			percentage: "10",
			changes: -1.22,
		},
		{
			alt: "ADA",
			name: "Cardano",
			logo: "/img/logo/cardano.png",
			percentage: "40",
			changes: 10.5,
		},
		{
			alt: "ETH",
			name: "Ethereum",
			logo: "/img/logo/ethereum.png",
			percentage: "30",
			changes: -12.38,
		},
	];

	const chartSeries = [20, 10, 40, 30];

	return (
		<Card sx={{ width: "100%" }}>
			<Grid item container sx={{ padding: "1.5rem" }} spacing={4}>
				<Grid item container md={12} lg={6} spacing={4}>
					<Grid item container>
						<Typography sx={{ pb: 3 }} variant="h4">
							Account Balance
						</Typography>
					</Grid>
					<Grid item container spacing={2}>
						<Grid item container>
							<Typography
								variant="h2"
								gutterBottom
								sx={{
									textOverflow: "ellipsis",
									overflow: "hidden",
								}}
							>
								$54,584.23
							</Typography>
						</Grid>
						<Grid item container>
							<Typography
								variant="h4"
								fontWeight="normal"
								color="text.secondary"
								sx={{
									textOverflow: "ellipsis",
									overflow: "hidden",
								}}
							>
								1.0045983485234 BTC
							</Typography>
						</Grid>

						<Grid item container>
							<AvatarSuccess sx={{ mr: 2 }} variant="rounded">
								<TrendingUp fontSize="large" />
							</AvatarSuccess>
							<Grid item>
								<Typography variant="h4">+ $3,594.00</Typography>
								<Typography variant="subtitle2" noWrap>
									this month
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item container spacing={3}>
						<Grid xs={6} item>
							<Button fullWidth variant="outlined">
								Send
							</Button>
						</Grid>
						<Grid xs={6} item>
							<Button fullWidth variant="contained">
								Receive
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item md={12} lg={6}>
					<Grid item md={12} lg={6} container justifyContent="center" alignItems="center">
						<Chart height={250} options={chartOptions} series={chartSeries} type="donut" />
					</Grid>
					<Grid item xs container display="flex" alignItems="center">
						<List disablePadding sx={{ width: "100%" }}>
							{assets.map(({ alt, name, logo, percentage, changes }) => (
								<ListItem key={alt} disableGutters>
									<ListItemAvatarWrapper>
										<img alt={alt} src={logo} />
									</ListItemAvatarWrapper>
									<ListItemText
										primary={alt}
										primaryTypographyProps={{ variant: "h5", noWrap: true }}
										secondary={name}
										secondaryTypographyProps={{
											variant: "subtitle2",
											noWrap: true,
										}}
									/>
									<Grid item container>
										<Typography align="right" variant="h4" noWrap>
											{percentage}%
										</Typography>
										<Typography variant="caption" color={changes >= 0 ? "success" : "error"}>
											{changes >= 0 && "+"}
											{changes}%
										</Typography>
									</Grid>
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	);
};

export default AccountBalance;
