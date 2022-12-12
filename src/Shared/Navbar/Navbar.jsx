import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar h-20 mb-12 pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-10 h-10 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content text-2xl mt-3 p-3 shadow bg-base-100 rounded-box w-52 text-left"
          >
            <Link className="py-1" to="/">
              Home
            </Link>
            <Link className="py-1" to="/">
              About
            </Link>
            <Link className="py-1" to="/">
              Services
            </Link>
            <Link className="py-1" to="/">
              Portfolio
            </Link>
            <Link className="py-1" to="/">
              Testimonials
            </Link>
            <Link className="py-1" to="/">
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
