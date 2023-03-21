const express = require("express");
const {
  getAllBlogs,
  addBlog,
  getUserBlogs,
  updateBlog,
  deleteBlog,
  searchBlog,
} = require("../controllers/blog-controller");
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/user-controller");
const { isAdmin, auth } = require("../middleware/auth");
const { profileUpload, blogpicUpload } = require("../middleware/upload");
const router = express.Router();

router.post("/users/register", profileUpload.single("file"), registerUser);
router.post("/users/login", loginUser);
router.get("/users/:userId", getAllUsers);
// auth , isAdmin is ready
router.post("/blogs",blogpicUpload.single("file"), addBlog);
router.get("/blogs", getAllBlogs);
router.get("/blogs/:userId", getUserBlogs);
router.put("/blogs/:blogId", updateBlog);
router.delete("/blogs/:blogId", deleteBlog);
router.get("/blogs/search/:key", searchBlog);

module.exports = router;
