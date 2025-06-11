// "use client";
// import Layout from "@/components/layout/Layout";
// import Link from "next/link";
// import React, {  FormEvent } from 'react';
// import { Loader } from 'lucide-react';
// import Image from "next/image";
// import Banner from "@/components/sections/home3/Banner";
// import { SetStateAction, useState } from "react";

// export default function Home() {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const handleOnClick = (index: SetStateAction<number>) => {
//     setActiveIndex(index);
//   };
//   const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       institution: '',
//       abstract: '',
//       presentationType: '',
//       topic: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState<Record<string, string>>({});
  
//     // Handle form input changes
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//       const { name, value } = e.target;
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
      
//       // Clear error when field is changed
//       if (errors[name]) {
//         setErrors(prev => ({
//           ...prev,
//           [name]: ''
//         }));
//       }
//     };
  
//     // Handle form submission
//     const handleSubmit = (e: FormEvent) => {
//       e.preventDefault();
      
//       // Validate form
//       const newErrors: Record<string, string> = {};
      
//       if (!formData.name.trim()) {
//         newErrors.name = 'Name is required';
//       }
      
//       if (!formData.email.trim()) {
//         newErrors.email = 'Email is required';
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = 'Email is invalid';
//       }
      
//       if (!formData.abstract.trim()) {
//         newErrors.abstract = 'Abstract is required';
//       }
      
//       if (!formData.presentationType) {
//         newErrors.presentationType = 'Presentation type is required';
//       }
      
//       if (!formData.topic) {
//         newErrors.topic = 'Topic is required';
//       }
      
//       setErrors(newErrors);
      
//       // If no errors, submit form
//       if (Object.keys(newErrors).length === 0) {
//         setIsSubmitting(true);
        
//         // Simulate API call
//         setTimeout(() => {
//           console.log('Form submitted:', formData);
//           setIsSubmitting(false);
//           // Reset form or show success message
//         }, 2000);
//       }
//     };
  
//   const CommunitySlides = [
//     {
//       subTitle: "Connect, Engage, Celebrate, Learn, Grow",
//       title: "Experience the Power of<br/> Sufi Community",
//       text: " Join a vibrant community of seekers, scholars, and spiritual guides<br/> through enriching events, shared wisdom, and collective growth.",
//       buttonText: "Read More",
//       buttonLink: "/membership",
//     },
//     {
//       subTitle: "Gather, Reflect, Celebrate, Inspire, Transform",
//       title: "Building Connections Through<br/> Sufi Gatherings",
//       text: "Engage in meaningful discussions, cultural events, and spiritual retreats that <br/>unite hearts and minds in the spirit of Kashmiri Sufism.",
//       buttonText: "Join Now",
//       buttonLink: "/membership",
//     },
//     {
//       subTitle: "Unite in Spirit, Learn Together",
//       title: "Join Events That <br/>Enrich & Inspire",
//       text: "Explore Sufi traditions through festivals, workshops, and gatherings that celebrate <br/>wisdom, culture, and the journey of self-discovery.",
//       buttonText: "Join Now",
//       buttonLink: "/membership",
//     },
//     {
//       subTitle: "Together in Faith, Growth, & Learning",
//       title: "Discover, Share, & Celebrate,<br/> Spiritual Wisdom",
//       text: " Be part of a thriving Sufi community where events, discussions, and<br/> experiences foster harmony, enlightenment, and personal transformation.",
//       buttonText: "Join Now",
//       buttonLink: "/membership",
//     },
//     {
//       subTitle: "Celebrate Spirituality, Embrace Community, Engage",
//       title: "A Gathering of <br/>Seekers & Thinkers",
//       text: " Connect with like-minded individuals in immersive events that honor Kashmiri Sufi<br/> heritage, inspire dialogue, and strengthen spiritual bonds.",
//       buttonText: "Join Now",
//       buttonLink: "/membership",
//     },
//   ];
//   return (
//     <>
//       <Layout headerStyle={2} footerStyle={1}>
//        <Banner slides={CommunitySlides}/>
//         {/*Core Services Start*/}
//         <section className="relative block py-[120px] -pb-[40px]">
//           <div className="container mx-auto px-4">
//             <div className="relative block mb-[52px]">
//               <div className="flex items-center">
//                 <div className="w-full lg:w-8/12">
//                   <div className="relative block">
//                     <div className="text-left">
//                       <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
//                       Call for Papers
//                         <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
//                       </span>
//                       <h2 className="text-2xl uppercase sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-snug sm:leading-tight">
//                       Sufi Science Center Symposium 2025
//                       </h2>
//                       <p className="text-base sm:text-lg text-gray-700">
                      
