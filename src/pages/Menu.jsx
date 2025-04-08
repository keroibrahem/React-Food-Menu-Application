import React from "react";

export default function Menu(props) {
  const {
    items,
    handelAddToCart,
    loading,
    categories,
    slectedCategory,
    handleSelectCat,
    noOfPage,
    currentPage,
    handleCurrentPage,
    handelSaersh,
  } = props;
  const pages = Array(noOfPage)
    .fill(0)
    .map((itm, i) => i + 1);

  // console.log(items);
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Loading...</h1>
        <div className="flex">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-lg ">
        <h1 className="text-center font-bold text-4xl text-gray-800">Menu</h1>
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
      </div>
      <div className="grid  grid-cols-3">
        <div className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-lg shadow-md">
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
        </div>
        <div className="overflow-x-auto max-lg col-span-2 ">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Name</th>
                <th>price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 &&
                items.map((itm) => (
                  <tr>
                    <td>{itm.name}</td>
                    <td>{itm.price}</td>
                    <td>
                      <button
                        className="cursor-pointer transition-all hover:scale-110"
                        onClick={() => handelAddToCart(itm.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill={itm.clicked ? "block" : "none"}
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
                      </button>
                    </td>
                  </tr>
                ))}
              {items.length === 0 && 
                <div className="text-center text-gray-500 mt-10">
                  <h2 className="text-2xl font-semibold">
                    Your cart is empty!
                  </h2>
                  <p className="text-lg">
                    Add some items to your cart to see them here.
                  </p>
                </div>
              }
            </tbody>
          </table>
          <div className="join float-end pt-1 pl-4">
            {pages.length > 1 &&
              pages.map((page) => (
                <button
                  key={page}
                  className={`join-item btn btn-xs ${
                    currentPage === page && "btn-active"
                  }`}
                  onClick={() => handleCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
