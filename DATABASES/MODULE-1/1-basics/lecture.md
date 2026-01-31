header	marp	theme	size	paginate	color	backgroundColor	_footer
Lesson 1.1: Introduction to Databases
true
default
58140
true
@2025 Ludvig Alvir
Introduction to Databases
What is a Database?
A collection of data
Organized for easy access, management, and updating
Stores information between updates/restarts
SQL (relational databases)
Data is stored in tables

id	name	age
1	Alice	30
2	Bob	25
3	Charlie	35
Types of data
Type	Description	Example
INTEGER	Whole numbers	1, 42, -7
FLOAT	Floating-point numbers	3.14, -0.001
DECIMAL	Fixed-point numbers	19.99, 100.00
BOOLEAN	True or False values	TRUE, FALSE
VARCHAR (N)	Max-length strings	"Database", "SQL"
TEXT	Undefined length strings	"Lorem ipsum solor de..."
TIMESTAMP	Date and time values	2023-01-01 12:00
Installation
mysql server: https://dev.mysql.com/downloads/installer/ (choose server only)

MySql workbench: https://dev.mysql.com/downloads/workbench/

Primary keys and foreign keys
Primary Key: Unique identifier for each record in a table
Foreign Key: A field in one table that uniquely identifies a row of another table
Primary and Foreign Key Example

Relationships
One to many
Many to many
One to one
Relationships
One to many A customer can have multiple orders
Many to many A product can belong to multiple categories, and a category can have multiple products
One to one Each user has one profile, and each profile belongs to one user
Trying it out in workbench
Create a new diagram
Create tables for Customers, Orders, Products and Categories
Define relationships between them