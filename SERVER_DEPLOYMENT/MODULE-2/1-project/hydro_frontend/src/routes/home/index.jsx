import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      console.log(data);
      setProducts(data.results);
    }
    getProducts();
  }, []);
  return (
    <div >
      <h1 className="text-3xl font-bold">Home page</h1>
      <div className="container flex flex-wrap justify-center ">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-2xs p-4 flex flex-col justify-center items-center"
          >
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img
              className="h-42"
              src={
                product.image
                  ? product.image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Vmqqmn4HihXBT_iDFPyb0Ghqu-Hs7wh3jA&s"
              }
              alt=""
            />
            <Link
              to={"/products/" + product.id}
              className="bg-amber-500 hover:bg-blue-500 rounded-lg px-4 py-2"
            >
              View product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}