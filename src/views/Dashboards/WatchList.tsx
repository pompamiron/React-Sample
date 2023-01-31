import { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import ViewWeekTwoToneIcon from "@mui/icons-material/ViewWeekTwoTone";
import TableRowsTwoToneIcon from "@mui/icons-material/TableRowsTwoTone";
import WatchListColumn from "./WatchListColumn";
import WatchListRow from "./WatchListRow";

export const WatchList = () => {
	const [tabs, setTab] = useState<"watch_list_columns" | "watch_list_rows">("watch_list_columns");

	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				sx={{
					pb: 3,
				}}
			>
				<Typography variant="h3">Watch List</Typography>
				<ToggleButtonGroup value={tabs} exclusive>
					<ToggleButton disableRipple onClick={() => setTab("watch_list_columns")} value="watch_list_columns">
						<ViewWeekTwoToneIcon />
					</ToggleButton>
					<ToggleButton disableRipple onClick={() => setTab("watch_list_rows")} value="watch_list_rows">
						<TableRowsTwoToneIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			{tabs === "watch_list_columns" && <WatchListColumn />}
			{tabs === "watch_list_rows" && <WatchListRow />}
		</>
	);
};

export default WatchList;
