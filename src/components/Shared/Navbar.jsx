import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import contributeIcon from "../../assets/Vector.png";

const Navbar = () => {
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#6C4CF1] underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive ? "text-[#6C4CF1] underline" : "hover:underline"
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installed"
          className={({ isActive }) =>
            isActive ? "text-[#6C4CF1] underline" : "hover:underline"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-[70%] mx-auto bg-base-100">
      <div className="navbar bg-base-100">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="Hero Logo"
              class="w-10 h-10"
            />
            <h1 className="hidden md:block text-2xl font-bold bg-gradient-to-tr from-[#6C4CF1] to-[#8B6CF6] bg-clip-text text-transparent">
              HERO.IO
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-none my-auto text-white font-semibold text-lg px-2 md:px-6 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] shadow-md transition-all">
            <span className="text-2xl mr-2">
              <img src={contributeIcon} alt="" />
            </span>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
