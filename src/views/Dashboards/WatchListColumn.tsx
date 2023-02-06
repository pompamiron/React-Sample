import { Card, Box, Typography, Avatar, Grid, alpha, useTheme, styled } from "@mui/material";
import { Label } from "src/components";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { ListItemAvatarWrapper } from "./styles";
import { asset } from "./types";

interface WatchListColumnProps {
	assets: asset[];
}

export const WatchListColumn: React.FC<WatchListColumnProps> = ({ assets }) => {
	const theme = useTheme();

	const chartOptions: ApexOptions = {
		chart: {
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
		fill: {
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: 0.1,
				inverseColors: false,
				opacityFrom: 0.8,
				opacityTo: 0,
				stops: [0, 100],
			},
		},
		colors: [theme.colors.primary.main],
		dataLabels: {
			enabled: false,
		},
		theme: {
			mode: theme.palette.mode,
		},
		stroke: {
			show: true,
			colors: [theme.colors.primary.main],
			width: 3,
		},
		legend: {
			show: false,
		},
		labels: ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		xaxis: {
			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
			tickAmount: 5,
		},
		tooltip: {
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

	return (
		<Grid container item justifyContent="center" spacing={4}>
			{assets.slice(0, 3).map(({ alt, name, logo, percentage, change, chartData, value }) => (
				<Grid item container lg={4} md={12}>
					<Card sx={{ overflow: "hidden" }}>
						<Grid item container spacing={4} sx={{ padding: "1.5rem" }}>
							<Grid item container alignItems="center">
								<Grid item>
									<ListItemAvatarWrapper>
										<img alt={alt} src={logo} />
									</ListItemAvatarWrapper>
								</Grid>
								<Grid item sx={{ textOverflow: "ellipsis", overflow: "hidden" }}>
									<Typography variant="h4" sx={{ textOverflow: "ellipsis", overflow: "hidden" }}>
										{name}
									</Typography>
									<Typography variant="subtitle1" noWrap>
										{alt}
									</Typography>
								</Grid>
							</Grid>
							<Grid item container alignItems="center" justifyContent="flex-start" sx={{ pt: 3 }}>
								<Grid item container>
									<Typography variant="h3">
										{value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
									</Typography>
								</Grid>
								<Grid item container>
									<Typography variant="caption" color="success">
										<b>
											{change >= 0 && "+"}
											{change}%
										</b>
									</Typography>
								</Grid>
							</Grid>
							<Grid item container alignItems="center" justifyContent="flex-start">
								<Label color="success">
									{change.toLocaleString("en-US", { style: "currency", currency: "USD" })}
								</Label>
								<Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
									last 24h
								</Typography>
							</Grid>
						</Grid>
						<Chart options={chartOptions} series={[chartData]} type="area" height={200} />
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default WatchListColumn;
