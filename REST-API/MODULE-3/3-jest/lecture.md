---
header: "Lesson 3.3: Jest"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# Testing

---

## Project set up.

- Create a new a project folder.

```sh
npm init -y
npm i jest
npm i @types/jest
```

Change the test script in package.json to:

```json
"scripts": {
  "test": "jest"
}
```

---

## Function to test

sum.js

```js
function sum(num1, num2) {
  return num1 + num2;
}

module.exports = sum;
```

---

## Test file

sum.test.js

```js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

---

## Running tests

```sh
npm test
```

---

## Not expectations

```js
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(4);
});
```

---

## Test expectations

```js
expect(something()).toBe(expectedValue);
expect(something()).not.toBe(expectedValue);
expect(something()).toBeTruthy();
expect(something()).toBeFalsy();
expect(something()).toThrow();
expect(something()).toBeNull();
expect(something()).toBeGreaterThan(number);
expect(something()).toBeLessThan(number);
```

---

## Why test?

- To make sure our code works as expected.
- To make sure our code continues to work as expected when we make changes.
- To make sure our code fails when it should fail.
- Forces us to write "cleaner" code.

---

## Mindset

- Write tests that should pass.
- Write tests that should fail.
- Write tests for edge cases.

---

## Write tests for "fundamentals" project