import express from "express";
import cors from "cors";
import { 
  sequelize, 
  Product, 
  Category, 
  ProductCategory, 
} from "./models/index.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/products", async (req, res) => {
  const products = await Product.findAll();
  res.json({
    results: products,
  });
});

//---------------

app.post("/products", async (req, res) => {
  const { title, description, price, image, category } = req.body;
 
 if (!title || typeof title != "string") {
  return res.json({message: "title required" });
 }
 if (
  !description || 
  typeof description != "string" || 
  description.length < 2) 
  {
  return res.json ({
  message: 
  "Descrption is required, nad has to be longer than 2 characters"
});
 }
 if (!price || typeof price != "number" || price < 0 ){
  return res.json({message: "Price has to be a non negative number"});
 }
 if (category && typeof category == "array" && category.length) {
  const result = await Category.findOne({
    where: {
      category: category,
    },
  });
console.log(result);
 }

 const product = {
  title,description,
  price,
  image: image ? image : "",
 };
const result = await Product.create(product);

 res.json({message: "Product added",
  product: result,
 });
});

//-------------------

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
 
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/categories", async (req, res) => {
  const categories = await Category.findAll();
  res.json({
    categories,
  });
});

app.listen(PORT, () => {
  console.log("Server running on: " + PORT);
});