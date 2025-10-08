import { Github } from "lucide-react";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow-sm px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/allapps"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/installation"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link
            className="flex items-center gap-2 text-purple-800 font-bold"
            to={"/"}
          >
            <img className="w-8" src="/logo.png" alt="" />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/allapps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/installation"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div>
            {/* <a className="btn  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
              {" "}
              <span className="bg-white rounded-full p-1 text-[8px]">
                <Github />
              </span>{" "}
              Contribute
            </a> */}
            <a target="_blank" href="https://github.com/mdrakibulhasanparvej">
              <button className="cursor-pointer flex items-center gap-3 px-4 py-2 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors">
                <div className="bg-white rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="w-5 h-5"
                  >
                    {/* GitHub logo path */}
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-md">
                  Contribute
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
