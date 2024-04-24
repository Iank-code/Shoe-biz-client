"use client";
import { useSelector } from "react-redux";
import AdminOrderPage from "./admin/Order";
import CustomerOrder from "./customer/customerOrder";

export default function Orders() {
  const loginState = useSelector((state: any) => state.login);
  return loginState.role !== "Seller" ? <CustomerOrder /> : <AdminOrderPage />;
}
