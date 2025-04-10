import React from "react";

export default function TablesofCategories({categories,handleSelectCat,slectedCategory}) {
  return (
    <>
      <ul className="space-y-2 gap-2">
        <li className="p-4  border-gray-300 rounded text-2xl text-center">
          Categories
        </li>
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-blue-500 hover:text-white transition-all ${
              cat.id === slectedCategory && " bg-blue-500 text-white"
            }`}
            onClick={() => handleSelectCat(cat.id)}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </>
  );
}
