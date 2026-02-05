CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    enrollment_date DATE
);

CREATE TABLE phones(
	id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    phone VARCHAR(20),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE courses(
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_code VARCHAR(10),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE cities(
    zip_code INT PRIMARY KEY,
    city VARCHAR(50)
);

CREATE TABLE addresses(
    id INT PRIMARY KEY AUTO_INCREMENT,
	student_ID INT,
    zip_code INT,
    street VARCHAR(100),
    FOREIGN KEY (student_id) references students(id),
    FOREIGN KEY (zip_code) REFERENCES cities(zip_code)
);

# INSERTS

INSERT INTO students(name, enrollment_date)
VALUES ("Sofie", "2023-08-01");
INSERT INTO cities(zip_code, city)
VALUES (574, "OSLO"), (575, "OSLO");
INSERT INTO addresses (student_ID, zip_code, street)
VALUES (1, 575, "Torshovdalen 2");

SELECT students.name, addresses.street, cities.city
FROM students
JOIN addresses ON addresses.student_id = students.id
JOIN cities ON addresses.zip_code = cities.zip_code;

SELECT count(students.id) as student_count
FROM students
JOIN addresses ON addresses.student_id = students.id
JOIN cities ON addresses.zip_code = cities.zip_code;