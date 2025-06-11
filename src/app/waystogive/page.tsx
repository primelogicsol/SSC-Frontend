// "use client";
// import ModalVideo from "react-modal-video";
// import Layout from "@/components/layout/Layout";
// import Link from "next/link";
// import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import Banner from "@/components/sections/home3/Banner";
// import { useState } from "react";
// const WaysSlides = [
//   {
//     subTitle: "Give with Purpose, Transform Lives",
//     title: " Support Sufi Knowledge<br/> & Spiritual Growth",
//     text: "Your generosity helps preserve Kashmiri Sufi traditions, fund research,<br/> and provide spiritual education to seekers worldwide.",
//     buttonText: "Read More",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Empower, Uplift, Sustain, Preserve, Share",
//     title: " Make an Impact with<br/> Your Contribution",
//     text: " Support our mission by donating, sponsoring projects, or contributing resources<br/> to keep the wisdom of Sufism alive for future generations.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: " Give from the Heart, Inspire Change  ",
//     title: "Your Support Fuels<br/> Spiritual Education",
//     text: " Join hands in preserving Sufi wisdom by supporting initiatives that <br/>spread knowledge, foster community, and sustain sacred teachings.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Sustaining Wisdom, One Gift at a Time",
//     title: "Donate to Keep Sufi<br/> Teachings Alive",
//     text: "Every contribution strengthens our work in research, learning, and community<br/> engagement—helping souls connect with timeless Sufi wisdom.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Preserve, Educate, Inspire, Give, Grow",
//     title: "Support Sufi Science for<br/> Future Generations",
//     text: "Be part of a movement that nurtures spiritual enlightenment, preserves traditions, <br/>and fosters a community of seekers and scholars.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
// ];


// export default function Home() {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <Layout headerStyle={2} footerStyle={1}>
//        <Banner slides={WaysSlides}/>


//        <section className="relative block py-20 md:py-28 lg:py-32 overflow-hidden z-10">
//   <div
//     className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10 animate-float-bob-y"
//     style={{
//       backgroundImage: "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
//     }}
//   ></div>

//   <div className="container mx-auto px-4 ">
//     <div className="flex flex-wrap -mx-4 items-center">
      
//       {/* Left Image and Rumi Quote */}
//       <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
//         <div className="relative block">
//           <div
//             className="relative overflow-hidden rounded-lg z-10 group wow animate-slideInLeft"
//             data-wow-delay="100ms"
//             data-wow-duration="2500ms"
//           >
//             <Image
//               src="/images/resources/about-1-1.jpg"
//               alt="About Image"
//               width={600}
//               height={600}
//               className="w-full h-auto max-h-[600px] object-cover rounded-lg transition-all duration-500 delay-100 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 right-0 md:right-[168px] bg-[color:var(--fixnix-lightpuple)] p-6 sm:p-8 md:p-12 rounded-bl-lg rounded-tr-lg z-[3]">
//               <p className="text-base md:text-lg font-semibold text-white pb-2 uppercase">
//                 Words of Rumi:
//               </p>
//               <h3 className="text-xl md:text-3xl font-semibold text-white leading-snug md:leading-10">
//                 "When you let go of what you are, you become what you might be."
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>

      
//       <div className="w-full lg:w-1/2 px-4">
//         <div className="relative block  ">
//           <div className="pl-12"><span className="relative inline-block text-[16px] sm:text-[18px] leading-5 text-fixnix-lightpurple font-semibold uppercase z-[1] mb-4">
//             Ways to Give
//             <span className="absolute top-[6px] left-[-48px] sm:left-[-56px] w-[32px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
//           </span></div>
          

