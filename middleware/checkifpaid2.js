import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const jsonKey = "nikhilisverygreatpersonandrichest";

const checkIsPaid2 = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);

    let decoded;
    try {
      decoded = jwt.verify(token, jsonKey);
    } catch (err) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid token" });
    }

    const userId = decoded.id;
    console.log(userId);

    let user;
    try {
      user = await User.findById(userId);
    } catch (error) {
      console.log("Error:", error.message);
      return res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }

    req.userId = userId;
    next();
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export default checkIsPaid2;
