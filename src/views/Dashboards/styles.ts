import { alpha } from "@mui/material";
import { styled, Avatar, ListItemAvatar, Card } from "@mui/material";

export const AvatarAddWrapper = styled(Avatar)(({ theme }) => ({
	background: theme.colors.alpha.black[10],
	color: theme.colors.primary.main,
	width: theme.spacing(8),
	height: theme.spacing(8),
}));

export const AvatarSuccess = styled(Avatar)(({ theme }) => ({
	color: theme.palette.success.contrastText,
	width: theme.spacing(8),
	height: theme.spacing(8),
	boxShadow: theme.colors.shadows.success,
	backgroundColor: theme.palette.success.main,
}));

export const AvatarWrapperError = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

export const AvatarWrapperSuccess = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

export const AvatarWrapperWarning = styled(Avatar)(
	({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
);

export const ListItemAvatarWrapper = styled(ListItemAvatar)(({ theme }) => ({
	minWidth: 0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	marginRight: theme.spacing(1),
	padding: theme.spacing(0.5),
	borderRadius: 60,
	width: "2.875rem",
	heigth: "5.5rem",
	background:
		theme.palette.mode === "dark" ? theme.colors.alpha.trueWhite[30] : alpha(theme.colors.alpha.black[100], 0.07),
	"& img": {
		background: theme.colors.alpha.trueWhite[100],
		padding: theme.spacing(0.5),
		display: "block",
		borderRadius: "inherit",
		height: theme.spacing(4.5),
		width: theme.spacing(4.5),
	},
}));

export const CardAddAction = styled(Card)(({ theme }) => ({
	border: `${theme.colors.primary.main} dashed 1px`,
	height: "100%",
	color: theme.colors.primary.main,
	transition: theme.transitions.create(["all"]),
	".MuiCardActionArea-root": {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
	},

	".MuiTouchRipple-root": {
		opacity: 0.2,
	},

	"&:hover": {
		borderColor: theme.colors.alpha.black[70],
	},
}));
