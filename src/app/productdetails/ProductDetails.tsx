"use client";
import { useState, useEffect, useRef } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShareAlt,
  FaFacebook,
  FaWhatsapp,
  FaPinterest,
  FaHeart,
  FaRegHeart,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { addToCart, type CartCategory } from "@/hooks/cart";
import { getProductDetails } from "@/hooks/shopServices";
import ProductDetailsSkeleton from "./Skeleton";
import RelatedProducts from "./RelatedProducts";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// type Review = {
//   date: string; // or Date if you have Date objects
//   rating: number;
//   // other fields...
// };

interface ToastMessage {
  message: string;
  type: "success" | "error" | "info";
}

export type Review = {
  id: number;
  name: string;
  date: string;
  rating: number;
  content: string;
  verified?: boolean;
  helpful?: number;
  image?: string;
};

export type Product = {
  id: number;
  stock: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  sku: string;
  images?: string[];
  coverImage?: string | null;
  overviewImages?: string[];
  createdAt: string; // ISO string from backend
  updatedAt: string; // ISO string from backend
  isDelete: boolean;
  userId: string;
  reviews: Review[];
};

// Helper component for star ratings
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
};

// Toast Component
const Toast = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error" | "info";
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`px-6 py-3 rounded-lg shadow-lg flex items-center ${
          type === "success"
            ? "bg-green-500"
            : type === "error"
            ? "bg-red-500"
            : "bg-blue-500"
        } text-white`}
      >
        {type === "success" && <FaCheckCircle className="mr-2" />}
        {type === "error" && <FaInfoCircle className="mr-2" />}
        {type === "info" && <FaInfoCircle className="mr-2" />}
        {message}
      </div>
    </div>
  );
};