//                       The Sufi Science Symposium 2025 invites researchers, scholars, and practitioners to submit papers for presentation at this groundbreaking event. This symposium aims to foster dialogue on the convergence of Sufism, scientific inquiry, and technological advancements, exploring how spiritual wisdom can inform modern knowledge systems.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative  block pt-[60px]   ">
              
//               <div className="mb-[52px] ">
             
//                 <div className="flex flex-col md:flex-row bg-gray-100  p-0 pb-[52px] mb-[110px] relative z-10 rounded-3xl">
//                 <div className="absolute top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
//                 Sufi Science Center Symposium
//                 </div>
//                   <div className=" pt-[123px] px-10 relative ">
//                     <div className="mb-[24px] ">
//                     <h4 className="text-[30px] font-semibold leading-[40px]  mb-[1px]">
//                     Symposium 2025 - Themes and Topics
//                       </h4>
                      
//                       <p>
//                       We welcome original research, case studies, and theoretical explorations on topics including, but not limited to:
//                       </p>
//                     </div>
//                     <ul className="space-y-[17px] pb-[17px]">
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           Spiritual Science & Metaphysics
//                           </h5>
//                           <p>
//                           •	Sufi perspectives on consciousness and the nature of reality<br/>
//                           •	Mystical traditions and their influence on scientific thought<br/>
//                           •	The role of intuition and transcendence in scientific discovery<br/>
                          
                          

//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           Quantum Mechanics & Sufi Thought
//                           </h5>
//                           <p>
//                           •	Parallels between Sufi philosophy and quantum physics<br/>
//                           •	The concept of interconnectedness in Sufism and modern physics<br/>
//                           •	Non-locality, energy fields, and Sufi interpretations of the unseen world<br/>
                          
//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           Mind, Medicine & Healing
//                           </h5>
//                           <p>
//                           •	Sufi approaches to holistic well-being and mental health<br/>
//                           •	The impact of spiritual practices on neuroplasticity and cognitive functio<br/>
//                           •	Energy healing and its intersections with modern medical science<br/>
                          

//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           Environmental Ethics & Sustainability
//                           </h5>
//                           <p>
//                           •	Sufi perspectives on ecology and environmental stewardship<br/>
//                           •	Sacred responsibility and sustainability in the modern world<br/>
//                           •	Ethical frameworks for climate change solutions rooted in spiritual traditions<br/>
                          

//                           </p>

//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           Artificial Intelligence, Technology & Spirituality
//                           </h5>
//                           <p>
//                           •	Can AI integrate spiritual wisdom?<br/>
//                           •	Ethical considerations of AI from a Sufi lens<br/>
//                           •	Technology and the evolution of spiritual consciousnes<br/>
                          

//                           </p>
                        
//                         </div>
//                       </li>
                      
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           Submission Guidelines
//                           </h5>
//                           <p>
//                           •	Abstract Length: 250-500 words<br/>
//                           •	Full Paper Length: 3,000 - 6,000 words (if accepted)<br/>
//                           •	Format: APA or MLA citation style<br/>
//                           •	Submission Deadline: [Insert Date]<br/>
//                           •	Notification of Acceptance: [Insert Date]


