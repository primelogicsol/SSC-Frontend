"use client"
import Banner from "@/components/sections/home3/Banner";
import Layout from "@/components/layout/Layout";
import React, { useState , useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { HeroSections } from '../../types/insightTypes';
import {DigitalBookCategory} from '../../types/digitalBookTypes'
import { client } from "@/sanity/lib/client";

interface Props {
    data: DigitalBookCategory;
    banner : HeroSections
  }

const ResearchSlides=[
  {
    subTitle: "DIGITAL ACADEMY",
    title: "Inspiring Interviews",
    text: "Conversations with remarkable individuals who embody spiritual principles<br/> in their everyday lives."  ,
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "STORIES OF TRANSFORMATION",
    title: "Inspiring Interviews",
    text: "Intimate discussions revealing how spiritual practice shapes<br/> personal and professional paths.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "FROM PRINCIPLE TO PRACTICE",
    title: "Inspiring Interviews",
    text: "Discovering how timeless teachings are applied to <br/>modern challenges through personal stories.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "LIVING TRADITION",
    title: "Inspiring Interviews",
    text:  "Capturing the knowledge and experiences of notable figures within the spiritual tradition.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
 
];
const cards = [
  {
    title:"Dusk became divine",
    quote: "The Awakening of Carter Nooruddin, Once a Wall Climber",
    image: "/assets/images/interview/1.webp",
  },
  {
    title:"Feather touched fire",
    quote: "Layla Sabreen's journey from dance to divine surrender ",
    image: "/assets/images/interview/2.png",
  },
  {
    title:"Silence led me Home",
    quote: "Malik Jennings silent breakdown that became prayer",
    image: "/assets/images/interview/3.png",
  },
  {
    title:"Name turned light",
    quote: "How Fatime Delgado walked away from titles and toward truth",
    image: "/assets/images/interview/4.png",
  },
  {
    title:"Unseen, Yet so Near",
    quote: "Rashid Green healing after loss opened a secret door",
    image: "/assets/images/interview/5.png",
  },
  {
    title:"He found me disappearing",
    quote: "Iman Rivera moment of surrender in the forests of oregon",
    image: "/assets/images/interview/6.png",
  },
  {
    title:"Veils fell, Light spoke",
    quote: "Zayn Taylor sudden clarity in a seattle bookstore",
    image: "/assets/images/interview/7.png",
  },
  {
    title:"The path wrote me",
    quote: "Maryam Hall stopped planning and started listening",
    image: "/assets/images/interview/8.png",
  },
  {
    title:"Breath from rhythm",
    quote: "Jasmine Rahma learns that dhikr lives in science",
    image: "/assets/images/interview/9.png",
  },
  

  
];
const DigitalAcademy : React.FC<Props> = ({ data , banner }) =>{
    const [categories , setCategories] = useState<any>()

    const query = `*[_type == "page" && type == "digitalAcademy"] {
        "slug": slug.current,
        "categoryName" : contentSections[type == "digitalBookCategory"][0].digitalBookCategory.category,
        
      }`;
      useEffect(() => {
        const getData = async () => {
          const data = await client.fetch(query)
          setCategories(data)
          
          
        }
      
        getData()
      }, [])
  return (
    <Layout headerStyle={2} footerStyle={1}>
      {Array.isArray(banner) && (
         <Banner slides={banner}/>
        )}
      <section className="team-top text-left-mobile">
          <div className="container mx-auto px-4 text-left-mobile">
            <div className="text-center sm:text-left relative block mt-[40px] mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
             {data?.category}
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">{data?.heading}</h2>

              {/* Section Title */}

              {/* Section Text */}
              <div className="pt-[10px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
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
              <div className="p-4 border rounded-lg  bg-fixnix-lightpurple shadow-sm relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 pr-10  border rounded-lg bg-fixnix-lightpurple "
                />
                <i className="fa fa-search absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-100"></i>
              </div>

              
              <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
                <h3 className="font-semibold mb-2">Categories</h3>
                {Array.isArray(categories) && (
                 <ul className="space-y-2">
                    {categories.map((c : any , idx : number)=>{
                        return(
                            <li key={idx} className="font-bold">
                            <Link
                              href={`/${c.slug}`}
                              className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                            >
                              {c.categoryName}
                            </Link>
                          </li>
                        )
                    })}
                 </ul>
                )}
                
                  
                
              </div>
              {data?.guideChart && (
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto transition-transform hover:shadow-lg">
                {/* Compact header with gradient background */}
                <div className="bg-gradient-to-r from-fixnix-darkpurple to-fixnix-lightpurple py-2 px-4">
                  <h3 className="font-bold text-lg text-white">Be Part of an Inspiring Interview</h3>
                </div>
                
                {/* Condensed content section */}
                <div className="p-3 space-y-2">
                  {/* Combined tagline and description */}
                  <div className="flex items-start">
                    <div className="border-l-4 border-fixnix-lightpurple pl-2 flex-1">
                      <p className="text-sm font-medium text-gray-800 italic">
                        Your Story Can Illuminate Paths for Others
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Join a curated series of interviews with individuals who merge professional 
                        excellence with spiritual depth. Share your insights and the intersections of Sufism with your work.
                      </p>
                    </div>
                  </div>
                  
                  
                  
                    <h3 className="font-medium text-sm text-gray-800">Start Your Interview Journey</h3>
                    <Link href="interviewform" className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white text-sm font-medium py-3 px-4 rounded transition-colors duration-200 flex items-center">
                      Book Interview Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  
                </div>
              
                
          
                          
                        </div>
              )}
              
              
            </div>
            {/* Products */}
            <div className="md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
              {data.inspiringInterview && data.inspiringInterview.length > 0 && (
  <p>Showing 1–{data.inspiringInterview.length} results</p>
)}
{data.dailogSeries && data.dailogSeries.length > 0 && (
  <p>Showing 1–{data.dailogSeries.length} results</p>
)}
{data.hardTalk && data.hardTalk.length > 0 && (
  <p>Showing 1–{data.hardTalk.length} results</p>
)}
{data.professionsDetail && data.professionsDetail.length > 0 && (
  <p>Showing 1–{data.professionsDetail.length} results</p>
)}
                <select className="p-2 border bg-gray-100 rounded-lg">
                  <option className="hover:bg-fixnix-lightpurple">
                    Sort by popular
                  </option>
                 
                  <option>Sort by Ratings</option>
                </select>
              </div>
              
 {Array.isArray(data?.inspiringInterview) && (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
     {data?.inspiringInterview.map((card, index) => (
    <div
      key={index}
      className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="relative group">
        <Image
          src={urlFor(card.coverImage).url()}
          alt={`dialogs ${index + 1}`}
          width={500}
          height={300}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
          <Link href="/interviewdetails">
            <i className="fa fa-plus text-white text-2xl"></i>
          </Link>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-xl font-semibold mt-2 text-white">
          <Link href="/interviewdetails" className="text-white">{card.linkTitle}</Link>
        </h3>
        <p className="text-sm text-gray-100 mt-2 italic">"{card.coverImageText}"</p>
      </div>
    </div>
  ))}
    </div>
 )}
{Array.isArray(data?.hardTalk) && (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
     {data?.hardTalk.map((card, index) => (
    <div
    key={index}
    className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
  >
    <div className="relative group">
      <Image
        src={urlFor(card.coverImage).url()}
        alt={`Hard Talk ${index + 1}`}
        width={500}
        height={300}
        className="w-full h-64 object-cover rounded-t-xl"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
        <Link href="/hardtalkdetails">
          <i className="fa fa-plus text-white text-2xl"></i>
        </Link>
      </div>
    </div>
    <div className="px-4 py-3">
      <h3 className="text-xl font-semibold mt-2 text-white">
        <Link href="/hardtalkdetails" className="text-white">{card.linkTitle + " " + index + 1}</Link>
      </h3>
      <p className="text-sm text-gray-100 mt-2 italic">"{card.coverImageText}"</p>
    </div>
  </div>
  ))}
    </div>
 )}
 {Array.isArray(data?.professionsDetail) && (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
     {data?.professionsDetail.map((card, index) => (
    <div
      key={index}
      className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="relative group">
        <Image
          src={urlFor(card.coverImage).url()}
          alt={`dialogs ${index + 1}`}
          width={500}
          height={300}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
          <Link href="/interviewdetails">
            <i className="fa fa-plus text-white text-2xl"></i>
          </Link>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-xl font-semibold mt-2 text-white">
          <Link href="/interviewdetails" className="text-white">{card.linkTitle}</Link>
        </h3>
        <p className="text-sm text-gray-100 mt-2 italic">"{card.coverImageText}"</p>
      </div>
    </div>
  ))}
    </div>
 )}
 {Array.isArray(data?.dailogSeries) && (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
     {data?.dailogSeries.map((card, index) => (
    <div
      key={index}
      className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <div className="relative group">
        <Image
          src={urlFor(card.coverImage).url()}
          alt={`dialogs ${index + 1}`}
          width={500}
          height={300}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
          <Link href="/interviewdetails">
            <i className="fa fa-plus text-white text-2xl"></i>
          </Link>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-xl font-semibold mt-2 text-white">
          <Link href="/interviewdetails" className="text-white">{card.linkTitle}</Link>
        </h3>
        <p className="text-sm text-gray-100 mt-2 italic">"{card.coverImageText}"</p>
      </div>
    </div>
  ))}
    </div>
 )}
 


              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
  
</div>
            </div>
          </div>
        </div>
      </section>

          

        
       
    </Layout>
  );
}

export default DigitalAcademy