import { Grid, Button, Card, Box, CardActions, Typography, Stack, Divider, useTheme } from "@mui/material";
import { Label } from "src/components";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import TrendingDownTwoToneIcon from "@mui/icons-material/TrendingDownTwoTone";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import TrendingFlatTwoToneIcon from "@mui/icons-material/TrendingFlatTwoTone";
import { ListItemAvatarWrapper } from "./styles";
import { asset } from "./types";

interface WatchListRowProps {
	assets: asset[];
}

export const WatchListRow: React.FC<WatchListRowProps> = ({ assets }) => {
	const theme = useTheme();

	const Box1Options: ApexOptions = {
		chart: {
			animations: {
				enabled: false,
			},
			background: "transparent",
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: true,
			},
			zoom: {
				enabled: false,
			},
		},
		labels: ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		stroke: {
			curve: "smooth",
			colors: [theme.colors.primary.main],
			width: 2,
		},
		yaxis: {
			show: false,
		},
		colors: [theme.colors.primary.main],
		grid: {
			padding: {
				top: 10,
				right: 5,
				bottom: 10,
				left: 5,
			},
		},
		theme: {
			mode: theme.palette.mode,
		},
		tooltip: {
			fixed: {
				enabled: true,
			},
			x: {
				show: true,
			},
			y: {
				title: {
					formatter: function () {
						return "Price: $";
					},
				},
			},
			marker: {
				show: false,
			},
		},
	};

	const trendIconMapping = (percentageChange: number) => {
		if (percentageChange >= 1) {
			return (
				<TrendingUpTwoToneIcon
					sx={{
						color: `${theme.colors.success.main}`,
					}}
				/>
			);
		} else if (percentageChange <= -1) {
			return (
				<TrendingDownTwoToneIcon
					sx={{
						color: `${theme.colors.error.main}`,
					}}
				/>
			);
		}
		return (
			<TrendingFlatTwoToneIcon
				sx={{
					color: `${theme.colors.warning.main}`,
				}}
			/>
		);
	};

	return (
		<Grid item container>
			<Card>
				<Stack
					direction="row"
					justifyContent="space-evenly"
					alignItems="stretch"
					divider={<Divider orientation="vertical" flexItem />}
					spacing={0}
				>
					{assets.slice(0, 3).map(({ alt, name, logo, percentage, changePercentage, chartData, value }) => (
						<Grid item container xs={12} md={4} sx={{ padding: "1.5rem" }}>
							<Grid item container alignItems="flex-start" justifyContent="space-between">
								<Grid item>
									<Grid container alignItems="center">
										<ListItemAvatarWrapper>
											<img alt={alt} src={logo} />
										</ListItemAvatarWrapper>
										<Grid item>
											<Typography variant="h4" noWrap>
												{name}
											</Typography>
											<Typography variant="subtitle1" noWrap>
												{alt}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid item>
									<Label color="secondary">24h</Label>
								</Grid>
							</Grid>
							<Grid item container mt={3} alignItems="center" justifyContent="space-between">
								<Grid item>
									<Grid item container>
										<Typography variant="h2">
											{value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
										</Typography>
									</Grid>
									<Grid item container>
										<Typography variant="caption" color="success">
											<b>
												{changePercentage >= 0 && "+"}
												{changePercentage}%
											</b>
										</Typography>
									</Grid>
								</Grid>
								<Grid item>{trendIconMapping(changePercentage)}</Grid>
							</Grid>
							<Grid item container>
								<Chart
									options={Box1Options}
									series={[chartData]}
									type="line"
									height={100}
									width={"100%"}
								/>
							</Grid>
						</Grid>
					))}
				</Stack>
				<Divider />
				<CardActions
					disableSpacing
					sx={{
						p: 3,
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Button variant="outlined">View more assets</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default WatchListRow;
