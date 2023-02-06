import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface asset {
	alt: string;
	name: string;
	logo: string;
	percentage: string;
	change: number;
	changePercentage: number;
	chartData: {
		name: string;
		data: number[];
	};
	value: number;
	trendingIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
}
