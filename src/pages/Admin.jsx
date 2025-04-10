import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router";
import { toast } from "react-toastify";
export default function Admin({ items, handeldelete }) {
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!isConfirmed) {
      return;
    }
    //call frontend
    handeldelete(id);
    //call backend
    const { data } = await axios.delete(`http://localhost:3000/menu/${id}`);
    toast.error("product deleted successfuly :(");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-4 flex justify-end">
        <button className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          <Link to="/Admin/AddItem" state={{ type: "add", item: null }}>
            Add Item
          </Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="   w-full bg-white  rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-center">Edit</th>
              <th className="px-4 py-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              items.map((itm) => (
                <tr key={itm.id} className="shadow hover:bg-gray-100">
                  <td className="px-4 py-2">{itm.name}</td>
                  <td className="px-4 py-2">{itm.price}</td>
                  <td className="px-4 py-2 text-center">
                    <button className="text-blue-500 hover:text-blue-700 cursor-pointer transition-all hover:scale-105">
                      <Link
                        to="/Admin/AddItem"
                        state={{ type: "edit", item: itm }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                      </Link>
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="text-red-500 hover:text-red-700 cursor-pointer transition-all hover:scale-105"
                      onClick={() => handleDelete(itm.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No items available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
