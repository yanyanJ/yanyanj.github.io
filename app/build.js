var path = require("path");
var cpdir = require("ncp").ncp;
var rmdir = require("rimraf");

var src = path.join(__dirname, "build/");
var dest = path.join(__dirname, "../");

cpdir(src, dest, function (error) {
  if (error) {
    console.error(error);
  } else {
    rmdir(src, function (error, dirs, files) {
      if (error) {
        console.error(error);
      }
    });
  }
});
