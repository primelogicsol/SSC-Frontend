"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ProductCard from "@/components/sections/home3/ProductCard";
import Banner from "@/components/sections/home3/Banner";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Breadcrumb from "@/components/sections/home3/Breadcrumb";
const FashionSlides = [
  {
    subTitle: "Elegance Woven with Spiritual Essence",
    title: " Timeless Sufi-Inspired<br/> Fashion & Apparel",
    text: " Discover handcrafted clothing inspired by Kashmiri Sufi traditions, blending heritage,<br/> artistry, and spirituality into every stitch.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Wear the Spirit of Tradition",
    title: " Sufi-Inspired Attire<br/> for Every Occasion",
    text: "Explore exquisite garments infused with cultural symbolism and crafted with<br/> devotion, reflecting the grace of Kashmiri Sufi heritage.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Artistry, Culture, Spirituality in Fashion",
    title: " Handcrafted Apparel Rooted<br/> in Kashmiri Tradition",
    text: "  Adorn yourself with beautifully designed garments that embody the <br/>elegance, wisdom, and cultural depth of Kashmiri Sufi traditions.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Fashion That Reflects Inner Harmony",
    title: "Experience the Beauty<br/> of Sufi Elegance",
    text: "From flowing robes to intricate patterns, embrace a fashion line that<br/> fuses spirituality, tradition, and contemporary style.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Graceful Attire, Inspired by Spirituality",
    title: "Traditional Textiles with<br/> a Sacred Touch",
    text: "Adorn yourself with beautifully designed garments that embody the elegance, <br/>wisdom, and cultural depth of Kashmiri Sufi traditions.",
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
      <Banner slides={FashionSlides}/>
      {/* Page Title */}
      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
         <Breadcrumb/>
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              FASHION & APPAREL
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              Kashmiri woolen robes, handwoven with local wool, offer
              traditional spiritual wear, while Pashmina shawls provide divine
              softness and warmth. Embroidered tunics and elegant jackets
              showcase intricate Kashmiri embroidery, blending tradition with
              artistry. For meditation, Sufi whirling skirts are handmade for
              dervishes, reflecting Kashmir’s craftsmanship and spiritual
              essence in every stitch.
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
                  <li >
                    <Link
                      href="/home&living"
                       className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                     
                    >
                      Home & Living
                    </Link>
                  </li>
                  <li className="font-bold hover:text-fixnix-darkpurple">
                    <Link
                      href="/fashion&apparel"
                     
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