//           <ul className="relative block mt-8 sm:mt-11 mb-8 sm:mb-11 list-none">
//             {[
//               { title: "Donate to SSC", text: "Empower knowledge, nurture spiritual wisdom.", icon: "icon-repair" },
//               { title: "Sponsor a Sufi Scholar", text: "Support learning, illuminate future paths", icon: "icon-phone" },
//               { title: "Preserve Sacred Sufi Art", text: "Safeguard heritage, sustain artistic traditions.", icon: "icon-repair" },
//               { title: "Sponsor Sacred Sufi Events", text: "Celebrate spirituality, foster divine connections.", icon: "icon-repair" },
//             ].map((item, index) => (
//               <li key={index} className="relative block bg-white shadow-lg rounded-l-full z-10 mb-4 group overflow-hidden">
//                 <div className="flex items-center p-4 sm:p-6 rounded-l-full transition-all duration-500 group-hover:bg-[color:var(--fixnix-lightpuple)]">
//                   <div className="flex items-center justify-center w-12 h-12 sm:w-15 sm:h-15 bg-[color:var(--fixnix-lightpuple)] rounded-full text-2xl sm:text-3xl text-white transition-all duration-500 group-hover:bg-white group-hover:text-[color:var(--fixnix-lightpuple)] group-hover:scale-90">
//                     <span className={item.icon}></span>
//                   </div>
//                   <div className="ml-4 sm:ml-6">
//                     <h3 className="text-lg sm:text-2xl font-semibold leading-tight text-[color:var(--fixnix-darkpurple)] group-hover:text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm sm:text-lg text-gray-500 pt-1 sm:pt-2 group-hover:text-white">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>

      
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-6 flex flex-wrap items-center">
//           {/* Left Section */}
//           <div className="w-full lg:w-1/2 px-4">
//             <div className="relative flex flex-col space-y-6">
//               <Link href="/donationform" className="relative">
//                 <img
//                   src="/assets/images/resources/Donate.png"
//                   alt="image"
//                   className="w-[500px] rounded-lg shadow-lg"
//                 />
                
//               </Link>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
//             <div className="mb-6">
//               <span className="relative inline-block  font-bold sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple  uppercase z-[1]">
//               Donate to SSC
//                 <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//               </span>
//               <h2 className="text-3xl font-bold mt-2">
//               Empower knowledge, nurture spiritual wisdom, and support the advancement of Sufi scholarship and research.
//               </h2>
//             </div>
//             <p className="text-lg text-gray-700 mb-6">
//             Your contribution enables the Sufi Science Center to sustain its mission of fostering intellectual and spiritual growth. By donating, you help fund research, educational initiatives, and outreach programs dedicated to preserving and expanding the rich legacy of Sufi knowledge.
//             </p>
//             <ul className="space-y-4 mb-6">
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Support research on Sufi philosophy.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Expand outreach for spiritual education.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase ">
//                 Preserve and promote sacred wisdom.
//                 </p>
//               </li>
//             </ul>
//             <p className="text-lg text-gray-700 mb-6">
//             Your generosity fuels a movement that blends knowledge and spirituality, ensuring that the teachings of Sufism continue to inspire and guide seekers worldwide.
//             </p>
//           </div>
//         </div>

       
//       </section>
      
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-6 flex flex-wrap items-center">
//           {/* Left Section */}
//           <div className="w-full lg:w-1/2 px-4">
//             <div className="relative flex flex-col space-y-6">
//               <Link href="/donationform" className="relative">
//                 <img 
//                   src="/assets/images/resources/Donate.png"
//                   alt="image"
//                   className="w-[500px] rounded-lg shadow-lg"
//                 />
                
