"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { contentServices } from "@/hooks/contentServices";

import { ContentItem } from "@/hooks/contentServices";

export default function ExplorerDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [data, setData] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await contentServices.getContent(
          "explorer-details",
          slug
        );
        setData(response);
      } catch (err) {
        console.error("Error fetching explorer details:", err);
        setError("Failed to load content");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case "richText":
        return (
          <div
            key={index}
            className="relative block max-w-[630px] px-4 mx-auto mt-24"
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );

      case "propheticSayings":
        return (
          <div
            key={index}
            className="relative block max-w-[630px] px-4 mx-auto mt-24"
          >
            <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
              Prophetic Sayings
            </h3>
            {block.items?.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']"
              >
                <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                  {item.quote}
                </p>
                <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        );

      case "scientificReflections":
        return (
          <div
            key={index}
            className="relative block max-w-[630px] px-4 mx-auto mt-24"
          >
            <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
              Scientific Reflections
            </h3>
            {block.items?.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']"
              >
                <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                  {item.author} – {item.quote}
                </p>
                <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        );

      case "kashmiriWisdom":
        return (
          <div
            key={index}
            className="relative block max-w-[630px] px-4 mx-auto mt-24"
          >
            <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
              Kashmiri Sufi Wisdom
            </h3>
            {block.items?.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']"
              >
                <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                  {item.author} – {item.quote}
                </p>
                <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        );

      case "scholarlyDialogs":
        return (
          <div
            key={index}
            className="relative block max-w-[630px] px-4 mx-auto mt-24"
          >
            <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
              Scholarly Dialogs from Dr. Ghulam Mohammad Kumar
            </h3>
            {block.items?.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']"
              >
                <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                  {item.quote}
                </p>
                <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        );

      case "coreConcept":
        return (
          <div key={index} className="relative block mt-5 mx-12">
            <h3 className="text-2xl font-semibold leading-6">Core Concept</h3>
            <p
              className="mt-7 mb-7"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        );

      case "keyConcepts":
        return (
          <div key={index} className="relative block mt-5 mx-12">
            <h3 className="text-2xl font-semibold leading-6">Key Concepts</h3>
            <div className="mt-7 mb-6">
              <ul className="list-disc list-inside marker:text-xl marker:text-fixnix-lightpurple">
                {block.concepts?.map(
                  (concept: string, conceptIndex: number) => (
                    <li key={conceptIndex}>{concept}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        );

      case "practicalApplications":
        return (
          <div key={index} className="relative block mt-5 mx-12">
            <h3 className="text-2xl font-semibold leading-6">
              Practical Applications
            </h3>
            <div className="mt-7 mb-6">
              <ul className="list-disc list-inside marker:text-xl marker:text-fixnix-lightpurple">
                {block.applications?.map(
                  (application: string, appIndex: number) => (
                    <li key={appIndex}>{application}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        );

      case "forNewStudents":
        return (
          <div key={index} className="relative block mt-5 mx-12">
            <h3 className="text-2xl font-semibold leading-6">
              For New Sufi Students
            </h3>
            <p
              className="mt-7 mb-7"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        );

      case "forMaturePractitioners":
        return (
          <div key={index} className="relative block mt-5 mx-12">
            <h3 className="text-2xl font-semibold leading-6">
              For Mature Sufi Practitioners
            </h3>
            <p
              className="mt-7 mb-7"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <Layout headerStyle={2} footerStyle={1}>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-fixnix-lightpurple mx-auto"></div>
          <p className="mt-4 text-lg">Loading content...</p>
        </div>
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout headerStyle={2} footerStyle={1}>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error || "Content not found"}</p>
          <Link
            href="/explore"
            className="mt-4 inline-block bg-fixnix-lightpurple text-white px-6 py-2 rounded-lg hover:bg-fixnix-darkpurple transition-colors"
          >
            Back to Explorer
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      headerStyle={2}
      footerStyle={1}
      breadcrumbTitle={`${data.parentPage} - ${data.cardTitle}`}
    >
      {/*Blog Details Two Start*/}
      <section className="relative block bg-[var(--fixnix-primary)]">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="relative block bg-white mx-4 rounded-lg py-28 mt-[-110px] z-10">
                <div className="relative block text-center">
                  <h3 className="text-6xl font-bold leading-[70px] mt-24">
                    {data.parentPage}
                    <br />
                    <p className="text-center text-[var(--fixnix-lightpurple)] text-[25px] font-normal px-4">
                      {data.cardTitle}
                    </p>
                  </h3>
                </div>

                {/* Render all blocks */}
                {data.blocks?.map((block, index) => renderBlock(block, index))}

                {/* Separator */}
                <div className="relative block py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:right-0 before:top-0 before:h-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']"></div>

                {/* Share Section */}
                <div className="relative block px-5">
                  <div className="flex items-center">
                    <span className="text-fixnix-darkpurple text-2xl mr-5 font-semibold font-two">
                      Share This :
                    </span>
                    <div className="relative flex items-center space-x-2">
                      <Link
                        href="#"
                        className="relative h-10 w-10 flex items-center justify-center text-white bg-fixnix-lightpurple text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:text-white"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="#"
                        className="relative h-10 w-10 flex items-center justify-center text-white bg-fixnix-lightpurple text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:text-white"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        href="#"
                        className="relative h-10 w-10 flex items-center justify-center text-white bg-fixnix-lightpurple text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:text-white"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Blog Details Two End*/}
    </Layout>
  );
}
