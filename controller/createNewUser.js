import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const createNewUser = async (req, res) => {
  console.log(req.body);
  try {
    const { username, mobileNumber, email, password, cpassword } = req.body;
    if (!username || !mobileNumber || !email || !password || !cpassword) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs" });
    }
    if (password !== cpassword) {
      return res.status(400).json({ message: "Password does not match" });
    }
    const existingUser = await User.findOne({
      $or: [{ mobileNumber }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      username,
      mobileNumber,
      email,
      password: hashedPassword,
      isPaid: false,
      count: 0,
      userHistory: [],
    });

    const jsonKey = process.env.JSONTOKEN;
    const token = jwt.sign(
      { username: result.username, id: result._id },
      jsonKey,
      {
        expiresIn: "24h",
      }
    );

    return res.status(201).json({
      result: { username },
      token,
      isPaid: false,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, please try again later" });
  }
};

export default createNewUser;
