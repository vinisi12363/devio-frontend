import ApiConnection from "../Services/ApiConnection";
import { Order } from "../types/Order";

async function getAllOrders() {
  const { data } = await ApiConnection.get("/orders");
  return data;
}

async function postOrder(order: Order) {
  const { data } = await ApiConnection.post("/orders", order);
  return data;
}

async function deleteOrderById(id: number) {
  const { data } = await ApiConnection.delete(`/orders/${id}`);
  return data;
}

async function deleteOrderByStatus(status: string) {
  const { data } = await ApiConnection.delete(`/orders/${status}`);
  return data;
}

async function getOrderByStatus(status: string) {
  const { data } = await ApiConnection.get(`/orders/${status}`);
  return data;
}
async function updateOrderById(id: number , status:string) {
    const { data } = await ApiConnection.put(`/orders/${id}/${status}`);
    return data;
 
}

export const ordersApi = {
  getAllOrders,
  postOrder,
  deleteOrderById,
  deleteOrderByStatus,
  getOrderByStatus,
  updateOrderById
};
