const fs = require("node:fs/promises");

async function fileCleaner() {
  const data = await fs.readFile("file1.txt", "utf-8");
  //   const strArray = data.split(" ");
  //   console.log(strArray);
  //   let finalString = "";
  //   strArray.forEach((str) => {
  //     if (str) {
  //       finalString += str + " ";
  //     }
  //   });
  let finalString = data.replace(/\s+/g, " ").trim();
  fs.writeFile("file1.txt", finalString.trim(), "utf-8");
}

fileCleaner();

// await file.readFile({ encoding: "utf-8" }).then((data) => {
//   const strArray = data.split(" ");
//   let finalString = "";
//   strArray.forEach((str) => {
//     if (str) {
//       finalString += str + " ";
//     }
//   });
//   file.writeFile(finalString.trim(), { encoding: "utf-8" });
// });
