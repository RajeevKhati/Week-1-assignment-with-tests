const fs = require("fs");
fs.writeFile("file2.txt", "hello word", (err) => {
  console.log("err => ", err);
});
