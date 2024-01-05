import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    orderId: {
      type: String,
    },
    paymentId: {
      type: String,
    },
    signature: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
      default: "newUser",
    },
    count: {
      type: Number,
      default: 0,
      required: true,
    },
    userHistory: {
      type: [
        {
          courseName: String,
          percentile: Number,
          homedistrict: String,
          district1: String,
          district2: String,
          district3: String,
          gender: String,
          category: String,
          branch: String,
          exam:String
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