//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           Who Should Submit?
//                           </h5>
//                           <p>
//                           •	Academics and researchers in philosophy, spirituality, quantum physics, neuroscience, and ethics<br/>
//                           •	Scholars of Islamic studies, Sufism, and comparative religion<br/>
//                           •	Innovators and professionals in technology, medicine, and environmental science<br/>
//                           •	Independent researchers exploring spiritual-scientific intersections<br/>
                          

//                           </p>
                          
//                         </div>
//                       </li>
//                       <li className="flex justify-between border-b border-gray-300 pb-[17px]">
//                         <div>
//                           <h5 className="text-[24px] font-semibold leading-[34px] text-fixnix-lightpurple mb-[14px]">
//                           How to Submit
//                           </h5>
//                           <p>
//                           Interested participants should complete the Conference Registration Form and upload their abstract via our submission portal.
                          

//                           </p>
//                           <p className="pt-3 font-bold">
                          
//                           For inquiries, please contact [Insert Email].
//                           </p>
//                           <p className="pt-3 font-bold">Join us in this transformative dialogue where mysticism meets modern science!</p>
                          
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
             
//             </div>
//              </div> 
              
//           </div>
//         </section>
//          <div id="conference-form" className="min-h-screen bg-white  px-4 sm:px-6 lg:px-8">
//               <div className="max-w-6xl mx-auto">
//                 <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//                   {/* Header */}
//                   <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple py-6 px-6 text-white">
//                     <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
//                       Conference Registration
//                     </h2>
//                     <p className="text-center mt-2 text-white">
//                       Submit your paper for the upcoming Sufi Science Symposium
//                     </p>
//                   </div>
                  
//                   {/* Form */}
//                   <div className="p-6">
//                     <form onSubmit={handleSubmit}>
//                       <div className="space-y-6">
//                         {/* Personal Information */}
//                         <div>
//                           <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-4">Personal Information</h3>
                          
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                               <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="name">
//                                 Full Name*
//                               </label>
//                               <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                                 placeholder="Enter your full name"
//                               />
//                               {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                             </div>
                            
//                             <div>
//                               <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="email">
//                                 Email Address*
//                               </label>
//                               <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                                 placeholder="you@example.com"
//                               />
//                               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                             </div>
//                           </div>
//                         </div>
                        
//                         {/* Institution */}
//                         <div>
//                           <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="institution">
//                             Institution/Organization
//                           </label>
//                           <input
//                             type="text"
//                             id="institution"
//                             name="institution"
//                             value={formData.institution}
//                             onChange={handleChange}
//                             className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                             placeholder="Your academic institution or organization"
//                           />
//                         </div>
                        
//                         {/* Abstract */}
//                         <div>
//                           <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="abstract">
//                             Abstract*
//                           </label>
//                           <textarea
//                             id="abstract"
//                             name="abstract"
//                             value={formData.abstract}
//                             onChange={handleChange}
//                             rows={6}
//                             className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                             placeholder="Please provide a brief abstract of your paper (250-500 words)"
//                           ></textarea>
//                           {errors.abstract && <p className="mt-1 text-sm text-red-600">{errors.abstract}</p>}
//                         </div>
                        
//                         {/* Presentation Type */}
//                         <div>
//                           <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-4">Presentation Details</h3>
                          
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                               <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="presentationType">
//                                 Presentation Type*
//                               </label>
//                               <select
//                                 id="presentationType"
//                                 name="presentationType"
//                                 value={formData.presentationType}
//                                 onChange={handleChange}
//                                 className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                               >
//                                 <option value="">Select a presentation type</option>
//                                 <option value="oral">Oral Presentation</option>
//                                 <option value="poster">Poster Presentation</option>
//                                 <option value="workshop">Workshop</option>
//                                 <option value="panel">Panel Discussion</option>
//                               </select>
//                               {errors.presentationType && <p className="mt-1 text-sm text-red-600">{errors.presentationType}</p>}
//                             </div>
                            
