import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MyLearning from "./pages/MyLearning";
import Course from "./pages/Course";
import Contact from "./components/Services/Contact";
import NotFoundError from "./pages/errors/NotFoundError";
import PageLayout from "./PageLayout";

function App() {
	const login = true;
	return (
		<Router>
			<ScrollToTop />
			<div className="mx-auto flex flex-col min-h-screen bg-white">
				<Routes>
					<Route element={<PageLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/my-learning" element={<MyLearning />} />
						<Route path="/courses" element={<Courses />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="courses/:id" element={<Course />} />
					</Route>
					<Route path="*" element={<NotFoundError />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
