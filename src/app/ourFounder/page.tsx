// import Layout from "../../components/layout/Layout";
// import CounterUp from "../../components/elements/CounterUp";
// import Link from "next/link";
// import Image from "next/image";
// import Banner from "@/components/sections/home3/Banner";
// const LegacySlides = [
//   {
//     subTitle: "Legacy of a Mystic Visionary",
//     title: " Dr. Kumar's Path to<br/> Spiritual Awakening",
//     text: "From Kashmir’s jungles to the world, Dr. Kumar’s Sufi wisdom inspires<br/> seekers to embrace love, peace, and self-awareness.",
//     buttonText: "Read More",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: " A Journey Beyond the Self",
//     title: "Dr. Kumar’s Mystic <br/>Call to Truth",
//     text: "Rooted in Kashmiri Sufism, Dr. Kumar’s teachings bridge science and spirituality,<br/> guiding seekers toward inner peace and enlightenment.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Awakening Through Mystic Science",
//     title: " Dr. Kumar’s Legacy<br/> of Sufi Wisdom",
//     text: " Combining mysticism and science, Dr. Kumar reveals the hidden truths of<br/> existence, offering seekers a path to harmony.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: " Wisdom Beyond the Material World",
//     title: "Dr. Kumar’s Teachings<br/> of Inner Light",
//     text: " Guided by Sufi science, Dr. Kumar’s insights empower seekers to <br/>uncover life’s deeper purpose through spiritual connection.",
//     buttonText: "Explore",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: " Finding Truth Through Mystic Paths",
//     title: " Dr. Kumar’s Spiritual<br/> and Scientific Fusion",
//     text: "Dr. Kumar’s teachings blend Kashmiri Sufism and science, leading seekers <br/>toward enlightenment, self-awareness, and universal harmony.",
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
//                                       src="/assets/images/services/Dr_kumar_sahib.png"
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
//                                     Our Founder  
//                                       <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                                     </span>
//                                     <h2 className="text-4xl sm:text-3xl md:text-2xl font-bold mt-4 mb-2 leading-snug sm:leading-tight">
//                                     Dr. Ghulam Mohammad Kumar (Mama Ji, Kumar Sahib)
//                                     </h2>
//                                     <h3 className="text-3xl sm:text-xl md:text-xl font-semibold mb-6 leading-snug sm:leading-tight uppercase">Qalandar-i-Kashmir –The Wandering Light, The Hidden Pearl of Kashmir</h3>
//                                     <p className="text-base sm:text-lg text-gray-700">
//                                     In the sacred annals of Kashmir’s spiritual history, where mystics have walked the valleys whispering the secrets of Divine Truth, one name shines like a celestial beacon—Dr. Ghulam Mohammad Kumar, revered as Qalandar-i-Kashmir. A saint beyond the confines of time, a mystic immersed in the ocean of Haqiqat (Ultimate Reality), he continues to ignite the hearts of seekers with his presence.
//                                     </p>
//                                     <p className="text-base sm:text-lg mt-5 text-gray-700">
//                                     Dr. Kumar is not an ordinary mystic—his journey is one of intense self-transformation, detachment from the material world, and complete surrender to Divine Love. He bridges the depths of Kashmiri Sufi wisdom with modern knowledge, showing that spirituality and intellect are not opposites but allies in the search for truth.
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
//                        From Medicine to Divine Healing
//                       </h2> 
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block pb-[12px]   ">
              
//               <div className="mb-[52px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 BACKGROUND
//                 </div>
//                   <div className=" pt-[80px] pb-16 px-10 relative ">
                    
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
                          
//                           <p className="font-medium text-[20px]">
//                           Born into a well-off and highly educated family, Dr. Kumar comes from a lineage of scholars and professionals, many of whom have served in prestigious government positions. Despite being surrounded by worldly success, his soul longed for a reality beyond the material realm.
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
                          
//                           <p className="font-medium text-[20px]">
//                           An alumnus of Government Medical College Srinagar, he pursued a career in medicine and later became a Block Medical Officer in Kashmir. However, his spirit was not bound by the confines of a doctor’s clinic, it yearned for the boundless horizon of Divine Truth.
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                         <p className="font-medium text-[20px]">
//                         One day, as if struck by the call of Ishq-e-Haqiqi (Divine Love), he left his medical profession to embark on a spiritual journey. The world saw a doctor stepping away from his career, but in the unseen realm, a Wali (saint) was stepping into his divine mission.
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
//               The Journey into Fana 
//                 <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
//               </span>
//               <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               Annihilation in the Divine
//               </h2>
              

             

