const fs = require("fs");

const deleteFile = path => {
  console.log("deleting " + path);
  if (!fs.existsSync(path)) {
    return;
  }
  fs.unlinkSync(path);
  console.log("deleted " + path);
};

const deleteFolderRecursive = path => {
  if (!fs.existsSync(path)) {
    return;
  }
  fs.readdirSync(path).forEach(file => {
    const currentPath = path + "/" + file;
    if (fs.lstatSync(currentPath).isDirectory()) {
      deleteFolderRecursive(currentPath);
    } else {
      fs.unlinkSync(currentPath);
    }
  });
  fs.rmdirSync(path);
};

const deleteFolder = path => {
  console.log("deleting " + path);
  deleteFolderRecursive(path);
  console.log("deleted " + path);
};

deleteFolder("./.git");
deleteFolder("./node_modules");
deleteFolder("./dist");
deleteFile("./README.md");
deleteFile("./LICENSE");
deleteFile("./detach.js");
deleteFile("./package.lock.json");

const package = "./package.json";
console.log("cleaning " + package);
fs.readFile(package, "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }

  const clean = data
    .replace(/retyst/g, "yourRepoHere")
    .replace(/A react typescript starter./g, "")
    .replace(/bartw/g, "yourUserNameHere")
    .replace(/Bart Wijnants/g, "yourNameHere")
    .replace(/MIT/g, "")
    .replace(/"detach": "node detach.js",/g, "");

  fs.writeFile(package, clean, "utf8", err => {
    if (err) {
      return console.log(err);
    }
    console.log("cleaned " + package);
  });
});
