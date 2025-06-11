// "use client"
// import Banner from "@/components/sections/home3/Banner";
// import Layout from "../../components/layout/Layout";
// import Image from "next/image";
// import Link from "next/link";

// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// const VolunteerSlides = [
//   {
//     subTitle: "Serve, Inspire, Grow, Connect, Transform",
//     title: " Join Us in <br/>Preserving Sufi Wisdom",
//     text: "Become a part of our mission—volunteer your time and skills to help sustain <br/>Kashmiri Sufi traditions and spiritual education.",
//     buttonText: "Read More",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Give Your Time, Make a Difference",
//     title: " Empower Communities <br/>Through Meaningful Service",
//     text: " Join hands with us to support Sufi heritage, engage in cultural initiatives,<br/> and inspire seekers on the path of wisdom.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: " Lend a Hand, Uplift Spirits  ",
//     title: "Be a Part of <br/>Something Greater",
//     text: " Your volunteer work helps spread Sufi knowledge, preserve sacred traditions,<br/> and foster a community rooted in love and enlightenment.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Together We Create Lasting Impact",
//     title: "Volunteer and Serve <br/>with Purpose",
//     text: "Whether in research, events, or community engagement, your efforts<br/> help keep the wisdom of Sufism alive and accessible to all.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
//   {
//     subTitle: "Heartfelt Service, Spiritual Fulfillment, Growth",
//     title: "Offer Your Time,<br/> Share Your Light",
//     text: "Support our mission by volunteering—contribute your skills, spread awareness,<br/> and help nurture a thriving Sufi-inspired community.",
//     buttonText: "Join Now",
//     buttonLink: "/membership",
//   },
// ];

// const swiperOptions = {
//   modules: [Autoplay, Pagination, Navigation],
//   slidesPerView: 1,
//   spaceBetween: 30,
//   // autoplay: {
//   //     delay: 2500,
//   //     disableOnInteraction: false,
//   // },
//   loop: true,

//   // Navigation
//   navigation: {
//     nextEl: ".srn",
//     prevEl: ".srp",
//   },

//   // Pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// };

// export default function Home() {
//   return (
//     <>
//       <Layout headerStyle={2} footerStyle={1}>
//         {/*Book Service Start*/}
//        <Banner slides={VolunteerSlides}/>
//         <section className="relative block bg-[var(--fixnix-primary)] py-[120px] pb-[90px] z-[1]">
//           <div
//             className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-[1]"
//             style={{
//               backgroundImage:
//                 "url(assets/images/backgrounds/book-services-bg-img-1.jpg)",
//             }}
//           ></div>
//           <div className="container">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="relative">
//                 <div className="text-left">
//                   <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                     Why Volunteer With Us
//                     <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                   </span>
//                   <h2 className="text-3xl font-bold mt-3">
//                     A shared experience of collective devotion, love & service
//                   </h2>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                   {[
//                     {
//                       icon: "icon-calendar",
//                       title: "Engage with the Divine",
//                       text: "Aligning yourself with the profound purpose of serving the greater good.",
//                     },
//                     {
//                       icon: "icon-low-price",
//                       title: "Preserve Traditions",
//                       text: "You become a guardian of this sacred heritage, aiding in the preservation of the traditions.",
//                     },
//                     {
//                       icon: "icon-delivery-man",
//                       title: "Grow Spiritually",
//                       text: "You will not only contribute to the mission but also receive the blessings of wisdom.",
//                     },
//                     {
//                       icon: "icon-headphones",
//                       title: "A Sacred Community",
//                       text: "You join a family of seekers who are committed to the path of growth.",
//                     },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="relative bg-white shadow-lg p-6 rounded-[var(--fixnix-bdr-radius)] mb-6"
//                     >
//                       <div className="flex items-center justify-center w-12 h-12 bg-[var(--fixnix-lightpuple)] rounded">
//                         <span
//                           className={`text-white text-xl ${item.icon}`}
//                         ></span>
//                       </div>
//                       <h3 className="text-lg font-semibold mt-3 mb-2">
//                         {item.title}
//                       </h3>
//                       <p>{item.text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="relative ml-[35px]">
//                 <p className="mb-[62px]">
//                 At the Sufi Science Center - Kashmir Chapter, we believe that the path to enlightenment is not just one of personal transformation, but a shared experience of collective devotion, love, and service to the divine.
//                 </p>
//                 <div className="relative">
//                 <Image
//                   src="/assets/images/resources/Volunteer.png"
//                   alt="Volunteer"
//                   width={500}
//                   height={500}
//                   className="w-[500px] h-[500px] rounded-[var(--fixnix-bdr-radius)] object-cover"
//                 />
//               </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/*Book Service End*/}

