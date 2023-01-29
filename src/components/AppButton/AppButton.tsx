import { ElementType, FunctionComponent, ReactNode, useMemo } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import AppIcon from "../AppIcon";
import AppLink from "../AppLink";
import { APP_BUTTON_VARIANT } from "../config";

const MUI_BUTTON_COLORS = ["inherit", "primary", "secondary", "success", "error", "info", "warning"];

export interface AppButtonProps extends Omit<ButtonProps, "color" | "endIcon" | "startIcon"> {
	color?: string; // Not only 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
	endIcon?: string | ReactNode;
	label?: string; // Alternate to .text
	text?: string; // Alternate to .label
	startIcon?: string | ReactNode;
	// Missing props
	component?: ElementType; // Could be RouterLink, AppLink, <a>, etc.
	to?: string; // Link prop
	href?: string; // Link prop
	openInNewTab?: boolean; // Link prop
	underline?: "none" | "hover" | "always"; // Link prop
}

const DEFAULT_SX_VALUES = {
	margin: 1,
};

const AppButton: FunctionComponent<AppButtonProps> = ({
	children,
	color: propColor = "inherit",
	component: propComponent,
	endIcon,
	label,
	startIcon,
	sx: propSx,
	text,
	underline = "none",
	variant = APP_BUTTON_VARIANT,
	...restOfProps
}) => {
	const iconStart: ReactNode = useMemo(
		() =>
			!startIcon ? undefined : typeof startIcon === "string" ? <AppIcon icon={String(startIcon)} /> : startIcon,
		[startIcon]
	);

	const iconEnd: ReactNode = useMemo(
		() => (!endIcon ? undefined : typeof endIcon === "string" ? <AppIcon icon={String(endIcon)} /> : endIcon),
		[endIcon]
	);

	const isMuiColor = useMemo(() => MUI_BUTTON_COLORS.includes(propColor), [propColor]);

	const componentToRender =
		!propComponent && (restOfProps?.href || restOfProps?.to) ? AppLink : propComponent ?? Button;

	const colorToRender = isMuiColor ? (propColor as ButtonProps["color"]) : "inherit";
	const sxToRender = {
		...DEFAULT_SX_VALUES,
		...propSx,
		...(isMuiColor ? {} : { color: propColor }),
	};

	return (
		<Button
			component={componentToRender}
			color={colorToRender}
			endIcon={iconEnd}
			startIcon={iconStart}
			sx={sxToRender}
			variant={variant}
			{...{ ...restOfProps, underline }}
		>
			{children || label || text}
		</Button>
	);
};

export default AppButton;
