import { Grid } from "@mui/material";
import { AccountBalance } from "./AccountBalance";
import { Wallets } from "./Wallets";
import { AccountSecurity } from "./AccountSecurity";
import { WatchList } from "./WatchList";
import { asset } from "./types";
import TrendingDownTwoToneIcon from "@mui/icons-material/TrendingDownTwoTone";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import TrendingFlatTwoToneIcon from "@mui/icons-material/TrendingFlatTwoTone";

export const Dashboards = () => {
	const assets: asset[] = [
		{
			alt: "BTC",
			name: "Bitcoin",
			logo: "/img/logo/bitcoin.png",
			percentage: "20",
			change: 500,
			changePercentage: 2.54,
			chartData: {
				name: "Bitcoin Price",
				data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16],
			},
			value: 56475.64,
			trendingIcon: TrendingUpTwoToneIcon,
		},
		{
			alt: "XRP",
			name: "Ripple",
			logo: "/img/logo/ripple.png",
			percentage: "10",
			change: -32.65,
			changePercentage: -1.22,
			chartData: {
				name: "Ethereum Price",
				data: [13, 22.09, 42.0, 71.9, 8, 11, 20],
			},
			value: 1960.65,
			trendingIcon: TrendingDownTwoToneIcon,
		},
		{
			alt: "ADA",
			name: "Cardano",
			logo: "/img/logo/cardano.png",
			percentage: "40",
			change: 369.32,
			changePercentage: 0.52,
			chartData: {
				name: "Cardano Price",
				data: [51.85, 41.77, 22.09, 42.0, 71.9, 51.84, 31.84],
			},
			value: 23.69,
			trendingIcon: TrendingFlatTwoToneIcon,
		},
		{
			alt: "ETH",
			name: "Ethereum",
			logo: "/img/logo/ethereum.png",
			percentage: "30",
			change: -12.38,
			changePercentage: -12.38,
			chartData: {
				name: "Ethereum Price",
				data: [13, 16, 14, 20, 8, 11, 20],
			},
			value: 12543.32,
			trendingIcon: TrendingDownTwoToneIcon,
		},
	];
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
				<WatchList assets={assets} />
			</Grid>
		</Grid>
	);
};

export default Dashboards;
