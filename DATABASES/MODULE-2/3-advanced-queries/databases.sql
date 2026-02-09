CREATE DATABASE temp_db;
USE temp_db;

CREATE TABLE students(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50)
);

CREATE TABLE courses(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50)
);

INSERT INTO students(name)
VALUES ("Stian"), ("Alex"), ("Amrit"), ("Lehder"), ("Filip"), ("Fillip"), ("Joakim");

SELECT * FROM students;

INSERT INTO courses(name)
VALUES ("JSS"), ("DAB"), ("FET"), ("OOP");

SELECT * FROM courses;

CREATE TABLE course_enroll(
student_id INT,
course_id INT,
FOREIGN KEY (student_id) REFERENCES students(id),
FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO course_enroll(student_id, course_id)
VALUES (1,1), (7,1), (3,1), (1,2);
