// import Layout from "../../components/layout/Layout";
// import CounterUp from "../../components/elements/CounterUp";
// import Link from "next/link";
// import Image from "next/image";
// import Banner from "@/components/sections/home3/Banner";
// const LegacySlides = [
//   {
//     subTitle: "Legacy of Light, Love, Wisdom",
//     title: "Echoes of Kashmir’s<br/> Sufi Masters",
//     text: " Journey through the sacred traditions of Kashmiri Sufism, where timeless wisdom,<br/> devotion, and love illuminate the path of seekers.",
//     buttonText: "Read More",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Sacred Roots, Enduring Spiritual Legacy",
//     title: "Tracing the Footsteps of<br/> Sufi Saints",
//     text: "Discover the spiritual depth of Kashmiri Sufism, a legacy of divine wisdom, <br/>poetic expression, and profound devotion passed through generations.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Sufi Wisdom, Kashmir’s Eternal Soul",
//     title: "Unraveling the Mysticism of<br/> Kashmiri Sufis",
//     text: " Explore the teachings of Kashmiri Sufi luminaries whose insights and<br/> poetry continue to inspire seekers on the path of divine truth.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Faith, Devotion, Unity, Love, Truth",
//     title: " Kashmir’s Sufi Heritage: <br/>A Living Tradition",
//     text: " Witness the spiritual legacy of Kashmir’s Sufis, who shaped a culture of love,<br/> tolerance, and enlightenment that transcends time.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Love, Harmony, Faith, Knowledge, Eternity",
//     title: "Timeless Teachings of<br/>  Kashmiri Sufi Masters",
//     text: "Step into the rich spiritual legacy of Kashmiri Sufism, where poetry,<br/> devotion, and wisdom illuminate the seeker’s path to inner peace.",
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
//         <Banner slides={LegacySlides}/>
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
//                                       src="/assets/images/services/legacy.png"
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
//                                     Kashmiri Sufi Legacy 
//                                       <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                                     </span>
//                                     <h2 className="text-4xl sm:text-3xl md:text-2xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
//                                     The Spirit of Mysticism and Knowledge
//                                     </h2>
//                                     <h3 className="text-3xl sm:text-xl md:text-xl font-semibold mb-6 leading-snug sm:leading-tight uppercase">A Heritage Rooted in Love, Wisdom, and Spiritual Science</h3>
//                                     <p className="text-base sm:text-lg text-gray-700">
//                                     Kashmir has long been known as the land of saints and mystics—a place where the divine met the intellectual, where spirituality was never separate from wisdom, and where Sufism shaped the very essence of Kashmiri identity, culture, and ethics. The Kashmiri Sufi Legacy is not just about the past; it is a living tradition, inspiring generations of seekers, scientists, and scholars to explore the mysteries of existence.
//                                     </p>
//                                     <p className="text-base sm:text-lg mt-5 text-gray-700">
//                                     At the Sufi Science Center (SSC), we honor, preserve, and evolve this rich tradition, ensuring that it continues to illuminate minds and nurture souls in the modern world. Our legacy is one of unity, enlightenment, and boundless inquiry—a philosophy that bridges spiritual insight with scientific exploration
//                                     </p>
//                                   </div>
                                  
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </section>
//                       <div className="bg-gray-100 text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-5xl mx-auto">
//                   <h1 className="text-3xl sm:text-4xl font-bold text-center mt-8">
//                   Kashmir's Sufi Legacy: A Journey Across Centuries
//                   </h1>
//                   <h1 className="text-xl sm:text-4xl font-semibold text-center mt-1 mb-4">
//                   Discover. Search. Experience.
//                   </h1>

//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-2 mb-8">
//   <input
//     type="text"
//     placeholder="Search saints..."
//     className="w-full md:w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
//   />
//   <select className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm md:mx-2">
//     <option disabled selected>Century</option>
//     <option>14th Century</option>
//     <option>15th Century</option>
//     <option>16th Century</option>
//     <option>17th Century</option>
//     <option>18th Century</option>
//     <option>19th Century</option>
//     <option>20th Century</option>
//     <option>21st Century</option>
//   </select>
//   <button className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 md:ml-2">
//     Reset
//   </button>
// </div>


