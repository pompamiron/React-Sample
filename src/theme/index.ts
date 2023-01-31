import AppThemeProvider from "./AppThemeProvider";
import DARK_THEME from "./dark";
import LIGHT_THEME from "./light";

declare module "@mui/material/styles" {
	export interface Theme {
		colors: {
			gradients: {
				blue1: string;
				blue2: string;
				blue3: string;
				blue4: string;
				blue5: string;
				orange1: string;
				orange2: string;
				orange3: string;
				purple1: string;
				purple3: string;
				pink1: string;
				pink2: string;
				green1: string;
				green2: string;
				black1: string;
				black2: string;
			};
			shadows: {
				success: string;
				error: string;
				primary: string;
				warning: string;
				info: string;
			};
			alpha: {
				white: {
					5: string;
					10: string;
					30: string;
					50: string;
					70: string;
					100: string;
				};
				trueWhite: {
					5: string;
					10: string;
					30: string;
					50: string;
					70: string;
					100: string;
				};
				black: {
					5: string;
					10: string;
					30: string;
					50: string;
					70: string;
					100: string;
				};
			};
			secondary: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			primary: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			success: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			warning: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			error: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			info: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
		};
	}

	export interface ThemeOptions {
		colors: {
			gradients: {
				blue1: string;
				blue2: string;
				blue3: string;
				blue4: string;
				blue5: string;
				orange1: string;
				orange2: string;
				orange3: string;
				purple1: string;
				purple3: string;
				pink1: string;
				pink2: string;
				green1: string;
				green2: string;
				black1: string;
				black2: string;
			};
			shadows: {
				success: string;
				error: string;
				primary: string;
				warning: string;
				info: string;
			};
			alpha: {
				white: {
					5: string;
					10: string;
					30: string;
					50: string;
					70: string;
					100: string;
				};
				trueWhite: {
					5: string;
					10: string;
					30: string;
					50: string;
					70: string;
					100: string;
				};
				black: {
					5: string;
					10: string;
					30: string;
					50: string;
					70: string;
					100: string;
				};
			};
			secondary: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			primary: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			success: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			warning: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			error: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
			info: {
				lighter: string;
				light: string;
				main: string;
				dark: string;
			};
		};
	}
}

export { LIGHT_THEME as default, DARK_THEME, LIGHT_THEME, AppThemeProvider };
