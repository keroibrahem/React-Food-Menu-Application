import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function FormAddItem({ handleAddNewProd ,handelEdit}) {
  const navegat = useNavigate();
  const location = useLocation();
  const {type,item}=location.state;
  const [form, setForm] = useState(
    item!==null?item:{ name: "", price: "", category: "" });
  console.log(type,item);
  const handleForm = (e) => {
    //clone & edit
    const newForm = { ...form, [e.target.name]: e.target.value };
    //setdata
    setForm(newForm);
  };

  const handlebuttonAdd = async (e) => {
    console.log("add");
    
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    

    //clone
    const productToAdd = { ...form, count: 0, clicked: false };

    //call backend
    const { data } = await axios.post(
      "http://localhost:3000/menu",
      productToAdd
    );

    //handle frontend
    handleAddNewProd(data);

    navegat("/Admin");
    toast.success("Product added successfully :)");
  };
  const handlebuttonEdit = async(e)=>{
    console.log("edit");
    
    e.preventDefault();
    const {data}=await axios.put(`http://localhost:3000/menu/${item.id}`, form);
    console.log(data);
    
    handelEdit(data)
    navegat("/Admin");
    toast.success("Product updated successfully :)");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-4">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={type === "edit" ? handlebuttonEdit : handlebuttonAdd}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        {type === "edit" ? "Edit Product" : "Add New Product "}
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.name}
            onChange={handleForm}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="text"
            name="price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.price}
            onChange={handleForm}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            name="category"
            id="category"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.category}
            onChange={handleForm}
          >
            <option value="">Select Category</option>
            <option value="1">Burger</option>
            <option value="2">Fries</option>
            <option value="3">Water</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
         {type === "edit" ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}