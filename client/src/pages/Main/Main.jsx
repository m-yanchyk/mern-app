import React from "react";
import { useQuery } from "@apollo/client";
import { getProducts } from "../../utils/gql";
import Spinner from "../../components/Layout/Spinner";

export default function Main() {
  const { data, loading, error } = useQuery(getProducts);
  console.log(data)
  if (loading) return <Spinner />;
  return (
    <div className="wrapper">
      {data?.getProducts.map((product) => (
        <div key={product.id}>
          <img src={`http://localhost:5005/${product.path}`} />
          <span>{product.name}</span>
        </div>
      ))}
    </div>
  );
}
