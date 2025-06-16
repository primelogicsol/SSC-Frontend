// import Layout from "../../components/layout/Layout";
// import CounterUp from "../../components/elements/CounterUp";
// import Link from "next/link";
// import Image from "next/image";
// import Banner from "@/components/sections/home3/Banner";
// const WorkSlides = [
//   {
//     subTitle: "Wisdom in Action, Sufism in Practice",
//     title: "Living the Teachings of <br/>Kashmiri Sufism",
//     text: "Through devotion, education, and service, we bring Kashmiri Sufi wisdom to life, inspiring<br/> transformation and fostering spiritual harmony worldwide.",
//     buttonText: "Read More",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Sacred Practices, Modern Spiritual Engagement",
//     title: "Our Commitment to Sufi<br/> Teachings & Growth",
//     text: "We integrate ancient Sufi practices with contemporary understanding, offering a pathway to<br/> enlightenment, self-discovery, and communal well-being.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Faith, Reflection, Knowledge, Service, Unityl",
//     title: "Transforming Lives Through<br/> Sufi Traditions",
//     text: "Our work blends Kashmiri Sufi wisdom with modern engagement, <br/>nurturing personal growth, spiritual depth, and social impact for all.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Serving Humanity Through Sufi Wisdom",
//     title: "Sufi Practices That<br/> Inspire and Uplift",
//     text: "We honor Kashmiri Sufi traditions through meaningful practices, guiding individuals in<br/> mindfulness, ethical living, and spiritual development.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Sufi Knowledge, Action, and Transformation",
//     title: "Bridging Tradition and Modern <br/>Spiritual Practice",
//     text: "Our mission is to apply Kashmiri Sufi teachings in daily life, fostering inner peace,<br/> knowledge-sharing, and a united global community.",
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
//         <Banner slides={WorkSlides}/>
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
                                  
//                                       src="/assets/images/services/work1.png"
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
//                                     Our Work & Practices 
//                                       <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                                     </span>
//                                     <h2 className="text-4xl sm:text-3xl md:text-2xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
//                                     The Living Spirit of Sufi Science Center
//                                     </h2>
//                                     <h3 className="text-3xl sm:text-xl md:text-xl font-semibold mb-6 leading-snug sm:leading-tight uppercase">Transforming Wisdom into Action</h3>
//                                     <p className="text-base sm:text-lg text-gray-700">
//                                     At the Sufi Science Center (SSC), we don’t just study Kashmiri Sufi philosophy—we live it, apply it, and evolve it. Our work is centered on preserving, exploring, and innovating the Sufi traditions of Kashmir while integrating them with modern scientific discoveries.
//                                     </p>
//                                     <p className="text-base sm:text-lg mt-5 text-gray-700">
//                                     We engage in research, education, digital preservation, and community-building, ensuring that the legacy of Kashmiri Sufism thrives in the 21st century. Our mission is to empower the new generation with the spiritual depth of Sufism and the intellectual rigor of science, enabling them to seek, question, and innovate.
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
//                        Our Core Practices
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
//                 Our Core Practices
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
                    
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           1. Research & Knowledge Exploration
//                           </h5>
//                           <p>
//                          <span className="font-bold"> •	Interdisciplinary Studies </span> Investigating the connections between Sufi philosophy and quantum physics, neuroscience, artificial intelligence, and cosmology.<br/>
// <span className="font-bold"> •	Kashmiri Sufi Literature & Poetry Studies </span> Analyzing and interpreting the works of Mir Sayyid Ali Hamadani, Sheikh Noor-ud-Din Noorani, Lal Ded,  and other Sufi mystics.<br/>
// <span className="font-bold"> •	Spiritual Consciousness & Cognitive Science   </span> Exploring how Sufi meditation, breathwork, and states of altered consciousness align with modern neuroscience.<br/>
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           2. Digital Preservation & Storytelling
//                           </h5>
//                           <p>
//                          <span className="font-bold"> •	Kashmiri Sufi Digital Archive  </span>Developing a comprehensive online repository of Sufi manuscripts, poetry, music, and teachings for global access.<br/>
// <span className="font-bold"> •	Blockchain-Based Manuscript Authentication  </span>Ensuring the authenticity of ancient Kashmiri Sufi texts using cutting-edge technology.<br/>
// <span className="font-bold"> •	Multimedia Content Creation   </span> Producing documentaries, podcasts, and interactive digital experiences to bring Sufi teachings to new audiences.<br/>
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           3. Educational Programs & Workshops
//                           </h5>
//                           <p>
//                          <span className="font-bold"> •	Sufi Science Talks   </span>Hosting seminars, conferences, and discussions featuring scientists, philosophers, and Sufi scholars.<br/>
// <span className="font-bold"> •	Youth Mentorship & Training  </span>Guiding young Kashmiris, artists, and researchers in understanding and applying Sufi wisdom.<br/>
// <span className="font-bold"> • Ethics Workshops    </span> Exploring how Sufi principles of morality and consciousness can influence the future of Sufi.<br/>
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           4. Community Building & Global Engagement
//                           </h5>
//                           <p>
//                          <span className="font-bold"> •	Sufi Science Network </span>Creating a global think tank where seekers, scientists, and scholars collaborate on groundbreaking ideas.<br/>
// <span className="font-bold">•	Cross-Cultural & Interfaith Dialogue   </span>Promoting unity, peace, and understanding through Kashmiri Sufi teachings.<br/>
// <span className="font-bold"> •	Sufi Social Initiatives    </span> Launching ethical, sustainability-driven projects inspired by Sufi values of compassion, justice, and service.<br/>
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           5. Experiential Learning & Spiritual Practices
//                           </h5>
//                           <p>
//                          <span className="font-bold"> •	Meditation & Zikr Circles  </span>Reviving the traditional Kashmiri practices of silent reflection and collective remembrance.<br/>
// <span className="font-bold">•	Nature & Sufism Retreats    </span>Exploring the spiritual relationship between humans and nature, as emphasized by the Kashmiri Rishi-Sufi tradition.<br/>
// <span className="font-bold"> •	Sacred Geometry & Mysticism    </span> Studying the mathematics of divine patterns found in Sufi art, architecture, and cosmology.<br/>
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
//               Our Vision for the Future
//                 <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
//               </span>
              

             

//               {/* Section Text */}
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               The Sufi Science Center is not just a research hub—it is a movement, a community of seekers and innovators working towards a harmonious future where Sufi wisdom guides scientific progress
//               </p>
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               •	We seek knowledge beyond boundaries.<br/>
//               •	 We embrace both tradition and transformation.<br/>
//               •	 We believe that spirituality and science are two sides of the same truth.<br/>


//               </p>
//               <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               Join Us in Shaping the Future of Kashmiri Sufism
//               </h2>
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               •	Explore the depths of mystical wisdom.<br/>
//               •	 Engage with cutting-edge scientific ideas.<br/>
//               •	 Become part of a global movement for spiritual-intellectual evolution.<br/>



//               </p>

//               {/* Subheading */}
//               <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               Be a Seeker. Be a Thinker. Be the Future.
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
  *[_type == "page" && pageName == "Our Work & Practice"][0]{
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
                    <h2 className="text-[10px] sm:text-xl md:text-2xl font-bold mt-3 mb-3 leading-snug sm:leading-tight">
                    {leftsideImageContent?.heading}
                    </h2>
                    <h2 className="text-[10px] sm:text-[15px] md:text-xl font-bold mt-3 mb-3 leading-snug sm:leading-tight">
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
