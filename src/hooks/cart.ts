// import apiClient from "../lib/apiClient";

// // Cart item interface
// export interface CartItem {
//   id: number;
//   userId: string;
//   qty: number;
//   createdAt: string;
//   music?: any;
//   digitalBook?: any;
//   meditation?: any;
//   fashion?: any;
//   living?: any;
//   decoration?: any;
//   accessories?: any;
// }

// // Backend expects: productId, qty (optional, defaults to 1)
// export interface AddToCartPayload {
//   productId: number;
//   qty?: number;
// }

// // Update cart item payload
// export interface UpdateCartItemPayload {
//   productId: number;
//   qty: number;
// }

// // Delete cart item payload
// export interface DeleteCartItemPayload {
//   productId: number;
// }

// // 🛒 Add item to cart
// export const addToCart = async (data: AddToCartPayload) => {
//   const response = await apiClient.post("/user/cart", data);
//   return response.data;
// };

// // 👀 Get cart items
// export const getCart = async (): Promise<CartItem[]> => {
//   const response = await apiClient.get("/user/cart");
//   return response.data;
// };

// // 🔁 Update cart item quantity
// export const updateCartItem = async (data: UpdateCartItemPayload) => {
//   const response = await apiClient.patch("/user/cart", data);
//   return response.data;
// };

// // ❌ Delete cart item - backend expects productId in URL params
// export const deleteCartItem = async (productId: number) => {
//   const response = await apiClient.delete(`/user/cart/${productId}`);
//   return response.data;
// };

// // 🧹 Clear entire cart
// export const clearCart = async () => {
//   const response = await apiClient.delete("/user/cart");
//   return response.data;
// }; 