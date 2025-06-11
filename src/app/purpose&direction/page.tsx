// import Layout from "../../components/layout/Layout";
// import CounterUp from "../../components/elements/CounterUp";
// import Link from "next/link";
// import Image from "next/image";
// import Banner from "@/components/sections/home3/Banner";
// const PurposeSlides = [
//   {
//     subTitle: " Guided by Wisdom, Driven by Purpose",
//     title: "Shaping the Future<br/> with Sufi Principles",
//     text: " Our mission is to preserve Kashmiri Sufi wisdom while fostering spiritual growth, <br/>community harmony, and transformative learning for future generations.",
//     buttonText: "Read More",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Path of Light, Vision of Peace",
//     title: "Illuminating the <br/>Sufi Path Forward",
//     text: "We honor Kashmiri Sufi traditions while embracing modern insights, guiding seekers towards spiritual enlightenment,<br/> personal growth, and collective well-being.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Wisdom, Purpose, Vision, Legacy, Unity",
//     title: "Our Vision:<br/> Sufi Knowledge for All",
//     text: " With deep roots in Kashmiri Sufism, we strive to inspire, educate,<br/> and uplift individuals on their journey to self-discovery.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Ancient Wisdom, Modern Spiritual Awakening",
//     title: " A Purpose Rooted<br/> in Kashmiri Sufism",
//     text: " Guided by the teachings of Kashmiri Sufi masters, we cultivate a space<br/> for learning, reflection, and spiritual transformation.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Knowledge, Growth, Spirituality, Direction, Impact",
//     title: "Empowering Minds, Enriching Souls,<br/> Building Community",
//     text: "We bridge tradition and innovation, offering seekers a purposeful path to enlightenment, <br/>rooted in Kashmiri Sufi philosophy and spiritual depth.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
// ];
// export default function Home() {
//   return (
//     <>
//       <Layout
//         headerStyle={2}
//         footerStyle={1}
//         headTitle="Our Team"
//         wrapperCls="team-page-wrapper"
//       >
//         <Banner slides={PurposeSlides}/>
//         {/*Team Top Start*/}
//         <section className="relative block py-[30px] z-[1]">
//                         <div
//                           className="absolute inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
//                           style={{
//                             backgroundImage:
//                               "url(assets/images/backgrounds/core-services-bg.jpg)",
//                           }}
//                         ></div>
//                         {/*Experience One End*/}
//                         <div className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
//                           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                             <div className="flex flex-wrap items-center">
//                               {/* Left Section */}
//                               <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
//                                 <div className="relative">
//                                   <div className="rounded-lg overflow-hidden relative group">
//                                     <Image
//                                       src="/assets/images/services/purpose.png"
//                                       alt="Core services"
//                                       layout="responsive"
//                                       width={500}
//                                       height={300}
//                                       className="w-full h-[400px] transition-transform duration-500 group-hover:scale-105"
//                                     />
//                                     <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
//                                   </div>
//                                 </div>
//                               </div>
              
//                               {/* Right Section */}
//                               <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
//                                 <div className="relative">
//                                   <div className="text-left mb-8">
//                                     <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                                     Purpose & Direction 
//                                       <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                                     </span>
//                                     <h2 className="text-4xl sm:text-3xl md:text-2xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
//                                     The Vision of the Sufi Science Center
//                                     </h2>
//                                     <h3 className="text-3xl sm:text-xl md:text-xl font-semibold mb-6 leading-snug sm:leading-tight uppercase">A New Dawn for Kashmiri Sufism</h3>
//                                     <p className="text-base sm:text-lg text-gray-700">
//                                     The Sufi Science Center (SSC) stands at the crossroads of tradition and transformation, spirituality and science, past and future. Our purpose is to revive, reinterpret, and innovate—to ensure that Kashmir’s rich Sufi legacy is not just preserved, but evolved for the modern world.
//                                     </p>
//                                     <p className="text-base sm:text-lg mt-5 text-gray-700">
//                                     We are here to empower a new generation of Kashmiri seekers—those who embrace the wisdom of the past while engaging with the frontiers of modern science, technology, and intellectual exploration. The teachings of our Sufi saints, poets, and philosophers were never meant to be static; they were always a call to higher understanding, inquiry, and the pursuit of truth.
//                                     </p>
//                                   </div>
                                  
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </section>
//                       <section className="relative block py-[120px] pb-[10px]">
//           <div className="container mx-auto px-4">
//             <div className="relative block mb-[52px]">
//               <div className="flex items-center">
//                 <div className="w-full lg:w-8/12">
//                   <div className="relative block">
//                     <div className="text-left">
                     
