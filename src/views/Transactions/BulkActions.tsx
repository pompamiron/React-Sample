import { useState, useRef } from "react";

import { Grid, Menu, IconButton, ListItemText, ListItem, List, Typography } from "@mui/material";
import { ButtonError } from "./styles";

import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";

export const BulkActions = () => {
	const [onMenuOpen, menuOpen] = useState<boolean>(false);
	const moreRef = useRef<HTMLButtonElement | null>(null);

	const openMenu = (): void => {
		menuOpen(true);
	};

	const closeMenu = (): void => {
		menuOpen(false);
	};

	return (
		<>
			<Grid item container display="flex" alignItems="center" justifyContent="space-between">
				<Grid item container xs spacing={1} alignItems="center">
					<Grid item>
						<Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
							Bulk actions:
						</Typography>
					</Grid>
					<Grid item>
						<ButtonError startIcon={<DeleteTwoToneIcon />} variant="contained">
							Delete
						</ButtonError>
					</Grid>
				</Grid>
				<Grid item>
					<IconButton color="primary" onClick={openMenu} ref={moreRef}>
						<MoreVertTwoToneIcon />
					</IconButton>
				</Grid>
			</Grid>
			<Grid item>
				<Menu
					keepMounted
					anchorEl={moreRef.current}
					open={onMenuOpen}
					onClose={closeMenu}
					anchorOrigin={{
						vertical: "center",
						horizontal: "center",
					}}
					transformOrigin={{
						vertical: "center",
						horizontal: "center",
					}}
				>
					<List sx={{ p: 1 }} component="nav">
						<ListItem>
							<ListItemText primary="Bulk delete selected" />
						</ListItem>
						<ListItem>
							<ListItemText primary="Bulk edit selected" />
						</ListItem>
					</List>
				</Menu>
			</Grid>
		</>
	);
};

export default BulkActions;
