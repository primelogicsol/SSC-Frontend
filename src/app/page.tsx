// import Layout from "../components/layout/Layout";
// import Image from "next/image";
// import Banner from "../components/sections/home3/Banner";
// import Services from "../components/sections/home3/Services";
// import Blog from "../components/sections/home3/Blog";
// import Testimonial from "../components/sections/home3/Testimonial";
// import SufiSciences from "../components/sections/home3/SufiSciences";
// import Link from "next/link";
// import Welcome from "../components/sections/home3/Welcome";

// import Process from "../components/sections/home3/Process";
// import GiftShop from "../components/sections/home3/GiftShop";
// import SupportUs from "../components/sections/home3/SupportUs";
// import Contact from "../components/sections/home3/Contact";
// import Funfact from "../components/sections/home3/Funfacts";

// const features = [
//   { text: "Rooted in Kashmiri Sufi Wisdom"  },
//   { text: "Driven by Sacred Scientific Inquiry" },
//   { text: "Empowering  Growth & Learning" },
//   { text: "Uniting  Culture & Community" },
// ];
// const HomeSlides = [
//   {
//     subTitle: "Science Meets Spirit in Kashmir",
//     title: "The Soulful Science of<br/> Sufi Wisdom  ",
//     text: "Bridging sacred traditions with inquiry, the Sufi Science Center unites ancient<br/> mysticism and scientific exploration for spiritual clarity and growth.  ",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Explore, Reflect, Realize, Transform, Transcend  ",
//     title: "Journey Into Kashmir’s<br/> Inner Mystical Cosmos  ",
//     text: "Delve into the cosmos within, where Kashmiri Sufi teachings meet transformative sciences<br/> to elevate human consciousness and cultural understanding. ",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Seek Truth Through Sufi Lens ",
//     title: "Mystical Knowledge, Rooted<br/> in Kashmir  ",
//     text: "Unearth the depth of Sufi sciences, merging Kashmir’s rich mystical traditions<br/> with contemporary insights into the soul and self.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Tradition, Inquiry, Faith, Light, Kashmir ",
//     title: "Where Sufi Paths Meet<br/> Modern Questions  ",
//     text: "Explore sacred pathways of Kashmiri Sufism enriched with intellectual rigor,<br/> fostering harmony between inner truth and outer discovery.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Illuminate the Mind, Awaken Spirit ",
//     title: "Sufi Science Center:<br/> A Sacred Revival  ",
//     text: "Experience a renaissance of Kashmiri spiritual knowledge, uniting<br/> metaphysics, mysticism, and modern consciousness through the lens of Sufism.  ",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
// ];
// export default function Home() {
//   return (
//     <>
//       <Layout headerStyle={2} footerStyle={1}>
//         <Banner slides={HomeSlides}/>
        
//       <section className="relative py-[120px] pb-[90px]">
//   <div className="container mx-auto">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {features.map((feature, index) => (
//         <div
//           key={index}
//           className="transition-transform duration-500 hover:-translate-y-2"
//         >
//           <div className="relative text-center p-10 bg-white shadow-lg rounded-xl">
            
//             <div className="absolute top-0 left-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tl-xl rounded-br-xl text-sm font-medium z-20 inline-block">
//               We Are
//             </div>

//             {/* Number inside a circle */}
//             <div className="flex justify-center mx-auto items-center w-14 h-14 text-2xl text-white bg-[var(--fixnix-lightpuple)] rounded-full transition-all duration-500 hover:bg-[var(--fixnix-darkpurple)]">
//               {index + 1} {/* Display numbers */}
//             </div>

//             {/* Feature Text */}
//             <h3 className="mt-4 text-[17px] font-semibold leading-[30px] text-[var(--fixnix-darkpurple)] transition-all duration-500 hover:text-[var(--fixnix-lightpuple)]">
//               {feature.text}
//             </h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
        
