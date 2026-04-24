import { useEffect, useState } from "react";

async function standardHandleSubmit(e, categories) {
  e.preventDefault();
  console.log("submit event");
  console.log("Title: ", e.target.title.value);
  console.log("Description: ", e.target.description.value);
  console.log("Image url: ", e.target.image.value);
  console.log("Price: ", e.target.price.value);
  console.log("Category: ", e.target.category.value);
  const product = {
    title: e.target.title.value,
    description: e.target.description.value,
    image: e.target.image.value,
    price: Number(e.target.price.value),
    category: categories
  };

  const res = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  console.log(data);
}

export function AddProductRoute() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [existingCategories, setExistingCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
      setExistingCategories(data.categories);
    }
    getCategories();
  }, []);
  return (
    <div>
      <form
        action=""
        className="flex flex-col items-center justify-center"
        onSubmit={(e)=>{
            standardHandleSubmit(e, categories)
        }}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="border border-black"
          id="title"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          className="border border-black"
          id="description"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          className="border border-black"
          id="price"
          name="price"
          step="0.01"
        />
        <label htmlFor="image">Image url:</label>
        <input
          type="text"
          className="border border-black"
          id="image"
          name="image"
        />
        <label htmlFor="category">Category:</label>
        <div>
          {categories.map((category) => (
            <div key={category}>{category}</div>
          ))}
        </div>
        <div className="flex m-4">
          <select name="" id="category" className="border">
            {existingCategories.map((item) => (
              <option key={item.id} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
          <button
            className="bg-amber-600 px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              const value = document.querySelector("#category").value;
              const set = new Set(categories);
              set.add(value);
              setCategories([...set]);
            }}
          >
            Add category
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-500 rounded-lg" type="submit">
          Add product
        </button>
      </form>
    </div>
  );
}