import axios from "axios";
export const GET_ORDERS = "GET_ORDERS";
export const GET_ORDERS_BY_ID = "GET_ORDERS_BY_ID";
export const GET_USER_ORDER_ID = "GET_USER_ORDER_ID";

export function getOrders() {
  return async (dispatch) => {
    const { data } = await axios.get("/orders");
    return await dispatch({
      type: GET_ORDERS,
      payload: data,
    });
  };
}
export function getOrdersById(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`orders/${id}`);
    return await dispatch({
      type: GET_ORDERS_BY_ID,
      payload: data,
    });
  };
}
export function getUserOrderId(id) {
  return async (dispatch) => {
    let { data } = await axios.get(`/orders/userId/${id}`);
    console.log('a ver la data quie me llega ddsp del get',data)
    return await dispatch({
      type: GET_USER_ORDER_ID,
      payload: data,
    });
  };
}

export async function putOrder(id, payload) {
  const { data } = await axios.put(`orders/updateOrder/${id}`, payload);
  console.log("data", data);
  return data;
}
