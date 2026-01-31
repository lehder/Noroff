header	marp	theme	size	paginate	color	backgroundColor	_footer
Lesson 1.2: Modeling Data
true
default
58140
true
@2026 Ludvig Alvir
Modeling Data
Create Database
CREATE DATABASE <company_name>;
Create table
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
Drop table
DROP TABLE customers;
Indexes
Improve query performance
Created on columns frequently used in WHERE clauses
Primary key and unique automatically create indexes
For not unique indexes:

CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    Index idx_name (name)
);
Index example in js
In a way indexes are extra "arrays" that help us find data faster.

const allData = [{ id: 1, name: "Alice", email: "alice@example.com" }];
const nameIndex = [{ name: "Alice", data: allData[0] }];
Inserting Data
INSERT INTO customers (name, email)
VALUES ('Alice', 'alice@example.com');
Using JavaScript
Create a new project.
Initialize npm
Change to type module in package.json
Install mysql2
With callbacks
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Your username
  password: "root", // Your password
  database: "mySql", // your database name
});

connection.query(`SELECT * FROM users`, (err, res, fields) => {
  if (err) {
    console.error("Database Error:", err.message);
    return;
  }
  console.table(res);
  connection.end();
});
With promises
import mysql from "mysql2/promise";

let connection;
try {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // Your username
    password: "root", // Your password
    database: "mySql", // your database name
  });

  const [rows] = await connection.query("SELECT * FROM users");

  console.table(rows);
} catch (error) {
  console.error("Database Error:", error.message);
} finally {
  if (connection) await connection.end();
}
Creating orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
Insert order
INSERT INTO orders(customer_id, amount)
VALUES (1, 100.00);
Try to use a customer_id that does not exist, and see what happens.

Join tables
SELECT users.name, orders.order_id, orders.amount
FROM orders
JOIN users on orders.customer_id = users.id
Join tables
SELECT users.name, orders.order_id, orders.amount
FROM orders
JOIN users on orders.customer_id = users.id
where users.name = "alice"