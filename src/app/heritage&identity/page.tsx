// import Layout from "../../components/layout/Layout";
// import CounterUp from "../../components/elements/CounterUp";
// import Link from "next/link";
// import Image from "next/image";
// import Banner from "@/components/sections/home3/Banner";
// const HeritageSlides = [
//   {
//     subTitle: "Rooted in Tradition, Evolving Forward",
//     title: " Unveiling the Essence of<br/> Kashmiri Sufism",
//     text: "Explore the rich heritage of Kashmiri Sufism, where timeless wisdom meets modern<br/> understanding, preserving identity, spirituality, and cultural harmony.",
//     buttonText: "Read More",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Timeless Wisdom, Eternal Connection, Now",
//     title: "Honoring Kashmir’s Sufi<br/> Legacy & Spirit",
//     text: "Step into the mystical past of Kashmiri Sufism, where tradition, devotion,<br/> and enlightenment shape our collective spiritual journey forward.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Ancient Teachings, Modern Spiritual Awakening",
//     title: "Echoes of Sufi Wisdom<br/> in Kashmir",
//     text: "Reconnect with the soul of Kashmiri Sufism, blending sacred teachings,<br/> cultural depth, and spiritual enlightenment for a harmonious future.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Wisdom, Peace, Identity, Sufism, Kashmir",
//     title: "Preserving the Spirit of<br/> Sufi Heritage",
//     text: " Discover the heart of Kashmiri Sufism, where love, devotion,<br/> and sacred traditions guide seekers on their path to enlightenment.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Past and Future in Harmony",
//     title: "Kashmiri Sufi Heritage –<br/> A Living Legacy",
//     text: "Embrace the living traditions of Kashmiri Sufism, a journey of faith,<br/> resilience, and wisdom woven into the region’s cultural fabric.",
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
//         <Banner slides={HeritageSlides}/>
//         <section className="relative block py-[80px] md:py-[100px] lg:py-[120px] z-[1]">
//           <div className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] bottom-0 mb-0 sm:bg-white md:bg-white lg:bg-white xl:bg-fixnix-lightpurple 2xl:bg-fixnix-lightpurple bg-blend-color-burn bg-no-repeat bg-cover bg-right-center z-[-1]"></div>
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap flex-col lg:flex-row">
//               <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
//                 <div className="relative block">
//                   <div className="mb-7">
//                     <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                     Our Heritage 
//                       <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                     </span>
//                     <h2 className="text-2xl md:text-3xl font-bold mt-2">
//                     The Soul of Kashmiri Sufism
//                     </h2>
//                   </div>
//                   <p className="text-base md:text-lg font-bold text-fixnix-darkpurple leading-[28px]">
//                   A Legacy Rooted in Wisdom, Love, and Knowledge
//                   </p>
//                   <p className="mt-4 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3">
//                   Kashmir has long been known as Pir Waer, the Valley of Saints. It is a land where Sufism flourished, shaping the spiritual, cultural, and intellectual fabric of the region. The Sufi Science Center (SSC) is dedicated to reviving this timeless wisdom, ensuring that the teachings of our ancestors continue to guide the new generation in an age of science and technology.
//                   </p>
//                   <p className="mt-1 md:mt-6 mb-6 md:mb-9 text-sm md:text-base pr-3">
//                   Our heritage is a harmonious fusion of faith and reason, where Sufi mystics explored the mysteries of the universe, human consciousness, and the divine order. Today, we stand at the crossroads of ancient insight and modern discovery, ready to bridge the past with the future.
//                   </p>
//                 </div>
//               </div>
//               <div className="w-full lg:w-1/2 pl-0 lg:pl-12 relative">
//               <div className="relative block rounded-lg overflow-hidden">
//               <Image
//                 src="/assets/images/services/heritage.png"
//                 alt="Heritage"
//                 width={800}
//                 height={500}
//                 className="w-full h-[500px] rounded-lg object-cover"
//               />
// </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-wrap items-center">
//               {/* Left Section */}
//               <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
//                 <div className="relative">
//                   <div className="rounded-lg overflow-hidden relative group">
//                     <Image
//                       src="/assets/images/services/traditions.png"
//                       alt="Core services"
//                       layout="responsive"
//                       width={500}
//                       height={400}
//                       className="w-full transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section */}
//               <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
//                 <div className="relative">
//                   <div className="text-left mb-8">
//                     <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                     The Kashmiri Sufi Tradition 
//                       <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                     </span>
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 mb-3 leading-snug sm:leading-tight">
//                     A Beacon of Enlightenment
//                     </h2>
//                     <p className="text-base sm:text-lg text-gray-700">
//                     For centuries, Kashmiri Sufism has been a living philosophy, a tradition of spiritual awakening, selfless service, and the pursuit of higher knowledge. It has influenced every aspect of life, from language, poetry, and art to science, medicine, and ethics. Some of the greatest luminaries in our history have laid the foundation for a holistic worldview, combining spirituality and intellect.
//                     </p>
//                     <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-3 -mb-6  leading-snug sm:leading-tight">
//                     The Mystics Who Defined Our Path
//                     </h2>
//                   </div>
//                   <ul className="space-y-5 sm:space-y-6 lg:space-y-9">
//                     {/* List Item 1 */}
//                     <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
//                       <div className="ml-4 sm:ml-6">
//                         <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
//                         Sheikh Noor-ud-Din Noorani (Nund Rishi) 
//                         </h5>
//                         <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
//                         The founder of the Rishi order, who emphasized simplicity, humility, and a deep connection with nature
//                         </p>
//                       </div>
//                     </li>

