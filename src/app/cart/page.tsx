"use client"
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCart, updateCartItem, deleteCartItem, clearCart, type CartItem, type CartCategory } from "@/hooks/cart";

export default function Home() {
  const [showGiftCard, setShowGiftCard] = useState(false);
  const [giftCardAmount, setGiftCardAmount] = useState(100);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatingItem, setUpdatingItem] = useState<number | null>(null);
  const [deletingItem, setDeletingItem] = useState<number | null>(null);

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

  const handleQuantityChange = async (item: CartItem, newQty: number) => {
    if (newQty < 1) return;
    
    try {
      setUpdatingItem(item.id);
      
      // Determine the category based on which product field exists
      let category: CartCategory = "living"; // default
      if (item.music) category = "music";
      else if (item.digitalBook) category = "book";
      else if (item.fashion) category = "fashion";
      else if (item.meditation) category = "meditation";
      else if (item.decoration) category = "decoration";
      else if (item.accessories) category = "accessories";
      
      // Get the product ID
      const productId = item.music?.id || item.digitalBook?.id || item.fashion?.id || 
                       item.meditation?.id || item.decoration?.id || item.living?.id || 
                       item.accessories?.id;
      
      if (!productId) {
        setError("Product ID not found");
        return;
      }
      
      await updateCartItem({
        category,
        productId,
        qty: newQty
      });
      
      // Refresh cart items
      await fetchCartItems();
    } catch (err) {
      console.error("Error updating quantity:", err);
      setError("Failed to update quantity");
    } finally {
      setUpdatingItem(null);
    }
  };

  const handleRemoveItem = async (item: CartItem) => {
    try {
      setDeletingItem(item.id);
      
      // Determine the category based on which product field exists
      let category: CartCategory = "living"; // default
      if (item.music) category = "music";
      else if (item.digitalBook) category = "book";
      else if (item.fashion) category = "fashion";
      else if (item.meditation) category = "meditation";
      else if (item.decoration) category = "decoration";
      else if (item.accessories) category = "accessories";
      
      // Get the product ID
      const productId = item.music?.id || item.digitalBook?.id || item.fashion?.id || 
                       item.meditation?.id || item.decoration?.id || item.living?.id || 
                       item.accessories?.id;
      
      if (!productId) {
        setError("Product ID not found");
        return;
      }
      
      await deleteCartItem({
        category,
        productId
      });
      
      // Refresh cart items
      await fetchCartItems();
    } catch (err) {
      console.error("Error removing item:", err);
      setError("Failed to remove item");
    } finally {
      setDeletingItem(null);
    }
  };

  const handleClearCart = async () => {
    try {
      setLoading(true);
      await clearCart();
      setCartItems([]);
    } catch (err) {
      console.error("Error clearing cart:", err);
      setError("Failed to clear cart");
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
  
  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Cart">
      {/* Start Cart Page */}
      <section className="relative block bg-white py-[113px] pb-[120px]">
        <div className="container mx-auto px-4">
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

          {/* Gift Card Banner */}
          <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-fixnix-lightpurple">
                <i className="fas fa-gift text-2xl"></i>
              </div>
              <p className="text-fixnix-darkpurple font-medium">
                <span className="font-bold">Last-minute gift?</span> Buy a voucher now!
              </p>
            </div>
            <button 
              onClick={() => setShowGiftCard(!showGiftCard)}
              className="text-fixnix-lightpurple hover:text-fixnix-darkpurple font-bold"
            >
              {showGiftCard ? 'Hide Options' : 'Add Gift Voucher'}
            </button>
          </div>

          {/* Gift Card Selection (Conditional) */}
          {showGiftCard && (
            <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/assets/images/shop/giftvoucher.png" 
                    alt="Gift Voucher"
                    width={300}
                    height={200}
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-fixnix-darkpurple mb-3">
                    Gift Voucher
                  </h3>
                  <p className="text-fixnix-gray mb-4">
                    Perfect for last-minute gifts! Your recipient can redeem this voucher on any items in our store.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-fixnix-darkpurple font-medium mb-2">Amount</label>
                      <div className="flex items-center">
                        <span className="text-fixnix-gray text-xl mr-2">$</span>
                        <input
                          type="number"
                          min="10"
                          value={giftCardAmount}
                          onChange={(e) => setGiftCardAmount(Number(e.target.value))}
                          className="w-full border border-gray-300 p-3 text-[16px] text-fixnix-darkpurple"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-fixnix-darkpurple font-medium mb-2">Recipient Email</label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full border border-gray-300 p-3 text-[16px] text-fixnix-gray"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-darkpurple"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty Cart Message */}
          {cartItems.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-2">Your cart is empty</h2>
              <p className="text-fixnix-gray mb-6">Add some items to get started!</p>
              <Link
                href="/wall&artdecor"
                className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-darkpurple rounded"
              >
                Continue Shopping
              </Link>
            </div>
          )}

          {/* Cart Items Table */}
          {cartItems.length > 0 && (
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[1170px] border-collapse text-left">
              <thead>
                <tr className="text-[20px] font-bold text-fixnix-darkpurple border-b border-gray-300">
                  <th className="pb-5">Item</th>
                  <th className="pb-5">Price</th>
                  <th className="pb-5">Quantity</th>
                  <th className="pb-5">Total</th>
                  <th className="pb-5 text-right">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const productInfo = getProductInfo(item);
                  return (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="flex items-center py-8 space-x-9">
                      <div className="w-[120px] border border-gray-300 overflow-hidden">
                      <Image
                      src={productInfo.image}
                      alt="Product Image"
                      width={500} // Adjust based on your design requirements
                      height={300} // Adjust this height to fit your layout
                      className="w-full"
                    />
                      </div>
                      <h3 className="text-[20px] font-bold text-fixnix-darkpurple">
                        <Link
                          href="product-details"
                          className="text-fixnix-lightpurple"
                        >
                          {productInfo.title}
                        </Link>
                      </h3>
                    </td>
                    <td className="text-[18px] text-fixnix-gray">${productInfo.price.toFixed(2)}</td>
                    <td>
                      <div className="relative w-[98px] h-[50px] border border-gray-300 flex items-center">
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) => handleQuantityChange(item, parseInt(e.target.value) || 1)}
                          disabled={updatingItem === item.id}
                          className="w-full h-full px-6 text-[18px] font-bold text-fixnix-gray outline-none border-none"
                        />
                      </div>
                    </td>
                    <td className="text-[18px] text-fixnix-gray">${(productInfo.price * item.qty).toFixed(2)}</td>
                    <td className="text-right">
                      <button 
                        onClick={() => handleRemoveItem(item)}
                        disabled={deletingItem === item.id}
                        className="text-fixnix-darkpurple text-[16px] hover:text-fixnix-lightpuple disabled:opacity-50"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                )})}
                
                {/* Gift Card Row (Shown when added) */}
                {showGiftCard && (
                  <tr className="border-b border-gray-300 bg-purple-50">
                    <td className="flex items-center py-8 space-x-9">
                      <div className="w-[120px] border border-gray-300 overflow-hidden">
                        <div className="bg-fixnix-lightpurple h-full flex items-center justify-center">
                          <i className="fas fa-gift text-white text-3xl"></i>
                        </div>
                      </div>
                      <h3 className="text-[20px] font-bold text-fixnix-darkpurple">
                        <span className="text-fixnix-lightpurple">Gift Voucher</span>
                      </h3>
                    </td>
                    <td className="text-[18px] text-fixnix-gray">${giftCardAmount.toFixed(2)}</td>
                    <td>
                      <div className="relative w-[98px] h-[50px] border border-gray-300 flex items-center">
                        <input
                          type="number"
                          value="1"
                          readOnly
                          className="w-full h-full px-6 text-[18px] font-bold text-fixnix-gray outline-none border-none bg-white"
                        />
                      </div>
                    </td>
                    <td className="text-[18px] text-fixnix-gray">${giftCardAmount.toFixed(2)}</td>
                    <td className="text-right">
                      <button 
                        onClick={() => setShowGiftCard(false)}
                        className="text-fixnix-darkpurple text-[16px] hover:text-fixnix-lightpuple"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <form className="w-full max-w-md">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="w-full border border-gray-300 p-4 text-[14px] text-fixnix-gray mb-4"
              />
              <button className="w-full bg-fixnix-lightpurple text-white py-3 hover:bg-fixnix-darkpurple ">
                Apply Coupon
              </button>
            </form>

            <div>
              <ul className="space-y-4 text-[18px] font-medium text-fixnix-gray">
                <li className="flex justify-between">
                  <span className="font-bold text-fixnix-darkpurple">
                    Subtotal
                  </span>
                  <span>${showGiftCard ? (calculateSubtotal() + giftCardAmount).toFixed(2) : calculateSubtotal().toFixed(2)} USD</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold text-fixnix-darkpurple">
                    Shipping Cost
                  </span>
                  <span>$0.00 USD</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold text-fixnix-darkpurple">
                    Total
                  </span>
                  <span className="text-fixnix-lightpuple font-bold">
                    ${showGiftCard ? (calculateSubtotal() + giftCardAmount).toFixed(2) : calculateSubtotal().toFixed(2)} USD
                  </span>
                </li>
              </ul>

              <div className="flex justify-end mt-6 space-x-4">
                {cartItems.length > 0 && (
                  <button
                    onClick={handleClearCart}
                    disabled={loading}
                    className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 disabled:opacity-50"
                  >
                    Clear Cart
                  </button>
                )}
                <Link
                  href="#"
                  className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-lightpurple"
                >
                  Update
                </Link>
                <Link
                  href="/checkout"
                  className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-darkpurple"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>

          {/* Deals Section */}
          {/* <div className="mt-10 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-4">
              Special Deals
            </h2>
            <p className="text-[18px] text-fixnix-gray">
              Buy 2 items and get a 10% discount on your total purchase!
            </p>
            <p className="text-[18px] text-fixnix-gray">
              Discount will be applied automatically at checkout.
            </p>
          </div> */}
        </div>
      </section>
    </Layout>
  );
}