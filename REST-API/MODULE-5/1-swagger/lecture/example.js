/* example();

const example = () => {
  console.log("Logs something");
};
 */

// .env values are always strings
if (process.env.VARIABLE == "false") {
  console.log("false");
} else {
  console.log("true");
}
