import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function TableFruit() {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable products={PRODUCTS}></ProductTable>
    </div>
  );
}

export default TableFruit;
