import React from "react";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <h2 className="text-2xl font-semibold mb-2">Error 404</h2>

      <p className="text-lg text-gray-600 mb-6">
        The page you are looking for does not exist. :(
      </p>

      <Link
        to="/"
        className="px-6 py-2 btn bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
