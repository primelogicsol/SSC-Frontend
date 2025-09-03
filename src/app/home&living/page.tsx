"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "@/components/sections/home3/ProductCard";
import Banner from "@/components/sections/home3/Banner";
import { useState } from "react";
import Breadcrumb from "@/components/sections/home3/Breadcrumb";
const HomeSlides = [
  {
    subTitle: "Sacred Living, Inspired by Tradition",
    title: "Transform Your Space<br/> with Spiritual Elegance",
    text: "  Bring peace and harmony to your home with handcrafted décor,<br/> inspired by Kashmiri Sufi artistry and timeless traditions.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: " Graceful Living, Sufi-Inspired Serenity",
    title: " Elevate Your Home with<br/> Spiritual Touch",
    text: "Explore soulful home essentials, from sacred décor to handcrafted furnishings,<br/> designed to create an atmosphere of peace and mindfulness.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Tradition, Beauty, Comfort, Harmony, Spirit",
    title: "Artisanal Homeware for<br/> Sacred Living",
    text: " Infuse your home with warmth, culture, and spiritual elegance<br/> through handcrafted Kashmiri Sufi-inspired home and living collections.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Handcrafted Beauty for Inspired Living",
    title: "Timeless Kashmiri Craft<br/> for Your Home",
    text: "Discover home essentials enriched with heritage, designed to enhance your <br/>space with beauty, authenticity, and soulful energy.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Artistry for Every Home",
    title: "Create a Sanctuary of<br/> Spiritual Comfort",
    text: " Our collection blends sacred craftsmanship with functionality, offering timeless<br/> home décor and essentials inspired by Kashmiri Sufi traditions.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
const sampleProducts = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  image: `/assets/images/shop/product1.jpg`,
  description: "Handcrafted Sufi-inspired décor blending tradition and spirituality.",
  price: (i + 1) * 10 + 20,
  oldPrice: i % 2 === 0 ? (i + 1) * 10 + 30 : null,
  rating: 4 + (i % 2),
  tags: ["Handmade", "Spiritual", "Kashmir"],
  isWished: false,
}));

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortOption, setSortOption] = useState<string>("newest");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const totalPages = Math.ceil(sampleProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  // Sorting logic based on selected option
  const sortedProducts = [...sampleProducts];
  switch (sortOption) {
    case "newest":
      sortedProducts.sort((a, b) => b.id - a.id);
      break;
    case "low-to-high":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "high-to-low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "bestselling":
      sortedProducts.sort((a, b) => b.id - a.id); // Placeholder
      break;
    case "top-rated":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);


  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={HomeSlides}/>
      {/* Page Title */}
      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb/>
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              HOME & LIVING
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Kashmiri wall hangings feature tapestries adorned with spiritual
              symbols, Sufi poetry, and sacred images, adding a divine touch to
              spaces. Handcrafted ceramic sacred offering bowls are designed for
              ritual use, while traditional brass lamps illuminate prayers and
              meditation. Complementing these are exquisite ceramic tea sets,
              crafted for ceremonial tea drinking, reflecting Kashmir’s rich
              artisanal heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Product Start */}

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full p-2 border rounded mb-4"
                />

                <h3 className="font-semibold mb-2">Categories</h3>
                <ul className="space-y-2">
                <li >
                    <Link
                      href="/jewelry&accessories"
                       className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                      
                    >
                      Jewelry & Accessories
                    </Link>
                  </li>
                  <li >
                    <Link href="/wall&artdecor"
                    className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    

                    >Art & Wall Decor
                    
                    </Link>
                  </li>
                  <li className="font-bold hover:text-fixnix-darkpurple">
                    <Link
                      href="/home&living"
                     
                    >
                      Home & Living
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fashion&apparel"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Fashion & Apparel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wellness&meditation"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Wellness & Meditation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digitalbooks"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Digital Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/audiospectrums"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Audio Spectrum
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Grid */}
            <div className="md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
                <p>
                  Showing {indexOfFirstProduct + 1}–{indexOfLastProduct > sampleProducts.length ? sampleProducts.length : indexOfLastProduct} of {sampleProducts.length} results
                </p>
                <div className="flex items-center space-x-4">
                  <select
                    className="p-2 border bg-gray-100 rounded-lg"
                    value={productsPerPage}
                    onChange={(e) => setProductsPerPage(Number(e.target.value))}
                  >
                    <option value={12}>Show 12</option>
                    <option value={24}>Show 24</option>
                    <option value={48}>Show 48</option>
                  </select>

                  {/* Sorting Options */}
                  <select
                    className="p-2 border bg-gray-100 rounded-lg"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="newest">Newest First</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                    <option value="bestselling">Bestselling</option>
                    <option value="top-rated">Top Rated</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-fixnix-lightpurple text-white" : "bg-white text-gray-700"}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product End */}
    </Layout>
  );
}
