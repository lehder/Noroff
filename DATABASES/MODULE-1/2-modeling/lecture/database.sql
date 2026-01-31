CREATE DATABASE games_db;
USE games_db;

CREATE TABLE customers (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
email VARCHAR(100) UNIQUE,
INDEX(name)
);

INSERT INTO customers(name, email)
VALUES
('Admin', 'admin@test.no'),
('John', 'john@gmail.com'),
('Jane', 'jane@doe.com'),
('Ola', 'ola@gmail.com');

CREATE TABLE orders (
id INT PRIMARY KEY AUTO_INCREMENT,
customer_id int,
amount decimal(10,2),
foreign key (customer_id) references customers(id) 
);


INSERT INTO orders(customer_id, amount)
VALUES(3, 750);


SELECT customers.name, orders.id, orders.amount
FROM orders
JOIN customers on orders.customer_id = customers.id
WHERE orders.customer_id = 3;