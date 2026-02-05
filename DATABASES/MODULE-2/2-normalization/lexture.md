---
header: "Lesson 2.2: Normalization"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# Normalization

---

## What is Normalization?

Technique to organize database to reduce redundancy and improve data integrity.

- Redundancy
- Data Integrity

---

## Objectives of Normalization

- Make data dependant on as little as possible.
- Reduce need for restructuring as changes occur.
- Make the model tell a clearer story.

---

## First normal form (1NF)

- Eliminate repeating groups in individual tables (No lists/arrays).
- Create a separate table for each set of related data (No item1, item2, item3, same column length for all entries).
- Identify each set of related data with a primary key (Have a unique identifier).

---

## Second normal form (2NF)

- Meet all the requirements of the first normal form.
- Remove subsets of data that apply to multiple rows of a table and place them in separate tables (Dont mix different entities in the same table).
- Create relationships between these new tables and their predecessors through the use of foreign keys. (Use foreign keys to link related tables).

---

## Third normal form (3NF)

- Meet all the requirements of the second normal form.
- Remove columns that are not dependent upon the primary key.()
- Ensure that all fields can be determined only by the key in the table and not by any other column.

ONLY depend on the primary key.

---

## Practical Example

```sql
CREATE TABLE students(
    name VARCHAR(50),
    courses VARCHAR(255),
    phone_1 VARCHAR(20),
    phone_2 VARCHAR(20),
    zip_code VARCHAR(10),
    city VARCHAR(50),
    street VARCHAR(100),
    enrollment_date date
);
```

---

## Practical Example

```sql
INSERT INTO students (name, courses, phone_1, phone_2, zip_code, city, street, enrollment_date)
VALUES (
    'Ola Nordmann',
    'PRF, FET, OOP',
    '94547565',
    '46457895',
    '0574',
    'Oslo',
    'Sinsenveien 12',
    '2025-08-01'
);
```

---

## Practical Example

![Unnormalized Table](./assets/0nf.png)

---

## What Normal form is it now?

```sql
CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    zip_code VARCHAR(10),
    city VARCHAR(50),
    street VARCHAR(100),
    enrollment_date date
);
```

---

```sql
CREATE TABLE phones(
    student_id INT,
    phone VARCHAR(20),
    FOREIGN KEY (student_id) REFERENCES students(id)
);
```

```sql
CREATE TABLE courses(
    student_id INT,
    course_code VARCHAR(10),
    FOREIGN KEY (student_id) REFERENCES students(id)
);
```

---

## Current diagram

![NNF Diagram](./assets/n-nf.png)

---

## Make it 3NF