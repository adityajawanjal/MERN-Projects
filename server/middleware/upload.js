const multer = require("multer");

exports.profileUpload = multer({ dest: "profiles/" });
exports.blogpicUpload = multer({ dest: "blogpics/" });
