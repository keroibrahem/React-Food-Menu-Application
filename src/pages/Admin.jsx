import axios from "axios";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import LoadingPage from "./LoadingPage";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import TablesOfItems from "../components/TablesOfItems";

export default function Admin({ items, handeldelete, loading }) {
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      //call frontend
      handeldelete(id);
      //call backend
      const { data } = await axios.delete(`http://localhost:3000/menu/${id}`);
      toast.error("product deleted successfuly :(");
    }
  };
  if (loading) {
    return <LoadingPage />;
  }

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
        <TablesOfItems fromPage={Admin} items={items} handel={handleDelete}/>
      </div>
    </div>
  );
}