//                        <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 -mb-4 leading-snug sm:leading-tight">
//                        Our Purpose – Why We Exist
//                       </h2> 
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block pb-[12px]   ">
              
//               <div className="mb-[42px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 Our Purpose
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
                    
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           1. Reviving the Lost Legacy of Kashmiri Sufism
//                           </h5>
//                           <p>
//                           •	Restoring Sufi teachings, philosophy, and spiritual traditions that have shaped Kashmir’s identity.<br/>
// •	Translating, digitizing, and making accessible the wisdom of Kashmiri Sufi saints for new generations.<br/>
// •	Safeguarding cultural heritage through storytelling, academic research, and artistic expression.<br/>


//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           2. Merging Mysticism with Modern Science
//                           </h5>
//                           <p>
//                           •	Exploring the intersections between Sufi wisdom and scientific discoveries in consciousness, metaphysics, and cosmology.<br/>
// •	Encouraging a spiritual-scientific dialogue, where Sufi insights help shape ethical, philosophical, and scientific advancements.<br/>
// •	Studying how Sufi meditation, breathwork, and cognitive states align with neuroscience and quantum theories.<br/>

//                           </p>
                         
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           3. Empowering the New Generation of Kashmiri Seekers
//                           </h5>
//                           <p>
//                           •	Creating a platform for thinkers, artists, scientists, and mystics to collaborate and share knowledge.<br/>
// •	Offering educational programs, digital archives, and immersive learning experiences to connect youth with their heritage.<br/>
// •	Encouraging critical thinking, self-discovery, and innovative exploration of Kashmiri Sufi philosophy.<br/>

//                           </p>
                         
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           4. Promoting Unity & Ethical Leadership
//                           </h5>
//                           <p>
//                           •	Upholding the Sufi principles of love, peace, and universal brotherhood in an age of division.<br/>
// •	Addressing social and ethical issues through the teachings of Kashmiri Sufi masters.<br/>
// •	Developing a new leadership model rooted in wisdom, morality, and scientific responsibility.

//                           </p>
                         
//                         </div>
//                       </li>
                      
//                     </ul>
//                   </div>
//                 </div>
             
//             </div>
//              </div> 
              
//           </div>
//         </section>
//         <section className="relative block pb-[12px]">
//           <div className="container mx-auto px-4">
//             <div className="relative block mb-[52px]">
//               <div className="flex items-center">
//                 <div className="w-full lg:w-8/12">
//                   <div className="relative block">
//                     <div className="text-left">
                     
//                        <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
//                        Our Direction 
                     
//                       </h2> 
//                       <p className="text-base sm:text-lg text-gray-700">
//                       The Sufi Science Center is more than a philosophy—it is a movement, a vision for a future where Sufi wisdom fuels scientific and cultural innovation. We aim to be a global hub of learning, research, and exploration, where Kashmiri heritage thrives in the modern era.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block pb-[12px]  ">
              
//               <div className="mb-[52px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 Our Direction 
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           1. Building a Digital Archive of Kashmiri Sufi Wisdom
//                           </h5>
//                           <p>
//                           •	Creating the first-ever comprehensive digital library of Kashmiri Sufi texts, poetry, and teachings.<br/>
//                           •	Developing multimedia storytelling experiences to make these teachings accessible worldwide.<br/>
//                           •	Using blockchain technology to preserve and authenticate Kashmiri Sufi manuscripts.

                          

//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           2. Establishing Research & Innovation Labs
//                           </h5>
//                           <p>
//                           •	Hosting interdisciplinary research projects that explore the scientific dimensions of Sufi thought.<br/>
// •	Partnering with universities, scholars, and research institutions to study spiritual consciousness, and metaphysics.<br/>
// •	Creating spaces for young Kashmiri innovators to experiment, question, and explore.


//                           </p>
                         
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           3. Curating Educational Programs & Events
//                           </h5>
//                           <p>
//                           •	Offering seminars, courses, and workshops on Kashmiri Sufi philosophy and modern applications.<br/>
// •	Organizing Sufi Science Talks, bringing together scientists, spiritualists, and thought leaders.<br/>
// •	Introducing youth mentorship programs to help young Kashmiris engage with their heritage while preparing for the future.

