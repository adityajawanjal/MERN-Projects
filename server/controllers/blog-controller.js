const Blog = require("../models/blog-model");
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

exports.addBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    const blog = new Blog({
      userId: userId,
      title: title,
      description: description,
      picName: req.file.originalname,
      picUrl: req.file.path,
    });
    await blog.save();
    await User.findByIdAndUpdate(userId, { $push: { blogs: blog._id } });
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json(`The error in addBlog is ${err}`);
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})
      .populate("userId")
      .select("-password")
      .sort({ createdAt: "-1" });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json(`The error in getAllBlogs is ${err}`);
  }
};

exports.updateBlog = async (req, res) => {

  try {
    const blog = await Blog.findById(req.params.id);
    console.log(blog);
  } catch (err) {
    res.status(400).json(`The error in updateBlog is ${err}`);
  }





  // try {
  //   // const { userId, title, description } = req.body;
  //   const { blogId } = req.params;
  //   const userExist = await User.findOne({ _id: req.user.id });
  //   if (userExist) {
  //     const blogs = await userExist.populate("blogs").blogs;
   
  //    console.log(blogs);
      // if (blog) {
      //   await Blog.findByIdAndUpdate(blog._id, {
      //     title:
      //     description:
      //     picUrl:
      //     picName:
      //   });
      //   res.status(201).json("Blog Updated Successfully !");
      // } else {
      //   res.status(400).json("No such Blog !");
      // }
//     } else {
//       res.status(400).json("User doesn`t exist !");
//     }
//   } catch (err) {
//     res.status(400).json(`The error in updateBlog is ${err}`);
//   }
};

exports.deleteBlog = async (req, res) => {
  try {
    // const { userId, title, description } = req.body;
    const { blogId } = req.params;
    const userExist = await User.findOne({ _id: req.user.id });
    if (userExist) {
      const blog = userExist.blogs.filter((e) => e._id === blogId);
      if (blog) {
        await Blog.findByIdAndDelete(blogId);
        await User.findByIdAndUpdate(userExist._id, { $pull: { blogs: blogId } });
        res.status(201).json("Blog Deleted  !");
      } else {
        res.status(400).json("No such Blog !");
      }
    } else {
      res.status(400).json("User doesn`t exist !");
    }
  } catch (err) {
    res.status(400).json(`The error in deleteBlog is ${err}`);
  }
};

exports.searchBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: req.params.key, $options: "i" } },
        { description: { $regex: req.params.key, $options: "i" } },
      ],
    });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json(`The error in searchBlog is ${err}`);
  }
};

exports.getSingleBlog = async (req,res) =>{
  try {
    const blog = await Blog.findById(req.params.blogId);
    if(blog){
      res.status(200).json(blog);
    }else{
      res.status(400).json("No Blog");
    }
  } catch (err) {
    res.status(400).json(`The error in getSingleBlog is ${err}`);
  }
}