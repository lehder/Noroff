/* 
Example of testing on the "Live server"

test("check if 'localhost:3000/deck' gives back a deck", async () => {
  const res = await fetch("http://localhost:3000/deck");
  const data = await res.json();
  expect(data.length).toBe(52);
});
 */