//                     {/* List Item 2 */}
//                     <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
//                       <div className="ml-4 sm:ml-6">
//                         <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
//                         Lalleshwari (Lal Ded) 
//                         </h5>
//                         <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
//                         A poetess-mystic whose verses expressed the oneness of existence and the inner journey toward enlightenment
//                         </p>
//                       </div>
//                     </li>
//                     <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                      
//                       <div className="ml-4 sm:ml-6">
//                         <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
//                         Mir Sayyid Ali Hamadani  
//                         </h5>
//                         <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
//                         The Persian Sufi who brought Islam to Kashmir, integrating spiritual wisdom with trade, art, and governance.
//                         </p>
//                       </div>
//                     </li>
//                   </ul>
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        

//         {/*Team Top End*/}

//         {/* Experience One Start */}
//         <section className=" text-left-mobile relative block bg-fixnix-darkpurple py-[120px] z-[1]">
//           <div
//             className="absolute top-[20px] bottom-[20px] left-0 right-0 bg-no-repeat bg-center bg-cover z-[-1]"
//             style={{
//               backgroundImage:
//                 "url(assets/images/shapes/experience-one-shape-1.png)",
//             }}
//           ></div>
//           <div className="container mx-auto">
//             {/* Section Title */}
//             <div className="text-center mb-[57px]">
//               <span className="relative inline-block lg:text-[16px] sm:text-[14px] md:text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
//               A Legacy of Scientific Inquiry and Innovation
//                 <span className="absolute top-[6px] left-[-40px] md:left-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
//                 <span className="absolute top-[6px] right-[-40px] md:right-[-56px] w-[30px] md:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
//               </span>
//               <h2
//                 className="mt-[14px]  text-left  text-white text-[14px] sm:text-[32px] md:text-[24px] lg:text-[22px] xl:text-[22px] 2xl:text-text-[22px] leading-[32px] sm:leading-[40px] md:leading-[30px] font-semibold
// "
//               >
//                 Sufi traditions in Kashmir have never been at odds with scientific exploration. Our heritage is filled with intellectual pursuits that align with modern advancements in quantum physics, neuroscience, artificial intelligence, and cosmology.
//               </h2>
//             </div>