//                   {/* Cards */}
//                   <div className="space-y-6">
//                     {/* Lal Ded */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                       <h2 className="text-xl font-semibold">Lal Ded</h2>
//                       <p className="text-sm text-gray-600 mb-2">c. 1320–1392 | Formative Period</p>
//                       <p className="mb-4">
//                         Female mystic poet whose "Vakhs" established foundational principles for Kashmiri Sufism,
//                         bridging Hindu Shaivite traditions with Islamic mysticism.
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         <span className="bg-fixnix-lightpurple text-gray-100 text-xs font-medium px-2 py-1 rounded-full">Mysticism</span>
//                         <span className="bg-fixnix-lightpurple text-gray-100 text-xs font-medium px-2 py-1 rounded-full">Poetry</span>
//                         <span className="bg-fixnix-lightpurple text-gray-100 text-xs font-medium px-2 py-1 rounded-full">Cross-Traditional Spirituality</span>
//                       </div>
//                     </div>

//                     {/* Mir Sayyid Ali Hamadani */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                       <h2 className="text-xl font-semibold">Mir Sayyid Ali Hamadani</h2>
//                       <p className="text-sm text-gray-600 mb-2">1314–1384 | Formative Period</p>
//                       <p className="mb-4">
//                         Persian Sufi master known as "Shah-e-Hamadan" who introduced formal Kubrawi Sufi practices
//                         to Kashmir and established an extensive network of khanqahs.
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         <span className="bg-fixnix-lightpurple text-gray-100 text-xs font-medium px-2 py-1 rounded-full">Institutional Development</span>
//                         <span className="bg-fixnix-lightpurple text-gray-100 text-xs font-medium px-2 py-1 rounded-full">Spiritual Transmission</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//    <section className="relative block py-[120px] pb-[10px]">
//           <div className="container mx-auto px-4">
//             <div className="relative block mb-[52px]">
//               <div className="flex items-center">
//                 <div className="w-full lg:w-8/12">
//                   <div className="relative block">
//                     <div className="text-left">
                     
//                        <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
//                       The Foundations of Kashmiri Sufism
//                       </h2> 
//                       <p className="text-base sm:text-lg text-gray-700">
//                       For those beginning a journey in Sufism, particularly those with scientific backgrounds, the following core learning paths provide an integrated structure that honors both spiritual tradition and scientific understanding. 
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block pb-[12px]   ">
              
//               <div className="mb-[42px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 Foundations of Kashmiri Sufism
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           1. The Arrival of Sufism in Kashmir
//                           </h5>
//                           <p>
//                           •	The 14th century saw the rise of Sufism in Kashmir, led by Mir Sayyid Ali Hamadani (Shah-e-Hamadan), who transformed the valley with his teachings on spiritual discipline, ethics, and craftsmanship.<br/>
// •	His disciples, along with local saints, established Kashmir’s Rishi-Sufi tradition, blending Persian Sufism with indigenous spiritual practices.<br/>
// •	This movement embraced diversity, allowing Hindu, Buddhist, and Islamic traditions to coexist and thrive.<br/>

                          

//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           2. The Rishi-Sufi Tradition – A Path of Simplicity and Wisdom
//                           </h5>
//                           <p>
//                           <span className="font-bold">•	Simplicity and Detachment – </span> Saints like Sheikh Noor-ud-Din Noorani (Nund Rishi) lived in nature, preaching minimalism and inner peace.<br/>
//                           <span className="font-bold">•	Love for All Beings –  </span> A philosophy of universal compassion, rejecting materialism and sectarianism.<br/>
//                           <span className="font-bold">•	Poetry as Divine Expression –  </span> The spiritual wisdom of Kashmir was preserved through mystical poetry, songs, and oral traditions.<br/>

