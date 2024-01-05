import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const userLogin = async (req, res) => {
  try {
    const { mobileNumber, password } = req.body;
    if (!mobileNumber || !password) {
      return res
        .status(400)
        .json({ message: "Please provide mobile number and password" });
    }

    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const jsonKey = process.env.JSONTOKEN;
    const token = jwt.sign({ id: user._id }, jsonKey, {
      expiresIn: "24h",
    });

    return res
      .status(200)
      .json({ token, message: "Login successful", isPaid: user.isPaid });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, please try again later" });
  }
};

export default userLogin;
