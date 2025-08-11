import apiClient from "@/lib/apiClient";

// Define allowed category types
export type CartCategory = "music" | "book" | "fashion" | "meditation" | "decoration" | "living" | "accessories";

// Cart item interface
export interface CartItem {
  id: number;
  userId: string;
  qty: number;
  createdAt: string;
  music?: any;
  digitalBook?: any;
  meditation?: any;
  fashion?: any;
  living?: any;
  decoration?: any;
  accessories?: any;
}

// Add to cart payload (matches backend controller expectations)
export interface AddToCartPayload {
  category: CartCategory;
  productId: number;
  qty?: number;
}

// Update cart item payload
export interface UpdateCartItemPayload {
  category: CartCategory;
  productId: number;
  qty: number;
}

// Delete cart item payload
export interface DeleteCartItemPayload {
  category: CartCategory;
  productId: number;
}

// 🛒 Add item to cart
export const addToCart = async (data: AddToCartPayload) => {
  const response = await apiClient.post("/cart", data);
  return response.data;
};

// 👀 Get cart items
export const getCart = async (): Promise<CartItem[]> => {
  const response = await apiClient.get("/cart");
  return response.data;
};

// 🔁 Update cart item quantity
export const updateCartItem = async (data: UpdateCartItemPayload) => {
  const response = await apiClient.patch("/cart", data);
  return response.data;
};

// ❌ Delete cart item
export const deleteCartItem = async (data: DeleteCartItemPayload) => {
  const response = await apiClient.delete("/cart", { data });
  return response.data;
};

// 🧹 Clear entire cart
export const clearCart = async () => {
  const response = await apiClient.delete("/cart");
  return response.data;
}; 