//         <section className="relative block pb-20 mt-20 bg-white text-left-mobile ">
//           <div className="container mx-auto px-4">
//             <div className="text-left mb-12">
//               <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                 How You Can Serve
//                 <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                
//               </span>
//               <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
//                 Offer your time and talents to the Sufi Science Center
//               </h2>
//               <p className="text-gray-600 mt-3">
//                 As a volunteer with the Sufi Science Center, you step into a
//                 realm of sacred work, one that touches the very essence of
//                 spirituality, wisdom, and the rich cultural heritage of Kashmir.
//                 Through your service, you will support the preservation of
//                 ancient Sufi teachings, the revitalization of Kashmiri spiritual
//                 traditions, and the spreading of love, peace, and unity in the
//                 world.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 {
//                   icon: "icon-award",
//                   title: "Assist with Spiritual Programs",
//                   desc: "Help us organize and facilitate our Sufi gatherings, spiritual lectures, prayer ceremonies, and meditative workshops.",
//                 },
//                 {
//                   icon: "icon-customer-service",
//                   title: "Support Craft and Culture Preservation",
//                   desc: "Engage with our artisans and help in preserving Kashmiri crafts, such as wood carving, and sacred calligraphy.",
//                 },
//                 {
//                   icon: "icon-security",
//                   title: "Fundraising and Event Organization",
//                   desc: "Assist with organizing events, exhibitions, and fundraising efforts to sustain and grow our work in Kashmir and beyond.",
//                 },
//                 {
//                   icon: "icon-computer-1",
//                   title: "Outreach and Community Engagement",
//                   desc: "Help us expand our reach by connecting with local communities and sharing the teachings of Sufism.",
//                 },
//                 {
//                   icon: "icon-computer-1",
//                   title: "Help with Digital and Media",
//                   desc: "Help manage our website, social media, and content creation that spreads our message of divine love and wisdom.",
//                 },
//                 {
//                   icon: "icon-computer-1",
//                   title: "Create Sacred Art and Handicrafts",
//                   desc: "Join our efforts to create spiritual art, handcrafted objects, and sacred items that reflect the divine beauty of Kashmir’s culture. ",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center bg-white shadow-light-purple border border-transparent rounded-lg p-6 transition duration-500 hover:border-fixnix-lightpurple hover:-translate-y-2 hover:translate-x-2"
//                 >
//                   <div className="text-fixnix-lightpurple text-5xl">
//                     <span className={item.icon}></span>
//                   </div>
//                   <div className="ml-5">
//                     <div className="text-xl font-semibold text-fixnix-darkpurple hover:text-fixnix-lightpurple transition duration-500">
//                       <h2 className="text-fixnix-lightpurple">{item.title}</h2>
//                     </div>
//                     <p className="text-gray-600 mt-2">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/*Contact Two Start*/}
//         <section className="relative bg-[var(--fixnix-lightpuple)] py-24 text-left-mobile">
//           <div className="absolute inset-0 bg-no-repeat bg-center bg-cover mix-blend-multiply"></div>
//           <div className="container">
//             <div className="text-left mb-12">
//               <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
//                 How to Get Involved
//                 <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-white"></span>
                
//               </span>
//               <h2 className="text-[var(--fixnix-white)] text-3xl mt-2 font-bold">
//                 To volunteer, please reach out to us
//               </h2>
//               <p className="text-[var(--fixnix-white)] mt-2">
//                 Becoming a volunteer is simple. Whether you are in Kashmir or
//                 from a distant land, the Sufi Science Center welcomes all who
//                 feel the calling.
//                 <br />
//                 Let us know how you wish to contribute, and we will guide you on
//                 your journey of sacred service.
//               </p>
//             </div>
//             <div className="flex flex-wrap justify-left gap-10">
//               {[
//                 {
//                   icon: "fa-envelope",
//                   title: "Send us an email",
//                   text: "contact@sufisciencecenter.info",
                  