//                           </p>
                         
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                          3. The Great Mystics Who Shaped Kashmiri Sufism
//                           </h5>
//                           <p>
//                           <span className="font-bold">• Mir Sayyid Ali Hamadani (Shah-e-Hamadan) – </span> The Sufi scholar who introduced Islamic ethics, craftsmanship, and trade to Kashmir, shaping its cultural and economic foundation.<br/>
//                           <span className="font-bold">•	Sheikh Noor-ud-Din Noorani (Nund Rishi) –  </span> The greatest Kashmiri saint, a mystic who preached harmony, humility, and devotion to the Divine.<br/>
//                           <span className="font-bold">•	Lalleshwari (Lal Ded) –  </span>A poetess-mystic who transcended religious boundaries, inspiring both Hindus and Muslims with her soul-stirring verses.<br/>
//                           <span className="font-bold">•	Ahmad Batwari & Baba Naseeb-ud-Din Ghazi  </span>Sufi scholars who continued the tradition of spiritual knowledge and wisdom.<br/>

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
//                        The Science of Kashmiri Sufism
//                       </h2> 
//                       <p className="text-base sm:text-lg text-gray-700">
//                       Kashmiri Sufism was never just about faith and devotion—it was also about knowledge, reason, and the mysteries of the universe. The saints of Kashmir delved deep into metaphysics, consciousness, and the unseen realms of existence, concepts that modern physics and neuroscience are only beginning to explore.
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
//                 Science of Kashmiri Sufism
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           1. Mysticism and Quantum Science
//                           </h5>
//                           <p>
//                           •	Kashmiri Sufi teachings on oneness, interconnectedness, and divine energy resonate with modern quantum physics.<br/>
// •	The idea that all existence is woven from a single reality mirrors the scientific theories of the unified field.<br/>

                          

//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           2. The Sufi Understanding of Consciousness
//                           </h5>
//                           <p>
//                           •	Kashmiri Sufis explored the depths of human consciousness, using meditation and Zikr (remembrance) to alter states of perception.<br/>
// •	Their insights align with modern neuroscience and the study of higher states of awareness.<br/>

//                           </p>
                         
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           3. Mathematics, Sacred Geometry, and Architecture
//                           </h5>
//                           <p>
//                           •	Kashmiri Sufi shrines and mosques showcase intricate mathematical patterns, reflecting the divine order of the universe.<br/>
// •	The study of sacred geometry in Sufi architecture aligns with today’s understanding of fractal mathematics and cosmic patterns.<br/>

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
//                        Reviving the Kashmiri Sufi Legacy<br/> for a New Generation
//                       </h2> 
//                       <p className="text-base sm:text-lg text-gray-700">
//                       At the Sufi Science Center (SSC), we believe that our legacy must evolve, not remain frozen in time. To honor our Sufi ancestors, we must adapt their wisdom to meet the challenges of the modern world.
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
//                 Reviving the Kashmiri Sufi Legacy
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           1. Digitizing Kashmiri Sufi Teachings
//                           </h5>
//                           <p>
//                           •	Translating and preserving the poetry, philosophy, and ethics of Kashmiri Sufi masters for global accessibility.<br/>
// •	Creating a digital library and multimedia storytelling platform to bring their wisdom to new audiences.<br/>


                          

//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           2. Exploring Sufism through Scientific Lenses
//                           </h5>
//                           <p>
//                           •	Hosting seminars, discussions, and research projects that explore the scientific dimensions of Sufi thought.<br/>
// •	Connecting Sufi principles with neuroscience, psychology, and physics to uncover new insights.<br/>


//                           </p>
                         
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           3. A Platform for the New Age Sufis
//                           </h5>
//                           <p>
//                           •	Engaging young minds in spiritual-scientific dialogues to keep the Kashmiri Sufi spirit alive and evolving.<br/>
// •	Encouraging critical thinking, self-reflection, and scientific inquiry in the light of Sufi wisdom.<br/>


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
//          {/*Experience One End*/}
        

        

//         <section className="text-left-mobile bg-fixnix-lightpurple text-left team-top py-[40px] sm:py-[60px] md:py-[80px]">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
//               {/* Section Tagline */}
//               <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
//               A Call to the Seekers
//                 <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
//               </span>

             

//               {/* Section Text */}
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               The Kashmiri Sufi Legacy is not a thing of the past, it is a movement, a living force that continues to inspire, guide, and transform lives. Whether you are drawn to the wisdom of the mystics or the discoveries of science, this legacy belongs to you. Join us at the Sufi Science Center, where the secrets of the saints meet the discoveries of science, and where the new generation of Kashmiri Sufis carries forward a tradition of enlightenment.
//               </p>

//               {/* Subheading */}
//               <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               Be Part of the Legacy. Be a Seeker of Truth. Be the Future.
//               </h2>
//             </div>
//           </div>
//         </section>

//         {/* Team One End */}
//       </Layout>
//     </>
//   );
// }
'use client'

import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export interface ComplexContentBlock {
  title?: string;
  mainHeading?: string;
  slug?: {
    _type: 'slug';
    current: string;
  };
  mainDescription?: string;
  label?: string;
  contentSections?: ContentSection[];
}

