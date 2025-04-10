import React from "react";
import SearchInputItems from "../components/searchInputItems";
import TablesofCategories from "../components/TablesofCategories";
import CurrentPage from "../components/CurrentPage";
import TablesOfItems from "../components/TablesOfItems";
import LoadingPage from "./LoadingPage";
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

  // console.log(items);
  if (loading) {
    return(

      <LoadingPage/>
    )
  }    
  return (
    <>
      <div className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-lg ">
        <h1 className="text-center font-bold text-4xl text-gray-800">Menu</h1>
        <SearchInputItems handelSaersh={handelSaersh} />
      </div>
      <div className="grid  grid-cols-3">
        <div className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-lg shadow-md">
          <TablesofCategories
            categories={categories}
            handleSelectCat={handleSelectCat}
            slectedCategory={slectedCategory}
          />
        </div>
        <div className="overflow-x-auto max-lg col-span-2 ">
          <TablesOfItems fromPage={"Home"} handel={handelAddToCart} items={items}/>
          <CurrentPage
            noOfPage={noOfPage}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
