import React from "react";
import CartButton from "./CartButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
export default function TablesOfItems({ fromPage, items, handel }) {
  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">price</th>
            {fromPage === "Home" ? (
              <th className="px-4 py-2 text-center">Add to Cart</th>
            ) : (
              <>
                <th className="px-4 py-2 text-center">Edit</th>
                <th className="px-4 py-2 text-center">Delete</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((itm) => (
              <tr key={itm.id}>
                <td className="px-4 py-2 text-left">{itm.name}</td>
                <td className="px-5 py-2 text-left">{itm.price}</td>
                {fromPage === "Home" ? (
                  <td>
                    <CartButton
                      handelAddToCart={() => handel(itm.id)}
                      clicked={itm.clicked}
                    />
                  </td>
                ) : (
                  <>
                    <td className="px-4 py-2 text-center">
                      <EditButton itm={itm} />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <DeleteButton handleDelete={handel} id={itm.id} />
                    </td>
                  </>
                )}
              </tr>
            ))}
          {items.length === 0 && (
            <div className="text-center text-gray-500 mt-10">
              <h2 className="text-2xl font-semibold">Your Menu is empty!</h2>
              <p className="text-lg">
                Add some items to your cart to see them here.
              </p>
            </div>
          )}
        </tbody>
      </table>
    </>
  );
}
