import axios from "axios";

export const register = async (data) => {
  try {
    const result = await axios.post(
      `http://localhost:5000/users/register`,
      data
    );
    return result.data;
  } catch (err) {
    console.log(`The error in register is : ${err}`);
  }
};

export const login = async (data) => {
  try {
    const result = await axios.post(`http://localhost:5000/users/login`, data);
    return result.data;
  } catch (err) {
    console.log(`The error in login is : ${err}`);
  }
};

export const getAllUsers = async () => {
  try {
    const result = await axios.get(`http://localhost:5000/users`);
    return result.data;
  } catch (err) {
    console.log(`The error in getAllUsers is : ${err}`);
  }
};

export const getAllBlogs = async () => {
  try {
    const result = await axios.get(`http://localhost:5000/blogs`);
    return result.data;
  } catch (err) {
    console.log(`The error in getAllBlogs is : ${err}`);
  }
};

export const addBlog = async (data) => {
  const auth = localStorage.getItem("user");
  const token = JSON.parse(auth);
  try {
    const result = await axios.post(`http://localhost:5000/blogs`, data, {
      headers: {
        Authorization: token,
      },
    });
    return result.data;
  } catch (err) {
    console.log(`The error in addBlog is : ${err}`);
  }
};
export const getSingleUser = async (id) => {
  try {
    const result = await axios.get(`http://localhost:5000/users/${id}`);
    return result.data;
  } catch (err) {
    console.log(`The error in getSingleUserBlogs is : ${err}`);
  }
};
