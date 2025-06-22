import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {InspiringInterviewItem} from "../../types/digitalBookTypes"
import { PortableText, PortableTextComponents } from "next-sanity";
const components: PortableTextComponents = {
    marks: {
      purpleLine: ({ children }) => (
        <div className="border-l-4 border-fixnix-lightpurple pl-4">{children}</div>
      ),
      lightPurple :({ children }) => (
        <span className="text-fixnix-darkpurple py-1">{children}</span>
      ),
      purpleText: ({ children }) => (
        <span className="text-fixnix-lightpurple">{children}</span>
      ),
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      indent: ({ children }) => <div className="pl-6">{children}</div>,
      bgGray: ({ children }) => (
        <span className="bg-gray-100 px-1 rounded">{children}</span>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold  mb-2">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl   mb-2">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl   mb-2">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl   mb-1">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-lg   mb-1">{children}</h5>
      ),
      normal: ({ children }) => (
        <p className="text-lg text-gray-800 mb-2 leading-relaxed">{children}</p>
      ),
    },
  }


interface Props{
  data : InspiringInterviewItem
}

const InterviewsDetails : React.FC<Props> = ({ data}) =>{
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Inspiring Interview: Dr. Marissa Clarke – The Biologist Who Listens to Light"
      >
        {/* Hero Section with elegant background */}
        <div className="bg-white min-h-screen">
          <div className="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto text-gray-800">
            
            {/* Hero Section with glowing elements */}
            <div className="relative mb-16 sm:mb-24">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-fixnix-lightpurple blur-3xl opacity-20"></div>
                <div className="absolute w-48 sm:w-64 h-48 sm:h-64 -translate-x-20 translate-y-20 rounded-full bg-fixnix-darkpurple blur-3xl opacity-20"></div>
                <svg className="w-72 sm:w-96 h-72 sm:h-96" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M30 50 L70 50 M50 30 L50 70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
              
              {/* Main title with elegant typography */}
              <div className="relative z-10">
                <div className="text-center">
                  <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-fixnix-darkpurple">{data.title}</span>
                  <h1 style={{ whiteSpace: 'pre-line' }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-4 mb-6 relative bg-clip-text text-transparent bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple leading-tight">
                    {data.heading?.replace(/\\n/g, '\n')}
                  </h1>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple mx-auto mb-6"></div>
                  
                  <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-fixnix-lightpurple font-light italic">

                    {data.headerSection?.chart?.ComparisonHeading}
                  </h2>
                </div>
              </div>
              
              {/* Profile card with subtle shadow */}
              <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-fixnix-lightpurple-light mb-16 transform hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 text-base sm:text-lg">
                    {data.headerSection?.chart?.charts?.map((item , idx)=>{
                        return(
                            <div key={idx} className="flex-1 md:border-r border-fixnix-lightpurple-light md:pr-8">
                            <h3 className="text-base sm:text-lg font-semibold text-fixnix-lightpurple mb-4 uppercase tracking-wide">{item.title}</h3>
                            <div>
                                <PortableText value={item.content} components={components} />
                            </div>
                          </div>
                        )
                    })}
                  </div>
                  
              
              {/* Featured quote with decorative elements */}
              
            </div>

            <div className="relative mb-20">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl sm:text-6xl text-fixnix-lightpurple opacity-50">"</div>
                <blockquote className="text-center italic text-xl sm:text-2xl font-serif text-fixnix-lightpurple px-4 sm:px-12 relative z-10">
                  <PortableText value={data.headerSection?.chart?.comparisonNote}  />
                  <div className="w-16 h-1 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple mx-auto mt-6"></div>
                </blockquote>
                <div className="absolute -bottom-8 right-1/2 transform translate-x-1/2 text-5xl sm:text-6xl text-fixnix-lightpurple opacity-50">"</div>
              </div>

            {/* Introduction Paragraphs */}
            <div className="max-w-3xl mx-auto mb-16 sm:mb-24">
              <div className="bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple p-6 sm:p-8 rounded-3xl shadow-sm">
                <p className="mb-8 leading-relaxed text-lg sm:text-xl font-serif italic text-center text-fixnix-white">
                  {data.headerSection?.content}
                </p>
              </div>

              <div className="relative mt-12 sm:mt-16 mb-16 sm:mb-20">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-fixnix-lightpurple to-transparent"></div>
                <p className="font-semibold text-center text-xl sm:text-2xl py-6 sm:py-8 text-fixnix-darkpurple">
                  {data.headerSection?.bottom}
                </p>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-fixnix-lightpurple to-transparent"></div>
              </div>
            </div>

            <div className="space-y-16 sm:space-y-24">
                {data.pages?.map((page , pageId)=>{
                    return(
                        <section key={pageId} className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    {page.heading}
                    </h2>
                  </div>
                  {page.content?.map((sec , secId)=>{
                    return(
                        <div key={secId} >
                            {sec.title && (
                              <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 border-fixnix-lightpurple">
                              <p className="text-base sm:text-lg text-fixnix-white font-medium">
                                <span className="font-semibold text-fixnix-white">{sec.title}</span> 
        
                              </p>
                            </div>
                            )}
                          
                <div className="mt-4 leading-relaxed text-lg ml-6">
                    <PortableText value={sec.description} components={components} />
                </div>
                
                        </div>
                    )
                  })}
                
                
                {page.bottom && (
                    <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple rounded-xl border border-fixnix-lightpurple-light shadow-inner">
                        {page.bottom.title && (
                           <div className="flex items-center mb-3">
                           <div className="w-2 h-6 sm:h-8 bg-fixnix-white rounded-full mr-4"></div>
                           <h4 className="text-lg sm:text-xl font-bold text-fixnix-white">{page.bottom?.title}</h4>
                         </div>
                        )}
                    
                    <p style={{ whiteSpace: 'pre-line' }} className="text-base sm:text-lg text-gray-50">
                    {page.bottom?.note.replace(/\\n/g, '\n')}
                    </p>
                    
                  </div>
                )}
                
                    </div>
              </section>
                    )
                })}
              {/* Mystic Biography Section */}
 

              


              <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-12 border-l-4 sm:border-l-8 border-fixnix-lightpurple relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                {/* Decorative background element */}
                <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-fixnix-lightpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-fixnix-darkpurple-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-fixnix-darkpurple">
                    {data.footerSection?.heading}
                    </h2>
                  </div>
                
                
                  
                  
                  {data.footerSection?.content?.map((sec , secId)=>{
                    return(
                    <div key={secId} >
                        <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-fixnix-lightpurple-light rounded-xl border-l-4 my-4 border-fixnix-lightpurple">
                          <p className="text-base sm:text-lg text-fixnix-white font-medium">
                        {sec.title}
                      </p>
                      </div>
                    
                    
                    <div className="space-y-6 bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-md">
                      <div className="leading-relaxed text-xl text-gray-800">
                        <PortableText value={sec.description} components={components} />
                      </div>
                      
                      
                    </div>
                    </div>
                    )
                  })}
                      
                
                    
                    
                  </div>
                  
                  <div className="mt-16 p-12 bg-gradient-to-r from-fixnix-lightpurple-light to-fixnix-darkpurple rounded-2xl shadow-lg border border-white transform hover:scale-105 transition-transform duration-300">
                    <p className="text-center text-white">
                      <span className="block mb-6 text-lg uppercase tracking-widest font-semibold">{data.footerSection?.bottom?.title}</span>
                      <span className="text-2xl md:text-3xl font-serif italic">{data.footerSection?.bottom?.note}</span>
                    </p>
                  </div>
                
              </section>
            </div>
            
            {/* Footer decoration */}
            <div className="mt-24 mb-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-fixnix-lightpurple to-fixnix-darkpurple"></div>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </>
  );
}
export default InterviewsDetails