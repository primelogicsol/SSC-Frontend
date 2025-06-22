import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {DailogSeriesItem} from "../../types/digitalBookTypes"
import { PortableText, PortableTextComponents } from "next-sanity";

const customComponents: PortableTextComponents = {
    marks: {
      
      lightPurple: ({ children }) => <span className="text-fixnix-lightpurple">{children}</span>,
      bgGray: ({ children }) => <span className="bg-gray-200 px-1">{children}</span>,
      indent: ({ children }) => <span className="pl-3">{children}</span>,
    },
    block: {
      normal: ({ children }) => <p className="mb-2   ">{children}</p>,
    },
  };

  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-4xl  mb-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl  mb-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl  mb-2">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl  mb-2">{children}</h4>,
      h5: ({ children }) => <h5 className="text-lg  mb-1">{children}</h5>,
      normal: ({ children }) => <p className="text-base leading-7 mb-4">{children}</p>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      redText: ({ children }) => <span className="text-red-500">{children}</span>,
      greenText: ({ children }) => <span className="text-green-600">{children}</span>,
      lightPurple: ({ children }) => <span className="text-fixnix-lightpurple">{children}</span>,
      bgGray: ({ children }) => (
        <span className="bg-gray-100 px-1 rounded-sm">{children}</span>
      ),
      indent: ({ children }) => (
        <p className="ml-6 border-l-2 border-gray-300 pl-4 italic">{children}</p>
      ),
    },
  };

  const componentspurple: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-4xl text-fixnix-white  mb-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl text-fixnix-white mb-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl text-fixnix-white mb-2">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl text-fixnix-white mb-2">{children}</h4>,
      h5: ({ children }) => <h5 className="text-lg text-fixnix-white  mb-1">{children}</h5>,
      normal: ({ children }) => <p className="text-base text-fixnix-white leading-7 ">{children}</p>,
    },
}

interface Props{
    data : DailogSeriesItem
}

const DialogsDetails : React.FC<Props> = ({ data}) => {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="What Exactly Is Sufism? - The Curious Seeker's Guide"
      >
        <div className="bg-gradient-to-b from-white to-gray-100">
          <div className="px-6 py-20 max-w-4xl mx-auto text-gray-800">
            {/* Hero Section with decorative elements */}
            <div className="relative mb-20">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <svg className="w-72 h-72" viewBox="0 0 100 100">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              
              <h1 className="text-6xl font-bold text-center mb-10 relative bg-clip-text text-transparent bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple">
                {data.heading}
              </h1>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-12">
                <p className="italic text-center text-2xl text-gray-700">
                  {data.note}
                </p>
              </div>
              
              <blockquote className="text-center italic mb-8 text-xl">
                {data.headerSection?.heading}<br />
                <span className="block mt-3 text-gray-600 font-medium"> {data.headerSection?.personName}</span>
              </blockquote>
            </div>

            {/* Introduction Paragraphs */}
            <div className="prose prose-lg max-w-none mb-16">
              <div className="mb-8 leading-relaxed text-xl">
                <PortableText value={data.headerSection?.description} />
              </div>

              <p className="mb-12 font-semibold text-center text-2xl py-4 border-y text-fixnix-lightpurple border-gray-200">
                {data.headerSection?.note}
              </p>
            </div>

            
            <div className="space-y-20">
                {data.pages?.map((page , pageId)=>{
                    return(
                        <section key={pageId} className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                           
                          <span>{page.contentHeading}</span>
                        </h2>
                        <div className="mt-4 leading-relaxed text-lg">
                            <PortableText value={page.content} components={customComponents} />
                        </div>
                        
                        <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                        <PortableText value={page.note} />
                        </div>
                      </section>
                    )
                })}


              <section className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-10 shadow-lg">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  
                  <span>{data.footerSection?.heading}</span>
                </h2>
                <p className="mt-4 leading-relaxed text-lg">
                  {data.footerSection?.subHeading}
                </p>
                <div className="mt-8 p-8 bg-white rounded-xl shadow-md border border-gray-200">
                  <div className="text-center text-gray-700">
                    <PortableText value={data.footerSection?.content} components={components} />
                  </div>
                    {/* <span className="font-bold text-xl"> Whisper gently:</span><br />
                    <span className="mt-4 block text-3xl text-fixnix-lightpurple font-serif">"Ya Wadud — O Most Loving."</span>
                  </p>
                  <p className="mt-6 text-center text-lg">
                    Then ask yourself:<br />
                    <span className="italic">"What would it mean to live my Islam not just through action... but through presence, warmth, and awareness?"</span>
                  </p>
                  <p className="mt-6 text-center font-bold">
                    That question <strong>is where Sufism begins</strong>.
                  </p> */}
                </div>
                
                <div className="mt-10 p-8 bg-fixnix-lightpurple rounded-xl shadow-md border border-gray-100">
                  <div className="font-semibold text-center text-fixnix-white text-xl">
                  <PortableText  value={data.footerSection?.content2} components={componentspurple} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default DialogsDetails