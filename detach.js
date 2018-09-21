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

const cleanFile = (path, clean) => {
  console.log("cleaning " + path);
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    fs.writeFile(path, clean(data), "utf8", err => {
      if (err) {
        return console.log(err);
      }
      console.log("cleaned " + path);
    });
  });
};

deleteFolder("./.git");
deleteFolder("./node_modules");
deleteFolder("./dist");
deleteFile("./README.md");
deleteFile("./LICENSE");
deleteFile("./detach.js");
deleteFile("./package-lock.json");

cleanFile("./package.json", data =>
  data
    .replace(/retyst/g, "yourRepoHere")
    .replace(/A React Typescript Starter/g, "")
    .replace(/bartw/g, "yourUserNameHere")
    .replace(/Bart Wijnants/g, "yourNameHere")
    .replace(/MIT/g, "")
    .replace(/"detach": "node detach.js",/g, "")
);

cleanFile("./src/index.html", data =>
  data
    .replace(/Retyst/g, "yourTitleHere")
    .replace(/A React Typescript Starter/g, "")
    .replace(/Bart Wijnants/g, "yourNameHere")
);

cleanFile("./src/App.tsx", data =>
  data
    .replace(/Retyst/g, "yourTitleHere")
    .replace(/A React Typescript Starter/g, "")
);
