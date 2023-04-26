import React from "react";
import { useGetItemsQuery } from "../../../store/rtkq";
import Spinner from "../../../components/Layout/Spinner";
import ProductCard from "./ProductCard";

export default function List() {
  const { data, isFetching } = useGetItemsQuery({ type: "products" });
  if (isFetching) return <Spinner />;
  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}
