import React from "react";

export default function LoadingPage() {
  return <>
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Loading...</h1>
        <div className="flex">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      </div>
    
  </>;
}
