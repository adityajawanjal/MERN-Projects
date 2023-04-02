const express = require("express");
const {
  getAllBlogs,
  addBlog,
  getUserBlogs,
  updateBlog,
  deleteBlog,
  searchBlog,
  getSingleBlog,
} = require("../controllers/blog-controller");
const {
  getAllUsers,
  registerUser,
  loginUser,
  getSingleUser,
} = require("../controllers/user-controller");
const { isAdmin, auth } = require("../middleware/auth");
const { profileUpload, blogpicUpload } = require("../middleware/upload");
const router = express.Router();

router.post("/users/register", profileUpload.single("file"), registerUser);
router.post("/users/login", loginUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getSingleUser);

router.post("/blogs", auth, blogpicUpload.single("file"), addBlog);
router.get("/blogs", getAllBlogs);
router.get("/blogs/:blogId", getSingleBlog);
router.delete("/blogs/:blogId", auth, deleteBlog);
router.get("/blogs/search/:key", searchBlog);

module.exports = router;
