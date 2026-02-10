function canFail(input) {
  if (typeof input != "number") {
    throw new Error("Input must be of type number");
  }
}
try {
  canFail("error");
} catch (error) {
  console.log(error);
}

console.log("see if this runs");