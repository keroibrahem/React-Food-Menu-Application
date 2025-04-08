import React from "react";

export default function Carditem(props) {
  // console.log(props.count);
  function stcount(x) {
    if (x >= 0 && x < 3) return "bg-red-700";
    if (x >= 3 && x < 5) return "bg-amber-400";
    return "bg-emerald-600";
  }
  const stylecount = stcount(props.count);

  return (
    <div className="flex items-center gap-4 p-5 border border-gray-200  bg-white">
      <div className="text-lg font-semibold text-gray-800">{props.name}</div>
      <div className={stylecount.concat("  w-10 h-10 flex items-center justify-center text-white font-bold rounded-2xl")}>{props.count}</div>
      <button
        className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-800 btn"
        onClick={props.handelincrement}
      >
        +1
      </button>
      <button
        className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-800 btn"
        onClick={props.handeldecrement}
      >
        
        -1{" "}
      </button>
      <button
        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-800 btn"
        onClick={props.handeldelete}
      >
        Delete
      </button>
    </div>
  );
}