//             {/* Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
//               {/* Experience One Single */}
//               <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
//                 <div className="relative block">
//                   <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
//                     <i className="icon-service"></i>
//                   </span>
//                 </div>
//                 <div className="ml-[20px] sm:ml-[20px]">
//                   <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
//                     <Link
//                       href="services-details"
//                       className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
//                     >
//                       Sufi Approach to Consciousness 
//                     </Link>
//                   </h3>
//                   <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
//                   Understanding the self, the universe, and the divine mirrors today’s research in quantum mechanics and cognitive science.
//                   </p>
//                 </div>
//               </div>

//               {/* Experience Two Single */}
//               <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
//                 <div className="relative block">
//                   <span className="flex items-center justify-center w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
//                     <i className="icon-service"></i>
//                     <i className="icon-management"></i>
//                   </span>
//                 </div>
//                 <div className="ml-[20px] sm:ml-[20px]">
//                   <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
//                     <Link
//                       href="team"
//                       className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
//                     >
//                       	Sacred Geometry in Islamic Art 
//                     </Link>
//                   </h3>
//                   <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
//                   The intricate mathematical precision in Kashmiri art and architecture reflects the hidden patterns of nature.
//                   </p>
//                 </div>
//               </div>

//               {/* Experience Three Single */}
//               <div className="relative flex items-center bg-[#ffff]  p-[20px] sm:p-[26px] rounded-[6px] mb-[20px] lg:mb-[30px]  transition-transform duration-[500ms] hover:-translate-y-[10px] group hover:bg-fixnix-lightpurple">
//                 <div className="relative block">
//                   <span className="flex items-center justify-center w-[60px] h-[60px] bg-fixnix-lightpurple text-white text-[30px] rounded-full transition-all duration-[500ms] transform scale-[1] group-hover:bg-white group-hover:text-fixnix-lightpurple">
//                     <i className="icon-headphones"></i>
//                   </span>
//                 </div>
//                 <div className="ml-[20px] sm:ml-[20px]">
//                   <h3 className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px] mb-[8px]">
//                     <Link
//                       href="contact"
//                       className="text-fixnix-lightpurple transition-all duration-[500ms] group-hover:text-white"
//                     >
//                       Healing Sciences and Herbal Medicine 
//                     </Link>
//                   </h3>
//                   <p className="text-fixnix-lightpurple group-hover:text-white sm:text-[16px]">
//                   The Rishis of Kashmir practiced herbal medicine which resonate with modern holistic healing techniques.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="px-6 py-12 md:py-16 lg:py-20 xl:py-32 2xl:py-48 bg-gray-100">
//       <div className="max-w-5xl mx-auto text-left">
//         <span className="relative inline-block text-left text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase">
//           Preserving Our Past, Innovating for the Future
//           <span className="absolute top-2 left-[-50px] w-10 sm:w-12 h-[2px] bg-fixnix-lightpurple"></span>
//         </span>
//         <h2 className="text-2xl md:text-3xl font-bold mt-2">
//           At the Sufi Science Center, we are committed to:
//         </h2>
//       </div>

//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//         {/* Feature One */}
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
//           <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
//           <h3 className="mt-4 text-lg font-semibold">
//             Revitalizing Kashmiri Sufi Wisdom through education, in-depth research, immersive experiences, and cultural storytelling.
//           </h3>
//         </div>

//         {/* Feature Two */}
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
//         <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
//           <h3 className="mt-4 text-lg font-semibold">
//             Exploring Sufism through Science by analyzing its alignment with modern technological advancements.
//           </h3>
//         </div>

//         {/* Feature Three */}
//         <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left">
//         <div className="text-fixnix-lightpurple  rounded-full text-4xl font-bold">✓</div>
//           <h3 className="mt-4 text-lg font-semibold">
//           Connecting Young Minds with the philosophy of Kashmiri saints, the frontiers of knowledge, innovation, wisdom, and spirituality.
//           </h3>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto mt-8 text-left">
//         <h2 className="text-xl font-semibold">
//           Our mission is to not just look back at our heritage but to carry it forward with new energy and vision.
//         </h2>
//       </div>
//     </section>
//       <section className="relative block py-[30px] z-[1]">
//                 <div
//                   className="absolute inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
//                   style={{
//                     backgroundImage:
//                       "url(assets/images/backgrounds/core-services-bg.jpg)",
//                   }}
//                 ></div>
//                 {/*Experience One End*/}
//                 <div className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
//                   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex flex-wrap items-center">
//                       {/* Left Section */}
//                       <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
//                         <div className="relative">
//                           <div className="rounded-lg overflow-hidden relative group">
//                             <Image
//                               src="/assets/images/services/identity.png"
//                               alt="Core services"
//                               layout="responsive"
//                               width={500}
//                               height={300}
//                               className="w-full h-[400px] transition-transform duration-500 group-hover:scale-105"
//                             />
//                             <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
//                           </div>
//                         </div>
//                       </div>
      
