import React from "react";

export default function SearchInputItems({ handelSaersh }) {
  return (
    <>
      <div className="relative w-full max-w-md">
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for Item"
          onChange={handelSaersh}
        />
      </div>
    </>
  );
}
