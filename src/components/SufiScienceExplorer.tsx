"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";
import { InsightCategory  } from '../../types/insightTypes';
import { HeroSections  } from '../../types/pageType';

import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";


interface Props {
    data: InsightCategory;
    banner : HeroSections
    slug : string
  }


    

const featuresData = [
  { text: "Bridging Ancient Knowledge with Modern Inquiry"  },
  { text: "A Structured Path for Seekers, Thinkers & Practitioners" },
  { text: "Integrating Mysticism with Scientific Exploration" },
  { text: "Practical Applications for Consciousness & Transformation" },
];

const blogs = [
  {
    title: "Spiritual Foundations",
    image: "assets/images/blog/spiritual.png",
  },
  {
    title: "Mystical Cosmology",
    image: "assets/images/blog/cosmology.png",
  },
  {
    title: "Divine Numerology",
    image: "assets/images/blog/numerology.png",
  },
  {
    title: "Attribute Studies",
    image: "assets/images/blog/attributes.png",
  },
  {
    title: "Soul Psychology",
    image: "assets/images/blog/psycology.png",
  },
  {
    title: "Unity Laboratory",
    image: "assets/images/blog/unity.png",
  },
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
const SufiScienceExplorer : React.FC<Props> = ({ data , banner , slug}) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: number) => {
    // Type the key parameter as a number
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: isActive.key, // Include the key when updating the state
      });
    } else {
      setIsActive({
        status: true,
        key, // Make sure to pass the key value when updating
      });
    }
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        {/*Core Services Start*/}
        {Array.isArray(banner) && (
         <Banner slides={banner}/>
        )}
        
        

        <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4">
       
        
          <section className="relative  bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-left ">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                    {data?.categoryName}
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    
                  </div>
                  <div className="text-gray-700 mt-4">
                    <PortableText value={data?.description} />
                  </div>
                  
                </div>

                {/* Right Column */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
                    {data?.image && (
                     <Image
                     src={urlFor(data?.image).url()}
                     alt="Repair Services"
                     width={350}
                     height={350}
                     className="w-[350px] h-[350px]"
                   />
                    )}
                  
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Counter Section */}
          </section>
          <Features title={data?.matterHeading} features={data?.matters} />
          

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
        {data?.books.map((blog, index) => (
  <div
    key={index}
    className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
  >
    <div className="relative">
      <Image
  src={urlFor(blog.bookImage).url()}
  alt={blog.sectionTitle || ""}
  width={400}
  height={240}
  className="w-full h-60 object-cover"
/>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
        <Link href={`${slug}/${blog.slug?.current}`} className="text-white text-2xl">
          View Details
        </Link>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl text-center font-semibold text-fixnix-darkpurple mb-3">
        <Link
          href={`${slug}/${blog.slug?.current}`}
          className="text-fixnix-darkpurple hover:text-fixnix-lightpurple"
        >
          {blog.sectionTitle}
        </Link>
      </h3>
      <div className="flex justify-center">
        <Link
          href={`${slug}/${blog.slug?.current}`}
          className="inline-block bg-fixnix-lightpurple text-white hover:bg-fixnix-darkpurple px-2 py-1 rounded-md"
        >
          Unveil Insights
        </Link>
      </div>
    </div>
  </div>
))}

</div>

          
        </div>
      </div>
        

        {/*Services One End*/}
      </Layout>
    </>
  );
}

export default SufiScienceExplorer