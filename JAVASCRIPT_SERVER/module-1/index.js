import fs from "node:fs";

// Create a text file, with javascript, read the file, and write a copy of it
fs.readFile("./text.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.writeFile("text2.txt", "random text to write", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File created successfully");
  }
});

// Write some text into a file called text2.txt

fs.readFile("original.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("copy.txt", data, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("file copied successfully");
      }
    });
  }
});