//                           </p>
                         
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           4. Creating a Global Community of Seekers
//                           </h5>
//                           <p>
//                           •	Expanding beyond Kashmir to connect with global Sufi networks, scholars, and scientists.<br/>
// •	Encouraging cross-cultural dialogue and interfaith understanding through Sufi principles.<br/>
// •	Fostering a new intellectual movement where ancient wisdom informs modern progress.

//                           </p>
                         
//                         </div>
//                       </li>
                      
//                     </ul>
//                   </div>
//                 </div>
             
//             </div>
//              </div> 
              
//           </div>
//         </section>
       

//         <section className="text-left-mobile bg-fixnix-lightpurple text-left team-top py-[40px] sm:py-[60px] md:py-[80px]">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
//               {/* Section Tagline */}
//               <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
//               A Call to Action 
//                 <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
//               </span>
//               <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//                The Future Starts Now
//               </h2>

             

//               {/* Section Text */}
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               The Sufi Science Center is not just about remembering the past—it is about reshaping the future. This is a call to seekers, scientists, artists, and innovators to join us in reviving and reinterpreting Kashmiri Sufism for the modern world.
//               </p>
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               • If you believe in the wisdom of the saints and the power of knowledge, this is your place.<br/>
//               • If you seek to understand the universe and yourself, this is your journey.<br/>
//               • If you wish to build a world rooted in ethics, innovation, and spiritual enlightenment, this is your time.<br/>

//               </p>

//               {/* Subheading */}
//               <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               Join the Movement. Be the Future of Kashmiri Sufism.
//               </h2>
//             </div>
//           </div>
//         </section>

//         {/* Team One End */}
//       </Layout>
//     </>
//   );
// }
"use client"

import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { ComplexContentBlock } from "../heritage&identity/page";

