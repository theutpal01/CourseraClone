import React, { useState } from "react";
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import NavIndividual from "./components/Navigations/NavIndividual";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

const PageLayout = () => {
	const [tab, setTab] = useState("individual");
	const [login, setLogin] = useState(true);

	return (
		<UserProvider>
			<Header tab={tab} />
			<NavIndividual login={login} setLogin={setLogin} />
			<Outlet />
			<Footer childContact="/contact" />
		</UserProvider>
	);
};

export default PageLayout;
