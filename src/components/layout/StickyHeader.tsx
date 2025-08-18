import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function StickyHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? "bg-fixnix-lightpurple shadow-lg py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl lg:mx-5 xl:mx-12 2xl:mx-[117px] flex items-center justify-start pl-4">
        {/* Aligning everything to the left */}
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/images/resources/logo-4.png"
            alt="Logo"
            width={50}
            height={50}
            className="transition-all duration-300"
          />
        </Link>

        {/* Navigation Menu */}
        <ul className="main-menu__list hidden lg:flex lg:pl-[16px] xl:pl-[16px] 2xl:pl-[20px] lg:space-x-[25px] xl:space-x-[30px] 2xl:space-x-[55px]">
          {/* HOME */}
          <li className="dropdown megamenu relative group">
            <Link
              href="/"
              className="text-white text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
            >
              HOME
            </Link>
            {/* Megamenu */}
            {/* <ul className="absolute left-0 hidden h-80 -mt-2 space-y-4 group-hover:block bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpurple">
              <li>
                <section className="-mt-[31px] -mb-[31px]">
                  <div className="container">
                    <div className="p-[40px] w-[500px] h-[700px] bg-white shadow-lg rounded-b-lg">
                      <div className="grid grid-cols-2 gap-[42px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                        {[1, 2, 3, 4].map((page) => (
                          <div key={page} className="col-span-1">
                            <div>
                              <div className="relative bg-fixnix-lightpurple overflow-hidden">
                                <Link
                                  href={`/Index-${page === 4 ? "dark" : page}`}
                                  aria-label={`View Home Page ${page}`}
                                >
                                  <Image
                                    src={`/assets/images/home-showcase/home-showcase-1-${page}.jpg`}
                                    alt={`Home Page ${page}`}
                                    width={600}
                                    height={700}
                                    className="w-full transition-transform duration-500 ease-in-out transform scale-100"
                                  />
                                </Link>
                                <div className="absolute inset-0 flex justify-center items-center transform scale-y-0 opacity-0 invisible transition-all duration-500 ease-in-out">
                                  <Link
                                    href={`/Index-${page === 4 ? "dark" : page}`}
                                    aria-label={`View Home Page ${page}`}
                                  >
                                    <span className="p-[15px] text-center w-[150px]">
                                      View Page {page}
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <h3 className="home-showcase__title mt-[17px] text-center text-[16px] font-bold text-fixnix-darkpurple">
                                Home Page {page}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </li>
            </ul> */}
          </li>

          {/* About Us */}
          <li className="relative group">
            <Link
              href="#"
              className="text-white text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
            >
              DISCOVER SSC
            </Link>
            <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
              <li className="mb-2">
                <Link
                  href="/heritage&identity"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Our Heritage & Identity
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="kashmirisufilegacy"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Kashmiri Sufi Legacy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/purpose&direction"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Purpose & Direction
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/work&practices"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Our Work & Practices
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/exploringkashmirisufism"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Exploring Kashmiri Sufism
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/ourFounder"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Our Founder
                </Link>
              </li>
            </ul>
          </li>

          {/* Teachings Dropdown */}
          <li className="relative group">
            <Link
              href="#"
              className="text-white text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
            >
              YOUR JOURNEY
            </Link>
            <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
              <li className="mb-2">
                <Link
                  href="/beginyourjourney"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Begin Your Journey
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/corelearningpaths"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Core Learning Paths
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/growth&development"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Growth & Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/leadership&teaching"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Leadership & Teaching
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/submissionportal"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Abstract Submission Portal
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/resources&support"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Resources & Support
                </Link>
              </li>
            </ul>
          </li>

          {/* Programs & Events Dropdown */}
          <li className="relative group">
  <Link
    href="#"
    className="text-white text-[15px] lg:text-[10px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
  >
    SUFI SCIENCE EXPLORER
  </Link>
  <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[500px] hidden group-hover:block">
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Foundational Matrices
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Ecological Intelligence
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Consciousness Geometries
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Perceptual Gateways
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Reality Frameworks
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Cosmic Harmonics
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Energetic Architectures
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Character Alchemy
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Unity Sciences
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Healing Mysteries
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Wisdom Transmission
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Sacred Artistry
      </Link>
    </li>
    <li className="mb-2">
      <Link
        href="/awakening-soon"
        className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
      >
        Advanced Technologies
      </Link>
    </li>
  </ul>
</li>


          {/* Knowledge Hub Dropdown */}
          <li className="relative group">
            <Link
              href="#"
              className="text-white text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
            >
              DIGITAL ACADEMY
            </Link>
            <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Dialog Series
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Hard Talk Series
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Sufi Professions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Inspiring Interviews
                </Link>
              </li>
              
            </ul>
          </li>

          {/* Sufi Gifts Dropdown */}
          <li className="relative group">
            <Link
              href="#"
              className="text-white font-bold text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] hover:text-fixnix-darkpurple"
            >
              SACRED GIFT SHOP
            </Link>
            <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Art & Wall Decor
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                > 
                  Jewelry & Accessories
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Home & Living
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Fashion & Apparel
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Wellness & Meditation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Digital Books 
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/awakening-soon"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Audio Spectrum
                </Link>
              </li>
            
            </ul>
          </li>

          {/* Support Us Dropdown */}
          <li className="relative group">
            <Link
              href="#"
              className="text-white text-[15px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-bold hover:text-fixnix-darkpurple"
            >
              SUPPORT US
            </Link>
            <ul className="bg-white absolute z-50 mt-0 pt-4 px-2 w-72 rounded-b-md max-h-[400px] rounded-e-md overflow-y-auto scrollbar-thin scrollbar-thumb-fixnix-darkpurple scrollbar-track-fixnix-lightpuple hidden group-hover:block">
              <li className="mb-2">
                <Link
                  href="/waystogive"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Ways to Give
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/volunteerwithus"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Volunteer With Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/collaboration"
                  className="text-fixnix-darkpurple text-[15px] hover:bg-fixnix-darkpurple hover:text-white rounded px-4 py-1 transition-all"
                >
                  Collaborations
                </Link>
              </li>
            </ul>
          </li>
          

         
        </ul>
      </div>
    </header>
  );
}
