import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png';
import { Github } from 'lucide-react';

const Navbar = () => {
    
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "border-b-2 border-blue-500 text-blue-600 font-semibold pb-1 transition-all"
            : "border-b-2 border-transparent hover:border-blue-400 hover:text-blue-500 pb-1 transition-all";

    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
                        <li><NavLink className={navLinkClass} to="/apps">Apps</NavLink></li>
                        <li><NavLink className={navLinkClass} to="/installation">Installation</NavLink></li>
                    </ul>
                </div>

                <Link to="/" className="text-2xl font-bold">
                    <div className="flex items-center gap-1">
                        <img className="h-10" src={logoImg} alt="logo" />
                        <p>HERO.IO</p>
                    </div>
                </Link>
            </div>

            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 hidden lg:flex gap-5">
                    <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
                    <li><NavLink className={navLinkClass} to="/apps">Apps</NavLink></li>
                    <li><NavLink className={navLinkClass} to="/installation">Installation</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <Link to="https://github.com/iftekar-23/hero-apps" className="btn">
                    <div className="flex items-center gap-1.5 rounded-xl">
                        <Github />
                        <p>Contribute</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
