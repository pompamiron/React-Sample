import { FunctionComponent, PropsWithChildren, useCallback, useState } from "react";
import { Stack } from "@mui/material/";
import { useAppStore } from "../store/AppStore";
import { ErrorBoundary, AppIconButton } from "../components";
import { LinkToPage } from "../utils/type";
import { useOnMobile } from "../hooks/layout";
import { BOTTOMBAR_DESKTOP_VISIBLE, TOPBAR_DESKTOP_HEIGHT, TOPBAR_MOBILE_HEIGHT } from "./config";
import { useEventSwitchDarkMode } from "../hooks/event";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import BottomBar from "./BottomBar";

/**
 * SideBar navigation items with links
 */
const SIDEBAR_ITEMS: Array<LinkToPage> = [
	{
		title: "Log In",
		path: "/auth/login",
		icon: "login",
	},
	{
		title: "Sign Up",
		path: "/auth/signup",
		icon: "signup",
	},
	{
		title: "About",
		path: "/about",
		icon: "info",
	},
];

/**
 * BottomBar navigation items with links
 */
const BOTTOMBAR_ITEMS: Array<LinkToPage> = [
	{
		title: "Log In",
		path: "/auth/login",
		icon: "login",
	},
	{
		title: "Sign Up",
		path: "/auth/signup",
		icon: "signup",
	},
	{
		title: "About",
		path: "/about",
		icon: "info",
	},
];

/**
 * Renders "Public Layout" composition
 */
const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const onMobile = useOnMobile();
	const onSwitchDarkMode = useEventSwitchDarkMode();
	const [sideBarVisible, setSideBarVisible] = useState(false);
	const [state] = useAppStore();
	const bottomBarVisible = onMobile || BOTTOMBAR_DESKTOP_VISIBLE;

	const sidebarOpen = sideBarVisible;
	const sidebarVariant = "temporary";

	const title = "Chalakorn's Sample";
	document.title = title;

	const onSideBarOpen = useCallback(() => {
		if (!sideBarVisible) setSideBarVisible(true);
	}, [sideBarVisible]);

	const onSideBarClose = useCallback(() => {
		if (sideBarVisible) setSideBarVisible(false);
	}, [sideBarVisible]);

	return (
		<Stack
			sx={{
				minHeight: "100vh",
				paddingTop: onMobile ? TOPBAR_MOBILE_HEIGHT : TOPBAR_DESKTOP_HEIGHT,
			}}
		>
			<Stack component="header">
				<TopBar
					startNode={<AppIconButton icon="logo" onClick={onSideBarOpen} />}
					title={title}
					endNode={
						<AppIconButton
							// icon={state.darkMode ? 'day' : 'night'} // Variant 1
							icon="daynight" // Variant 2
							title={state.darkMode ? "Switch to Light mode" : "Switch to Dark mode"}
							onClick={onSwitchDarkMode}
						/>
					}
				/>

				<SideBar
					anchor="left"
					open={sidebarOpen}
					variant={sidebarVariant}
					items={SIDEBAR_ITEMS}
					onClose={onSideBarClose}
				/>
			</Stack>

			<Stack
				component="main"
				sx={{
					flexGrow: 1, // Takes all possible space
					padding: 1,
				}}
			>
				<ErrorBoundary name="Content">{children}</ErrorBoundary>
			</Stack>

			<Stack component="footer">{bottomBarVisible && <BottomBar items={BOTTOMBAR_ITEMS} />}</Stack>
		</Stack>
	);
};

export default PublicLayout;