//                       {/* Right Section */}
//                       <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
//                         <div className="relative">
//                           <div className="text-left mb-8">
//                             <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                             Our Identity 
//                               <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                             </span>
//                             <h2 className="text-4xl sm:text-3xl md:text-2xl font-bold mt-4 mb-2 leading-snug sm:leading-tight">
//                             The Soul of the Sufi Science Center 
//                             </h2>
//                             <h3 className="text-3xl sm:text-xl md:text-xl font-bold mb-6 leading-snug sm:leading-tight uppercase">A New Age of Kashmiri Sufism</h3>
//                             <p className="text-base sm:text-lg text-gray-700">
//                             The Sufi Science Center (SSC) is more than just an institution, it is a movement, a revolution, and a bridge between Kashmir’s spiritual heritage and the limitless frontiers of science and knowledge. Our identity is deeply rooted in the teachings of Kashmiri Sufi mystics, yet we stand firmly in the present, embracing modern advancements in science, technology, and philosophy.
//                             </p>
//                             <p className="text-base sm:text-lg mt-5 text-gray-700">
//                             We are the seekers, the dreamers, and the innovators, the new generation of Sufis, scholars, and scientists who carry the legacy of Mir Sayyid Ali Hamadani, Sheikh Noor-ud-Din Noorani, Lalleshwari, Momin Saeb, Soch Kraal Seab, Raheem Seab Sopori, Rahman Dar Saeb, Mahmood Gami, Rasol Mir, Naem e Saeb, Shamas Fakir, Wahab Khaar, Ahamad Batwari, Waz e Mehmood, Lasa Khan Fida, Samad Mir, Ahad Zargar, Rajab Hamid and Lala Aragami into the future. Our journey is guided by wisdom, love, and a relentless pursuit of truth.
//                             </p>
//                           </div>
                          
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//               <section className="relative block py-[120px] -mb-80 ">
//           <div className="container mx-auto px-4">
//             <div className="relative block ">
//               <div className="flex items-center">
//                 <div className="w-full lg:w-8/12">
//                   <div className="relative block">
//                     <div className="text-left ">
                      
//                       <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
//                       Who We Are
//                       </h2>
//                       <p>
//                       At SSC, we embrace a dual identity one that reflects the timeless spirituality of Sufism and the progressive spirit of scientific discovery.
//                       </p>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block py-[120px] pt-10  ">
              
//               <div className="mb-[52px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 uppercase right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 Who We Are
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
//                     <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                       Keepers of Kashmiri Sufi Legacy
//                       </h4>
                      
//                     </div>
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                           •	We honor and preserve the teachings of Kashmiri Sufi saints, poets, and thinkers.<br/>
//                           •	We explore the mystical wisdom embedded in Sufi poetry, ethics, and philosophy.<br/>
//                           •	We safeguard Kashmir’s cultural heritage by making it accessible to future generations.

//                           </p>
                          
                          
//                         </div>
//                       </li>
                      
                      
                      
                      
//                       <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                       Innovators of Spiritual-Scientific Thought
//                       </h4>
                      
//                     </div>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                         •	We merge Sufi metaphysics with quantum science, neuroscience, and AI.<br/>
//                         •	We seek answers to the universe’s greatest mysteries—from the nature of consciousness to the interconnectivity of all existence.<br/>
//                         •	We push boundaries, asking: Can Sufi thought enhance AI ethics? Does the poetry of Rumi and Lalla predict modern theories of time and space?


