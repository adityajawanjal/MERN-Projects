const Blog = require("../models/blog-model");
const User = require("../models/user-model");

exports.addBlog = async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    const blog = new Blog({
      userId: userId,
      title: title,
      description: description,
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
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json(`The error in getAllBlogs is ${err}`);
  }
};

exports.getUserBlogs = async (req, res) => {
  try {
    const { userId } = req.params;
    const blogs = await Blog.find({ userId: userId });
    if (blogs) {
      res.status(200).json(blogs);
    } else {
      res.status(400).json("no blogs of this user !");
    }
  } catch (err) {
    res.status(400).json(`The error in getUserBlogs is ${err}`);
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    const { blogId } = req.params;
    const userExist = await User.findOne({ _id: userId });
    if (userExist) {
      const blog = userExist.blogs.filter((e) => e._id === blogId);
      if (blog) {
        await Blog.findByIdAndUpdate(blogId, req.body);
        res.status(201).json("Blog Updated Successfully !");
      } else {
        res.status(400).json("No such Blog !");
      }
    } else {
      res.status(400).json("User doesn`t exist !");
    }
  } catch (err) {
    res.status(400).json(`The error in updateBlog is ${err}`);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    const { blogId } = req.params;
    const userExist = await User.findOne({ _id: userId });
    if (userExist) {
      const blog = userExist.blogs.filter((e) => e._id === blogId);
      if (blog) {
        await Blog.findByIdAndDelete(blogId);
        await User.findByIdAndUpdate(userId, { $pull: { blogs: blogId } });
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
