import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { PortableText } from "next-sanity";
import { PortableTextComponents } from '@portabletext/react'

const componentsForpurpleContent: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl text-[var(--fixnix-white)] font-bold leading-10 mb-3 md:mb-3">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl text-[var(--fixnix-white)] font-semibold leading-9 mb-2 md:mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl text-[var(--fixnix-white)] font-semibold leading-8 mb-2 md:mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className=" text-lg text-[var(--fixnix-white)] font-semibold leading-7 mb-1 md:mb-1">{children}</h4>,
    h5: ({ children }) => <h3 className="text-lg text-fixnix-white font-semibold ">{children}</h3>,
    h6: ({ children }) => <h6 className=" sm:text-sm md:text-md font-semibold lg:text-md xl:text-md 2xl:text-lg italic mt-4 mb-6 leading-snug sm:leading-tight">{children}</h6>,
    normal: ({ children }) => <p className="text-base text-white mb-2">{children}</p>,
  },
}

export default function Footer() {
  const [data , setData] = useState<any>()

  const query = `
  *[_type == "footer"][0]{
    image,
    BgImage,
    description,
    socialLinks,
    footerSections,
    footerPolicy,
  }
`

useEffect(() => {
  const getData = async () => {
    const headerData = await client.fetch(query)
    setData(headerData)
  }

  getData()
}, [])
  return (
    <>
      {/*Site Footer Start*/}
      <footer className="relative block bg-[var(--fixnix-darkpurple)] overflow-hidden z-10">
        {data?.BgImage && (
          <div
          className="absolute top-0 left-1/2 w-full max-w-[1323px] h-[586px] transform -translate-x-1/2 -z-10 float-bob-y"
          style={{
            backgroundImage:
              `url(${urlFor(data?.BgImage).url()})`,
          }}
        ></div>

        )}
        
        <div className="relative block py-16 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* First Column - About SSC */}
              <div className="wow fadeInUp " data-wow-delay="100ms">
                <div className="relative block mr-0 lg:mr-12 xl:mr-20 mt-4">
                  <div className="relative block">
                  {data?.image && (
                      <Link href="#">
                      <img src={urlFor(data?.image).url()} alt="Sufi Science Center Logo" className="max-w-full h-auto" />
                    </Link>
                    )}
                  </div>
                  <div className="relative block pt-8 md:pt-10 lg:pt-8 pb-1">
                    <div className="text-base text-[var(--fixnix-white)]" >
                      <PortableText value={data?.description} components={componentsForpurpleContent} />
                    </div>
                    
                    
                  </div>
                  <div className="relative block">
                    
                    
                    
                    <div className="flex items-center">
                      <Link
                        href={data?.socialLinks[0].url ? data?.socialLinks[0].url : '/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group"
                      >
                        <i className="fab fa-facebook"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href={data?.socialLinks[1].url ? data?.socialLinks[1].url : '/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-linkedin"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href={data?.socialLinks[2].url ? data?.socialLinks[2].url : '/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-youtube"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href={data?.socialLinks[3].url ? data?.socialLinks[3].url : '/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-twitter"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                      <Link
                        href={data?.socialLinks[4].url ? data?.socialLinks[4].url : '/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center h-10 w-10 text-center text-[var(--fixnix-white)] bg-[#272a2d] text-sm rounded overflow-hidden transition-all duration-500 ease-in-out z-10 hover:text-[var(--fixnix-white)] hover:bg-[var(--fixnix-lightpuple)] group ml-2.5"
                      >
                        <i className="fab fa-instagram"></i>
                        <span className="absolute top-0 left-0 right-0 h-full bg-[var(--fixnix-lightpuple)] transition-all delay-100 duration-400 ease-in-out opacity-100 origin-top transform scale-y-0 z-[-1] group-hover:scale-y-100"></span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
              
              
                {/* {data?.footerSections.map((sec : any , secId : number)=>{
                  return(
                    <div key={secId} className="wow fadeInUp" data-wow-delay="200ms">
                <div className="relative block">
                  <div className="relative block mb-6 md:mb-8 lg:mb-12">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">{sec.sectionName}</h3>
                  </div>
                  <ul className="list-none">
                    {sec.sections.map((item : any , idx : number)=>{
                      return (
                        <li key={idx} className="relative block mb-3 md:mb-4">
                        <Link href={item.slug.current} className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out">{item.title}</Link>
                      </li>
                      )
                    })}
                    
                    
                    
                  </ul>
                </div>
              </div>
                    
                  )
                })} */}
              
              
              {/* Second Column - Quick Links */}
              <div className="wow fadeInUp" data-wow-delay="200ms">
                <div className="relative block">
                  <div className="relative block mb-6 md:mb-8 lg:mb-12">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">{data?.footerSections[0].sectionName}</h3>
                  </div>
                  <ul className="list-none">
                  {data?.footerSections[0].sections.map((item : any , idx : number)=>{
                      return (
                        <li key={idx} className="relative block mb-3 md:mb-4">
                        <Link href={item.slug.current} className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out">{item.title}</Link>
                      </li>
                      )
                    })}
                   
                    <div className="relative block mb-6 md:mb-8 lg:my-8 ">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">{data?.footerSections[1].sectionName}</h3>
                  </div>
                  {data?.footerSections[1].sections.map((item : any , idx : number)=>{
                      return (
                        <li key={idx} className="relative block mb-3 md:mb-4">
                        <Link href={item.slug.current} className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out">{item.title}</Link>
                      </li>
                      )
                    })}
                    
                    
                  </ul>
                </div>
              </div>
              
              {/* Third Column - Sufi Science Explorer */}
              <div className="wow fadeInUp" data-wow-delay="300ms">
                <div className="relative block">
                  <div className="relative block mb-6 md:mb-8 lg:mb-12">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">{data?.footerSections[2].sectionName}</h3>
                  </div>
                  <ul className="list-none">
                  {data?.footerSections[2].sections.map((item : any , idx : number)=>{
                      return (
                        <li key={idx} className="relative block mb-3 md:mb-4">
                        <Link href={item.slug.current} className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out">{item.title}</Link>
                      </li>
                      )
                    })}
                   
                    
                    <div className="relative block mb-6 md:mb-8 lg:my-8 ">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">{data?.footerSections[3].sectionName}</h3>
                  </div>
                  {data?.footerSections[3].sections.map((item : any , idx : number)=>{
                      return (
                        <li key={idx} className="relative block mb-3 md:mb-4">
                        <Link href={item.slug.current} className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out">{item.title}</Link>
                      </li>
                      )
                    })}
                   
                    
                  </ul>
                </div>
              </div>
              
              {/* Fourth Column - Support Us & Newsletter */}
              <div className="wow fadeInUp" data-wow-delay="400ms">
                <div className="relative block">
                  <div className="relative block mb-6 md:mb-8 lg:mb-12">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">{data?.footerSections[4].sectionName}</h3>
                  </div>
                  <ul className="list-none mb-8">
                  {data?.footerSections[4].sections.map((item : any , idx : number)=>{
                      return (
                        <li key={idx} className="relative block mb-3 md:mb-4">
                        <Link href={item.slug.current} className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out">{item.title}</Link>
                      </li>
                      )
                    })}
                    
                    <div className="relative block mb-6 md:mb-8 lg:my-8 ">
                    <h3 className="text-xl md:text-2xl text-[var(--fixnix-white)] font-semibold leading-6">{data?.footerSections[5].sectionName}</h3>
                  </div>
                  
                  {data?.footerSections[5].sections.map((item : any , idx : number)=>{
                      return (
                        <li key={idx} className="relative block mb-3 md:mb-4">
                        <Link href={item.slug.current} className="relative flex items-center text-base text-[var(--fixnix-white)] pl-4 transition-all duration-500 ease-in-out hover:text-[var(--fixnix-lightpuple)] before:content-['\f0da'] before:absolute before:top-1/2 before:left-0 before:transform before:-translate-y-1/2 before:font-['Font_Awesome_5_free'] before:font-bold before:text-sm before:text-[var(--fixnix-lightpuple)] before:transition-all before:duration-500 before:ease-in-out">{item.title}</Link>
                      </li>
                      )
                    })}
                    
                  </ul>

                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[var(--fixnix-lightpuple)] -mt-6  py-6">
          <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center text-[var(--fixnix-white)] text-sm space-y-4 md:space-y-0">
            <div>{data?.footerPolicy.copyright}<br/><PortableText value={data?.footerPolicy.description} /></div>
            <div className="flex flex-wrap gap-4">
              <Link href={data?.footerPolicy.legalLinks[0].url ? data?.footerPolicy.legalLinks[0].url : '/' } className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300">{data?.footerPolicy.legalLinks[0].title}</Link>
              <span>|</span>
              <Link href={data?.footerPolicy.legalLinks[1].url ? data?.footerPolicy.legalLinks[1].url : '/' } className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300">{data?.footerPolicy.legalLinks[1].title}</Link>
              <span>|</span>
              <Link href={data?.footerPolicy.legalLinks[2].url ? data?.footerPolicy.legalLinks[2].url : '/' } className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300">{data?.footerPolicy.legalLinks[2].title}</Link>
              <span>|</span>
              <Link href={data?.footerPolicy.legalLinks[3].url ? data?.footerPolicy.legalLinks[3].url : '/' } className="text-white hover:text-[var(--fixnix-lightpuple)] transition-colors duration-300">{data?.footerPolicy.legalLinks[3].title}</Link>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}