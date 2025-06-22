import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {ProfessionsDetailItem} from "../../types/digitalBookTypes"
import { PortableText, PortableTextComponents } from "next-sanity";
import RichText from "@/components/RichText";


// Component config bana rahe ho






interface Props{
  data : ProfessionsDetailItem
}
const componentspurple: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-4xl text-fixnix-white  mb-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl text-fixnix-white mb-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl text-fixnix-white ">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl text-fixnix-white ">{children}</h4>,
      h5: ({ children }) => <h5 className="text-lg text-fixnix-white  ">{children}</h5>,
      normal: ({ children }) => <p className="text-base text-fixnix-white  ">{children}</p>,
    },
  }

const ProfessionsDetails : React.FC<Props> = ({ data}) =>{
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="The Sacred Administrator - A Sufi Guide to Governance with Grace"
      >
        <div className="bg-gradient-to-b from-white to-gray-100">
          <div className="px-6 py-20 max-w-4xl mx-auto text-gray-800">
            {/* Hero Section with improved decorative elements */}
            <div className="relative mb-20">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-80 h-80" viewBox="0 0 100 100">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              
              <h1 className="text-6xl font-bold text-center mb-10 relative bg-clip-text text-transparent bg-gradient-to-r from-fixnix-darkpurple to-fixnix-lightpurple">
                {data.heading}
              </h1>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-12">
                <p className="italic text-center text-2xl text-gray-700">
                  {data.note}
                </p>
              </div>
              
              <blockquote className="text-center italic mb-8 text-xl bg-white p-6 rounded-lg shadow-sm border-l-4 border-fixnix-lightpurple">
                {data.headerSection?.heading}<br />
                <span className="block mt-3 text-gray-600 font-medium">{data.headerSection?.personName}</span>
              </blockquote>
            </div>

            {/* Introduction Paragraphs */}
            <div className="prose prose-lg max-w-none mb-16">
              <div className="mb-8 leading-relaxed text-xl">
                <PortableText value={data.headerSection?.description} />
              </div>

              <p className="mb-12 font-semibold text-center text-2xl py-5 px-4 rounded-lg bg-gradient-to-r from-white to-purple-50 text-fixnix-darkpurple border border-gray-200">
                {data.headerSection?.note}
              </p>
            </div>

            
                
            <div className="space-y-24">
               {data.pages?.map((page , pageId)=>{
                
                return(
                    <>
                    {page.type == "comparison" ? (
                        <section key={pageId} id="section-1" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                          <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">{pageId + 1}</span>
                          <span>{page.ComparisonHeading}</span>
                        </h2>
                        <p className="mt-4 leading-relaxed text-lg">
                          {page.subHeading}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {page.charts?.map((chart , chartId)=>{
                                return(
                                    <div key={chartId} className={`${chartId == 0 ? "bg-gray-50" : " bg-purple-50"} p-6 rounded-lg shadow-sm`}>
                            <h3 className="font-bold mb-2 text-gray-700">{chart.title}</h3>
                            <div className="list-disc list-inside space-y-2">
                              <PortableText value={chart.content} />
                            </div>
                          </div>
                                )
                            })}
                          
                          
                        </div>
                        <div className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                          <PortableText value={page.comparisonNote} />
                        </div>
                      </section>
                    ) : (
                        <section key={pageId} id="section-2" className="bg-white rounded-2xl shadow-md p-10 border-t-8 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">{pageId + 1}</span>
                  <span>{page.contentHeading}</span>
                </h2>
                <div className="mt-4 leading-relaxed text-lg">
                  <RichText value={page.content}  />
                </div>
                
                <div className="mt-8 p-5 bg-purple-50 rounded-lg shadow-sm">
                <PortableText value={page.note}  />
                </div>
              </section>
                    )}
                    </>
                )
               })}

              



              <section id="section-7" className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-10 shadow-lg">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  <span className="bg-fixnix-lightpurple text-white rounded-full w-8 h-8 flex items-center justify-center">{data.pages?.length ? data.pages?.length + 1 : 1}</span>
                  <span>{data.footerSection?.heading}</span>
                </h2>
                <div className="mt-8 p-8 bg-white rounded-xl shadow-md border-l-4 border-fixnix-lightpurple">
                  <div className="text-center text-gray-700 italic">
                    <RichText value={data.footerSection?.content} />
                  </div>
                </div>
                
                <div className="mt-10 p-8 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl shadow-md">
                  <div className="font-semibold text-center text-white text-xl">
                    <PortableText value={data.footerSection?.content2} components={componentspurple} />
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
export default ProfessionsDetails