export default function Home() {
  const [heroData, setHeroData] = useState<any[]>([])
  const [rightsideImageContent , setRightSideImageContent] = useState<any>()
  const [leftsideImageContent , setLeftSideImageContent] = useState<any>()
  const [purpleChart , setPurpleChart] = useState <any>()
  const [whiteChart , setWhiteChart] = useState <any>()
  const [leftsideImageContent2 , setLeftSideImageContent2] = useState<any>()
  const [complexContentData , setComplexContentData] = useState<ComplexContentBlock[]>([]);
  const [purpleContent , setPurpleContent] = useState <any>()

  const query = `
  *[_type == "page" && pageName == "Purpose & Direction"][0]{
    _id,
    pageName,
    "heroSection": contentSections[type == "heroSections"][0].heroSections,
    "rightSImageContent" : contentSections[type == "rightsideImageContent"][0].rightsideImageContent,
    "leftSImageContent" :  contentSections[type == "goalSection"][0].goalSection,
    "purpleChart" : contentSections[type == "purpleChart"][0].purpleChart,
    "whiteChart" : contentSections[type == "whiteChart"][0].whiteChart,
    "leftSImageContent2" :  contentSections[type == "goalSection"][1].goalSection,
    "complexContent": contentSections[type == "complexContentBlock"].complexContentBlock,
    "purpleContent" : contentSections[type == "purpleContent"][0].purpleContent,
  }
`;

useEffect(() => {
  

  client.fetch(query)
    .then((data) => {setHeroData(data.heroSection);
                    setRightSideImageContent(data.rightSImageContent);
                    setLeftSideImageContent(data.leftSImageContent);
                    setPurpleChart(data.purpleChart)
                    setWhiteChart(data.whiteChart)
                    setLeftSideImageContent2(data.leftSImageContent2);
                    setComplexContentData(data.complexContent);
                    setPurpleContent(data.purpleContent)
                  }
    )
    .catch((err) => console.error('Sanity Fetch Error:', err))
    
}, [])
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        headTitle="Our Team"
        wrapperCls="team-page-wrapper"
      >
        <Banner slides={heroData}/>
        <div style={{ background : leftsideImageContent?.bgImage?.asset ? `url(${urlFor(leftsideImageContent?.bgImage).url()})` : '',
                   }} className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center">
              {/* Left Section */}
              <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden relative group">
                  {leftsideImageContent?.image?.asset && (
                     <Image
                     src={urlFor(leftsideImageContent.image).url()}
                     alt="Core services"
                     layout="responsive"
                     width={500}
                     height={400}
                     className="w-full transition-transform duration-500 group-hover:scale-105"
                   />
                  )}
                   
                    <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
                <div className="relative">
                  <div className="text-left mb-8">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    {leftsideImageContent?.intro} 
                      <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-[10px] sm:text-xl md:text-2xl font-bold mt-3  mb-3 leading-snug sm:leading-tight">
                    {leftsideImageContent?.heading}
                    </h2>
                    <h2 className="text-[10px] sm:text-[15px] md:text-xl font-semibold mt-3  mb-3 leading-snug sm:leading-tight">
                    {leftsideImageContent?.subheading}
                    </h2>
                    <div className="text-base sm:text-lg text-gray-700 space-y-4">
                    <PortableText value={leftsideImageContent?.description}/>
                    </div>
                    <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-3 -mb-6  leading-snug sm:leading-tight">
                    {leftsideImageContent?.pointsHeading}
                    </h2>
                  </div>
                  <ul className="space-y-5 sm:space-y-6 lg:space-y-9">
                  {leftsideImageContent?.points && leftsideImageContent.points.length > 0 ? (
  leftsideImageContent.points.map((point: any, idx: number) => (
    <li
      key={idx}
      className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md transition-all duration-500"
    >
      <div className="ml-4 sm:ml-6">
        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500">
          {point.title}
        </h5>
        <p className="text-sm sm:text-base text-white transition-colors duration-500">
          {point.description}
        </p>
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
        </div>
        {/*Team Top Start*/}


        <div className="flex flex-col gap-10 my-40 ">
{complexContentData.length > 0 ? (
  complexContentData.map((content, idx) => (
    <section key={idx} className="relative block ">
      <div className="container mx-auto px-4">
        <div className="relative block ">
          <div className="flex items-center">
            <div className="w-full lg:w-8/12">
              <div className="relative block">
                <div className="text-left">
                  <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    {content.title}
                    {content.title ? (
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    ) : null}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-2 leading-snug sm:leading-tight">
                    {content.mainHeading}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700">
                    {content.mainDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {Array.isArray(content.contentSections) && content.contentSections?.length > 0 &&
          content?.contentSections.map((section, i) => (
            <div key={i} className="relative block py-[20px] pt-10">
              <div className="">
                <div className="flex flex-col md:flex-row bg-gray-100 p-0 pb-[52px] mb-[20px] relative z-10 rounded-3xl">
                  <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                    {content.label}
                  </div>
                  <div className="pt-[123px] px-10 relative">
                    <div className="mb-[24px]">
                      <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">
                        {section.sectionHeading}
                      </h4>
                      <p>{section.sectionDescription}</p>
                    </div>

                    {Array.isArray(section.subSections) && section.subSections?.length > 0 && (
                      <ul className="space-y-[17px] pb-[17px]">
                        {section.subSections.map((sub, idx) => (
                          <li
                            key={idx}
                            className="flex justify-between border-b border-gray-300 pb-[17px]"
                          >
                            <div>
                              <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
                                {sub.subHeading}
                              </h5>
                              <p className="mb-2">{sub.note}</p>
                              <div className="text-base text-gray-700 leading-relaxed">
                                <PortableText value={sub.paragraphs || []} />
                              </div>
                              {sub.bottomNote && (
                                <p className="mt-3 italic text-gray-600">
                                  {sub.bottomNote}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  ))
) : (
  <div></div>
)}
</div>




<section className="bg-fixnix-lightpurple py-7 pb-24 text-left-mobile">
  <div className="inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
  <div className="container">
    <div className="text-left">
      
      <p className="relative inline-block text-white text-[16px] font-bold uppercase">
        {purpleContent?.title}
        <span className="absolute top-[10px] left-[-56px] translate-y-[-50%] w-[40px] h-[2px] bg-white"></span>
      </p>

      {purpleContent?.content.map((section, i) => (
        <div key={i} className="mt-6">
          <h4 className="text-fixnix-white text-xl font-semibold mb-2">
            {section.heading}
          </h4>

          <div className="text-[var(--fixnix-white)]">
            <PortableText value={section.description} />
          </div>

          <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
            {section.bottomHeading}
          </h2>
        </div>
      ))}
    </div>
  </div>
</section>

       

  

        {/* Team One End */}
      </Layout>
    </>
  );
}