//               {/* Section Text */}
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               For fourteen years, Dr. Kumar immersed himself in deep spiritual retreat, renouncing all attachments to the self and the world. He chose the jungles of Ganderbal as his meditation place, engaging in constant Muraqaba (deep spiritual absorption).<br/>
//               Then, he returned, but not as the man people had once known, he returned as a Qalandar, lost in the Divine Presence.
//               </p>
//               <h2 className="mt-[5px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               The Life of a Qalandar
//               </h2>
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               Having undergone a complete spiritual transformation, he embodies the state of Fana-fi-Allah (annihilation in God),a soul that no longer recognizes the illusions of the material world. He walks detached from worldly possessions, unchained from the veils of dunya (the temporary world).<br/>The world sees simplicity, but the lovers of Truth see divine wisdom.


//               </p>
              
//               <p className="pt-[15px] sm:pt-[20px] font-bold text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               •		He never married, for his heart is already wed to the Eternal Beloved.<br/>
//               •		He speaks little, for his silence carries the weight of divine secrets.<br/>
//               •	 	To sit in his presence is to feel the tremors of spiritual awakening.<br/>
//               •	To look into his eyes is to glimpse eternity.



//               </p>

//               {/* Subheading */}
              
//             </div>
//           </div>
//         </section>
//         <div className="relative block py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
//                   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex flex-wrap items-center">
//                       {/* Left Section */}
//                       <div className="w-full lg:w-5/12 xl:w-1/2 pt-8 lg:pt-14">
//                         <div className="relative">
//                           <div className="rounded-lg overflow-hidden relative group">
//                             <Image
//     src="/assets/images/services/bargah1.png"
//     alt="Core services"
//     width={500}
//     height={400}
//     className="w-full transition-transform duration-500 group-hover:scale-105"
//   />
//                             <div className="absolute inset-0 bg-fixnix-lightpurple opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
//                           </div>
//                         </div>
//                       </div>
        
//                       {/* Right Section */}
//                       <div className="w-full lg:w-7/12 xl:w-1/2 py-8 lg:py-5 lg:pl-12 xl:pl-24">
//                         <div className="relative">
//                           <div className="text-left mb-4">
//                             <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                             Banday Bagh  
//                               <span className="absolute top-[10px] left-[-50px] w-[40px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                             </span>
//                             <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 mb-1 leading-snug sm:leading-tight">
//                             The Spiritual Station
//                             </h2>
//                             <p className="text-base sm:text-lg text-gray-700">
//                             In the valley of Serch Banday Bagh, Ganderbal, where the whispers of the saints still echo through the winds and trees, Dr. Kumar’s spiritual *maqam* (station) stands as a lighthouse for seekers. Hundreds come seeking, searching, yearning for peace, wisdom, and divine guidance and none leave empty-handed.
//                             </p>
//                             <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-2 -mb-4  leading-snug sm:leading-tight">
//                             In the spirit of Sufi Khidmat (selfless service), his devotees have established:
//                             </h2>
//                           </div>
//                           <ul className="space-y-5 sm:space-y-6 lg:space-y-4">
//                             {/* List Item 1 */}
//                             <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                              
//                               <div className="ml-4 sm:ml-6">
//                                 <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
//                                 Langar 
//                                 </h5>
//                                 <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
//                                 Free food for all, where the hunger of the body and soul is satisfied alike.
//                                 </p>
//                               </div>
//                             </li>
        
//                             {/* List Item 2 */}
//                             <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                              
//                               <div className="ml-4 sm:ml-6">
//                                 <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
//                                 A Meditation Center 
//                                 </h5>
//                                 <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
//                                 A place for deep reflection, where seekers engage in Zikr and Muraqaba .
//                                 </p>
//                               </div>
//                             </li>
//                             <li className="relative flex items-center p-2 py-6 md:py-8 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md  transition-all duration-500">
                              
//                               <div className="ml-4 sm:ml-6">
//                                 <h5 className="text-lg sm:text-xl md:text-[21px] font-semibold text-white transition-colors duration-500 ">
//                                 Free Lodging & Boarding  
//                                 </h5>
//                                 <p className="text-sm sm:text-base text-white transition-colors duration-500 ">
//                                 No seeker is turned away, for the doors of the Divine remain open to all.
//                                 </p>
//                               </div>
//                             </li>
//                           </ul>
//                           <p className="font-bold text-xl py-2 text-fixnix-darkpurple">
//                           Let your heart lead the way, discover light, silence, saint. 
                           
                      
//                           </p>
                         

