"use client";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home3/Banner";
import Breadcrumb from "@/components/sections/home3/Breadcrumb";
import ProductSidebar from "@/components/shop/ProductSidebar";
import ProductSorting from "@/components/shop/ProductSorting";
import ProductGrid from "@/components/shop/ProductGrid";
import Pagination from "@/components/shop/Pagination";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getProducts } from "@/hooks/shopServices";
import ProductSkeletonGrid from "@/components/ProductSkeletonGrid";

const MusicSlides = [
  {
    subTitle: "Melodies That Elevate the Soul",
    title: " Experience the Rhythm <br/>of Sufi Devotion",
    text: " Immerse yourself in the mystical sounds of Sufi music, where divine melodies and<br/> sacred rhythms inspire peace and enlightenment.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Sounds, Spiritual Awakening, Harmony",
    title: " Timeless Sufi Music<br/> for Inner Peace",
    text: "Explore a curated collection of Sufi chants, devotional songs, and healing soundscapes<br/> designed to deepen your spiritual journey.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Echoes of Devotion and Love",
    title: "Mystical Sufi Soundscapes <br/>for the Soul",
    text: " Let the hypnotic rhythms of Kashmiri Sufi music transport you <br/>into a realm of divine connection and meditative bliss.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Music That Awakens the Heart",
    title: "Discover the Spiritual<br/> Power of Sound",
    text: "From traditional Qawwali to meditative instrumental pieces, our Sufi music collection <br/>fosters serenity, devotion, and mindful reflection.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Let the Spirit Dance Freely",
    title: "Sacred Chants and<br/> Divine Harmonies",
    text: "Feel the transcendence of Sufi music—soulful melodies, rhythmic poetry,<br/> and sacred sounds designed to uplift and inspire.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // 🔥 Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await getProducts("MUSIC", {
          page: currentPage,
          limit: productsPerPage,
          sort: sortOption,
          search: searchQuery,
        });

        setProducts(res.data.products || []); // adjust if backend returns differently
        setTotal(res.data.pagination.total || 0);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [currentPage, productsPerPage, sortOption, searchQuery]);

  const totalPages = Math.ceil(total / productsPerPage);

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={MusicSlides} />

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              AUDIO SPECTRUM
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>

            {/* Section Title */}

            {/* Section Text */}
            <p className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              The Kashmiri Rubab, a traditional stringed instrument, is
              handcrafted by skilled artisans, while the Kashmiri Tabla
              accompanies Sufi qawwali performances and spiritual gatherings.
              The harmonium enriches Sufi melodies and sacred hymns, creating
              soulful tunes. Complementing these are Sufi musical recordings,
              featuring traditional qawwali and instrumental music, capturing
              Kashmir's spiritual essence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <ProductSidebar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            {/* Products */}
            <div className="md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <p>
                  Showing {(currentPage - 1) * productsPerPage + 1}–
                  {Math.min(currentPage * productsPerPage, total)} of {total}{" "}
                  results
                </p>
                <ProductSorting
                  productsPerPage={productsPerPage}
                  setProductsPerPage={setProductsPerPage}
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                />
              </div>

              {loading ? (
                <ProductSkeletonGrid count={6} />
              ) : (
                <ProductGrid products={products} category={"MUSIC"} />
              )}

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
