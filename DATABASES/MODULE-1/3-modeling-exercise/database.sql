
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



CREATE TABLE products(
id INTEGER PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(45) NOT NULL,
price DECIMAL(10,2),
release_date DATE,
publisher VARCHAR(45),
description VARCHAR(2000),
age_rating INTEGER,
image VARCHAR(2000),
INDEX(title)
);

INSERT INTO products(title, 
price, 
release_date, 
publisher, 
description,
age_rating,
image)
values(
"Runescape", 
0, 
'2001-10-10', 
"JAGEX", 
"Best MMO",
13,
"https://m.media-amazon.com/images/M/MV5BZjk3MjQ4OGItODIzNy00MDFiLTlhNjgtYzFhNjgwZTE1MWQ0XkEyXkFqcGc@._V1_.jpg"
);