//                           <div className="flex items-center space-x-4  -mb-12">
//   <a 
//     href="https://maps.app.goo.gl/Z7WtC8dtsGrcLBmn8" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="flex-shrink-0"
//   >
//     <Image 
//       src="/assets/images/services/l2.png" 
//       alt="Our Location" 
//       width={50} 
//       height={50} 
//       className=" hover:opacity-90 transition"
//     />
//   </a>
//   <div className="flex items-center space-x-2">
//     <i className="fas fa-arrow-right text-fixnix-darkpurple text-xl"></i>
//     <p className="font-bold text-fixnix-darkpurple whitespace-nowrap text-base sm:text-lg md:text-xl">
//       Get Spiritual Direction
//     </p>
//   </div>
// </div>






                          
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <section className="text-left-mobile bg-gray-100 team-top py-[50px] sm:py-[60px] md:py-[110px]">
//         <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
//           <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
//             {/* Section Tagline */}
//             <span className="relative inline-block text-[18px] sm:text-[16px] xl:text-[20px] leading-[16px] text-fixnix-lightpurple font-bold uppercase z-[1]">
//             A Sufi Guide for the New Generation
//               <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              
//             </span>

//             {/* Section Title */}
            

//             {/* Section Text */}
//             <p className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//             The new educated generation of Kashmir often struggles to understand the ancient language of Sufism, which has traditionally been expressed through Kashmiri Chakir music and mystic poetry. However, Dr. Kumar’s teachings serve as a bridge between the old and the new. Unlike many before him, his spiritual communication integrates scientific reasoning and tele codes, making the timeless truths of Sufism accessible to today's seekers.
//             </p>
//             <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[20px] sm:text-[32px] md:text-[35px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
//             His words are not just poetry, they are lightning bolts of spiritual awakening, guiding young souls toward self-discovery and divine love.
//             </h2>

//             {/* Subheading */}
        
//           </div>
//         </div>
//       </section>
//       <section className="relative block py-[120px] pb-[10px]">
//           <div className="container mx-auto px-4">
//             <div className="relative block mb-[52px]">
//               <div className="flex items-center">
//                 <div className="w-full lg:w-8/12">
//                   <div className="relative block">
//                     <div className="text-left">
                     
//                        <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-2 leading-snug sm:leading-tight">
//                        The Birth of the Sufi Science Center(SSC)
//                       </h2> 
//                       <p className="text-[16px]">To preserve and spread his teachings, the Sufi Science Center was founded as a think tank, research hub, and spiritual sanctuary to carry forward Dr. Kumar’s vision of uniting Sufism with modern intellectual and technological advancements.</p>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block pb-[12px]   ">
              
//               <div className="mb-[42px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 right-0 uppercase bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 BIRTH OF SSC
//                 </div>
//                   <div className=" pt-[100px] px-10 relative ">
                    
                    
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                             <h3 className="text-[24px] font-semibold leading-[34px] text-fixnix-darkpurple mb-[14px]">The Mission of SSC Under His Leadership</h3>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           • Preserving Kashmiri Sufi Heritage 
//                           </h5>
//                           <p>
//                           Digitizing, translating, and reviving the wisdom of Kashmiri mystics.
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           • Advancing Interdisciplinary Research 
//                           </h5>
//                           <p>
//                           Studying the connections between Sufi consciousness, ethics, and scientific innovation.
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           • Empowering the Youth 
//                           </h5>
//                           <p>
//                           Creating educational programs, mentorship networks, and immersive experiences to inspire the next generation of Kashmiri seekers.
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           • Building a Global Network of Thinkers 
//                           </h5>
//                           <p>
//                           Connecting scholars, scientists, and spiritualists to engage in meaningful discussions on consciousness, ethics, and the future of humanity.
//                           </p>
//                           <p className="font-bold mt-3">
//                           Under his guidance and vision, SSC is not just an institution, it is a movement, a revolution, a call to seek knowledge without limits.
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
//               The Legacy Continues 
//                 <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-white"></span>
                
//               </span>
//               <h2 className="mt-[10px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               Dr. Kumar Foundation USA
//               </h2>
              

             

//               {/* Section Text */}
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               To ensure his message reaches beyond Kashmir, one of Dr. Kumar’s students, who immigrated to the United States in 2019 and is now a U.S. citizen, established the Dr. Kumar Foundation USA.
//               This foundation preserves, promotes, and spreads his message of love, divine unity, and self-realization to seekers across the world. It carries his teachings to a global audience, ensuring that his light continues to guide those searching for truth.
//               </p>
//               <h2 className="mt-[5px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               A Call to the Seeker
//               </h2>
//               <p className="pt-[15px] sm:pt-[20px] text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               To the one whose heart is restless,<br/>
// To the one who feels the pull of something beyond this world,<br/>
// To the one who seeks the truth hidden behind the illusion.<br/>



