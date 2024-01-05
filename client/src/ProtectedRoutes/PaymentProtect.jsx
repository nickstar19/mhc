import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PaymentProtect = () => {
  const auth = JSON.parse(localStorage.getItem("profile"));
  return auth.isPaid ? <Outlet /> : <Navigate to="/pay" />;
};

export default PaymentProtect;
