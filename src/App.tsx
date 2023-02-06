import { AppStore } from "./store";
import { AppThemeProvider } from "./theme";
import Routes from "./routes";
import Layout from "./layout";
import { ErrorBoundary, Container } from "./components";
import { BrowserRouter } from "react-router-dom";

/**
 * Root Application Component
 */
const App = () => {
	return (
		<ErrorBoundary name="App">
			<AppStore>
				<AppThemeProvider>
					<BrowserRouter>
						<Layout>
							<Container>
								<Routes />
							</Container>
						</Layout>
					</BrowserRouter>
				</AppThemeProvider>
			</AppStore>
		</ErrorBoundary>
	);
};

export default App;
