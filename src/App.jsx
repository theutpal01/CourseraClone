import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./utils/ScrollToTop"
import NavIndividual from "./components/Navigations/NavIndividual";
import Footer from "./components/Base/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MyLearning from "./pages/MyLearning";
import Course from "./pages/Course";
import Contact from "./components/Services/Contact";
import Header from "./components/Base/Header";

function App() {
	const [tab, setTab] = useState("individual")
	const [login, setLogin] = useState(false);

	return (
		<Router>
			<ScrollToTop />
			<div className="mx-auto flex flex-col min-h-screen bg-white">
				<Header tab={tab} setTab={setTab} />
				<NavIndividual login={login} setLogin={setLogin} />
				<main className="">
					<Routes>
						<Route path="/" element={<Home login={login} />} />
						<Route path="/my-learning" element={<MyLearning login={login} />} />
						<Route path="/courses" element={<Courses login={login} />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="courses/:id" element={<Course />} />
					</Routes>
				</main>
				<Footer childContact="/contact" />
			</div>
		</Router>
	);
}

export default App;
