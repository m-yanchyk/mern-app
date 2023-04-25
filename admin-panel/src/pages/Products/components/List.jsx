import React from "react";
import { useGetItemsQuery } from "../../../store/rtkq";
import Spinner from "../../../components/Layout/Spinner";

export default function List() {
  const { data, isFetching } = useGetItemsQuery({ type: "products" });
  if (isFetching) return <Spinner />;
  return (
    <div>
      {data.map((product) => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}
