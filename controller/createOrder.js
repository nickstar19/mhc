import Razorpay from "razorpay";
import jwt from "jsonwebtoken";
const key_id = "rzp_test_bxTkJMlHN7058Z";
const key_secret = "X6Ap7aI3VDKyA3bpSj2XVOmQ";
import User from "../models/userSchema.js";
import {
  validatePaymentVerification,
  validateWebhookSignature,
} from "razorpay/dist/utils/razorpay-utils.js";

const razorpay = new Razorpay({
  key_id,
  key_secret,
});

export const createOrder = async (req, res) => {
  const { userType } = req.body;
  let amount = userType === "student" ? 149 * 100 : 1999 * 100;

  const options = {
    amount, // amount in paisa
    currency: "INR",
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

export const verfiyOrder = async (req, res) => {
  const { orderId, paymentId, signature, token, userType } = req.body;
  try {
    const vaildPayment = validatePaymentVerification(
      { order_id: orderId, payment_id: paymentId },
      signature,
      key_secret
    );
    if (!vaildPayment) {
      return res.json("Invaild Payment");
    }
    const decodedData = jwt.verify(token, process.env.JSONTOKEN);
    console.log(decodedData);
    const existingUser = await User.findOneAndUpdate(
      { _id: decodedData.id },
      { orderId, paymentId, signature, isPaid: true, type: userType }
    );

    if (!existingUser) {
      return res.json({
        message: "Somethign went worng while payment, contact us for support ",
      });
    }
    res.json({ message: "Payment Updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to verify payment" });
  }
};
