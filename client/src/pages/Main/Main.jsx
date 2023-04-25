import React from "react";
import Spinner from "../../components/Layout/Spinner";
import { useGetItemsQuery } from "../../store/rtkq";

export default function Main() {
  const { data, isFetching } = useGetItemsQuery({
    type: "products",
  });
  if (isFetching) return <Spinner />;
  return (
    <div className="wrapper">
      {data.map((product) => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}
