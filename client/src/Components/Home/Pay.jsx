import React from "react";
import "./Pay.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pay = () => {
  const navigate = useNavigate();

  const handlePayment = async (userType) => {
    const token = JSON.parse(localStorage.getItem("profile"));
    if (!token) {
      return navigate("/login");
    }

    const response = await axios.post("/createorder", {
      userType,
    });

    const { data } = response;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = function () {
      const options = {
        key: "rzp_test_bxTkJMlHN7058Z",
        amount: data.amount,
        order_id: data.id,
        name: "MH College World",
        description: "Payment for your order",
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;
          const token = JSON.parse(localStorage.getItem("profile")).token;
          verifyPayment(
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            token,
            userType
          );
          const auth = JSON.parse(localStorage.getItem("profile"));
          auth.isPaid = true;
          localStorage.setItem("profile", JSON.stringify(auth));
          alert("Payment done Successfullly");
          navigate("/collect");
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  const verifyPayment = async (
    paymentId,
    orderId,
    signature,
    token,
    userType
  ) => {
    try {
      const response = await axios.post("/verifypayment", {
        paymentId,
        orderId,
        signature,
        token,
        userType,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="container">
        <h2>Our Subscription</h2>
        <p>A complete Assistance for your Engineering Carrer in Maharastra</p>

        <div className="container-cards">
          <div className="card">
            <div></div>
            <h4>₹ 149</h4>
            <h3>Student Pack</h3>
            <p>Get 15 suggestions based on your percentile.</p>
            <p>Maxium number of query per student : 15 </p>
            <p>WhatsApp Support</p>
            <button className="btn-1" onClick={() => handlePayment("student")}>
              Pay Now
            </button>
          </div>
          <div className="card">
            <div></div>
            <h4>₹ 1999</h4>
            <h3>Institute Pack </h3>
            <p>Get 15 suggestions based on your percentile.</p>
            <p>Maxium number of query per student : Unlimited </p>
            <p>WhatsApp Support</p>
            <button className="btn-1" onClick={() => handlePayment("institue")}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