//               </Link>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
//             <div className="mb-6">
//               <span className="relative inline-block text-sm sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple font-bold uppercase z-[1]">
//               Sponsor a Sufi Scholar
//                 <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//               </span>
//               <h2 className="text-3xl font-bold mt-2">
//               Support learning, illuminate paths, and empower future scholars.
//               </h2>
//             </div>
//             <p className="text-lg text-gray-700 mb-6">
//             By sponsoring a Sufi scholar or student, you provide crucial financial assistance for academic pursuits, research, and training in mystical traditions. Your support ensures the continuity of sacred wisdom and empowers future thought leaders in Sufi philosophy.
//             </p>
//             <ul className="space-y-4 mb-6">
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Provide financial aid for scholars.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Ensure sacred wisdom is preserved.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase ">
//                 Empower future leaders in spirituality.
//                 </p>
//               </li>
//             </ul>
//             <p className="text-lg text-gray-700 mb-6">
//             Your sponsorship nurtures the next generation of Sufi scholars, preserving and expanding sacred teachings.
//             </p>
//           </div>
//         </div>

        
//       </section>
    
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-6 flex flex-wrap items-center">
//           {/* Left Section */}
//           <div className="w-full lg:w-1/2 px-4">
//             <div className="relative flex flex-col space-y-6">
//               <Link href="/donationform" className="relative">
//                 <img
//                   src="/assets/images/resources/Donate.png"
//                   alt="image"
//                   className="w-[500px] rounded-lg shadow-lg"
//                 />
                
//               </Link>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
//             <div className="mb-6">
//               <span className="relative inline-block text-sm sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple font-bold uppercase z-[1]">
//               Preserve Sacred Sufi Art
//                 <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//               </span>
//               <h2 className="text-3xl font-bold mt-2">
//               Safeguard heritage, sustain traditions, protect sacred craftsmanship.
//               </h2>
//             </div>
//             <p className="text-lg text-gray-700 mb-6">
//             Your contribution plays a pivotal role in preserving centuries-old Sufi artistic expressions, including calligraphy, architecture, and handcrafted artifacts. By supporting this initiative, you help artisans sustain their craft while ensuring that sacred art continues to inspire future generations.
//             </p>
//             <ul className="space-y-4 mb-6">
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Support artisans preserving traditional crafts.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Ensure sacred art remains valued.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase ">
//                 Promote appreciation of cultural heritage.
//                 </p>
//               </li>
//             </ul>
//             <p className="text-lg text-gray-700 mb-6">
//             Your support protects the timeless beauty of sacred art, ensuring its legacy remains intact.
//             </p>
//           </div>
//         </div>

        
//       </section>
     
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-6 flex flex-wrap items-center">
//           {/* Left Section */}
//           <div className="w-full lg:w-1/2 px-4">
//             <div className="relative flex flex-col space-y-6">
//               <Link href="/donationform" className="relative">
//                 <img
//                   src="/assets/images/resources/Donate.png"
//                   alt="image"
//                   className="w-[500px] rounded-lg shadow-lg"
//                 />
                
//               </Link>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
//             <div className="mb-6">
//               <span className="relative inline-block text-sm sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple font-bold uppercase z-[1]">
//               Sponsor Sacred Events
//                 <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//               </span>
//               <h2 className="text-3xl font-bold mt-2">
//               Celebrate spirituality, foster unity, support sacred gatherings.
//               </h2>
//             </div>
//             <p className="text-lg text-gray-700 mb-6">
//             By sponsoring sacred events, you enable the organization of spiritual retreats, lectures, and cultural ceremonies that promote unity, contemplation, and personal growth. Your support helps facilitate meaningful engagements that strengthen the Sufi community and beyond.
//             </p>
//             <ul className="space-y-4 mb-6">
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Enable gatherings for spiritual connection.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase">
//                 Support events promoting inner peace.
//                 </p>
//               </li>
//               <li className="flex items-center">
//                 <span className="text-red-600 text-xl mr-4">✔</span>
//                 <p className="text-lg font-semibold uppercase ">
//                 Encourage transformative sacred experiences.
//                 </p>
//               </li>
//             </ul>
//             <p className="text-lg text-gray-700 mb-6">
//             Your support for sacred events strengthens spiritual connections, fostering enlightenment and communal harmony.
//             </p>
//           </div>
//         </div>

       
//       </section>
//       {/* Product End */}
//       {/*Contact Two Start*/}
//       <section className="relative bg-fixnix-lightpurple py-24 text-left-mobile">
//         <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
//         <div className="container">
//           <div className="text-left mb-12">
//             <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
//               How to Get Involved
//               <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
              
