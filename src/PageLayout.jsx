import React, { useState } from "react";
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import NavIndividual from "./components/Navigations/NavIndividual";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Login from "./components/Dialogs/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NavBusiness from "./components/Navigations/NavBusiness";
import NavUniversity from "./components/Navigations/NavUniversity";
import Register from "./components/Dialogs/Register";

const PageLayout = () => {
	const [tab, setTab] = useState("individual");
	const [login, setLogin] = useState(false);
	const [register, setRegister] = useState(false);

	return (
		<UserProvider>
			<GoogleOAuthProvider clientId="192622479063-daim8r5v85ijm6piu432pnbvat9rdp9v.apps.googleusercontent.com">
				<Login showLogin={login} onClose={() => setLogin(false)} />
					<Register showRegister={register} onClose={() => setRegister(false)} />
			</GoogleOAuthProvider>
			<Header tab={tab} setTab={setTab} />
			{tab === "individual" && (
				<NavIndividual setLogin={setLogin} setRegister={setRegister} />
			)}
			{tab === "business" && <NavBusiness />}
			{tab === "campus" && <NavUniversity />}
			<Outlet />
			<Footer childContact="/contact" />
		</UserProvider>
	);
};

export default PageLayout;