export interface ContentSection {
  sectionHeading?: string;
  sectionDescription?: string;
  subSections?: SubSection[];
}

export interface SubSection {
  subHeading?: string;
  note?: string;
  paragraphs?: ParagraphBlock[];
  bottomNote?: string;
}

// This is a basic interface for Portable Text blocks (Sanity `block` type)
export interface ParagraphBlock {
  _key: string;
  _type: 'block';
  children: Array<{
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
  }>;
  markDefs: any[];
  style: string;
}


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
  *[_type == "page" && pageName == "Our Heritage & Identity"][0]{
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
console.log("rsi2", leftsideImageContent2,)


  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        headTitle="Our Team"
        wrapperCls="team-page-wrapper"
      >
        <Banner slides={heroData}/>
        <section className="relative block py-[80px] md:py-[100px] lg:py-[120px] z-[1]">
          <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] bottom-0 mb-0 sm:bg-white md:bg-white lg:bg-white xl:bg-fixnix-lightpurple 2xl:bg-fixnix-lightpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center z-[-1]"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
                <div className="relative block">
                  <div className="mb-7">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    {rightsideImageContent?.title}
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    {rightsideImageContent?.heading}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg font-bold text-fixnix-darkpurple leading-[28px]">
                  {rightsideImageContent?.subHeading}
                  </p>
                  <div className="mt-4 gap-3 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3 space-y-8">
                  <PortableText  value={rightsideImageContent?.description}/>
                  </div>
                 
                </div>
              </div>
              <div className="w-full lg:w-1/2 pl-0 lg:pl-12 relative">
              <div className="relative block rounded-lg overflow-hidden">
              {rightsideImageContent?.image?.asset && (
               <Image
                 src={urlFor(rightsideImageContent.image).url()}
                 alt="Heritage"
                 width={800}
                 height={500}
                 className="w-full h-[500px] rounded-lg object-cover"
               />
              )}
              
</div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ background : leftsideImageContent?.bgImage?.asset ? `url(${urlFor(leftsideImageContent?.bgImage).url()})` : '',
                  backgroundSize : 'cover' }} className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 mb-3 leading-snug sm:leading-tight">
                    {leftsideImageContent?.heading}
                    </h2>
                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium mt-3 mb-3 leading-snug sm:leading-tight">
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

                    
                    {/* <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Sheikh Noor-ud-Din Noorani (Nund Rishi) 
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        The founder of the Rishi order, who emphasized simplicity, humility, and a deep connection with nature
                        </p>
                      </div>
                    </li>

                    
                    <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Lalleshwari (Lal Ded) 
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        A poetess-mystic whose verses expressed the oneness of existence and the inner journey toward enlightenment
                        </p>
                      </div>
                    </li>
                    <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Mir Sayyid Ali Hamadani  
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        The Persian Sufi who brought Islam to Kashmir, integrating spiritual wisdom with trade, art, and governance.
                        </p>
                      </div>
                    </li> */}
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/*Team Top End*/}

        {/* Experience One Start */}
        <section className=" text-left-mobile relative block bg-fixnix-darkpurple py-[120px] z-[1]">
          <div
            className="absolute top-[20px] bottom-[20px] left-0 right-0 bg-no-repeat bg-center bg-cover z-[-1]"
            style={{
              backgroundImage:
                purpleChart?.bgImage?.asset
                  ? `url(${urlFor(purpleChart.bgImage).url()})`
                  : 'none',
            }}
          ></div>
          <div className="container mx-auto">
            {/* Section Title */}
            <div className="text-center mb-[57px]">
              <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
              {purpleChart?.title}
                <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple">
                  {purpleChart?.heading}
                </span>
                <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2
                className="mt-[14px]  text-left  text-white text-[14px] sm:text-[32px] md:text-[24px] lg:text-[22px] xl:text-[22px] 2xl:text-text-[22px] leading-[32px] sm:leading-[40px] md:leading-[30px] font-semibold