//         <section className="relative block py-16 md:py-24 lg:py-30 overflow-hidden z-10">
//         <div
//           className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10 animate-float-bob-y"
//           style={{
//             backgroundImage:
//               "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
//           }}
//         ></div>
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="flex flex-wrap -mx-4">
//             {/* Left Column - Image Section */}
//             <div className="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
//               <div className="relative block mr-0 lg:mr-20">
//                 <div
//                   className="relative block overflow-hidden rounded-lg z-10 group wow slideInLeft"
//                   data-wow-delay="100ms"
//                   data-wow-duration="2500ms"
//                 >
//                   <Image
//                   src="/assets/images/resources/nextgeneration.webp"
//                   alt="image"
//                   className="w-full rounded-lg transition-all duration-500 delay-200 group-hover:scale-110"
//                   width={500}
//                   height={300}
//                   priority={false}
//                   loading="lazy"
//                 />
//                   <div className="absolute bottom-0 left-0 right-0  bg-fixnix-lightpurple p-6 sm:p-8 md:p-10 lg:p-12 rounded-bl-lg rounded-tr-lg z-10">
//                     <p className="text-base sm:text-lg font-semibold text-white uppercase pb-2 sm:pb-4">Our goal :</p>
//                     <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight sm:leading-normal md:leading-10">
//                       "Grow your mind. Fuel your soul.
//                       Let the light find you."
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Text Content */}
//             <div className="w-full px-4 lg:w-1/2">
//               <div className="relative ml-3 block">
//                 <div className="text-left  mb-6 sm:mb-8">
//                 <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                 The Next Generation Sufi Way Forward
//             <span className="absolute top-[6px] left-[-50px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            
//           </span>
//                   <h2 className="font-bold mt-2 sm:mt-3 text-2xl sm:text-3xl text-fixnix-darkpurple">
//                     Welcome to the Sufi Science Center
//                   </h2>
//                   <h2 className="font-semibold text-xl sm:text-2xl text-fixnix-darkpurple">
//                     A Harmony of Knowledge and Inner Peace
//                   </h2>
//                 </div>
//                 <p className="mb-8 sm:mb-10 md:mb-8 text-sm sm:text-base md:text-lg">
//                   Step into a world where Kashmiri Sufi wisdom meets the pulse of modern discovery.
//                   Here, your mind expands, your soul deepens, and your journey begins.
                  
//                   Whether you're seeking truth, exploring purpose, or simply curious,
//                   this is your space to grow, reflect, and awaken.
                  
//                   We blend timeless mysticism, conscious learning, and sacred science to inspire a new way forward, one that's rooted in unity, upliftment, and inner transformation.
//                 </p>

//                 {/* Feature Points */}
//                 <ul className="list-none space-y-2 sm:space-y-4 md:space-y-5">
//                   {/* Point 1 */}
//                   <li>
//                     <div className="flex items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 bg-white rounded-l-full shadow-lg group relative overflow-hidden transition-all duration-500 ease-in-out">
//                       <div className="absolute inset-0 bg-fixnix-lightpurple rounded-l-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
//                       <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-fixnix-lightpurple rounded-full text-xl sm:text-2xl md:text-3xl text-white group-hover:bg-white group-hover:text-purple-400 transition-all duration-500 delay-100 transform group-hover:scale-90">
//                         <span className="icon-repair"></span>
//                       </div>
//                       <div className="relative ml-3 sm:ml-4 md:ml-6">
//                         <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-fixnix-darkpurple group-hover:text-fixnix-darkpurple transition-colors duration-500">
//                           Begin Your Journey
//                         </h3>
//                         <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1 sm:pt-2 group-hover:text-white transition-colors duration-500">
//                           Start exploring your inner and outer path
//                         </p>
//                       </div>
//                     </div>
//                   </li>
                  
//                   {/* Point 2 */}
//                   <li>
//                     <div className="flex items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 bg-white rounded-l-full shadow-lg group relative overflow-hidden transition-all duration-500 ease-in-out">
//                       <div className="absolute inset-0 bg-fixnix-lightpurple rounded-l-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
//                       <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-fixnix-lightpurple rounded-full text-xl sm:text-2xl md:text-3xl text-white group-hover:bg-white group-hover:text-white transition-all duration-500 delay-100 transform group-hover:scale-90">
//                         <span className="icon-phone"></span>
//                       </div>
//                       <div className="relative ml-3 sm:ml-4 md:ml-6">
//                         <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-fixnix-darkpurple group-hover:text-fixnix-darkpurple transition-colors duration-500">
//                           Explore Sacred Knowledge
//                         </h3>
//                         <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1 sm:pt-2 group-hover:text-white transition-colors duration-500">
//                           Dive into teachings, science & soulwork
//                         </p>
//                       </div>
//                     </div>
//                   </li>
                  
