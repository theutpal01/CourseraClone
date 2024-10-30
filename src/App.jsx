import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyLearning from "./pages/MyLearning";
import Contact from "./components/Services/Contact";

function App() {
	const [login, setLogin] = useState(false);
	return (
		<Router>
			<div className="mx-auto flex flex-col min-h-screen bg-white">
				<Header login={login} setLogin={setLogin} />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<Home login={login} />} />
						<Route path="/my-learning" element={<MyLearning login={login} />} />
						<Route path="/search" element={<Search login={login} />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer childContact="/contact" />
			</div>
		</Router>
	);
}

export default App;
