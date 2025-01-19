import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { store } from "@/store/store";
import { Provider } from "react-redux";

interface Props {
	children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
	return (
		<Provider store={store}>
			<ThemeProvider defaultTheme="dark" storageKey="app-theme">
				{children}
			</ThemeProvider>
		</Provider>
	);
};

export default Providers;
