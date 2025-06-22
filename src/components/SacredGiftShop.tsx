"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ProductCard from "@/components/sections/home3/ProductCard";
import Banner from "@/components/sections/home3/Banner";
import { useState , useEffect} from "react";
import Breadcrumb from "@/components/sections/home3/Breadcrumb";
import { GiftShopProduct  } from '../../types/giftShopProductType';
import { HeroSections  } from '../../types/pageType';
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

interface Props {
    data: GiftShopProduct;
    banner : HeroSections,
    slug : string
    pageName : string
  }
  const query = `*[_type == "page" && type == "sacredGiftShop"] {
    "slug": slug.current,
    pageName
    
  }`;
const ArtSlides = [
  {
    subTitle: "Art That Reflects Spiritual Beauty",
    title: "Elevate Your Space <br/>with Sufi Art",
    text: "Discover handcrafted art and wall décor inspired by Kashmiri Sufi traditions, <br/>bringing peace, beauty, and spiritual essence to your home.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Expressions in Every Stroke",
    title: "Transform Your Home<br/> with Divine Art",
    text: "Explore intricate Sufi-inspired wall décor, calligraphy, and artwork designed to<br/> inspire tranquility, reflection, and cultural appreciation.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Artistry Rooted in Sufi Tradition",
    title: "Mystical Wall Décor <br/>for Inspired Spaces",
    text: "Handcrafted with love, our Kashmiri Sufi art pieces tell stories of <br/>devotion, harmony, and timeless spiritual wisdom.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Spiritual Art to Inspire You",
    title: "Sacred Masterpieces for<br/> Every Wall",
    text: "Decorate with soulful Sufi art, blending traditional craftsmanship with <br/>divine inspiration to create an atmosphere of peace and serenity.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Decor That Speaks to the Soul",
    title: "Experience the Beauty of Kashmiri Art",
    text: "Bring timeless Sufi aesthetics into your home with unique wall décor<br/> inspired by faith, devotion, and artistic mastery.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];

const sampleProduct = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  image: `/assets/images/shop/product1.jpg`,
  description:
    "Handcrafted Sufi-inspired décor blending tradition and spirituality.",
  price: (i + 1) * 10 + 20,
  oldPrice: i % 2 === 0 ? (i + 1) * 10 + 30 : null,
  rating: 4 + (i % 2),
  tags: ["Handmade", "Spiritual", "Kashmir"],
  isWished: false,
}));
interface category{
  slug : string
  pageName : string

}

const SacredGiftShop : React.FC<Props> = ({ data , banner , slug, pageName, }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [productData , setProductData] = useState<any>([])
  const [categories , setCategories] = useState<category[]>()
  

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const totalPages = Math.ceil(productData.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  // Sorting logic based on selected option
  const sortedProducts = [...productData ];
  switch (sortOption) {
    case 'newest': sortedProducts.sort((a, b) => (b._createdAt || '').localeCompare(a._createdAt || '')); break;
    case 'low-to-high': sortedProducts.sort((a, b) => (a.price || 0) - (b.price || 0)); break;
    case 'high-to-low': sortedProducts.sort((a, b) => (b.price || 0) - (a.price || 0)); break;
    // Add specialized cases if needed
  }

  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    const getData = async () => {
      const data = await client.fetch(query)
      setCategories(data)
      
      
    }
  
    getData()
  }, [])
  useEffect(() => {
    if (data.handCraftProduct) {
      setProductData(data.handCraftProduct);
    } else if (data.digitalBook) {
      setProductData(data.digitalBook);
    } else if (data.audioSpectrum) {
      setProductData(data.audioSpectrum);
    } else {
      setProductData([]);
    }
  }, [data]);

  return (
    <Layout headerStyle={2} footerStyle={1}>
      
      {Array.isArray(banner) && (
         <Banner slides={banner}/>
        )}

      <section className="team-top text-left-mobile">
        
        <div className="container mx-auto px-4">
        <Breadcrumb pageName={pageName} slug={slug} />
          <div className="text-center sm:text-left relative block mt-[40px] mb-[10px] z-[1]">
            <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              {data.title}
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <div className="pt-[20px] text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              <PortableText value={data?.description} />
            </div>
          </div>
        </div>
      </section>

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
                {Array.isArray(categories) && (
                  <ul className="space-y-2">
                    {categories.map((page , idx)=>{
                      return(
                        <li key={idx}>
                    <Link
                      href={`/${page.slug}`}
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      {page.pageName}
                    </Link>
                  </li>
                      )
                    })}
                  </ul>
                )}
                
              </div>
            </div>

            {/* Product Grid */}
            <div className="md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
                <p>
                  Showing {indexOfFirstProduct + 1}–{indexOfLastProduct > productData.length ? productData.length : indexOfLastProduct} of {productData.length} results
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
              
              {Array.isArray(data?.handCraftProduct) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {currentProducts.map((product , idx) => (
                  <ProductCard key={idx} id={idx + 1} title={product.produtName + (idx + 1)} image={product.images[0]} description={product.productDescription} price={product.price} oldPrice={product.discount} />
                ))}
                </div>
              )}
              {Array.isArray(data?.digitalBook) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {currentProducts.map((product , idx) => (
                  <ProductCard key={idx} id={idx + 1} title={"product" + (idx + 1)} image={product.coverImage} description={product.productDescription} price={product.price} oldPrice={product.discount} />
                ))}
                </div>
              )}
              {Array.isArray(data?.audioSpectrum) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {currentProducts.map((product , idx) => (
                  <ProductCard key={idx} id={idx + 1} title={"product" + (idx + 1)} image={product.coverImage} description={product.productDescription} price={product.price} oldPrice={product.discount} />
                ))}
                </div>
              )}
                
              

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
    </Layout>
  );
}

export default SacredGiftShop