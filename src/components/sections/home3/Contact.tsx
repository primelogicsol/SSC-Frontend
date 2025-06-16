// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <div className="inline-block relative text-lg font-semibold text-fixnix-lightpurple uppercase tracking-wider">
//             CONTACT US
//             <div className="absolute top-1/2 left-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
//             <div className="absolute top-1/2 right-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
//           </div>
//           <h2 className="text-4xl font-bold text-fixnix-lightpurple mt-4 mb-3">
//             Let Us Know Or Call Us At
//           </h2>
//           <p className="text-gray-600  mx-auto">
//             Reach out in remembrance and sincerity, every message is a thread in the divine tapestry.
//             <br />
//             Whether in yearning, curiosity, or service, your voice is part of the sacred unfolding.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
//           <form className="space-y-6 contact-form-validated">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
//               />
//             </div>

//             <div>
//               <textarea
//                 name="message"
//                 rows = {6}
//                 placeholder="Your Message"
//                 className="w-full px-5 py-4 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
//               />
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client"
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { PortableText } from "next-sanity";


export default function Contact() {
  const [data , setData] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "homePage"][0]{
            contactSection,
          }
        `);
        setData(result);
      } catch (error) {
        console.error('Sanity fetch error:', error);
      } finally {
        console.log("loaded");
        
      }
    };

    fetchData();
  }, []);
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block relative text-lg font-semibold text-fixnix-lightpurple uppercase tracking-wider">
            {data?.contactSection.title}
            <div className="absolute top-1/2 left-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-[-60px] w-10 h-0.5 bg-fixnix-lightpurple -translate-y-1/2"></div>
          </div>
          <h2 className="text-4xl font-bold text-fixnix-lightpurple mt-4 mb-3">
          {data?.contactSection.heading}
          </h2>
          <div className="text-gray-600  mx-auto">
            <PortableText value={data?.contactSection.note}/>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
          <form className="space-y-6 contact-form-validated">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full h-14 px-5 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows = {6}
                placeholder="Your Message"
                className="w-full px-5 py-4 border border-fixnix-lightpurple rounded-lg bg-transparent text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-fixnix-lightpurple transition"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
