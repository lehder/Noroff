---
header: "Lesson 2.1: Database Operations"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# Database Operations

---

## Create Table

```sql
CREATE TABLE 'table_name' (
    column1 datatype constraints,
    column2 datatype,
    INDEX(column_name)
);
```

Need some simple table for today to create examples

---

## Select Data

```sql
SELECT 'these values'
FROM 'this table'
WHERE 'this is true';
```

```sql
SELECT name, email
FROM customers
WHERE id = 1;
```

---

## Create data

Have to specify columns if not inserting into all columns-
Collumns with auto increment, default values or allowing nulls CAN be skipped.

```sql
INSERT INTO  'table_name' (column1, column2, ...)
VALUES (value1, value2, ...);
```

```sql
INSERT INTO customers (name, email)
VALUES ('John Doe', 'john.doe@example.com');
```

---

## Update data

```sql
UPDATE 'table_name'
SET column = 'value'
where 'this is true';
```

```sql
UPDATE customers
SET email = 'updated@example.com'
WHERE id = 1;
```

---

## Delete data

```sql
DELETE FROM 'table_name'
WHERE 'this is true';
```

```sql
DELETE FROM customers
WHERE id = 1;
```

---

## Count data

```sql
SELECT COUNT(field)
FROM 'table_name'
WHERE 'this is true';
```

```sql
SELECT COUNT(id)
FROM customers
WHERE email LIKE '%@gmail.com';
```

---

## Sum data

```sql
SELECT SUM(field)
FROM 'table_name'
WHERE 'this is true';
```

```sql
SELECT SUM(amount)
FROM orders
WHERE customer_id = 1;
```