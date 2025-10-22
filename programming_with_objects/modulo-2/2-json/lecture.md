---
header: "Lesson 2.2: JSON"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2025 Ludvig Alvir"
---

# JSON

---

## JSON data

```JSON
{
  "key": "value",
  "key2": 123,
  "key3": true
}
```

```JSON
["value1", "value2", "value3"]
```

---

## Meta data and docuemntation

- What are the fields?
- What types are the fields?
- What are the possible values?
- What is required and what is optional?
- What are the default values?

---

## JSON schema

- Meta data
- Written in JSON
- "JSON about JSON"

---

## JSON schema

```json
{
  "$schema": "https://json-schema.org/draft/2019-09/schema",
  "$id": "https://https://example.com/",
  "title": "Example Schema",
  "description": "An example schema",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the person"
    },
    "age": {
      "type": "integer",
      "description": "The age of the person"
    }
  },
  "required": ["name"]
}
```

---

## JSON schema

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the person"
    },
    "age": {
      "type": "integer",
      "description": "The age of the person"
    }
  },
  "required": ["name"]
}
```

---

## JSON schema

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "The name of the person"
      },
      "age": {
        "type": "integer",
        "description": "The age of the person"
      }
    },
    "required": ["name"]
  }
}
```

---

## JSON schema validators

https://www.jsonschemavalidator.net/

---

## Task

Create your own js object(anything), and a schema for it.
Create your own array of objects, and a schema for it.
Test with validator.