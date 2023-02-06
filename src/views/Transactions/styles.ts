import { makeStyles } from "@material-ui/core";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const useStyles = makeStyles({
	card: {
		width: "100%",
	},
	tableHeader: {
		height: "7.5rem",
		padding: "1.5rem",
	},
});

export const ButtonError = styled(Button)(
	({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);
