import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavIndividual from "./components/Navigations/NavIndividual";
import Footer from "./components/Base/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyLearning from "./pages/MyLearning";
import Course from "./pages/Course";
import Contact from "./components/Services/Contact";
import Header from "./components/Base/Header";

function App() {
	const [tab, setTab] = useState("individual")
	const [login, setLogin] = useState(false);

	return (
		<Router>
			<div className="mx-auto flex flex-col min-h-screen bg-white">
				<Header tab={tab} setTab={setTab} />
				<NavIndividual login={login} setLogin={setLogin} />
				<main>
					<Routes>
						<Route path="/" element={<Home login={login} />} />
						<Route path="/my-learning" element={<MyLearning login={login} />} />
						<Route path="/search" element={<Search login={login} />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="course/:id" element={<Course />} />
					</Routes>
				</main>
				<Footer childContact="/contact" />
			</div>
		</Router>
	);
}

export default App;
