function reverse(input) {
  let out = "";
  for (let i = input.length - 1; i >= 0; i--) {
    out += input[i];
  }
  return out;
}

console.log(reverse("hello"));