//                           </p>
                      
                          
//                         </div>
//                       </li>
                      
//                       <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                       A Global Community of Seekers
//                       </h4>
                      
//                     </div>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                         •	We are Kashmiris and beyond—an inclusive network of scientists, philosophers, poets, and visionaries working together.<br/>
//                         •	We connect minds across generations—young and old, traditional and modern, mystical and analytical.<br/>
//                         •	We believe wisdom has no boundaries, and the quest for knowledge unites all seekers.

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
//         <section className="relative block py-[120px] -mb-80 ">
//           <div className="container mx-auto px-4">
//             <div className="relative block ">
//               <div className="flex items-center">
//                 <div className="w-full lg:w-8/12">
//                   <div className="relative block">
//                     <div className="text-left ">
                      
//                       <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
//                       What We Stand For
//                       </h2>
//                       <p>
//                       At Sufi Science Center, our core identity is built upon six foundational pillars:
//                       </p>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block py-[120px] pt-10  ">
              
//               <div className="mb-[52px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 uppercase right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 What We Stand For
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
//                     <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                        Spiritual Wisdom
//                       </h4>
                      
//                     </div>
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                           We embrace the timeless insights of Sufism, fostering inner awakening, self-discovery, and a deep connection with the universe.

//                           </p>
                          
                          
//                         </div>
//                       </li>
                      
                      
                      
                      
//                       <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                        Scientific Exploration
//                       </h4>
                      
//                     </div>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                         We believe science and spirituality are not opposites but allies, working together to decode the secrets of existence.

//                           </p>
                      
                          
//                         </div>
//                       </li>
                      
//                       <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                        Innovation & Inquiry
//                       </h4>
                      
//                     </div>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                         We encourage open-mindedness, curiosity, and fearless questioning, just as Sufi mystics challenged conventional thought.

//                           </p>
                          
                          
//                         </div>
//                       </li>
//                       <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                        Conscious Evolution
//                       </h4>
                      
//                     </div>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                         We explore the science of consciousness, energy, and metaphysics, uncovering the hidden dimensions of human potential.

//                           </p>
                      
                          
//                         </div>
//                       </li>
//                       <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                        Cultural Revival
//                       </h4>
                      
//                     </div>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                         We protect Kashmir’s rich spiritual traditions, storytelling, and poetic heritage, ensuring their relevance in the modern world.

//                           </p>
                      
                          
//                         </div>
//                       </li>
//                       <div className="mb-[24px] ">
//                       <h4 className="text-[30px] font-semibold leading-[40px]  mb-[14px]">
//                        Unity & Inclusion
//                       </h4>
                      
//                     </div>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="text-[18px] font-semibold leading-[34px]  mb-[1px]">
//                         We are open to all seekers, embracing diverse perspectives, interfaith dialogue, and universal brotherhood.

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
//         <section className="relative bg-fixnix-lightpurple py-24 text-left-mobile">
//         <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
//         <div className="container">
//           <div className="text-left mb-12">
//             <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-bold  uppercase z-[1]">
//             A Movement for the Future
//               <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
              
//             </span>
            
//             <p className="text-[var(--fixnix-white)] mt-2">
//             Our heritage is alive within us. It is written in our poetry, sung in our mystic verses, and echoed in the rhythm of our traditions. As the new generation, it is our responsibility to protect it, explore it, and evolve with it. Our identity is not confined to history books or ancient texts, it is alive within us, in the way we think, explore, and dream. The Sufi Science Center is the future of Kashmiri Sufism, where the mystical and the scientific walk hand in hand.
// If you feel the call, if you are curious about the unknown, if you wish to bridge the wisdom of the past with the discoveries of tomorrow, you are one of us.

//             </p>
            
//             <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
//             Join the Sufi Science Center in this journey of rediscovery—where the past illuminates the future, and wisdom meets innovation.
//             </h2>
//           </div>
          
//         </div>
        
//     </section>


        
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