//                   {/* Point 3 */}
//                   <li>
//                     <div className="flex items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 bg-white rounded-l-full shadow-lg group relative overflow-hidden transition-all duration-500 ease-in-out">
//                       <div className="absolute inset-0 bg-fixnix-lightpurple rounded-l-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
//                       <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-fixnix-lightpurple rounded-full text-xl sm:text-2xl md:text-3xl text-white group-hover:bg-white group-hover:text-purple-400 transition-all duration-500 delay-100 transform group-hover:scale-90">
//                         <span className="icon-phone"></span>
//                       </div>
//                       <div className="relative ml-3 sm:ml-4 md:ml-6">
//                         <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-fixnix-darkpurple group-hover:text-fixnix-darkpurple transition-colors duration-500">
//                           Join the Movement
//                         </h3>
//                         <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1 sm:pt-2 group-hover:text-white transition-colors duration-500">
//                           Be part of a conscious, global community
//                         </p>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//         <Services />
//         <Welcome />
//         <Funfact />
        
//         <SufiSciences/>
//         <Blog />
//         <Process />
//         <GiftShop/>
//         <SupportUs/>
//         <Contact />
        
//       </Layout>
//     </>
//   );
// }
'use client'

import Layout from "../components/layout/Layout";

import Banner from "../components/sections/home3/Banner";
import Services from "../components/sections/home3/Services";
import Blog from "../components/sections/home3/Blog";
import Testimonial from "../components/sections/home3/Testimonial";
import SufiSciences from "../components/sections/home3/SufiSciences";
import Link from "next/link";
import Welcome from "../components/sections/home3/Welcome";

import Process from "../components/sections/home3/Process";
import GiftShop from "../components/sections/home3/GiftShop";
import SupportUs from "../components/sections/home3/SupportUs";
import Contact from "../components/sections/home3/Contact";
import Funfact from "../components/sections/home3/Funfacts";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableTextComponents } from '@portabletext/react'