//             </span>
//             <h2 className="text-[var(--fixnix-white)] text-3xl mt-2 font-bold">
//               To contribute, please reach out to us
//             </h2>
//             <p className="text-[var(--fixnix-white)] mt-2">
//               Your generosity ensures that this sacred mission continues,
//               touching lives and spreading light across the world.
//               <br />
//               Let us know how you wish to contribute, and we will guide you on
//               your journey of sacred service.
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-left gap-8">
//             <Link href="/donationform" className="thm-btn main-slider-two__btn">
//               {" "}
//               Donate Now{" "}
//             </Link>
//           </div>
//         </div>
//         <section className="text-left-mobile team-top py-[40px] sm:py-[60px] md:py-[80px]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-left relative block mt-[-6px] mb-[40px] sm:mb-[49px] z-[1]">
//             {/* Section Tagline */}
//             <span className="relative inline-block text-[14px] sm:text-[16px] leading-[16px] text-fixnix-white font-semibold uppercase z-[1]">
//               Become a Divine Partner
              
//             </span>

//             {/* Section Title */}
//             <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">
//               Together, we walk the path of spiritual awakening, sharing the
//               light of wisdom, compassion, and peace.
//             </h2>

//             {/* Section Text */}
//             <p className="pt-[15px] sm:pt-[20px] text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
//               We see each one of you as a partner on this sacred journey.
//               Whether you offer through your time, resources, or prayers, your
//               contribution is an offering to the Divine that flows through all
//               things.May your giving be a reflection of the Divine generosity
//               that fills your heart, and may you be blessed with the peace that
//               comes from knowing your support is nurturing the sacred traditions
//               of Kashmir, keeping them alive for generations.
//             </p>

//             {/* Subheading */}
//             <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[40px] font-semibold">
//               We invite you to bring your light to our sacred mission.
//             </h2>
//           </div>
//         </div>
//       </section>
//       </section>
      