//               </p>
              
//               <p className="pt-[15px] sm:pt-[20px] font-bold text-left xs:text-left sm:text-left md:text-center lg:text-center text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               •		The path is open, the doors are never closed.<br/>
//               •		The caravan of Haqiqat (Ultimate Reality) moves forward—will you walk with us?<br/>
              



//               </p>
//               <h2 className="mt-[5px] sm:mt-[14px] text-white text-[18px] sm:text-[20px] md:text-[22px] leading-[30px] sm:leading-[40px] font-bold">
//               Join the Journey. Seek the Truth. Shape the Future.
//               </h2>

//               {/* Subheading */}
              
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
  const [complexContentData1, setComplexContentData1] = useState<ComplexContentBlock>();
  const [complexContentData2, setComplexContentData2] = useState<ComplexContentBlock>();
  const [purpleContent1 , setPurpleContent1] = useState <any>()
  const [purpleContent2 , setPurpleContent2] = useState <any>()
  const [simpleContent , setSimpleContent] = useState<any>()

  const query = `
  *[_type == "page" && pageName == "Our Founder"][0]{
    _id,
    pageName,
    "heroSection": contentSections[type == "heroSections"][0].heroSections,
    "rightSImageContent" : contentSections[type == "rightsideImageContent"][0].rightsideImageContent,
    "leftSImageContent" :  contentSections[type == "goalSection"][0].goalSection,
    "purpleChart" : contentSections[type == "purpleChart"][0].purpleChart,
    "whiteChart" : contentSections[type == "whiteChart"][0].whiteChart,
    "leftSImageContent2" :  contentSections[type == "goalSection"][1].goalSection,
    "complexContent1": contentSections[type == "complexContentBlock"][0].complexContentBlock,
    "complexContent2": contentSections[type == "complexContentBlock"][1].complexContentBlock,
    "purpleContent1" : contentSections[type == "purpleContent"][0].purpleContent,
    "purpleContent2" : contentSections[type == "purpleContent"][1].purpleContent,
    "simpleContent" : contentSections[type == "simpleContent"][0].simpleContent,
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
                    setComplexContentData1(data.complexContent1);
                    setComplexContentData2(data.complexContent2);
                    setPurpleContent1(data.purpleContent1);
                    setPurpleContent2(data.purpleContent2);
                    setSimpleContent(data.simpleContent)
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

  
    <section  className="relative block ">
      <div className="container mx-auto px-4">
        <div className="relative block ">
          <div className="flex items-center">
            <div className="w-full lg:w-8/12">
              <div className="relative block">
                <div className="text-left">
                  <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    {complexContentData1?.title}
                    {complexContentData1?.title ? (
                      <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                    ) : null}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-2 leading-snug sm:leading-tight">
                    {complexContentData1?.mainHeading}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700">
                    {complexContentData1?.mainDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {Array.isArray(complexContentData1?.contentSections) && complexContentData1?.contentSections?.length > 0 &&
          complexContentData1?.contentSections.map((section, i) => (
            <div key={i} className="relative block py-[20px] pt-10">
              <div className="">
                <div className="flex flex-col md:flex-row bg-gray-100 p-0 pb-[52px] mb-[20px] relative z-10 rounded-3xl">
                  <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                    {complexContentData1?.label}
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
  

</div>

<section className="bg-fixnix-lightpurple py-7 pb-24 text-left-mobile">
  <div className="inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
  <div className="container">
    <div className="text-left">
      
      <p className="relative inline-block text-white text-[18px] font-bold uppercase">
        {purpleContent1?.title}
        <span className="absolute top-[10px] left-[-56px] translate-y-[-50%] w-[40px] h-[2px] bg-white"></span>
      </p>

      {purpleContent1?.content.map((section, i) => (
        <div key={i} className="mt-6">
          <h4 className="text-fixnix-white text-2xl font-semibold mb-2">
            {section.heading}
          </h4>

          <div className="text-[var(--fixnix-white)]">
            <PortableText value={section.description} />
          </div>

          <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[18px] sm:text-[20px] md:text-[22px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
            {section.bottomHeading}
          </h2>
        </div>
      ))}
    </div>
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
                     height={600}
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
                    <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mt-3 mb-1 leading-snug sm:leading-tight">
                    {leftsideImageContent2?.heading}
                    </h2>
                    <h2 className="text-[10px] sm:text-[15px] md:text-xl font-bold  leading-snug sm:leading-tight">
                    {leftsideImageContent2?.subheading}
                    </h2>
                    <div className="text-base sm:text-lg text-gray-700 ">
                    <PortableText value={leftsideImageContent2?.description}/>
                    </div>
                    <h2 className="text-xl sm:text-xl md:text-xl font-semibold -mt-2 -mb-6  leading-snug sm:leading-tight">
                    {leftsideImageContent2?.pointsHeading}
                    </h2>
                  </div>
                  <ul className="space-y-2 sm:space-y-6 lg:space-y-3">
                  
                  {leftsideImageContent2?.points && leftsideImageContent2.points.length > 0 ? (
  leftsideImageContent2.points.map((point: any, idx: number) => (
    <li
      key={idx}
      className="relative flex items-center p-2 py-6 md:py-2 bg-fixnix-lightpurple hover:-translate-y-[10px] group rounded-lg shadow-md transition-all duration-500"
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
                  <p className="font-bold text-xl py-2 text-fixnix-darkpurple">
                          {leftsideImageContent2?.locationTitle} 
                           
                      
                          </p>
                         

                          <div className="flex items-center space-x-4  -mb-12">
  <a 
    href={leftsideImageContent2?.locations.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-shrink-0"
  >
    {leftsideImageContent2?.locations.image?.asset && (
        <Image 
        src={urlFor(leftsideImageContent2.locations.image).url()} 
        alt="Our Location" 
        width={50} 
        height={50} 
        className=" hover:opacity-90 transition"
      />
    )}
  
  </a>
  <div className="flex items-center space-x-2">
    <i className="fas fa-arrow-right text-fixnix-darkpurple text-xl"></i>
    <p className="font-bold text-fixnix-darkpurple whitespace-nowrap text-base sm:text-lg md:text-xl">
      {leftsideImageContent2?.locations.title}
    </p>
  </div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

 
 
                <section className="text-left-mobile bg-gray-100 team-top py-[50px] sm:py-[60px] md:py-[110px]">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
            {/* Section Tagline */}
            <span className="relative inline-block text-[18px] sm:text-[16px] xl:text-[20px] leading-[16px] text-fixnix-lightpurple font-bold uppercase z-[1]">
            {simpleContent?.title}
              <span className="absolute top-[6px] left-[-40px] sm:left-[-56px] w-[30px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              
            </span>

            {/* Section Title */}
            <h1 className="text-4xl sm:text-[26px] xl:text-[32px]">
             {simpleContent?.heading}
            </h1>

            {/* Section Text */}
            <div className="pt-[15px] sm:pt-[20px] text-gray-600 text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              <PortableText value={simpleContent?.description}/>
            </div>
            <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-darkpurple text-[20px] sm:text-[32px] md:text-[35px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
            {simpleContent?.note}
            </h2>

            {/* Subheading */}
        
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-10 my-40 ">

  
<section  className="relative block ">
  <div className="container mx-auto px-4">
    <div className="relative block ">
      <div className="flex items-center">
        <div className="w-full lg:w-8/12">
          <div className="relative block">
            <div className="text-left">
              <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                {complexContentData2?.title}
                {complexContentData2?.title ? (
                  <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                ) : null}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-2 leading-snug sm:leading-tight">
                {complexContentData2?.mainHeading}
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                {complexContentData2?.mainDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {Array.isArray(complexContentData2?.contentSections) && complexContentData2?.contentSections?.length > 0 &&
      complexContentData2?.contentSections.map((section, i) => (
        <div key={i} className="relative block py-[20px] pt-10">
          <div className="">
            <div className="flex flex-col md:flex-row bg-gray-100 p-0 pb-[52px] mb-[20px] relative z-10 rounded-3xl">
              <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                {complexContentData2?.label}
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


</div>
<section className="bg-fixnix-lightpurple py-7 pb-24 text-left-mobile">
  <div className="inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
  <div className="container">
    <div className="text-left">
      
      <p className="relative inline-block text-white text-[18px] font-bold uppercase">
        {purpleContent2?.title}
        <span className="absolute top-[10px] left-[-56px] translate-y-[-50%] w-[40px] h-[2px] bg-white"></span>
      </p>

      {purpleContent2?.content.map((section, i) => (
        <div key={i} className="mt-6">
          <h4 className="text-fixnix-white text-2xl font-semibold mb-2">
            {section.heading}
          </h4>

          <div className="text-[var(--fixnix-white)]">
            <PortableText value={section.description} />
          </div>

          <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[18px] sm:text-[20px] md:text-[22px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
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
