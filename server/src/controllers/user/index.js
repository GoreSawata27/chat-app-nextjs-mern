import bcryptjs from "bcryptjs";

import UserModel from "../../models/user/index.js";
import { getUserDetailsFromToken } from "../../helpers/getUserDetailsFromToken.js";

async function registerUser(request, response) {
  try {
    const { name, email, password, profile_pic } = request.body;

    // Validate required fields
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "Name, email, and password are required.",
        error: true,
      });
    }

    // Check if the email already exists
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return response.status(400).json({
        message: "User with this email already exists.",
        error: true,
      });
    }

    // Generate a hashed password
    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    // Create a new user payload
    const payload = {
      name,
      email,
      profile_pic,
      password: hashpassword,
    };

    // Save the new user to the database
    const user = new UserModel(payload);
    const userSave = await user.save();

    return response.status(201).json({
      message: "User created successfully",
      data: userSave,
      success: true,
    });
  } catch (error) {
    // Handle known errors or respond with a general error message
    if (error.name === "ValidationError") {
      return response.status(400).json({
        message: "Invalid input data.",
        error: true,
      });
    }

    return response.status(500).json({
      message: "An unexpected error occurred. Please try again.",
      error: true,
    });
  }
}

async function searchUser(request, response) {
  try {
    const { search } = request.body;

    const query = new RegExp(search, "i", "g");

    const user = await UserModel.find({
      $or: [{ name: query }, { email: query }],
    }).select("-password");

    return response.json({
      message: "all user",
      data: user,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

async function updateUserDetails(request, response) {
  try {
    const token = request.cookies.token || "";

    const user = await getUserDetailsFromToken(token);

    const { name, profile_pic } = request.body;

    const updateUser = await UserModel.updateOne(
      { _id: user._id },
      {
        name,
        profile_pic,
      }
    );

    const userInfomation = await UserModel.findById(user._id);

    return response.json({
      message: "user update successfully",
      data: userInfomation,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

export { registerUser, searchUser, updateUserDetails };