//                             <div>
//                               <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="topic">
//                                 Topic/Theme*
//                               </label>
//                               <select
//                                 id="topic"
//                                 name="topic"
//                                 value={formData.topic}
//                                 onChange={handleChange}
//                                 className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                               >
//                                 <option value="">Select a topic</option>
//                                 <option value="sufi-philosophy">Sufi Philosophy</option>
//                                 <option value="quantum-consciousness">Quantum Consciousness</option>
//                                 <option value="mystical-practices">Mystical Practices</option>
//                                 <option value="healing-traditions">Healing Traditions</option>
//                                 <option value="interdisciplinary">Interdisciplinary Approaches</option>
//                                 <option value="other">Other</option>
//                               </select>
//                               {errors.topic && <p className="mt-1 text-sm text-red-600">{errors.topic}</p>}
//                             </div>
//                           </div>
//                         </div>
                        
//                         {/* Submit Button */}
//                         <div className="pt-4">
//                           <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className="w-full bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center"
//                           >
//                             {isSubmitting ? (
//                               <>
//                                 <Loader size={20} className="animate-spin mr-2" />
//                                 Submitting...
//                               </>
//                             ) : (
//                               'Submit Abstract & Register'
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>

        

       
//       </Layout>
//     </>
//   );
// }
"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, {  FormEvent } from 'react';
import { Loader } from 'lucide-react';
import Image from "next/image";
import Banner from "@/components/sections/home3/Banner";
import { SetStateAction, useState , useEffect} from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { ComplexContentBlock } from "../heritage&identity/page";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [heroData, setHeroData] = useState<any[]>([])
  const [rightsideImageContent , setRightSideImageContent] = useState<any>()
  const [leftsideImageContent , setLeftSideImageContent] = useState<any>()
  const [purpleChart , setPurpleChart] = useState <any>()
  const [whiteChart , setWhiteChart] = useState <any>()
  const [leftsideImageContent2 , setLeftSideImageContent2] = useState<any>()
  const [complexContentData , setComplexContentData] = useState<ComplexContentBlock[]>([]);
  const [purpleContent , setPurpleContent] = useState <any>()
  const [registrationForm , setRegistrationForm] = useState<any>()

  const handleOnClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      institution: '',
      abstract: '',
      presentationType: '',
      topic: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
  
    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Clear error when field is changed
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    };
  
    // Handle form submission
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      
      // Validate form
      const newErrors: Record<string, string> = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.abstract.trim()) {
        newErrors.abstract = 'Abstract is required';
      }
      
      if (!formData.presentationType) {
        newErrors.presentationType = 'Presentation type is required';
      }
      
      if (!formData.topic) {
        newErrors.topic = 'Topic is required';
      }
      
      setErrors(newErrors);
      
      // If no errors, submit form
      if (Object.keys(newErrors).length === 0) {
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
          console.log('Form submitted:', formData);
          setIsSubmitting(false);
          // Reset form or show success message
        }, 2000);
      }
    };
    const query = `
    *[_type == "page" && pageName == "Abstract Submission Portal"][0]{
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
      "registrationForm" : contentSections[type == "registrationForm"][0].registrationForm,
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
                      setRegistrationForm(data.registrationForm)
                    }
      )
      .catch((err) => console.error('Sanity Fetch Error:', err))
      
  }, [])
  

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
       <Banner slides={heroData}/>

       <div className="flex flex-col gap-10 my-40">
  {complexContentData.length > 0 ? (
    complexContentData.map((content, idx) => (
      <section key={idx} className="relative block">
        <div className="container mx-auto px-4">
          <div className="relative block">
            <div className="flex items-center">
              <div className="w-full lg:w-8/12">
                <div className="relative block">
                  <div className="text-left">
                    <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-semibold uppercase z-[1]">
                      {content.title}
                      {content.title && (
                        <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
                      )}
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

          
          <div className="relative  py-[20px] pt-10">
            <div className="flex flex-col  bg-gray-100 p-0 pb-[52px] mb-[20px] relative z-10 rounded-3xl">
              <div className="absolute  top-0 right-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tr-3xl rounded-bl-xl text-sm font-medium z-20">
                {content.label}
              </div>
               <div className="pt-[123px]">
              {Array.isArray(content.contentSections) &&
                content.contentSections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="  px-10 relative">
                    <div className="mb-[24px]">
                      <h4 className="text-[30px] font-semibold leading-[40px] mb-[14px]">
                        {section.sectionHeading}
                      </h4>
                      <p>{section.sectionDescription}</p>
                    </div>

                    {Array.isArray(section.subSections) &&
                      section.subSections.length > 0 && (
                        <ul className="space-y-[17px] pb-[17px]">
                          {section.subSections.map((sub, subIdx) => (
                            <li
                              key={subIdx}
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
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    ))
  ) : (
    <div></div>
  )}
</div>
        {/*Core Services Start*/}

         <div id="conference-form" className="min-h-screen bg-white  px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple py-6 px-6 text-white">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
                      {registrationForm?.heading}
                    </h2>
                    <p className="text-center mt-2 text-white">
                      {registrationForm?.subheading}
                    </p>
                  </div>
                  
                  {/* Form */}
                  <div className="p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        {/* Personal Information */}
                        <div>
                          <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-4">Personal Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="name">
                                Full Name*
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Enter your full name"
                              />
                              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="email">
                                Email Address*
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="you@example.com"
                              />
                              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>
                          </div>
                        </div>
                        
                        {/* Institution */}
                        <div>
                          <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="institution">
                            Institution/Organization
                          </label>
                          <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Your academic institution or organization"
                          />
                        </div>
                        
                        {/* Abstract */}
                        <div>
                          <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="abstract">
                            Abstract*
                          </label>
                          <textarea
                            id="abstract"
                            name="abstract"
                            value={formData.abstract}
                            onChange={handleChange}
                            rows={6}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Please provide a brief abstract of your paper (250-500 words)"
                          ></textarea>
                          {errors.abstract && <p className="mt-1 text-sm text-red-600">{errors.abstract}</p>}
                        </div>
                        
                        {/* Presentation Type */}
                        <div>
                          <h3 className="text-xl font-semibold text-fixnix-lightpurple mb-4">Presentation Details</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="presentationType">
                                Presentation Type*
                              </label>
                              <select
                                id="presentationType"
                                name="presentationType"
                                value={formData.presentationType}
                                onChange={handleChange}
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                              >
                                <option value="">Select a presentation type</option>
                                <option value="oral">Oral Presentation</option>
                                <option value="poster">Poster Presentation</option>
                                <option value="workshop">Workshop</option>
                                <option value="panel">Panel Discussion</option>
                              </select>
                              {errors.presentationType && <p className="mt-1 text-sm text-red-600">{errors.presentationType}</p>}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-fixnix-darkpurple mb-1" htmlFor="topic">
                                Topic/Theme*
                              </label>
                              <select
                                id="topic"
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                              >
                                <option value="">Select a topic</option>
                                <option value="sufi-philosophy">Sufi Philosophy</option>
                                <option value="quantum-consciousness">Quantum Consciousness</option>
                                <option value="mystical-practices">Mystical Practices</option>
                                <option value="healing-traditions">Healing Traditions</option>
                                <option value="interdisciplinary">Interdisciplinary Approaches</option>
                                <option value="other">Other</option>
                              </select>
                              {errors.topic && <p className="mt-1 text-sm text-red-600">{errors.topic}</p>}
                            </div>
                          </div>
                        </div>
                        
                        {/* Submit Button */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader size={20} className="animate-spin mr-2" />
                                Submitting...
                              </>
                            ) : (
                              'Submit Abstract & Register'
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

        

       
      </Layout>
    </>
  );
}

