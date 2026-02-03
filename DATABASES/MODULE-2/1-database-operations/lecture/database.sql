CREATE DATABASE simpel_db;

USE simpel_db;

CREATE TABLE people(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
age INT NOT NULL,
INDEX(name)
);

SELECT * FROM people;

INSERT INTO people(name, age)
VALUES("Ludvig", 29);

# INSERT two people in the same insert statement

INSERT INTO people(name, age)
VALUES
("Clayton", 320), 
("Alp", 42),
("Mette", 51);

SELECT id, name, age 
FROM people;

UPDATE people
SET name = "Ola"
WHERE id = 3;

DELETE FROM people
WHERE id = 2;


