import api from '@/lib/api';

// Auth Services
export const authService = {
  login: (data: { email: string; password: string }) => 
    api.post('/user/login', data),
  
  register: (data: { 
    email: string; 
    password: string; 
    fullName: string;
    username: string;
  }) => api.post('/auth/register', data),
  
  logout: () => api.post('/auth/logout'),
  
  refreshToken: () => api.post('/auth/refresh-token'),
  
  verifyEmail: (token: string) => 
    api.post('/auth/verify-email', { token }),
};

// User Services
export const userService = {
  getProfile: () => api.get('/users/profile'),
  
  updateProfile: (data: any) => 
    api.put('/users/profile', data),
  
  changePassword: (data: { 
    currentPassword: string; 
    newPassword: string;
  }) => api.put('/users/change-password', data),
};

// Product Services
export const productService = {
  getAllProducts: (params?: any) => 
    api.get('/products', { params }),
  
  getProductById: (id: string) => 
    api.get(`/products/${id}`),
  
  createProduct: (data: any) => 
    api.post('/products', data),
  
  updateProduct: (id: string, data: any) => 
    api.put(`/products/${id}`, data),
  
  deleteProduct: (id: string) => 
    api.delete(`/products/${id}`),
};

// Cart Services
export const cartService = {
  getCart: () => api.get('/cart'),
  
  addToCart: (data: { productId: string; quantity: number }) => 
    api.post('/cart', data),
  
  updateCartItem: (itemId: string, data: { quantity: number }) => 
    api.put(`/cart/${itemId}`, data),
  
  removeFromCart: (itemId: string) => 
    api.delete(`/cart/${itemId}`),
};

// Wishlist Services
export const wishlistService = {
  getWishlist: () => api.get('/wishlist'),
  
  addToWishlist: (productId: string) => 
    api.post('/wishlist', { productId }),
  
  removeFromWishlist: (productId: string) => 
    api.delete(`/wishlist/${productId}`),
};

// Donation Services
export const donationService = {
  createDonation: (data: {
    amount: number;
    paymentMethod: string;
    message?: string;
  }) => api.post('/donations', data),
  
  getDonations: (params?: any) => 
    api.get('/donations', { params }),
};

// Membership Services
export const membershipService = {
  getMemberships: () => api.get('/memberships'),
  
  subscribeToMembership: (membershipId: string) => 
    api.post('/memberships/subscribe', { membershipId }),
  
  cancelMembership: () => 
    api.post('/memberships/cancel'),
}; 