//                 },
//                 {
//                   icon: "fa-phone",
//                   title: "Give us a call",
//                   text: "+1 916 699 0091",
                  
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative flex items-center bg-white rounded-lg p-3 max-w-[370px] w-full transition-all"
//                 >
//                   <div className="flex items-center justify-center h-[55px] w-[55px] rounded-full bg-[var(--fixnix-lightpuple)] transition-all duration-500 hover:bg-[var(--fixnix-darkpurple)]">
//                     <span
//                       className={`fa ${item.icon} text-white text-2xl transform transition-all duration-500 scale-100 hover:scale-90`}
//                     ></span>
//                   </div>
//                   <div className="ml-4">
//                     <span className="block text-[20px] text-[var(--fixnix-darkpurple)] font-bold leading-6 mb-2">
//                       {item.title}
//                     </span>
//                     <p className="text-[18px] leading-[18px] text-[var(--fixnix-gray)] transition-all duration-500 hover:text-[var(--fixnix-lightpuple)]">
                      
                        
                    
//                         {item.text}
                     
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="text-left mb-12 mt-8">
//               <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-white font-semibold uppercase z-[1]">
//               A Journey of Love and Light
                
//               </span>
              
//               <p className="text-[var(--fixnix-white)] mt-2">
//                 To serve with us is to walk in the footsteps of the great Sufi saints who lived and breathed the path of love, truth, and devotion. In every moment of service, you become an instrument of the divine, a conduit of peace, and a reflection of the sacred love that unites all of humanity. Together, let us light the way for others to follow the path of peace, healing, and spiritual awakening.
//               </p>
//               <h2 className="text-[var(--fixnix-white)] text-3xl mt-2 font-bold">
//               We invite you to bring your light to our sacred mission.
//               </h2>
//             </div>
//           </div>
          

//         </section>

//         {/*Contact Two  End*/}

//         {/*Contact Page Two Start*/}
//         <section className=" text-left-mobile py-20 sm:py-24 md:py-28">
//   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex flex-col lg:flex-row lg:space-x-28">
//       {/* Left Side - Contact Form */}
//       <div className="w-full lg:w-1/2">
//         <div className="bg-fixnix-primary p-6 sm:p-8 lg:p-10 rounded-lg">
//           <form
//             action="assets/inc/sendemail.php"
//             className="contact-form-validated"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   name="Subject"
//                   className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Pick a date"
//                   name="date"
//                   id="datepicker"
//                   className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
//                 />
//               </div>
//               <div className="col-span-1 md:col-span-2">
//                 <select className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg">
//                   <option>Select Services</option>
//                   <option value="1">Assist with Spiritual Programs</option>
//                   <option value="2">Support Craft and Culture Preservation</option>
//                   <option value="3">Fundraising and Event Organization</option>
//                   <option value="4">Outreach and Community Engagement</option>
//                   <option value="5">Help with Digital and Media</option>
//                   <option value="6">Create Sacred Art and Handicrafts</option>
//                 </select>
//               </div>
//             </div>
//             <div className="mt-5">
//               <textarea
//                 name="message"
//                 placeholder="Comment"
//                 className="w-full h-52 bg-fixnix-white border rounded-md p-5 text-fixnix-gray text-base md:text-lg"
//               ></textarea>
//               <div>
//                 <Link
//                   href=""
//                   className="inline-block bg-fixnix-lightpurple px-8 py-3 my-4 rounded-lg text-white hover:bg-fixnix-darkpurple hover:text-white transition duration-300"
//                 >
//                   Send Message
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Contact Info */}
//       <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
//         <div>
//           <div className="text-left">
//             <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//               Begin Your Journey
//               <span className="absolute top-[10px] left-[-40px] sm:left-[-50px] w-[30px] sm:w-[35px] md:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-bold mt-3">Book A Service</h2>
//           </div>
//           <p className="text-lg sm:text-xl font-semibold text-fixnix-darkpurple my-4 sm:my-5">
//             Together, we create a sacred community united by the shared
//             vision of bringing light and love to the world.
//           </p>
//           <p className="border-y border-gray-300 py-5 sm:py-6 mb-5">
//             In the spirit of service, you will not only contribute to
//             the mission but also receive the blessings of wisdom,
//             guidance, and divine insight through your actions and
//             devotion.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//         {/*Contact Page Two End*/}
//       </Layout>
//     </>
//   );
// }
"use client"
import Banner from "@/components/sections/home3/Banner";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PortableTextComponents } from '@portabletext/react'

