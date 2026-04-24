import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductRoute() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch("http://localhost:3000/products/" + id);
        if (!res.ok) {
          throw new Error("error fetching product");
        }
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
     } catch (e) {
      setIsLoading(false);
      setProduct(null);
      console.log(e);
      }
    }

    getProduct();
  }, [id]);

  if (isLoading) {
    return <div>loading</div>;
  }
  return (
     <div>
      {product ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        <h1 className="font-bold text-xl mb-2">Product id: {id}</h1>
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-700">Price:{product.price}</p>
        <img src={
          product.image
          ? product.image
          : "https://encrypted-tbn0.gstatic.com/"
        } />
     </div>
      ) : (
        <div>Product not found</div>
  )}
  </div>
);
}