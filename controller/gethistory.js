import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const getuserhistory = async (req, res) => {
  try {
    const userId = req.userId;
    var projection = {
      _id: 0,
      userHistory: 1,
      count: 1,
      username: 1,
      type: 1,
      branch: 1,
      category: 1,
    };
    const result = await User.findOne({ _id: userId }, projection);

    return res.json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong, please try again later" });
  }
};

export default getuserhistory;