"
              >
                {purpleChart?.description}
              </h2>
            </div>

            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {purpleChart?.subChart.map((items : any , idx : number)=> {
                return (
                  <div key={idx} className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
                  <div className="relative block">
                    <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
                      <i className="icon-service"></i>
                    </span>
                  </div>
                  <div className="ml-[20px] sm:ml-[20px]">
                    <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
                      <Link
                        href={items.link}
                        className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
                      >
                        {items.subHeading} 
                      </Link>
                    </h3>
                    <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
                    {items.subDescription}
                    </p>
                  </div>
                </div>
                )
              })}
             
            </div>
          </div>
        </section>
        <section className="px-6 py-12 md:py-16 lg:py-20 xl:py-32 2xl:py-48 bg-gray-100">
      <div className="max-w-5xl mx-auto text-left">
        <span className="relative inline-block text-left text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase">
          {whiteChart?.title}
          <span className="absolute top-2 left-[-50px] w-10 sm:w-12 h-[2px] bg-fixnix-lightpurple"></span>
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          {whiteChart?.heading}
        </h2>
        <p className="text-lg my-4">
          {whiteChart?.description}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">

        {whiteChart?.subChart.subTitle.map((items : any , idx : number)=>{
          return (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
            <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
            <h3 className="mt-4 text-lg font-semibold">
              {items}
            </h3>
          </div>
          )
        })}
        

      </div>

      <div className="max-w-5xl mx-auto mt-8 text-left">
        <h2 className="text-xl font-semibold">
          {whiteChart?.note}
        </h2>
      </div>
    </section>
    <div style={{ background : leftsideImageContent2?.bgImage?.asset ? `url(${urlFor(leftsideImageContent2?.bgImage).url()})` : '',
                  backgroundSize : 'cover' }} className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center">
              {/* Left Section */}
              <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden relative group">
                  {leftsideImageContent2?.image?.asset && (
                     <Image
                     src={urlFor(leftsideImageContent2.image).url()}
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
                    {leftsideImageContent2?.intro} 
                      <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    </span>
                    <h2 className="text-[10px] sm:text-xl md:text-2xl font-bold mt-3 mb-3 leading-snug sm:leading-tight">
                    {leftsideImageContent2?.heading}
                    </h2>
                    <h2 className="text-[10px] sm:text-[15px] md:text-xl font-bold mt-3 mb-3 leading-snug sm:leading-tight">
                    {leftsideImageContent2?.subheading}
                    </h2>
                    <div className="text-base sm:text-lg text-gray-700 space-y-8">
                    <PortableText value={leftsideImageContent2?.description}/>
                    </div>
                    <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-3 -mb-6  leading-snug sm:leading-tight">
                    {leftsideImageContent2?.pointsHeading}
                    </h2>
                  </div>
                  <ul className="space-y-5 sm:space-y-6 lg:space-y-9">
                  
                  {leftsideImageContent2?.points && leftsideImageContent2.points.length > 0 ? (
  leftsideImageContent2.points.map((point: any, idx: number) => (
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

                    
                    {/* <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Sheikh Noor-ud-Din Noorani (Nund Rishi) 
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        The founder of the Rishi order, who emphasized simplicity, humility, and a deep connection with nature
                        </p>
                      </div>
                    </li>

                    
                    <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Lalleshwari (Lal Ded) 
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        A poetess-mystic whose verses expressed the oneness of existence and the inner journey toward enlightenment
                        </p>
                      </div>
                    </li>
                    <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
                      <div className="ml-4 sm:ml-6">
                        <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
                        Mir Sayyid Ali Hamadani  
                        </h5>
                        <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
                        The Persian Sufi who brought Islam to Kashmir, integrating spiritual wisdom with trade, art, and governance.
                        </p>
                      </div>
                    </li> */}
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
  

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

















<section className="relative bg-fixnix-lightpurple py-24 text-left-mobile">
  <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
  <div className="container">
    <div className="text-left mb-12">
      <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-bold uppercase z-[1]">
        {purpleContent?.title }
        <span className="absolute top-[42px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
      </span>

      {purpleContent?.content.map((section, i) => (
        <div key={i} className="mt-6">
          <h4 className="text-fixnix-white text-xl font-semibold mb-2">
            {section.heading}
          </h4>
          {/* Aage description waghera */}
          <div className="text-[var(--fixnix-white)]">
            <PortableText value={section.description}/>
          </div>
          <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
            {section.bottomHeading}
            </h2>
        </div>
      ))}

      <p className="text-[var(--fixnix-white)] mt-2">
        {/* Agar purpleContent.content[0].description se kuch aana ho to yahan */}
      </p>

      <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
        {/* bottomHeading ya koi aur field yahan */}
      </h2>
    </div>
  </div>
</section>




   


        
        {/* Team One End */}
      </Layout>
    </>
  );
}
