import React from "react";

export default function CurrentPage({noOfPage,currentPage,handleCurrentPage}) {
    const pages = Array(noOfPage)
    .fill(0)
    .map((itm, i) => i + 1);
  return (
    <>
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
    </>
  );
}
