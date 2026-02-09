CREATE DATABASE simple_db;
USE simple_db;

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
name VARCHAR(50)
);

CREATE TABLE courses_enrollments(
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    PRIMARY KEY(student_id, course_id)
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
