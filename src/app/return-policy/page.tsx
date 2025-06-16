'use client'
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mb-2">{children}</h3>,
    h5: ({ children }) => <h3 className="text-lg">{children}</h3>,
    h6: ({ children }) => (
      <h6 className="sm:text-sm md:text-md font-semibold lg:text-md xl:text-md 2xl:text-lg italic mt-4 mb-6 leading-snug sm:leading-tight">
        {children}
      </h6>
    ),
    normal: ({ children }) => <p className=" py-1 my-0  text-sm md:text-base">{children}</p>,
  },

  // ✅ Add this section for inline decorators
  marks: {
    lightPurple: ({ children }) => (
      <span className="text-fixnix-darkpurple text-base md:text-lg  font-semibold">{children}</span>
    ),
    redText: ({ children }) => (
      <span className="text-red-500 text-xl  my-4 mb-6 font-semibold">{children}</span>
    ),
    greenText: ({ children }) => (
      <span className="text-green-500 text-xl my-4 mb-6 font-semibold">{children}</span>
    ),
    bgGray: ({ children }) => (
      <span className="py-2   ml-3 pl-2  my-[-4px]  bg-gray-100 block leading-[1.6]  break-words box-decoration-clone  ">{children}</span>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    indent: ({ children }) => (
      <p style={{ marginLeft: '2em' }}>{children}</p>)
  },
};

export default function ReturnsPolicy() {
  const [pageData, setPageData] = useState<any>()
  

  const query = `
  *[_type == "page" && pageName == "Return Policy"][0]{
    _id,
    pageName,
    "aboutContent": contentSections[type == "aboutContent"][0].aboutContent,
    
  }
`;

useEffect(() => {
  

  client.fetch(query)
    .then((data) => {setPageData(data.aboutContent);
                    
                  }
    )
    .catch((err) => console.error('Sanity Fetch Error:', err))
    
}, [])
  return (
    <div>
    
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fixnix-darkpurple)] mb-4">
            {pageData?.title}
          </h1>
          <div className="flex justify-center items-center">
            <div className="h-1 w-24 bg-[var(--fixnix-lightpuple)]"></div>
          </div>
          <p className="mt-4 text-lg">
            <span className="font-medium">{pageData?.mainHeading}</span>
            <br />
            <span className="text-gray-600">
              Last Updated: {pageData?.updatedDate}
            </span>
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 lg:p-10 mb-10">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              
            </h2>
            <PortableText value={pageData?.mainDescription} components={components} />
          </section>

          {pageData?.contentSections?.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold  text-[var(--fixnix-darkpurple)] mb-4">
                {section.sectionHeading}
              </h2>
              <PortableText value={section.sectionDescription} components={components} />

              {section.subSections?.map((subSection, subIndex) => (
                <div key={subIndex} className="mb-6">
                  <h3 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
                    {subSection.subHeading}
                  </h3>
                  <p className="text-gray-700 my-4 ">{subSection.note}</p>
                  <PortableText value={subSection.paragraphs} components={components} />
                  {subSection.bottomNote && (
                    <p style={{ whiteSpace: 'pre-line' }} className="text-sm mt-6 text-gray-500">{subSection.bottomNote.replace(/\\n/g, '\n')}</p>
                  )}
                  
                </div>
              ))}
            </section>
          ))}
        </div>
        <div className="text-center">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-[var(--fixnix-lightpuple)] text-white rounded-md hover:bg-[var(--fixnix-darkpurple)] transition-colors duration-300"
          >
            Return to Home Page
          </Link>
        </div>
      </div>
      
    </div>
    
    </div>
  );
}