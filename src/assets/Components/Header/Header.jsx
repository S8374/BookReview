import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const link = <>
        <li>
            <NavLink
                to={'/'}
                className={({ isActive }) =>
                    isActive ? "bg-green-500 text-white" : ""
                }>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/listedBook'}>Listed Books</NavLink>
        </li>
        <li>
            <NavLink to={'/PagestoRead'}>Pages to Read</NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 px-4 lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-100 rounded-box">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Book Vibe</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {link}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btnser btn bg-green-500 text-white">Sign In</a>
                    <a className="btnser btn bg-[#51beda] text-white ml-4">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
