import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const jsonKey = "nikhilisverygreatpersonandrichest";

const checkIsPaid = async (req, res, next) => {
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

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    if (!user.isPaid) {
      return res
        .status(403)
        .json({ status: "error", message: "User is not paid" });
    }

    if (user.count > 5 && user.type === "student") {
      return res
        .status(401)
        .json({
          status: "error",
          message: "Exceeds maximum limit. Update your plan.",
        });
    }

    req.userId = userId;
    next();
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

export default checkIsPaid;
