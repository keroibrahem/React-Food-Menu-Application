import React from "react";
import Menu from "./menu";
export default function Home(props) {
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

  return (
    <>
      <Menu
        items={items}
        handelAddToCart={handelAddToCart}
        loading={loading}
        categories={categories}
        slectedCategory={slectedCategory}
        handleSelectCat={handleSelectCat}
        noOfPage={noOfPage}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        handelSaersh={handelSaersh}
      />
    </>
  );
}
