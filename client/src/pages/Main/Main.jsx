import React from "react";
import { useQuery } from "@apollo/client";
import { getAllProducts } from "../../utils/gql";
import Spinner from "../../components/Layout/Spinner";

export default function Main() {
  const { data, loading, error } = useQuery(getAllProducts);
  console.log(data, loading, error);
  if (loading) return <Spinner />;
  return (
    <div className="wrapper">
      {data?.getAllProducts.map((product) => (
        <div key={product.id}>{product.title} {product.description}</div>
      ))}
    </div>
  );
}
