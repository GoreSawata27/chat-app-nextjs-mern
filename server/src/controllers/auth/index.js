import UserModel from "../../models/user/index.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

async function checkEmail(request, response) {
  try {
    const { email } = request.body;

    const checkEmail = await UserModel.findOne({ email }).select("-password");

    if (!checkEmail) {
      return response.status(400).json({
        message: "user not exit",
        error: true,
      });
    }

    return response.status(200).json({
      message: "email verify",
      success: true,
      data: checkEmail,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

async function login(request, response) {
  try {
    const { password, userId } = request.body;

    if (!password) {
      return response.status(400).json({
        message: "please enter your password",
        error: true,
      });
    }

    const user = await UserModel.findById(userId);

    const verifyPassword = await bcryptjs.compare(password, user.password);

    if (!verifyPassword) {
      return response.status(400).json({
        message: "Please check password",
        error: true,
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECREAT_KEY, {
      expiresIn: "1d",
    });

    const cookieOptions = {
      http: true,
      secure: true,
      sameSite: "None",
    };

    return response.cookie("token", token, cookieOptions).status(200).json({
      message: "Login successfully",
      token: token,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

async function logout(request, response) {
  try {
    const cookieOptions = {
      http: true,
      secure: true,
      sameSite: "None",
    };

    return response.cookie("token", "", cookieOptions).status(200).json({
      message: "session out",
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

export { checkEmail, login, logout };
