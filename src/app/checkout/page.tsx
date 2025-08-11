"use client";
import Layout from "@/components/layout/Layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCart, type CartItem } from "@/hooks/cart";
import Image from "next/image";

export default function Home() {
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch cart items on component mount
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const items = await getCart();
      setCartItems(items);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError("Failed to load cart items");
    } finally {
      setLoading(false);
    }
  };

  const getProductInfo = (item: CartItem) => {
    const product = item.music || item.digitalBook || item.fashion || 
                   item.meditation || item.decoration || item.living || 
                   item.accessories;
    
    if (!product) return { title: "Unknown Product", price: 0, image: "" };
    
    return {
      title: product.title || product.name || "Product",
      price: product.price || 0,
      image: product.images?.[0] || product.coverImage || "/assets/images/shop/cart-page-img-1.jpg"
    };
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductInfo(item);
      return total + (product.price * item.qty);
    }, 0);
  };

  const calculateShipping = () => {
    // Free shipping for orders over $50, otherwise $5.99
    return calculateSubtotal() > 50 ? 0 : 5.99;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Checkout">
        <section className="checkout-page py-16">
          <div className="container max-w-6xl mx-auto px-4">
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
                Loading cart items...
              </div>
            )}

            {/* Empty Cart Redirect */}
            {cartItems.length === 0 && !loading && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-2">Your cart is empty</h2>
                <p className="text-fixnix-gray mb-6">Add some items to proceed to checkout!</p>
                <Link
                  href="/shop"
                  className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-darkpurple rounded"
                >
                  Continue Shopping
                </Link>
              </div>
            )}

            {/* Login Link */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-base">
                Returning Customer?{" "}
                <Link
                  href="/login"
                  className="text-fixnix-lightpurple hover:text-fixnix-darkpurple font-medium transition-colors"
                >
                  Click here to Login
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Billing Details */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold text-fixnix-darkpurple mb-6">
                  Billing Details
                </h2>
                <form className="space-y-4">
                  <div className="form-group">
                    <select className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all">
                      <option value="">Select a country</option>
                      <option value="1">Canada</option>
                      <option value="2">England</option>
                      <option value="3">Australia</option>
                      <option value="4">USA</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last name"
                        className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="company_name"
                      placeholder="Company (optional)"
                      className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="Address"
                      placeholder="Street address"
                      className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="apartment"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="zip"
                        placeholder="ZIP Code"
                        className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="create-account"
                      className="w-4 h-4 text-fixnix-lightpurple rounded border-gray-300 focus:ring-fixnix-lightpurple"
                    />
                    <label htmlFor="create-account" className="text-sm text-gray-600">
                      Create an account?
                    </label>
                  </div>
                </form>
              </div>

              {/* Shipping Details */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <input
                      type="checkbox"
                      id="ship-different"
                      checked={showShippingForm}
                      onChange={(e) => setShowShippingForm(e.target.checked)}
                      className="w-4 h-4 text-fixnix-lightpurple rounded border-gray-300 focus:ring-fixnix-lightpurple"
                    />
                    <label
                      htmlFor="ship-different"
                      className="text-lg font-medium text-gray-700 cursor-pointer"
                    >
                      Ship to a different address?
                    </label>
                  </div>

                  {showShippingForm && (
                    <form className="space-y-4">
                      <div className="form-group">
                        <select className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all">
                          <option value="">Select a country</option>
                          <option value="1">Canada</option>
                          <option value="2">England</option>
                          <option value="3">Australia</option>
                          <option value="4">USA</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="form-group">
                          <input
                            type="text"
                            name="shipping_first_name"
                            placeholder="First name"
                            className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="shipping_last_name"
                            placeholder="Last name"
                            className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="shipping_company"
                          placeholder="Company (optional)"
                          className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="shipping_address"
                          placeholder="Street address"
                          className="w-full h-12 rounded-lg bg-gray-50 border border-gray-200 px-4 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all"
                        />
                      </div>

                      <div className="form-group">
                        <textarea
                          placeholder="Order notes (optional)"
                          name="order_notes"
                          rows={4}
                          className="w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-fixnix-lightpurple focus:ring-1 focus:ring-fixnix-lightpurple transition-all resize-none"
                        ></textarea>
                      </div>
                    </form>
                  )}
                </div>

                {/* Order Summary */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-semibold text-fixnix-darkpurple mb-6">
                    Your Order
                  </h2>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-4 text-gray-600 font-medium">Product</th>
                            <th className="text-right py-4 text-gray-600 font-medium">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => {
                            const product = getProductInfo(item);
                            return (
                              <tr key={item.id}>
                                <td className="py-4 text-gray-600">
                                  <div className="flex items-center">
                                    <Image
                                      src={product.image}
                                      alt={product.title}
                                      width={50}
                                      height={50}
                                      className="mr-3"
                                    />
                                    <span>{product.title}</span>
                                  </div>
                                </td>
                                <td className="py-4 text-right text-gray-600">
                                  ${product.price.toFixed(2)}
                                </td>
                              </tr>
                            );
                          })}
                          <tr>
                            <td className="py-4 text-gray-600">Subtotal</td>
                            <td className="py-4 text-right text-gray-600">${calculateSubtotal().toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td className="py-4 text-gray-600">Shipping</td>
                            <td className="py-4 text-right text-gray-600">${calculateShipping().toFixed(2)}</td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="py-4 font-semibold text-gray-800">Total</td>
                            <td className="py-4 text-right font-semibold text-gray-800">${calculateTotal().toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <Link
                      href="/thankyou"
                      className="block w-full text-center bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
                    >
                      Proceed to Payment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
