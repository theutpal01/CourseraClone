/* eslint-disable no-unused-vars */

import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
    LuChevronDown,
    LuChevronUp,
    LuSearch,
    LuGlobe,
    LuBell,
    LuUser,
    LuUserCircle2,
    LuArrowUpRightFromCircle,
} from "react-icons/lu";
import Coursera from "../../assets/base/coursera.png";
import { user as userInfo } from "../../data";
import Button from "../UI/Button";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { UserContext } from "../../contexts/UserContext";

function NavIndividual({ setLogin, setRegister }) {
    const location = useLocation();
    const { user, setUser } = useContext(UserContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);
    const [notificationsDropdown, setNotificationsDropdown] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [mobileProfileDropdown, setMobileProfileDropdown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Language");
    const [isSearching, setIsSearching] = useState(false); // State to manage search input visibility

    const languageRef = useRef(null);
    const notificationsRef = useRef(null);
    const profileRef = useRef(null);
    const direction = useScrollDirection();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setLanguageDropdown(false);
            }
            if (
                notificationsRef.current &&
                !notificationsRef.current.contains(event.target)
            ) {
                setNotificationsDropdown(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setLanguageDropdown(false);
    };

    const handleLogout = () => {
        setUser(null); // Set logged out state
        setProfileDropdown(false); // Close profile dropdown
        setIsMobileMenuOpen(false);
    };

    const handleLogin = () => {
        setLogin(true);
        setUser(userInfo); // Reset logged out state
        setIsMobileMenuOpen(false); // Close mobile menu if it's open
    };

    const handleRegister = () => {
        setRegister(true);
        setIsMobileMenuOpen(false); // Close mobile menu if it's open
    }

    const handleSearchClick = () => {
        setIsSearching(true); // Show the input when the icon is clicked
    };

    return (
        <>
            <nav
                className={`${direction === "down" ? "top-0" : "top-0 lg:top-9"
                    } sticky bg-white z-20 flex flex-col text-gray-500 transition-all duration-300 drop-shadow border-b border-gray-300 lg:px-16 xl:px-28 px-5`}
            >
                <div className="flex py-4 lg:py-2 gap-10 justify-between w-full">

                    <button className="lg:hidden text-xl" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Logo and Explore Dropdown */}
                    <div className="flex items-center flex-grow">
                        <NavLink to="/" className="text-xl font-bold">
                            <img
                                src={Coursera}
                                alt="Coursera Logo"
                                className="h-5 object-contain w-auto"
                            />
                        </NavLink>

                        <div className="lg:hidden flex justify-end  relative flex-grow w-full">
                            {!isSearching && (
                                <LuSearch
                                    className="cursor-pointer text-2xl hover:text-gray-700"
                                    onClick={handleSearchClick}
                                />
                            )}
                            <div
                                className={`${isSearching ? "flex" : "hidden"
                                    } flex-grow justify-end items-center w-full transition-all duration-300`}
                            >
                                <input
                                    type="text"
                                    placeholder="What do you want to learn?"
                                    className="pl-3 py-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 w-80"
                                />
                                <NavLink
                                    className="absolute right-[4px] cursor-pointer hover:bg-blue-500/80 duration-300 transition-all bg-blue-500 rounded-full active:scale-90 text-white text-xl origin-center w-auto h-auto p-[8px]"
                                    // to={"/courses"}
                                    to={"/search"}
                                >
                                    <LuSearch />
                                </NavLink>
                            </div>
                        </div>

                        <FiX
                            className={`${isSearching ? "visible" : "hidden"} text-3xl cursor-pointer hover:text-gray-700 md:hidden lg:hidden`}
                            onClick={() => setIsSearching(!isSearching)}
                        />

                        <div className="hidden lg:block relative px-4">
                            <Button
                                variant="primary"
                                type="outlined"
                                size="sm"
                                onClick={toggleDropdown}
                                className="flex gap-2 items-center"
                            >
                                Explore
                                {isDropdownOpen ? <LuChevronUp /> : <LuChevronDown />}
                            </Button>
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-64 bg-white border rounded-md shadow-lg p-4 z-50">
                                    {/* Goals Section */}
                                    <div className="mb-4">
                                        <h3 className="font-semibold text-gray-800">Goals</h3>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Take a free course
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Earn a degree
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Earn a Certificate
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Find your new career
                                        </NavLink>
                                    </div>

                                    {/* Subjects Section */}
                                    <div className="mb-4">
                                        <h3 className="font-semibold text-gray-800">Subjects</h3>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Data Science
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Business
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Computer Science
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Information Technology
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Language Learning
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Health
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Personal Development
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Physical Science and Engineering
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Social Sciences
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Arts and Humanities
                                        </NavLink>
                                        <NavLink
                                            to="/home"
                                            className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            onClick={toggleDropdown}
                                        >
                                            Math and Logic
                                        </NavLink>
                                    </div>

                                    {/* Browse All Subjects Button */}
                                    <NavLink
                                        // to="/courses"
                                        to="/search"
                                        className="block text-center py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        onClick={toggleDropdown}
                                    >
                                        Browse all subjects
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <div className="hidden lg:flex items-center relative flex-grow max-w-96">
                            <input
                                type="text"
                                placeholder="What do you want to learn?"
                                className="pl-3 py-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 w-full"
                            />
                            <NavLink
                                className="absolute right-[4px] cursor-pointer hover:bg-blue-500/80 duration-300 transition-all bg-blue-500 rounded-full active:scale-90 text-white text-xl origin-center w-auto h-auto p-[8px]"
                                to={"/search"}
                            >
                                <LuSearch />
                            </NavLink>
                        </div>
                    </div>

                    <div className="hidden lg:flex gap-3 items-center">
                        {!user ? (
                            // Display links when logged out
                            <>
                                <NavLink to="/enterprise" className="text-sm hover:text-gray-700">
                                    For Enterprise
                                </NavLink>
                                <NavLink to="/students" className="text-sm hover:text-gray-700">
                                    Students
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className="text-sm text-blue-600 hover:text-blue-700"
                                    onClick={handleLogin}
                                >
                                    Log In
                                </NavLink>
                                <Button variant="primary" type="outlined" size="sm" onClick={handleRegister}>
                                    Join for Free
                                </Button>
                            </>
                        ) : (
                            // Display dropdowns when logged in
                            <>
                                <div className="relative" ref={languageRef}>
                                    <button
                                        onClick={() => setLanguageDropdown(!languageDropdown)}
                                        className="p-2 text-gray-600 hover:text-gray-700"
                                    >
                                        <LuGlobe className="text-2xl" />
                                    </button>
                                    {languageDropdown && (
                                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg p-2">
                                            <button
                                                onClick={() => handleLanguageSelect("English")}
                                                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                                            >
                                                English
                                            </button>
                                            <button
                                                onClick={() => handleLanguageSelect("العربية")}
                                                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                                            >
                                                العربية
                                            </button>
                                            <button
                                                onClick={() => handleLanguageSelect("Deutsch")}
                                                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                                            >
                                                Deutsch
                                            </button>
                                            <button
                                                onClick={() => handleLanguageSelect("हिन्दी")}
                                                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                                            >
                                                हिन्दी
                                            </button>
                                            <button
                                                onClick={() => handleLanguageSelect("한국인")}
                                                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                                            >
                                                한국인
                                            </button>
                                            <button
                                                onClick={() => handleLanguageSelect("Italiano")}
                                                className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                                            >
                                                Italiano
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="relative" ref={notificationsRef}>
                                    <button
                                        onClick={() => setNotificationsDropdown(!notificationsDropdown)}
                                        className="p-2 text-gray-600 hover:text-gray-700"
                                    >
                                        <LuBell className="text-2xl" />
                                    </button>
                                    {notificationsDropdown && (
                                        <div className="absolute right-0 mt-2 w-96 bg-white border rounded-md shadow-lg p-2">
                                            <h2 className="text-black font-semibold my-2">Notifications</h2>
                                            <hr />
                                            <div className="text-center mt-8">
                                                <p className="text-gray-600 text-xl">No notifications</p>
                                                <p className="mt-2 opacity-60 mb-2">We&apos;ll let you know when deadlines are approaching, or there is a course update</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="relative" ref={profileRef}>
                                    <button
                                        onClick={() => setProfileDropdown(!profileDropdown)}
                                        className="p-2 text-gray-600 hover:text-gray-700"
                                    >
                                        <LuUser className="text-2xl" />
                                    </button>
                                    {profileDropdown && (
                                        <div className="absolute right-0 mt-2 w-60 bg-white border rounded-md shadow-lg p-2">
                                            <p className="font-bold text-lg text-gray-800 px-2 py-2">
                                                {user && user.name}
                                            </p>
                                            <NavLink
                                                to="/profile"
                                                className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            >
                                                Profile
                                            </NavLink>
                                            <NavLink
                                                to="/my-purchases"
                                                className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            >
                                                My Purchases
                                            </NavLink>
                                            <NavLink
                                                to="/settings"
                                                className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            >
                                                Settings
                                            </NavLink>
                                            <NavLink
                                                to="/updates"
                                                className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            >
                                                Updates
                                            </NavLink>
                                            <NavLink
                                                to="/accomplishments"
                                                className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            >
                                                Accomplishments
                                            </NavLink>
                                            <NavLink
                                                to="/help-center"
                                                className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                            >
                                                Help Center
                                            </NavLink>
                                            <NavLink>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                >
                                                    Log Out
                                                </button>
                                            </NavLink>
                                            <hr className="mt-2"/>
                                            <NavLink
                                                to="/get-courses"
                                            >
                                                <Button
                                                    variant=""
                                                    type=""
                                                    size="md"
                                                    className="w-full text-left my-2 px-2 mx-0 hover:bg-gray-100"
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <div className="text-sm text-blue-600 font-medium flex items-center">
                                                                Get Coursera
                                                                <div className="mx-1 w-6 h-auto bg-blue-600 text-white text-[0.7rem] text-center flex items-center justify-center">
                                                                    PLUS
                                                                </div>
                                                            </div>
                                                            <div className="text-[0.7rem] my-1">
                                                                Access 7,000+ courses
                                                            </div>
                                                        </div>
                                                        <LuArrowUpRightFromCircle className="text-blue-600 text-md" />
                                                    </div>
                                                </Button>
                                            </NavLink>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>



                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white shadow-md p-4 h-[100vh]">
                        <div className="relative">
                            {/* Links based on logged-in state */}
                            {!user ? (
                                // When logged out
                                <>
                                    <button
                                        className="py-2 hover:text-gray-700 flex justify-between items-center w-full my-2"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        Explore
                                        {isDropdownOpen ? <LuChevronUp /> : <LuChevronDown />}
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="ml-4 mt-2">
                                            <div className="mb-4">
                                                <h3 className="font-semibold text-gray-800">Goals</h3>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Take a free course
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Earn a degree
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Earn a Certificate
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Find your new career
                                                </NavLink>
                                            </div>

                                            {/* Subjects Section */}
                                            <div className="mb-4">
                                                <h3 className="font-semibold text-gray-800">Subjects</h3>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Data Science
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Business
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Computer Science
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Information Technology
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Language Learning
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Health
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Personal Development
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Physical Science and Engineering
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Social Sciences
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Arts and Humanities
                                                </NavLink>
                                                <NavLink
                                                    to="/home"
                                                    className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Math and Logic
                                                </NavLink>
                                            </div>

                                            {/* Browse All Subjects Button */}
                                            <NavLink
                                                to="/courses"
                                                className="block mb-4 py-1 px-0 text-blue-600 rounded hover:text-blue-700"
                                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                            >
                                                Browse all subjects
                                            </NavLink>
                                        </div>
                                    )}

                                    <hr />

                                    <div className="flex flex-col gap-2 mt-2">
                                        <NavLink to="/businesses" className="block py-2 hover:text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                            For Businesses
                                        </NavLink>
                                        <NavLink to="/government" className="block py-2 hover:text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                            For Governments
                                        </NavLink>
                                        <NavLink to="/university" className="block py-2 hover:text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                            For Universities
                                        </NavLink>

                                        {/* Join for Free and Log In at the bottom */}
                                        <div className="mt-80">
                                            <NavLink to="/signup">
                                                <Button variant="primary"
                                                    size="sm" className="w-full text-center mb-2"
                                                    onClick={handleRegister}
                                                >
                                                    Join for Free
                                                </Button>
                                            </NavLink>
                                            <NavLink to="/" onClick={handleLogin}>
                                                <Button
                                                    variant="primary"
                                                    type="outlined"
                                                    size="sm"
                                                    className="w-full text-center"
                                                >
                                                    Log In
                                                </Button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                // When logged in
                                <>
                                    <div className="flex flex-col gap-2">
                                        <div className="relative">
                                            <button
                                                className="font-bold text-black py-4 hover:text-gray-700 flex justify-between items-center w-full"
                                                onClick={() => setMobileProfileDropdown(!mobileProfileDropdown)}
                                            >
                                                <div className="flex items-center">
                                                    <LuUserCircle2 className="text-[2rem]" />
                                                    <span className="ml-2">{user.name}</span>
                                                </div>
                                                <div className="ml-auto">
                                                    {mobileProfileDropdown ? <LuChevronUp /> : <LuChevronDown />}
                                                </div>
                                            </button>
                                            {mobileProfileDropdown && (
                                                <div className="ml-4 mt-2">
                                                    <div className="mb-2">
                                                        <h3 className="font-semibold text-black mb-2 mx-[-0.5rem] mt-[-0.75rem]">Your Account</h3>
                                                        <NavLink
                                                            to="/view-profile"
                                                            className="block px-2 py-2 text-gray-600 hover:text-gray-700"
                                                        >
                                                            Profile
                                                        </NavLink>
                                                        <NavLink
                                                            to="/purchases"
                                                            className="block px-2 py-2 text-gray-600 hover:text-gray-700"
                                                        >
                                                            My Purchases
                                                        </NavLink>
                                                        <NavLink
                                                            to="/settings"
                                                            className="block px-2 py-2 text-gray-600 hover:text-gray-700"
                                                        >
                                                            Settings
                                                        </NavLink>
                                                        <NavLink
                                                            to="/accomplishments"
                                                            className="block px-2 py-2 text-gray-600 hover:text-gray-700"
                                                        >
                                                            Accomplishments
                                                        </NavLink>
                                                        <NavLink
                                                            to="/help-center"
                                                            className="block px-2 py-2 text-gray-600 hover:text-gray-700"
                                                        >
                                                            Help Center
                                                        </NavLink>
                                                        <NavLink
                                                            to="/"
                                                            onClick={handleLogout}
                                                            className="block px-2 py-2 text-gray-600 hover:text-gray-700"
                                                        >
                                                            Logout
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <hr />

                                        <button
                                            className="hover:text-gray-700 flex justify-between items-center w-full my-2"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            Explore
                                            {isDropdownOpen ? <LuChevronUp /> : <LuChevronDown />}
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="ml-4 mt-2">
                                                <div className="mb-4">
                                                    <h3 className="font-semibold text-gray-800">Goals</h3>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Take a free course
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Earn a degree
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Earn a Certificate
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Find your new career
                                                    </NavLink>
                                                </div>

                                                {/* Subjects Section */}
                                                <div className="mb-4">
                                                    <h3 className="font-semibold text-gray-800">Subjects</h3>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Data Science
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Business
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Computer Science
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Information Technology
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Language Learning
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Health
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Personal Development
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Physical Science and Engineering
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Social Sciences
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Arts and Humanities
                                                    </NavLink>
                                                    <NavLink
                                                        to="/home"
                                                        className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    >
                                                        Math and Logic
                                                    </NavLink>
                                                </div>

                                                {/* Browse All Subjects Button */}
                                                <NavLink
                                                    to="/search"
                                                    className="block mb-4 py-1 px-0 text-blue-600 rounded hover:text-blue-700"
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                >
                                                    Browse all subjects
                                                </NavLink>
                                            </div>
                                        )}

                                        <NavLink
                                            to="/my-learning"
                                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        >
                                            My Learning
                                        </NavLink>

                                        <hr className="mt-2" />

                                        <NavLink
                                            to="/get-courses"
                                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        >
                                            <Button
                                                variant=""
                                                type=""
                                                size="md"
                                                className="w-full text-left my-2 px-2 mx-0 hover:bg-gray-100"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <div className="text-md text-blue-600 font-medium flex items-center">
                                                            Get Coursera
                                                            <div className="mx-2 w-10 h-auto bg-blue-600 text-white text-[0.7rem] text-center flex items-center justify-center">
                                                                PLUS
                                                            </div>
                                                        </div>
                                                        <div className="text-[0.7rem] my-1">
                                                            Access 7,000+ courses
                                                        </div>
                                                    </div>
                                                    <LuArrowUpRightFromCircle className="text-blue-600 text-lg" />
                                                </div>
                                            </Button>
                                        </NavLink>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                )}

                <div>
                    {user && ["/", "/my-learning"].includes(location.pathname) ? (
                        <>
                            {/* New Row with Home and My Learning Links in a new line */}
                            <div className="flex justify-start gap-5 *:transition-all *:duration-300 *:border-b-4 *:py-2 *:px-4 hover:*:text-primary">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => {
                                        return isActive
                                            ? "text-blue-600 border-blue-600"
                                            : "text-gray-700 border-transparent";
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/my-learning"
                                    className={({ isActive }) => {
                                        return isActive
                                            ? "text-blue-600 border-blue-600"
                                            : "text-gray-700 border-transparent";
                                    }}
                                >
                                    My Learning
                                </NavLink>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </nav>
        </>
    );
}

export default NavIndividual;
