import { alpha } from "@mui/material";
import {
	styled,
	Avatar,
	ListItemAvatar,
  Card,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({
  card: {
    width: "100%",
  },
}));

export const AvatarSuccess = styled(Avatar)(
	({ theme }) => ({
    color: theme.palette.success.contrastText,
    width: theme.spacing(8),
    height: theme.spacing(8),
    boxShadow: theme.colors.shadows.success,
    backgroundColor: theme.palette.success.main
  })
);

export const ListItemAvatarWrapper = styled(ListItemAvatar)(
	({ theme }) =>   
({    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.5),
    borderRadius: 60,
    width:"2.875rem",
    heigth:"5.5rem",
    background:
      theme.palette.mode === "dark"
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07),
    "& img": {
      background: theme.colors.alpha.trueWhite[100],
      padding: theme.spacing(0.5),
      display: "block",
      borderRadius: "inherit",
      height: theme.spacing(4.5),
      width: theme.spacing(4.5)
    }})
);

export const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

export const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);
