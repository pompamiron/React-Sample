import { ThemeOptions } from "@mui/material";
import { alpha, lighten, darken } from "@mui/material";

const themeColors = {
	primary: "#5569ff",
	secondary: "#6E759F",
	success: "#57CA22",
	warning: "#FFA319",
	error: "#FF1943",
	info: "#33C2FF",
	black: "#ffffff",
	white: "#223354",
	primaryAlt: "#fff",
};

const colors = {
	gradients: {
		blue1: "linear-gradient(135deg, #3A3D57 0%, #0E1F3D 100%)",
		blue2: "linear-gradient(135deg, #567A8C 0%, #0B1E48 100%)",
		blue3: "linear-gradient(127.55deg, #0B1F2E 3.73%, #0E2E49 92.26%)",
		blue4: "linear-gradient(-20deg, #1C2E3E 0%, #2E2E3E 100%)",
		blue5: "linear-gradient(135deg, #567A8C 10%, #0B1E48 100%)",
		orange1: "linear-gradient(135deg, #8C5A0B 0%, #7A0E0B 100%)",
		orange2: "linear-gradient(135deg, #8C5A31 0%, #7A1E1F 100%)",
		orange3: "linear-gradient(120deg, #8C5A0B 0%, #7A0E1F 100%)",
		purple1: "linear-gradient(135deg, #0B4857 0%, #5A0E48 100%)",
		purple3: "linear-gradient(135deg, #5748A2 0%, #3E2E48 100%)",
		pink1: "linear-gradient(135deg, #8C1F31 0%, #48107A 100%)",
		pink2: "linear-gradient(135deg, #8C1F57 0%, #5A7A0E 100%)",
		green1: "linear-gradient(135deg, #8C5A0E 0%, #1F7A0B 100%)",
		green2: "linear-gradient(to bottom, #0b3e3b, #7a5a0e)",
		black1: "linear-gradient(100.66deg, #0E0E0E 6.56%, #3E3E3E 93.57%)",
		black2: "linear-gradient(60deg, # 0E0E1F 0%, #2E2E48 100%)",
	},
	shadows: {
		success: "0px 1px 4px rgba(0, 204, 68, 0.25), 0px 3px 12px 2px rgba(0, 204, 68, 0.35)",
		error: "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
		info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
		primary: "0px 1px 4px rgba(255, 105, 85, 0.25), 0px 3px 12px 2px rgba(255, 105, 85, 0.35)",
		warning: "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
		card: "0px 9px 16px rgba(191, 162, 159, .18), 0px 2px 2px rgba(191, 162, 159, 0.32)",
		cardSm: "0px 2px 3px rgba(191, 162, 159, .18), 0px 1px 1px rgba(191, 162, 159, 0.32)",
		cardLg: "0 5rem 14rem 0 rgb(30% 255 255 / 30%), 0 0.8rem 2.3rem rgb(60% 0 0 / 60%), 0 0.2rem 0.3rem rgb(45% 0 0 / 45%)",
	},
	layout: {
		general: {
			bodyBg: "#1f2d3d",
		},
		sidebar: {
			background: "#1f2d3d",
			textColor: "#fff",
			dividerBg: "#2c3e50",
			menuItemColor: "#fff",
			menuItemColorActive: "#ffffff",
			menuItemBg: "#1f2d3d",
			menuItemBgActive: "#2c3e50",
			menuItemIconColor: "#fff",
			menuItemIconColorActive: "#ffffff",
			menuItemHeadingColor: "#fff",
		},
	},

	alpha: {
		white: {
			5: alpha(themeColors.white, 0.02),
			10: alpha(themeColors.white, 0.1),
			30: alpha(themeColors.white, 0.3),
			50: alpha(themeColors.white, 0.5),
			70: alpha(themeColors.white, 0.7),
			100: themeColors.white,
		},
		trueWhite: {
			5: alpha(themeColors.white, 0.02),
			10: alpha(themeColors.white, 0.1),
			30: alpha(themeColors.white, 0.3),
			50: alpha(themeColors.white, 0.5),
			70: alpha(themeColors.white, 0.7),
			100: themeColors.white,
		},
		black: {
			5: alpha(themeColors.black, 0.02),
			10: alpha(themeColors.black, 0.1),
			30: alpha(themeColors.black, 0.3),
			50: alpha(themeColors.black, 0.5),
			70: alpha(themeColors.black, 0.7),
			100: themeColors.black,
		},
	},
	secondary: {
		lighter: darken(themeColors.secondary, 0.15),
		light: darken(themeColors.secondary, 0.75),
		main: themeColors.secondary,
		dark: lighten(themeColors.secondary, 0.2),
	},
	primary: {
		lighter: darken(themeColors.primary, 0.15),
		light: darken(themeColors.primary, 0.7),
		main: themeColors.primary,
		dark: lighten(themeColors.primary, 0.2),
	},
	success: {
		lighter: darken(themeColors.success, 0.15),
		light: darken(themeColors.success, 0.7),
		main: themeColors.success,
		dark: darken(themeColors.success, 0.8),
	},
	warning: {
		lighter: darken(themeColors.warning, 0.15),
		light: darken(themeColors.warning, 0.7),
		main: themeColors.warning,
		dark: darken(themeColors.warning, 0.8),
	},
	error: {
		lighter: darken(themeColors.error, 0.15),
		light: darken(themeColors.error, 0.7),
		main: themeColors.error,
		dark: darken(themeColors.error, 0.8),
	},
	info: {
		lighter: darken(themeColors.info, 0.15),
		light: darken(themeColors.info, 0.7),
		main: themeColors.info,
		dark: darken(themeColors.info, 0.8),
	},
};

/**
 * MUI theme options for "Dark Mode"
 */
export const DARK_THEME: ThemeOptions = {
	palette: {
		common: {
			black: colors.alpha.black[100],
			white: colors.alpha.white[100],
		},
		mode: "light",
		primary: {
			light: colors.primary.light,
			main: colors.primary.main,
			dark: colors.primary.dark,
		},
		secondary: {
			light: colors.secondary.light,
			main: colors.secondary.main,
			dark: colors.secondary.dark,
		},
		error: {
			light: colors.error.light,
			main: colors.error.main,
			dark: colors.error.dark,
			contrastText: colors.alpha.white[100],
		},
		success: {
			light: colors.success.light,
			main: colors.success.main,
			dark: colors.success.dark,
			contrastText: colors.alpha.white[100],
		},
		info: {
			light: colors.info.light,
			main: colors.info.main,
			dark: colors.info.dark,
			contrastText: colors.alpha.white[100],
		},
		warning: {
			light: colors.warning.light,
			main: colors.warning.main,
			dark: colors.warning.dark,
			contrastText: colors.alpha.white[100],
		},
		text: {
			primary: colors.alpha.black[100],
			secondary: colors.alpha.black[70],
			disabled: colors.alpha.black[50],
		},
		background: {
			paper: colors.alpha.white[100],
			default: colors.layout.general.bodyBg,
		},
		action: {
			active: colors.alpha.black[100],
			hover: colors.primary.lighter,
			hoverOpacity: 0.1,
			selected: colors.alpha.black[10],
			selectedOpacity: 0.1,
			disabled: colors.alpha.black[50],
			disabledBackground: colors.alpha.black[5],
			disabledOpacity: 0.38,
			focus: colors.alpha.black[10],
			focusOpacity: 0.05,
			activatedOpacity: 0.12,
		},
		tonalOffset: 0.5,
	},
	colors: {
		...colors,
	},
};

export default DARK_THEME;
