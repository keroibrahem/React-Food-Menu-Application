import React from "react";
import { NavLink } from "react-router";

export default function Navbar(props) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost font-serif text-xl">KirOBurger</a>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "font-bold bg-gray-200" : " "} text-lg shadow`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
                `${isActive ? "font-bold bg-gray-200" : " "} text-lg shadow`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end pe-5 relative">
        <NavLink to={"/Cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 pe-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </NavLink>
        {props.hasClickedItems&&<div className="absolute rounded-full -top-1/4 size-4 flex justify-center items-center text-sm bg-yellow-300">

        {props.nomOfItims > 0 && (
          <span>
            {props.nomOfItims}
          </span>
        )}
        </div>}
      </div>
    </div>
  );
}