const componentsForpurpleContent: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className=" sm:mt-[16px] mt-[12px] mb-4  text-fixnix-white text-[30px] sm:text-[36px] md:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">{children}</h1>,
    h2: ({ children }) => <h2 className=" sm:mt-[14px] mt-[10px] mb-3  text-fixnix-white text-[24px] sm:text-[32px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className=" sm:mt-[12px] mt-[8px] mb-2  text-fixnix-white text-[20px] sm:text-[28px] md:text-[38px] leading-[32px] sm:leading-[40px] md:leading-[52px] font-semibold">{children}</h3>,
    h5: ({ children }) => <h3 className="text-lg text-fixnix-white font-semibold ">{children}</h3>,
    h6: ({ children }) => <h6 className=" sm:text-sm md:text-md font-semibold lg:text-md xl:text-md 2xl:text-lg italic mt-4 mb-6 leading-snug sm:leading-tight">{children}</h6>,
    normal: ({ children }) => <p className="text-base text-white mb-2">{children}</p>,
  },
}


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

export default function Home() {
  const [heroData, setHeroData] = useState<any[]>([])
  const [rightsideImageContent , setRightSideImageContent] = useState<any>()
  const [leftsideImageContent , setLeftSideImageContent] = useState<any>()
  const [purpleChart , setPurpleChart] = useState <any>()
  const [whiteChart , setWhiteChart] = useState <any>()
  const [leftsideImageContent2 , setLeftSideImageContent2] = useState<any>()
  const [purpleContent , setPurpleContent] = useState <any>()
  const [volunteerCont , setVolunteer] = useState<any[]>([])
  const [contactSection , setConSection] = useState<any>()


  const query = `
  *[_type == "page" && pageName == "Volunteer With Us"][0]{
    _id,
    pageName,
    "heroSection": contentSections[type == "heroSections"][0].heroSections,
    "volunteerContent" : contentSections[type == "volunteer"].volunteer,
    "leftSImageContent" :  contentSections[type == "goalSection"][0].goalSection,
    "purpleChart" : contentSections[type == "purpleChart"][0].purpleChart,
    "whiteChart" : contentSections[type == "whiteContentChart"][0].whiteContentChart,
    "leftSImageContent2" :  contentSections[type == "goalSection"][1].goalSection,
    "complexContent": contentSections[type == "complexContentBlock"].complexContentBlock,
    "purpleContent" : contentSections[type == "purpleContent"][0].purpleContent,
    "contactSection" : contentSections[type == "contactSection"][0].contactSection,
  }
`;

useEffect(() => {
  

  client.fetch(query)
    .then((data) => {setHeroData(data.heroSection);
                    setVolunteer(data.volunteerContent)
                    setLeftSideImageContent(data.leftSImageContent);
                    setPurpleChart(data.purpleChart)
                    setWhiteChart(data.whiteChart)
                    setLeftSideImageContent2(data.leftSImageContent2);
                    setConSection(data.contactSection)
                    setPurpleContent(data.purpleContent)
                  }
    )
    .catch((err) => console.error('Sanity Fetch Error:', err))
    
}, [])
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        {/*Book Service Start*/}
       <Banner slides={heroData}/>
       {volunteerCont?.map((item : any, idx : number)=>{
        return (
          <section key={idx} className="relative block bg-[var(--fixnix-primary)] py-[120px] pb-[90px] z-[1]">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover -z-[1]"
            style={{
              backgroundImage: `url(${urlFor(item.bgImage).url()})`
            }}
          ></div>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <div className="text-left">
                  <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    {item.title}
                    <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                  </span>
                  <h2 className="text-3xl font-bold mt-3">
                    {item.heading}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {item.boxContent.map((item : any, index : number) => (
                    <div
                      key={index}
                      className="relative bg-white shadow-lg p-6 rounded-[var(--fixnix-bdr-radius)] mb-6"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-[var(--fixnix-lightpuple)] rounded">
                        <span
                          className="text-white text-xl icon-calendar"
                        ></span>
                      </div>
                      <h3 className="text-lg font-semibold mt-3 mb-2">
                        {item.heading}
                      </h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative ml-[35px]">
                < div className="mb-[62px]">
                  <PortableText value={item.description} />
                </ div>
                <div className="relative">
                <Image
                  src={urlFor(item.image).url()}
                  alt="Volunteer"
                  width={500}
                  height={500}
                  className="w-[500px] h-[500px] rounded-[var(--fixnix-bdr-radius)] object-cover"
                />
              </div>
              </div>
            </div>
          </div>
        </section>
        )
       })}

        

        {/*Book Service End*/}
        <section className="relative block pb-20 mt-20 bg-white text-left-mobile ">
          <div className="container mx-auto px-4">
            <div className="text-left mb-12">
              <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                {whiteChart?.title}
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                
              </span>
              <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
              {whiteChart?.heading}
              </h2>
              <p className="text-gray-600 mt-3">
              {whiteChart?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whiteChart?.subChart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white shadow-light-purple border border-transparent rounded-lg p-6 transition duration-500 hover:border-fixnix-lightpurple hover:-translate-y-2 hover:translate-x-2"
                >
                  <div className="text-fixnix-lightpurple text-5xl">
                    <span className='icon-award'></span>
                  </div>
                  <div className="ml-5">
                    <div className="text-xl font-semibold text-fixnix-darkpurple hover:text-fixnix-lightpurple transition duration-500">
                      <h2 className="text-fixnix-lightpurple">{item.subHeading}</h2>
                    </div>
                    <p className="text-gray-600 mt-2">{item.subDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


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
          <h4 className="text-[var(--fixnix-white)] text-3xl my-2 font-bold">
            {section.heading}
          </h4>

          <div className="text-[var(--fixnix-white)]">
            <PortableText value={section.description} components={componentsForpurpleContent} />
          </div>
          {section.buttonField && (
            <div className="flex flex-wrap justify-left gap-10">
            {[
              {
                icon: "fa-envelope",
                title: section.buttonField[0]?.buttonName,
                text: section.buttonField[0]?.buttonUrl,
                
              },
              {
                icon: "fa-phone",
                title: section.buttonField[1]?.buttonName,
                text: section.buttonField[1]?.buttonUrl,
                
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-center bg-white rounded-lg p-3 max-w-[370px] w-full transition-all"
              >
                <div className="flex items-center justify-center h-[55px] w-[55px] rounded-full bg-[var(--fixnix-lightpuple)] transition-all duration-500 hover:bg-[var(--fixnix-darkpurple)]">
                  <span
                    className={`fa ${item.icon} text-white text-2xl transform transition-all duration-500 scale-100 hover:scale-90`}
                  ></span>
                </div>
                <div className="ml-4">
                  <span className="block text-[20px] text-[var(--fixnix-darkpurple)] font-bold leading-6 mb-2">
                    {item.title}
                  </span>
                  <p className="text-[18px] leading-[18px] text-[var(--fixnix-gray)] transition-all duration-500 hover:text-[var(--fixnix-lightpuple)]">
                    
                      
                  
                      {item.text}
                   
                  </p>
                </div>
              </div>
            ))}
          </div>
          )}

          <h2 className="text-[var(--fixnix-white)] text-3xl mt-2 font-bold">
            {section.bottomHeading}
          </h2>
        </div>
      ))}
    </div>
  </div>
</section>

        {/*Contact Two Start*/}
        

        {/*Contact Two  End*/}

        {/*Contact Page Two Start*/}
        <section className=" text-left-mobile py-20 sm:py-24 md:py-28">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row lg:space-x-28">
      {/* Left Side - Contact Form */}
      <div className="w-full lg:w-1/2">
        <div className="bg-fixnix-primary p-6 sm:p-8 lg:p-10 rounded-lg">
          <form
            action="assets/inc/sendemail.php"
            className="contact-form-validated"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Pick a date"
                  name="date"
                  id="datepicker"
                  className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <select className="w-full h-14 bg-fixnix-white border rounded-md px-5 text-fixnix-gray text-base md:text-lg">
                  <option>Select Services</option>
                  <option value="1">Assist with Spiritual Programs</option>
                  <option value="2">Support Craft and Culture Preservation</option>
                  <option value="3">Fundraising and Event Organization</option>
                  <option value="4">Outreach and Community Engagement</option>
                  <option value="5">Help with Digital and Media</option>
                  <option value="6">Create Sacred Art and Handicrafts</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <textarea
                name="message"
                placeholder="Comment"
                className="w-full h-52 bg-fixnix-white border rounded-md p-5 text-fixnix-gray text-base md:text-lg"
              ></textarea>
              <div>
                <Link
                  href=""
                  className="inline-block bg-fixnix-lightpurple px-8 py-3 my-4 rounded-lg text-white hover:bg-fixnix-darkpurple hover:text-white transition duration-300"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Contact Info */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <div>
          <div className="text-left">
            <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
              {contactSection?.title}
              <span className="absolute top-[10px] left-[-40px] sm:left-[-50px] w-[30px] sm:w-[35px] md:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3">{contactSection?.heading}</h2>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-fixnix-darkpurple my-4 sm:my-5">
            {contactSection?.subHeading}
          </p>
          <div className="border-y border-gray-300 py-5 sm:py-6 mb-5">
            <PortableText value={contactSection?.note}/>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/*Contact Page Two End*/}
      </Layout>
    </>
  );
}
