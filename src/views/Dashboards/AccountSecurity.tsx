import { useState } from "react";
import {
	Card,
	CardHeader,
	ListItemText,
	List,
	ListItem,
	Divider,
	Switch,
	ListItemAvatar,
	Avatar,
	styled,
	Typography,
} from "@mui/material";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import PhoneLockedTwoToneIcon from "@mui/icons-material/PhoneLockedTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { useStyles } from "./styles";

const AvatarWrapperError = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const AvatarWrapperWarning = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
);

export const AccountSecurity = () => {
	const classes = useStyles();
	const [checked, setChecked] = useState(["phone_verification"]);

	const handleToggle = (value: string) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<Card className={classes.card}>
			<CardHeader title="Account Security" />
			<Divider />
			<List disablePadding>
				<ListItem
					sx={{
						py: 2,
					}}
				>
					<ListItemAvatar>
						<AvatarWrapperError>
							<LockTwoToneIcon />
						</AvatarWrapperError>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant="caption" color="black">
								2FA Authentication
							</Typography>
						}
						primaryTypographyProps={{
							variant: "body1",
							fontWeight: "bold",
							color: "textPrimary",
							gutterBottom: true,
							noWrap: true,
						}}
						secondary={
							<Typography variant="caption" color="error">
								Disabled
							</Typography>
						}
						secondaryTypographyProps={{ variant: "body2", noWrap: true }}
					/>
					<Switch
						edge="end"
						color="primary"
						onChange={handleToggle("2fa")}
						checked={checked.indexOf("2fa") !== -1}
						disabled
					/>
				</ListItem>
				<Divider />
				<ListItem
					sx={{
						py: 2,
					}}
				>
					<ListItemAvatar>
						<AvatarWrapperSuccess>
							<PhoneLockedTwoToneIcon />
						</AvatarWrapperSuccess>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant="caption" color="black">
								Phone Verification
							</Typography>
						}
						primaryTypographyProps={{
							variant: "body1",
							fontWeight: "bold",
							color: "textPrimary",
							gutterBottom: true,
							noWrap: true,
						}}
						secondary={
							<Typography variant="caption" color="success">
								Active
							</Typography>
						}
						secondaryTypographyProps={{ variant: "body2", noWrap: true }}
					/>
					<Switch
						edge="end"
						color="primary"
						onChange={handleToggle("phone_verification")}
						checked={checked.indexOf("phone_verification") !== -1}
						disabled
					/>
				</ListItem>
				<Divider />
				<ListItem
					sx={{
						py: 2,
					}}
				>
					<ListItemAvatar>
						<AvatarWrapperWarning>
							<EmailTwoToneIcon />
						</AvatarWrapperWarning>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant="caption" color="black">
								Recovery Email
							</Typography>
						}
						primaryTypographyProps={{
							variant: "body1",
							fontWeight: "bold",
							color: "textPrimary",
							gutterBottom: true,
							noWrap: true,
						}}
						secondary={
							<Typography variant="caption" color="warning">
								Not completed
							</Typography>
						}
						secondaryTypographyProps={{ variant: "body2", noWrap: true }}
					/>
					<Switch
						edge="end"
						color="primary"
						onChange={handleToggle("recovery_email")}
						checked={checked.indexOf("recovery_email") !== -1}
						disabled
					/>
				</ListItem>
			</List>
		</Card>
	);
};

export default AccountSecurity;
