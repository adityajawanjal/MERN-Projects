const express = require("express");
const { fileUpload, downloadFile } = require("../controllers/file-controller");
const upload = require("../middlewares/upload");
const router = express.Router();

router.post("/uploads" ,upload.single("file") , fileUpload );
router.get("/file/:id",downloadFile);
module.exports = router;