import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Typography, Grid } from "@mui/material";
import ViewWeekTwoToneIcon from "@mui/icons-material/ViewWeekTwoTone";
import TableRowsTwoToneIcon from "@mui/icons-material/TableRowsTwoTone";
import { WatchListColumn } from "./WatchListColumn";
import { WatchListRow } from "./WatchListRow";
import { asset } from "./types";

interface WatchListProps {
	assets: asset[];
}

export const WatchList: React.FC<WatchListProps> = ({ assets }) => {
	const [tabs, setTab] = useState<"watch_list_columns" | "watch_list_rows">("watch_list_columns");

	return (
		<Grid item container>
			<Grid item container alignItems="center" justifyContent="space-between" sx={{ pb: 3 }}>
				<Typography variant="h3">Watch List</Typography>
				<ToggleButtonGroup value={tabs} exclusive>
					<ToggleButton disableRipple onClick={() => setTab("watch_list_columns")} value="watch_list_columns">
						<ViewWeekTwoToneIcon />
					</ToggleButton>
					<ToggleButton disableRipple onClick={() => setTab("watch_list_rows")} value="watch_list_rows">
						<TableRowsTwoToneIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Grid>
			<Grid item container>
				{tabs === "watch_list_columns" && <WatchListColumn assets={assets} />}
				{tabs === "watch_list_rows" && <WatchListRow assets={assets} />}
			</Grid>
		</Grid>
	);
};

export default WatchList;
