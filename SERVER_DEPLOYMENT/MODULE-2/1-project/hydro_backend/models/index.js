import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,

});

const Product = sequelize.define("Product", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            min: 2,
        }
    },
    image: {
        type: DataTypes.STRING,

    },
    price: {
        type: DataTypes.DECIMAL,
    }
    
})
const Category = sequelize.define("Category", {
   category: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
   }
});

const ProductCategory = sequelize.define("product_category", {} );

Product.belongsToMany(Category, { through: ProductCategory});
Category.belongsToMany(Product, { through: ProductCategory });




sequelize.sync({
    force: true,
})
.then(()=> {
    Category.bulkCreate([{ category: "soda" }, { category: "energy"}]);
    Product.bulkCreate([
    {
    //   id: 1,
      title: "RedBull",
      description: "Gives you wings",
      price: 28,
      image:
        "https://www.tights.no/wp-content/uploads/sites/7/2021/02/NO_RBED_250_Single-Unit_close_cold_ORIGINAL_HRES-1-scaled.jpg",
    //   category: "Energy",
    },
    {
    //   id: 2,
      title: "Coca Cola",
      description: "The original",
      price: 19,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3M-xR4PTf-oldWP8s2UWBCDxtZatNqXs1NA&s",
    //   category: "Soda",
    },
    {
    //   id: 3,
      title: "Monster",
      description: "Yuck",
      price: 24,
      image:
        "https://godtesjuk-i03.mycdn.no/mysimgprod/godtesjuk_mystore_no/images/COC642068.jpg/w800h800.jpg",
    //   category: "Energy",
    },
    {
      title: "Fanta",
      description: "Yellow drink",
      price: 17,
      image:
        "https://www.coca-cola.com/content/dam/onexp/no/no/home-images/brands/fanta/fanta-appelsin-2024.jpg",
    //   category: "Soda",
    },
    {
      title: "Tøyen Cola",
      description: "Local soda",
      price: 17,
      image: "",
    //   category: "Soda",
    },
    ]);
});



export {sequelize, Product, Category, ProductCategory};