const features = [
  { text: "Rooted in Kashmiri Sufi Wisdom"  },
  { text: "Driven by Sacred Scientific Inquiry" },
  { text: "Empowering  Growth & Learning" },
  { text: "Uniting  Culture & Community" },
];
const HomeSlides = [
  {
    subTitle: "Science Meets Spirit in Kashmir",
    title: "The Soulful Science of<br/> Sufi Wisdom  ",
    text: "Bridging sacred traditions with inquiry, the Sufi Science Center unites ancient<br/> mysticism and scientific exploration for spiritual clarity and growth.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Explore, Reflect, Realize, Transform, Transcend  ",
    title: "Journey Into Kashmir’s Inner <br/>Mystical Cosmos  ",
    text: "Delve into the cosmos within, where Kashmiri Sufi teachings meet transformative sciences<br/> to elevate human consciousness and cultural understanding. ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Seek Truth Through Sufi Lens ",
    title: "Mystical Knowledge, Rooted<br/> in Kashmir  ",
    text: "Unearth the depth of Sufi sciences, merging Kashmir’s rich mystical traditions<br/> with contemporary insights into the soul and self.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Tradition, Inquiry, Faith, Light, Kashmir ",
    title: "Where Sufi Paths Meet<br/> Modern Questions  ",
    text: "Explore sacred pathways of Kashmiri Sufism enriched with intellectual rigor,<br/> fostering harmony between inner truth and outer discovery.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Illuminate the Mind, Awaken Spirit ",
    title: "Sufi Science Center:<br/> A Sacred Revival  ",
    text: "Experience a renaissance of Kashmiri spiritual knowledge, uniting<br/> metaphysics, mysticism, and modern consciousness through the lens of Sufism.  ",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
interface HomePageData {
  slides: any;
  boxes: any;
  imageContent: any;
  boxContent: any;
  rightSideImageContent: any;
  staticChart: any;
  boxContent2: any;
  product1: any;
  transmissionBoard: any;
  product2: any;
  supportSection: {
    supportContent: any;
    joinForm: any;
  };
  contactSection: any;
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mb-2">{children}</h3>,
    h5: ({ children }) => <h3 className="text-lg">{children}</h3>,
    h6: ({ children }) => (
      <h6 className="sm:text-sm md:text-md font-semibold lg:text-md xl:text-md 2xl:text-lg italic mt-4 mb-6 leading-snug sm:leading-tight">
        {children}
      </h6>
    ),
    normal: ({ children }) => <p className="mt-4 md:mt-6 mb-6 md:mb-9 text-sm md:text-base">{children}</p>,
  },

  // ✅ Add this section for inline decorators
  marks: {
    lightPurple: ({ children }) => (
      <span className="text-fixnix-darkpurple text-base md:text-lg  font-semibold">{children}</span>
    ),
    redText: ({ children }) => (
      <span className="text-red-500 font-semibold">{children}</span>
    ),
    greenText: ({ children }) => (
      <span className="text-green-500 font-semibold">{children}</span>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
};
export default function Home() {
  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "homePage"][0]{
            slides,
            boxes,
            imageContent,
            boxContent,
            rightSideImageContent,
            staticChart,
            boxContent2,
            product1,
            transmissionBoard,
            product2,
            supportSection{
              supportContent,
              joinForm
            },
            contactSection
          }
        `);
        setData(result);
      } catch (error) {
        console.error('Sanity fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading data...</div>;
  if (!data) return <div>No data found.</div>;

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner slides={data?.slides}/>
        
      <section className="relative py-[120px] pb-[90px]">
  <div className="container mx-auto">
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data?.boxes.map((feature, index) => (
        <div
          key={index}
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <div className="relative text-center p-10 bg-white shadow-lg rounded-xl">
            {/* Move 'We Are' label inside the box */}
            <div className="absolute top-0 left-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tl-xl rounded-br-xl text-sm font-medium z-20 inline-block">
              {feature.title}
            </div>

            {/* Number inside a circle */}
            <div className="flex justify-center mx-auto items-center w-14 h-14 text-2xl text-white bg-[var(--fixnix-lightpuple)] rounded-full transition-all duration-500 hover:bg-[var(--fixnix-darkpurple)]">
              {index + 1} {/* Display numbers */}
            </div>

            {/* Feature Text */}
            <h3 className="mt-4  text-[17px] font-semibold leading-[30px] text-[var(--fixnix-darkpurple)] transition-all duration-500 hover:text-[var(--fixnix-lightpuple)]">
              {feature.description}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





        <section className="relative block py-16 md:py-24 lg:py-30 overflow-hidden z-10">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10 animate-float-bob-y"
          style={{ background : data?.imageContent.bgImage?.asset ? `url(${urlFor(data?.imageContent.bgImage).url()})` : '',
                   }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap -mx-4">
            {/* Left Column - Image Section */}
            <div className="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
              <div className="relative block mr-0 lg:mr-20">
                <div
                  className="relative block overflow-hidden rounded-lg z-10 group wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  {data?.imageContent?.image?.asset && (
                     <Image
                     src={urlFor(data?.imageContent.image).url()}
                     alt="Core services"
                     layout="responsive"
                     width={500}
                     height={400}
                     className="w-full rounded-lg transition-all duration-500 delay-200 group-hover:scale-110" 
                   />
                  )}
                  {/* <img 
                    src="assets/images/resources/nextgeneration.png" 
                    alt="" 
                    className="w-full rounded-lg transition-all duration-500 delay-200 group-hover:scale-110" 
                  /> */}
                  {(() => {
  const rawText = data?.imageContent?.imageText || '';
  const imageLines = rawText.split(/\s*\\n\s*/); 
  const [firstLine, secondLine] = imageLines;
  console.log("firstLine", firstLine)

  return (
    <div className="absolute bottom-0 left-0 right-0  bg-fixnix-lightpurple p-6 sm:p-8 md:p-10 lg:p-12 rounded-bl-lg rounded-tr-lg z-10">
                    <p className="text-base sm:text-lg font-semibold text-white uppercase pb-2 sm:pb-4">{firstLine}</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight sm:leading-normal md:leading-10">
                      {secondLine}
                    </h3>
                  </div>
  );
})()}
                  {/* <div className="absolute bottom-0 left-0 right-0  bg-fixnix-lightpurple p-6 sm:p-8 md:p-10 lg:p-12 rounded-bl-lg rounded-tr-lg z-10">
                    <p className="text-base sm:text-lg font-semibold text-white uppercase pb-2 sm:pb-4">Our goal :</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight sm:leading-normal md:leading-10">
                      "Grow your mind. Fuel your soul.
                      Let the light find you."
                    </h3>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative ml-3 block">
                <div className="text-left  mb-6 sm:mb-8">
                <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                {data?.imageContent.intro}
            <span className="absolute top-[6px] left-[-50px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            
          </span>
                  <h2 className="font-bold mt-2 sm:mt-3 text-2xl sm:text-3xl text-fixnix-darkpurple">
                  {data?.imageContent.heading}
                  </h2>
                  <h2 className="font-semibold text-xl sm:text-2xl text-fixnix-darkpurple">
                  {data?.imageContent.subheading}
                  </h2>
                </div>
                <div className="mb-8 sm:mb-10 md:mb-8 text-sm sm:text-base md:text-lg">
                <PortableText value={data?.imageContent.description}/>
                </div>
                <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-3 -mb-6  leading-snug sm:leading-tight">
                    {data?.imageContent.pointsHeading}
                    </h2>
                {/* Feature Points */}
                <ul className="list-none space-y-2 sm:space-y-4 md:space-y-5">
                  {/* Point 1 */}
                  {data?.imageContent.points && data?.imageContent.points.length > 0 ? (
  data?.imageContent.points.map((point: any, idx: number) => (
    <li key={idx} >
                    <div className="flex items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 bg-white rounded-l-full shadow-lg group relative overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="absolute inset-0 bg-fixnix-lightpurple rounded-l-full transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                      <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-fixnix-lightpurple rounded-full text-xl sm:text-2xl md:text-3xl text-white group-hover:bg-white group-hover:text-purple-400 transition-all duration-500 delay-100 transform group-hover:scale-90">
                        <span className="icon-repair"></span>
                      </div>
                      <div className="relative ml-3 sm:ml-4 md:ml-6">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-fixnix-darkpurple group-hover:text-fixnix-darkpurple transition-colors duration-500">
                          {point.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1 sm:pt-2 group-hover:text-white transition-colors duration-500">
                         {point.description}
                        </p>
                      </div>
                    </div>
                  </li>
  ))
) : (
  <div></div> 
)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative block py-20 z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            {data?.boxContent.title}
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
          <h2 className="text-4xl font-bold text-fixnix-darkpurple mt-3 text-left-mobile">
          {data?.boxContent.heading}
          </h2>
          <p className="text-gray-600 my-2 text-left-mobile">
          {data?.boxContent.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {data?.boxContent.subCharts.map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-5 pb-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative rounded-lg overflow-hidden h-60 group">
                <div className="absolute inset-0 bg-fixnix-lightpurple rounded-md flex items-center justify-center z-0">
                  <span className="text-gray-200 text-md p-3 font-medium">{service.description}</span>
                </div>
                <div className="absolute inset-0 bg-lightpurple/70 rounded-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
                  <Link
                    href={service.guide.linkage[0].pageUrl}
                    className="px-6 py-2 bg-white text-lightpurple hover:bg-fixnix-darkpurple hover:text-fixnix-lightpurple transition-all duration-300 rounded-md z-20"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mt-4 text-fixnix-darkpurple hover:text-lightpurple transition-colors duration-500">
                {service.title}
              </h3>
              <div className="text-center mt-3">
  <Link
    href={service.link1}
    className="text-fixnix-lightpurple hover:underline sm:text-xs lg:text-lg font-semibold flex items-center justify-center gap-2"
  >
    {service.link1Text}
    <img src="/assets/images/resources/learnmore.jpg" />
  </Link>
  <Link
    href={service.link2}
    className="text-fixnix-lightpurple hover:underline sm:text-xs lg:text-lg font-semibold  mt-1 flex items-center justify-center gap-2"
  >
    {service.link2Text}
    
    <img src="/assets/images/resources/learnmore.jpg" />
  </Link>
</div>

            </div>
          ))}
        </div>
      </div>
    </section> */}

<section className="relative block py-20 z-10">
      <div className="container mx-auto px-4">
        {/* Top: Title, Heading, Description */}
        <div className="text-center mb-12">
          {data?.boxContent?.title && (
            <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              {data.boxContent.title}
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
          )}

          {data?.boxContent?.heading && (
            <h2 className="text-4xl font-bold text-fixnix-darkpurple mt-3 text-left-mobile">
              {data.boxContent.heading}
            </h2>
          )}

          {data?.boxContent?.description && (
            <p className="text-gray-600 my-2 text-left-mobile">
              {data.boxContent.description}
            </p>
          )}
        </div>

        {/* SubCharts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {data?.boxContent?.subCharts?.map((chart, index) => {
            const firstGuideLink = chart?.guide?.linkage?.[0]?.pageUrl;

            return (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg p-5 pb-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Hero / Info Box */}
                <div className="relative rounded-lg overflow-hidden h-60 group">
                  <div className="absolute inset-0 bg-fixnix-lightpurple rounded-md flex items-center justify-center z-0">
                    <span className="text-gray-200 text-md p-3 font-medium">
                      {chart?.description}
                    </span>
                  </div>

                  {firstGuideLink && (
                    <div className="absolute inset-0 bg-lightpurple/70 rounded-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center">
                      <Link
                        href={firstGuideLink}
                        className="px-6 py-2 bg-white text-lightpurple hover:bg-fixnix-darkpurple hover:text-fixnix-lightpurple transition-all duration-300 rounded-md z-20"
                      >
                        Read More
                      </Link>
                    </div>
                  )}
                </div>

                {/* Chart Title */}
                {chart?.heading && (
                  <h3 className="text-2xl font-semibold text-center mt-4 text-fixnix-darkpurple hover:text-lightpurple transition-colors duration-500">
                    {chart.heading}
                  </h3>
                )}

                {/* All Guide Links */}
                {chart?.guide?.linkage?.length > 0 && (
                  <div className="text-center mt-3 flex flex-col gap-2">
                    {chart.guide.linkage.map((linkItem, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={linkItem.pageUrl || '#'}
                        className="text-fixnix-lightpurple hover:underline sm:text-xs lg:text-lg font-semibold flex items-center justify-center gap-2"
                      >
                        {linkItem.title || 'Learn More'}
                        <img
                          src="/assets/images/resources/learnmore.webp" 
                          
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>

        

    <section className="relative py-16 md:py-24 lg:py-32 z-10">
        <div
          className="absolute top-0 right-0 w-0 md:w-1/3 lg:w-2/5 bottom-0 bg-fixnix-darkpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center -z-10"
         
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <div className="relative block mr-0 lg:mr-8">
                <div className="mb-5 md:mb-7">
                <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                {data?.rightSideImageContent.title}
            <span className="absolute top-[6px] left-[-50px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            
          </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">{data?.rightSideImageContent.heading}</h2>
                </div>
                <div className="text-[17px] mb-8 font-semibold ">
                  <PortableText value={data?.rightSideImageContent.description} components={components} />
                </div>
                
                <div className="flex flex-wrap items-center -mx-2">
                  {data?.rightSideImageContent.linkage.map((items : any , idx : number)=>{
                    return (
                      <div key={idx} className="px-2 mb-4 md:mb-0 w-full sm:w-1/2">
                      <Link 
                        href={items.link} 
                        className="group block text-center px-3 md:px-4 py-3 md:py-4 border border-fixnix-lightpurple text-fixnix-lightpurple relative overflow-hidden z-10"
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                          {items.linkName}
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-0 bg-fixnix-darkpurple transition-all duration-300 ease-out group-hover:h-full -z-10"></span>
                      </Link>
                    </div>
                    )
                  })}
 
  
</div>

              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative block ml-0 md:ml-6 lg:ml-12 z-10">
                <div className="relative block rounded-md overflow-hidden">
                  <img
                    src={urlFor(data?.rightSideImageContent.image).url()}
                    alt=""
                    className="w-full h-auto rounded-2xl"
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        <Funfact />
        
        <SufiSciences/>
        <Blog />
        <Process />
        <GiftShop/>
        <SupportUs/>
        <Contact />
        
      </Layout>
    </>
  );
}
