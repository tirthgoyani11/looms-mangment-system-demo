
import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

const NavLink = ({ to, children }) => {
    const { page } = useContext(AppContext);
    return (
        <a href={`#${to}`} className={`block md:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${page === to ? 'text-white bg-gray-700/50' : 'text-gray-400 hover:text-white hover:bg-gray-700/50'}`}>
            {children}
        </a>
    );
};

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setIsAuthenticated } = useContext(AppContext);

    const handleLogout = () => {
        setIsAuthenticated(false);
        window.location.hash = '#login';
    };

    return (
        <header className="bg-black/30 backdrop-blur-sm sticky top-0 z-20">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#dashboard" className="text-2xl font-bold text-white">FebriFlow</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <NavLink to="dashboard">Dashboard</NavLink>
                            <NavLink to="reports">Reports</NavLink>
                            <button onClick={handleLogout} className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors duration-300">Logout</button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                    </div>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink to="dashboard">Dashboard</NavLink>
                    <NavLink to="reports">Reports</NavLink>
                    <button onClick={handleLogout} className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 mt-1">Logout</button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