export default function ProductDetails({
  productId,
  category,
}: {
  productId: string;
  category: string;
}) {
  // State for product details
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [showToast, setShowToast] = useState<ToastMessage | null>(null);
  const [reviewFormVisible, setReviewFormVisible] = useState(false);
  const [sortReviewsBy, setSortReviewsBy] = useState("recent");
  const [addingToCart, setAddingToCart] = useState(false);
  const [cartError, setCartError] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // Ref for scrolling back to top
  const topRef = useRef(null);
  const router = useRouter();
  // 🔥 Fetch products from API
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await getProductDetails(category, productId);
        setProduct(res.data || null); // adjust if backend returns differently
      } catch (err) {
        setError(true);
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId, category]);

  // Dummy product data (replace with actual API data in production)
  // const product = {
  //   id: 1, // Changed from string to number to match API requirements
  //   title: "Traditional Handcrafted Wooden Chair",
  //   tagline: "Authentic heritage craftsmanship from artisans of North India",
  //   originalPrice: 249.99,
  //   salePrice: 199.99,
  //   discount: 20,
  //   stock: 12,
  //   rating: 4.8,
  //   reviewCount: 124,
  //   description: "This exquisite handcrafted wooden chair represents centuries of traditional woodworking techniques. Each piece is meticulously created by master artisans using sustainable hardwood and traditional joinery methods that require no nails or screws. The intricate carving details showcase motifs inspired by regional cultural heritage.",
  //   materials: "Premium teak wood, Natural oil finish, Hand-carved details, Traditional joinery",
  //   care: "Dust regularly with a soft cloth. Apply wood polish every 3-6 months. Keep away from direct sunlight and excessive humidity. Clean spills immediately with a dry cloth.",
  //   artisanStory: "This piece comes from the workshop of the Kumar family, who have been furniture makers for seven generations in the foothills of the Himalayas. Master craftsman Rajiv Kumar leads a cooperative of 12 artisans who sustainably harvest local woods and use techniques passed down through centuries.",
  //   shipping: "Free shipping within India. International shipping available at additional cost. Estimated delivery time is 5-7 business days for domestic orders and 14-21 days for international orders. Each piece is carefully packaged in eco-friendly materials.",
  //   returns: "We offer a 30-day return policy for unused items in original condition. Custom orders are non-refundable. Please contact customer service to initiate a return.",
  //   certifications: [ "Eco-Friendly", "Fair Trade"],
  //   estimatedDelivery: "May 5–May 10",
  //   images: [
  //     "/assets/images/shop/product1.jpg",
  //     "/assets/images/shop/cart-page-img-2.jpg",
  //     "/assets/images/shop/cart-page-img-1.jpg",
  //     "/assets/images/shop/cart-page-img-2.jpg",
  //   ]
  // };

  // Dummy reviews data
  const reviews = [
    {
      id: 1,
      name: "Suleman Faheem",
      date: "April 12, 2025",
      rating: 5,
      content:
        "The craftsmanship is exceptional! This chair has become the centerpiece of my living room. The wood grain is beautiful and the comfort is surprising for such a traditional design.",
      verified: true,
      helpful: 24,
      image: "/assets/images/shop/review-img-1.jpg",
    },
    {
      id: 2,
      name: "Esha Irfan",
      date: "March 28, 2025",
      rating: 4.5,
      content:
        "Very pleased with this purchase. The chair arrived well-packaged and in perfect condition. The quality of the wood and the carving detail exceeds my expectations.",
      verified: true,
      helpful: 16,
    },
    {
      id: 3,
      name: "Fatima Ali",
      date: "February 15, 2025",
      rating: 4,
      content:
        "Beautiful chair and excellent craftsmanship. Took away one star because the delivery took longer than expected, but the product itself is wonderful.",
      verified: true,
      helpful: 8,
    },
  ];

  // Dummy related products
  const relatedProducts = [
    {
      id: 2,
      title: "Traditional Wooden Side Table",
      price: 149.99,
      rating: 4.6,
      image: "/assets/images/shop/cart-page-img-2.jpg",
    },
    {
      id: 3,
      title: "Hand-Carved Wooden Stool",
      price: 89.99,
      rating: 4.7,
      image: "/assets/images/shop/cart-page-img-1.jpg",
    },
    {
      id: 4,
      title: "Decorative Wooden Wall Panel",
      price: 179.99,
      rating: 4.9,
      image: "/assets/images/shop/cart-page-img-2.jpg",
    },
    {
      id: 5,
      title: "Carved Wooden Coffee Table",
      price: 229.99,
      rating: 4.5,
      image: "/assets/images/shop/cart-page-img-1.jpg",
    },
  ];

  // Handle quantity changes
  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, Number(value));
    // setQuantity(newQuantity > product?.stock ? product?.stock : newQuantity);
  };

  // Handle add to cart
  const handleAddToCart = async () => {
    try {
      setAddingToCart(true);
      setCartError("");

      // Determine the product category based on the current page URL or product ID
      // For now, using a default category - this should be adjusted based on your routing
      const cartCategoryMap: Record<string, string> = {
        ACCESSORIES: "accessories",
        MUSIC: "music",
        COUPON: "coupon", // if you need it
        DECORATION: "decoration",
        DIGITAL_BOOK: "book", // custom mapping
        FASHION: "fashion",
        HOME_LIVING: "living", // custom mapping
        MEDITATION: "meditation",
      }; // default

      // You can determine the category based on the URL path or product ID
      // For example: if the URL contains /music/ then category = "music"
      // This is a placeholder - adjust based on your actual routing structure

      await addToCart({
        category: cartCategoryMap[category] as CartCategory,
        productId: product?.id as number,
        qty: quantity,
      });

      setShowAddedToCart(true);
      setShowToast({
        message: "Product added to your cart successfully!",
        type: "success",
      });

      setTimeout(() => {
        setShowAddedToCart(false);
      }, 3000);
    } catch (err) {
      console.error("Error adding to cart:", err);
      setCartError("Failed to add product to cart. Please try again.");
      setShowToast({
        message: "Failed to add product to cart",
        type: "error",
      });
    } finally {
      setAddingToCart(false);
    }
  };

  // Handle buy now
  const handleBuyNow = () => {
    handleAddToCart().then(() => {
      router.push("/checkout");
    });
  };

  // Toggle wishlist
  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  // Sorted reviews based on selected sorting option
  const sortedReviews = [...reviews].sort((a: Review, b: Review) => {
    if (sortReviewsBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.rating - a.rating;
    }
  });

  // Effect for scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate stock status display text
  const stockStatusText =
    product?.stock! > 10
      ? "In Stock"
      : product?.stock! > 0
      ? `Low Stock (Only ${product?.stock} left)`
      : "Out of Stock";

  // Stock status color
  const stockStatusColor =
    product?.stock! > 10
      ? "text-green-600"
      : product?.stock! > 0
      ? "text-orange-500"
      : "text-red-600";

  // Clear toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }
  if (error) {
    return (
      <div className="w-full flex items-center">Something went wrong!</div>
    );
  }

  const imagesList = product?.images?.length
    ? product.images
    : product?.overviewImages?.length
    ? product.overviewImages
    : product?.coverImage
    ? [product.coverImage]
    : ["/assets/images/loader.png"];
  return product ? (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Product Details">
      {/* Main product section */}
      <div ref={topRef} className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image Gallery */}
          <div className="relative">
            {/* Main Image */}
            <div className="border border-gray-300 overflow-hidden mb-4">
              <div
                className="relative h-96 md:h-[500px] cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src={
                    imagesList.length &&
                    imagesList[selectedImageIndex].startsWith("http")
                      ? imagesList[selectedImageIndex]
                      : "/assets/images/loader.png"
                  }
                  alt={product?.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform"
                />
                {/* {product.discount > 0 && (
                  <span className="absolute top-4 left-4 bg-fixnix-lightpurple text-white px-2 py-1 text-sm font-bold rounded">
                    -{product.discount}% OFF
                  </span>
                )} */}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {imagesList.map((image, index) => (
                <div
                  key={index}
                  className={`border cursor-pointer ${
                    selectedImageIndex === index
                      ? "border-fixnix-lightpurple"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="relative h-20">
                    <Image
                      src={
                        image.startsWith("http")
                          ? image
                          : "/assets/images/loader.png"
                      }
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Preview Message */}
            <div className="bg-fixnix-lightpurple/5 border border-fixnix-lightpurple/10 rounded-lg p-4 mt-4">
              <p className="text-sm text-fixnix-lightpurple flex items-center">
                <FaInfoCircle className="mr-2" />
                View detailed images. Purchase to receive this sacred
                handcrafted piece.
              </p>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                style={{ zIndex: 1000 }}
              >
                <button
                  className="absolute top-4 right-4 text-white text-3xl"
                  onClick={() => setIsLightboxOpen(false)}
                >
                  <IoMdClose />
                </button>
                <div className="relative w-full max-w-4xl h-[80vh]">
                  <Image
                    src={
                      product.images &&
                      product.images[selectedImageIndex].startsWith("http")
                        ? product.images[selectedImageIndex]
                        : product.coverImage
                        ? product.coverImage
                        : product.overviewImages
                        ? product.overviewImages[0]
                        : "/assets/images/loader.png"
                    }
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
                  {imagesList.map((image, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        selectedImageIndex === index
                          ? "bg-fixnix-lightpurple"
                          : "bg-gray-400"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Info and Purchase Section */}
          <div>
            <h1 className="text-3xl font-bold text-fixnix-darkpurple mb-2">
              {product?.title}
            </h1>
            <p className="text-fixnix-gray mb-4">
              {product.tags && product.tags.join(", ")}
            </p>
            {/* Rating summary */}
            <div className="flex items-center gap-2 mb-6">
              <RatingStars rating={5} />
              <span className="text-fixnix-gray">{5}/5</span>
              <span className="text-fixnix-gray">
                ({product.reviews.length} reviews)
              </span>
            </div>
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-fixnix-lightpurple">
                  ${product.price.toFixed(2) + 40}
                </span>
                {product.price > product.price + 40 && (
                  <span className="text-lg text-fixnix-gray line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            {/* Stock Status */}
            <div className={`mb-6 font-medium ${stockStatusColor}`}>
              {stockStatusText}
            </div>
            {/* Estimated Delivery */}
            <div className="mb-6 flex items-center">
              <span className="text-fixnix-gray">Estimated delivery:</span>
              <span className="ml-2 font-medium">
                {/* {product.estimatedDelivery || "4 to 5 Business days"} */}4
                to 5 Business days
              </span>
            </div>
            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              {/* {product.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-fixnix-darkpurple text-sm py-1 px-3 rounded-full"
                >
                  {cert}
                </span>
              ))} */}
            </div>
            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-36 h-12 border border-gray-300 flex items-center">
                  <button
                    className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center text-xl font-bold text-fixnix-gray"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleQuantityChange(Number(e.target.value))
                    }
                    className="w-full h-full px-12 text-center text-lg font-bold text-fixnix-gray outline-none border-none"
                  />
                  <button
                    className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center text-xl font-bold text-fixnix-gray"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={toggleWishlist}
                  className="h-12 w-12 border border-gray-300 flex items-center justify-center text-xl transition-colors"
                >
                  {isInWishlist ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-fixnix-gray hover:text-red-500" />
                  )}
                </button>
              </div>
            </div>
            {/* Purchase Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={addingToCart || product.stock === 0}
                className="flex-1 bg-fixnix-lightpurple text-center text-white py-3 px-6 font-medium hover:bg-fixnix-darkpurple transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addingToCart
                  ? "Adding to Cart..."
                  : product.stock === 0
                  ? "Out of Stock"
                  : "Add to Cart"}
              </Button>
              <Button
                onClick={handleBuyNow}
                className="flex-1 bg-fixnix-lightpurple text-white py-3 px-6 font-medium text-center hover:bg-fixnix-darkpurple transition-opacity"
              >
                Buy Now
              </Button>
            </div>
            + {/* Cart Error Message */}
            {cartError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {cartError}
              </div>
            )}
            {/* Added to Cart Notification */}
            {showAddedToCart && (
              <div className="fixed top-20 right-4 z-50 bg-green-50 border-l-4 border-green-500 p-4 shadow-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      {showToast?.message}
                    </p>
                  </div>
                  <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                      <button
                        onClick={() => setShowAddedToCart(false)}
                        className="inline-flex rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Social Share */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-fixnix-gray font-medium flex items-center gap-2">
                  <FaShareAlt /> Share:
                </span>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-fixnix-darkpurple hover:opacity-80"
                  >
                    <FaFacebook size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="text-fixnix-darkpurple hover:opacity-80"
                  >
                    <FaWhatsapp size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="text-fixnix-darkpurple hover:opacity-80"
                  >
                    <FaPinterest size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 border-b border-gray-300">
            <div className="flex flex-wrap -mb-px">
              {["description", "shipping", "reviews"].map((tab) => (
                <button
                  key={tab}
                  className={`inline-block py-4 px-4 text-center border-b-2 font-medium text-lg ${
                    activeTab === tab
                      ? "border-fixnix-lightpurple text-fixnix-lightpurple"
                      : "border-transparent text-fixnix-gray hover:text-fixnix-darkpurple"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm rounded-lg">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-4">
                  Product Description
                </h2>
                <p className="text-fixnix-gray mb-4">{product.description}</p>
                <div>
                  <h3 className="text-xl font-bold text-fixnix-darkpurple mb-3">
                    Care Instructions
                  </h3>
                  <ul className="list-disc pl-5 text-fixnix-gray space-y-2">
                    {/* {product.care
                      .split(". ")
                      .filter(Boolean)
                      .map((item, index) => (
                        <li key={index}>{item}</li>
                      ))} */}
                  </ul>
                </div>
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === "shipping" && (
              <div>
                <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-4">
                  Shipping & Returns
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-fixnix-darkpurple mb-3">
                      Shipping Information
                    </h3>
                    <p className="text-fixnix-gray mb-4">
                      At Sufi Science Center, we are committed to delivering
                      every order with care, intention, and professionalism.
                      Whether you're ordering sacred texts, artisan goods, or
                      digital spiritual tools, your journey with us continues
                      from checkout to delivery.{" "}
                      <Link
                        href={"/shipping-policy"}
                        className="text-fixnix-lightpurple underline underline-offset-2"
                      >
                        Read more
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fixnix-darkpurple mb-3">
                      Return Policy
                    </h3>
                    <p className="text-fixnix-gray mb-4">
                      We honor every exchange as sacred — a reflection of trust
                      and mutual growth. If something doesn't meet your
                      expectations, we'll do our best to make it right. Please
                      read our policy carefully.{" "}
                      <Link
                        href={"/return-policy"}
                        className="text-fixnix-lightpurple underline underline-offset-2"
                      >
                        Read more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-2">
                      Customer Reviews
                    </h2>
                    <div className="flex items-center gap-2">
                      {/* <RatingStars rating={product.rating} /> */}
                      <span className="text-fixnix-gray">
                        {/* Based on {product.reviewCount} reviews */}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                    <select
                      className="border border-gray-300 py-2 px-3 text-fixnix-gray"
                      value={sortReviewsBy}
                      onChange={(e) => setSortReviewsBy(e.target.value)}
                    >
                      <option value="recent">Most Recent</option>
                      <option value="rating">Top Rated</option>
                    </select>
                    <button
                      className="bg-fixnix-lightpurple text-white py-2 px-4 hover:bg-fixnix-darkpurple transition-colors"
                      onClick={() => setReviewFormVisible(!reviewFormVisible)}
                    >
                      Write a Review
                    </button>
                  </div>
                </div>

                {/* Review Form */}
                {reviewFormVisible && (
                  <div className="bg-gray-50 p-6 mb-8 rounded-lg">
                    <h3 className="text-xl font-bold text-fixnix-darkpurple mb-4">
                      Write Your Review
                    </h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-fixnix-gray mb-2">
                          Rating *
                        </label>
                        <div className="flex gap-2 text-2xl">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className="text-yellow-400 hover:scale-110 transition"
                            >
                              <FaRegStar />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-fixnix-gray mb-2">
                          Review *
                        </label>
                        <textarea
                          className="w-full border border-gray-300 p-3 h-32"
                          required
                        ></textarea>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="bg-fixnix-darkpurple text-white py-2 px-6 hover:opacity-90 transition-opacity"
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Reviews List */}
                <div className="space-y-6">
                  {sortedReviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6"
                    >
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-fixnix-darkpurple">
                            {review.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <RatingStars rating={review.rating} />
                            <span className="text-sm text-fixnix-gray">
                              {review.date}
                            </span>
                            {review.verified && (
                              <span className="text-sm text-green-600">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-fixnix-gray mb-3">{review.content}</p>
                      {review.image && (
                        <div className="mb-3">
                          <div className="relative h-20 w-20">
                            <Image
                              src={review.image}
                              alt="Review image"
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                  <div className="flex">
                    <button className="border border-gray-300 px-4 py-2 text-fixnix-gray hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="border border-gray-300 px-4 py-2 bg-fixnix-lightpurple text-white">
                      1
                    </button>
                    <button className="border border-gray-300 px-4 py-2 text-fixnix-gray hover:bg-gray-50">
                      2
                    </button>
                    <button className="border border-gray-300 px-4 py-2 text-fixnix-gray hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <RelatedProducts category={category} />
      {/* Mobile Sticky Purchase Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-3 px-4 z-30 lg:hidden flex items-center justify-between">
        <div>
          <div className="font-bold text-fixnix-lightpurple">
            {/* ${product.salePrice.toFixed(2)} */}
          </div>
          <div className="flex items-center">
            {/* <RatingStars rating={product.rating} /> */}
            <span className="text-xs text-fixnix-gray ml-1">
              {/* {product.rating} */}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={toggleWishlist}
            className="bg-gray-100 text-fixnix-gray p-2 rounded-full hover:bg-gray-200"
          >
            {isInWishlist ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-fixnix-lightpurple text-white px-4 py-2 rounded hover:bg-fixnix-darkpurple"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-fixnix-lightpurple text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-fixnix-darkpurple z-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      {/* Toast Messages */}
      {showToast && <Toast message={showToast.message} type={showToast.type} />}
    </Layout>
  ) : (
    <h1>Product not found</h1>
  );
}