//     </Layout>
//   );
// }
"use client";
import ModalVideo from "react-modal-video";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "@/components/sections/home3/Banner";
import { useState , useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { ComplexContentBlock } from "../heritage&identity/page";
import { PortableTextComponents } from '@portabletext/react'

const componentsForpurpleContent: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className=" sm:mt-[16px] mt-[12px] mb-4  text-fixnix-white text-[30px] sm:text-[36px] md:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">{children}</h1>,
    h2: ({ children }) => <h2 className=" sm:mt-[14px] mt-[10px] mb-3  text-fixnix-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className=" sm:mt-[12px] mt-[8px] mb-2  text-fixnix-white text-[20px] sm:text-[28px] md:text-[38px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">{children}</h3>,
    h5: ({ children }) => <h3 className="text-lg  ">{children}</h3>,
    h6: ({ children }) => <h6 className=" sm:text-sm md:text-md font-semibold lg:text-md xl:text-md 2xl:text-lg italic mt-4 mb-6 leading-snug sm:leading-tight">{children}</h6>,
    normal: ({ children }) => <p className="text-base text-white mb-2">{children}</p>,
  },
}

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [heroData, setHeroData] = useState<any[]>([])
  const [rightsideImageContent , setRightSideImageContent] = useState<any>()
  const [leftsideImageContent , setLeftSideImageContent] = useState<any>()
  const [purpleChart , setPurpleChart] = useState <any>()
  const [whiteChart , setWhiteChart] = useState <any>()
  const [leftsideImageContent2 , setLeftSideImageContent2] = useState<any>()
  const [complexContentData , setComplexContentData] = useState<ComplexContentBlock[]>([]);
  const [purpleContent , setPurpleContent] = useState <any>()
  const [donationSections , setDonationSections] = useState <any[]>([])

  const query = `
  *[_type == "page" && pageName == "Ways to Give"][0]{
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
    "donateSections" : contentSections[type == "donateSection"].donateSection,
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
                    setDonationSections(data.donateSections)
                  }
    )
    .catch((err) => console.error('Sanity Fetch Error:', err))
    
}, [])
  return (
    <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={heroData}/>
       <section className="relative block py-16 md:py-24 lg:py-30 overflow-hidden z-10">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10 animate-float-bob-y"
          style={{ background : leftsideImageContent?.bgImage?.asset ? `url(${urlFor(leftsideImageContent?.bgImage).url()})` : '',
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
                  {leftsideImageContent?.image?.asset && (
                     <Image
                     src={urlFor(leftsideImageContent?.image).url()}
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
  const rawText = leftsideImageContent?.imageText || '';
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
                {leftsideImageContent?.intro}
            <span className="absolute top-[6px] left-[-50px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            
          </span>
                  <h2 className="font-bold mt-2 sm:mt-3 text-2xl sm:text-3xl text-fixnix-darkpurple">
                  {leftsideImageContent?.heading}
                  </h2>
                  <h2 className="font-semibold text-xl sm:text-2xl text-fixnix-darkpurple">
                  {leftsideImageContent?.subheading}
                  </h2>
                </div>
                <div className="mb-8 sm:mb-10 md:mb-8 text-sm sm:text-base md:text-lg">
                <PortableText value={leftsideImageContent?.description}/>
                </div>
                <h2 className="text-xl sm:text-xl md:text-xl font-semibold mt-3 -mb-6  leading-snug sm:leading-tight">
                    {leftsideImageContent?.pointsHeading}
                    </h2>
                {/* Feature Points */}
                <ul className="list-none space-y-2 sm:space-y-4 md:space-y-5">
                  {/* Point 1 */}
                  {leftsideImageContent?.points && leftsideImageContent?.points.length > 0 ? (
  leftsideImageContent?.points.map((point: any, idx: number) => (
    <li key={idx} className="relative block bg-white shadow-lg rounded-l-full z-10 mb-4 group overflow-hidden">
                <div className="flex items-center p-4 sm:p-6 rounded-l-full transition-all duration-500 group-hover:bg-[color:var(--fixnix-lightpuple)]">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-15 sm:h-15 bg-[color:var(--fixnix-lightpuple)] rounded-full text-2xl sm:text-3xl text-white transition-all duration-500 group-hover:bg-white group-hover:text-[color:var(--fixnix-lightpuple)] group-hover:scale-90">
                    <span className="icon-repair"></span>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg sm:text-2xl font-semibold leading-tight text-[color:var(--fixnix-darkpurple)] group-hover:text-white">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-lg text-gray-500 pt-1 sm:pt-2 group-hover:text-white">
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

       {/* <section className="relative block py-20 md:py-28 lg:py-32 overflow-hidden z-10">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-10 animate-float-bob-y"
    style={{
      backgroundImage: "url(assets/images/backgrounds/about-one-bg-img-1.jpg)",
    }}
  ></div>

  <div className="container mx-auto px-4 ">
    <div className="flex flex-wrap -mx-4 items-center">
      
      
      <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
        <div className="relative block">
          <div
            className="relative overflow-hidden rounded-lg z-10 group wow animate-slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <Image
              src="/images/resources/about-1-1.jpg"
              alt="About Image"
              width={600}
              height={600}
              className="w-full h-auto max-h-[600px] object-cover rounded-lg transition-all duration-500 delay-100 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 md:right-[168px] bg-[color:var(--fixnix-lightpuple)] p-6 sm:p-8 md:p-12 rounded-bl-lg rounded-tr-lg z-[3]">
              <p className="text-base md:text-lg font-semibold text-white pb-2 uppercase">
                Words of Rumi:
              </p>
              <h3 className="text-xl md:text-3xl font-semibold text-white leading-snug md:leading-10">
                "When you let go of what you are, you become what you might be."
              </h3>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 px-4">
        <div className="relative block  ">
          <div className="pl-12"><span className="relative inline-block text-[16px] sm:text-[18px] leading-5 text-fixnix-lightpurple font-semibold uppercase z-[1] mb-4">
            Ways to Give
            <span className="absolute top-[6px] left-[-48px] sm:left-[-56px] w-[32px] sm:w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span></div>
          

          <ul className="relative block mt-8 sm:mt-11 mb-8 sm:mb-11 list-none">
            {[
              { title: "Donate to SSC", text: "Empower knowledge, nurture spiritual wisdom.", icon: "icon-repair" },
              { title: "Sponsor a Sufi Scholar", text: "Support learning, illuminate future paths", icon: "icon-phone" },
              { title: "Preserve Sacred Sufi Art", text: "Safeguard heritage, sustain artistic traditions.", icon: "icon-repair" },
              { title: "Sponsor Sacred Sufi Events", text: "Celebrate spirituality, foster divine connections.", icon: "icon-repair" },
            ].map((item, index) => (
              <li key={index} className="relative block bg-white shadow-lg rounded-l-full z-10 mb-4 group overflow-hidden">
                <div className="flex items-center p-4 sm:p-6 rounded-l-full transition-all duration-500 group-hover:bg-[color:var(--fixnix-lightpuple)]">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-15 sm:h-15 bg-[color:var(--fixnix-lightpuple)] rounded-full text-2xl sm:text-3xl text-white transition-all duration-500 group-hover:bg-white group-hover:text-[color:var(--fixnix-lightpuple)] group-hover:scale-90">
                    <span className={item.icon}></span>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg sm:text-2xl font-semibold leading-tight text-[color:var(--fixnix-darkpurple)] group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-lg text-gray-500 pt-1 sm:pt-2 group-hover:text-white">
                      {item.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </div>
</section> */}

     {donationSections.map((item : any, idx : number)=>{
      return(
        <section key={idx} className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative flex flex-col space-y-6">
              <Link href="/donationform" className="relative">
                <Image
                  src={urlFor(item.image).url()}
                  alt=""
                  height={500}
                  width={400}
                  className="w-[500px] rounded-lg shadow-lg"
                />
                
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            <div className="mb-6">
              <span className="relative inline-block  font-bold sm:text-base md:text-lg 2xl:text-xl text-fixnix-lightpurple  uppercase z-[1]">
              {item.intro}
                <span className="absolute mr-3 top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
              <h2 className="text-3xl font-bold mt-2">
              {item.heading}
              </h2>
            </div>
            <div className="text-lg text-gray-700 mb-6">
              <PortableText value={item.description} />
            </div>
            <ul className="space-y-4 mb-6">
              {item.points.map((p : any , pId : number) =>{
                return(
                  <li className="flex items-center">
                  <span className="text-red-600 text-xl mr-4">✔</span>
                  <p className="text-lg font-semibold uppercase">
                  {p.title}
                  </p>
                </li>
                )
              })}
              
              
            </ul>
            <p className="text-lg text-gray-700 mb-6">
              {item.note}
            </p>
          </div>
        </div>

       
      </section>
      )
     })}
      
      
      
    
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
          <h4 className="text-[var(--fixnix-white)] text-3xl mt-2 font-bold">
            {section.heading}
          </h4>
          {}
          <div className="text-white">
            <PortableText value={section.description} components={componentsForpurpleContent} />
          </div>
           
          {section.buttonField && (
            <div className="flex flex-wrap justify-left gap-8">
            <Link href={section.buttonField[0].buttonUrl} className="thm-btn main-slider-two__btn">
              {" "}
              {section.buttonField[0].buttonName}
            </Link>
          </div>
          )}

          <h2 className="mt-[10px] sm:mt-[14px] text-fixnix-white text-[16px] sm:text-[18px] md:text-[20px] leading-[25px] sm:leading-[25px] 2xl:leading-[20px] font-semibold">
            {section.bottomHeading}
          </h2>
        </div>
      ))}
    </div>
  </div>
</section>
     
      
      {/* Product End */}
      {/*Contact Two Start*/}
      
      
    </Layout>
  );
}

