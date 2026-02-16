const path = require("path");

const uploadedFile = "D:\\WebServer\\..\\uploads\\images\\./profile-pic.png";

const cleanPath = path.normalize(uploadedFile);
console.log(cleanPath);

const fileName = path.basename(cleanPath);
console.log(fileName);

const extension = path.extname(cleanPath);
console.log(extension);

if (extension === ".png" || extension === ".jpg") {
  console.log("Correct File Extension");
} else {
  console.log("Unknown file type");
  return;
}

const newPath = path.join(__dirname, fileName);
console.log(newPath);
