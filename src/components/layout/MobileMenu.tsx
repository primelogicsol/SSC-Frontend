"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  isSidebar: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
}

const MobileMenu = ({
  isSidebar = false,
  handleMobileMenu,
  handleSidebar = () => {},
}: MobileMenuProps) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check login status
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loginStatus);
    };

    checkLoginStatus();
    // Add event listener for storage changes
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("returnUrl");
    setIsLoggedIn(false);
    handleMobileMenu();
    router.push("/");
  };

  const handleToggle = (key: string, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[2000] bg-black bg-opacity-50 transform transition-transform duration-300 ${
          isSidebar
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={handleMobileMenu}
        ></div>
        <div className="relative h-full w-72 bg-fixnix-darkpurple py-8 px-6 overflow-y-auto transition-all transform">
          <span
            className="absolute top-5 right-5 text-white text-lg cursor-pointer"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="mb-10">
            <Link href="/" aria-label="logo image">
              <Image
                src="/assets/images/resources/logo-4.png" // Path to your image
                width={70} // Set the width
                height={70} // Set the height
                alt="Logo"
                className=""
              />
            </Link>
          </div>

          <div className="">
            <ul className="space-y-4 main-menu__list">
              {/* Home menu */}
              <li
                className={`${isActive.key === "1" ? "current" : ""} dropdown`}
              >
                <Link
                  href="/"
                  className="text-white text-sm uppercase font-bold"
                  onClick={handleMobileMenu}
                >
                  Home
                </Link>
                {/* <ul
                  style={{
                    display: `${isActive.key === "1" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home One
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Index-2"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home Two
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Index-3"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home Three
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Index-dark"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Home Four
                    </Link>
                  </li>
                </ul> */}
                {/* <button
                  className={`absolute right-2 top-1 mt-2 transform -translate-y-1/2 text-white transition-transform duration-300 ${
                    isActive.key === "1" ? "rotate-90" : ""
                  }`}
                  onClick={() => handleToggle("1")}
                >
                  <span className="fa fa-angle-right" />
                </button> */}
              </li>

              {/* Discover KSSC menu */}
              <li
                className={`${isActive.key === "2" ? "current" : ""} dropdown`}
              >
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                  onClick={handleMobileMenu}
                >
                  Discover SSC
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "2" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/heritage&identity"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Our Heritage & Identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kashmirisufilegacy"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Kashmiri Sufi Legacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/purpose&direction"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Purpose & Direction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work&practices"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Our Work & Practices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/exploringkashmirisufism"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Exploring Kashmiri Sufism
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ourFounder"
                      className="text-white text-sm font-medium"
                      onClick={handleMobileMenu}
                    >
                      Our Founder
                    </Link>
                  </li>
                </ul>
                <button
                  className={`absolute right-2 top-1 mt-2 transform -translate-y-1/2 text-white transition-transform duration-300 ${
                    isActive.key === "2" ? "rotate-90" : ""
                  }`}
                  onClick={() => handleToggle("2")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>

              {/* Your Journey menu */}
              <li
                className={`${isActive.key === "3" ? "current" : ""} dropdown`}
              >
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                >
                  Your Journey
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "3" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/beginyourjourney"
                      className="text-white text-sm font-medium"
                    >
                      Begin Your Journey
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/corelearningpaths"
                      className="text-white text-sm font-medium"
                    >
                      Core Learning Paths
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/growth&development"
                      className="text-white text-sm font-medium"
                    >
                      Growth & Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/leadership&teaching"
                      className="text-white text-sm font-medium"
                    >
                      Leadership & Teaching
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/submissionportal"
                      className="text-white text-sm font-medium"
                    >
                      Abstract Submission Portal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources&support"
                      className="text-white text-sm font-medium"
                    >
                      Resources & Support
                    </Link>
                  </li>
                </ul>
                <button
                  className={`absolute right-2 top-1 mt-2 transform -translate-y-1/2 text-white transition-transform duration-300 ${
                    isActive.key === "3" ? "rotate-90" : ""
                  }`}
                  onClick={() => handleToggle("3")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>
              {/*Sufi science menu */}
              <li
                className={`${isActive.key === "4" ? "current" : ""} dropdown`}
              >
                <Link
                  href="#"
                  className="text-white text-sm font-bold uppercase"
                >
                  Sufi Science Explorer
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "4" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Foundational Matrices
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Ecological Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Consciousness Geometries
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Perceptual Gateways
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Reality Frameworks
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Cosmic Harmonics
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Energetic Architectures
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Character Alchemy
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Unity Sciences
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Healing Mysteries
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Wisdom Transmission
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Sacred Artistry
                    </Link>
                  </li>
                  <li>
                    <Link href="/awakening-soon" className="text-white text-sm font-medium">
                      Advanced Technologies
                    </Link>
                  </li>
                </ul>
                <button
                  className={`absolute right-2 top-1 mt-2 transform -translate-y-1/2 text-white transition-transform duration-300 ${
                    isActive.key === "4" ? "rotate-90" : ""
                  }`}
                  onClick={() => handleToggle("4")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>
              {/* Learning center menu */}
              <li
                className={`${isActive.key === "5" ? "current" : ""} dropdown`}
              >
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                >
                  Digital Academy
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "5" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                       Dialog Series
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Hard Talk Series
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Sufi Professions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Inspiring Interviews
                    </Link>
                  </li>
                  
                </ul>
                <button
                  className={`absolute right-2 top-1 mt-2 transform -translate-y-1/2 text-white transition-transform duration-300 ${
                    isActive.key === "5" ? "rotate-90" : ""
                  }`}
                  onClick={() => handleToggle("5")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>
              {/* Sacred Gift Shop menu */}
              <li
                className={`${isActive.key === "6" ? "current" : ""} dropdown`}
              >
                <Link
                  href="#"
                  className="text-white text-sm uppercase font-bold"
                >
                  Sacred Gift Shop
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "6" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Jewelry & Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Art & Wall Decor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Home & Living
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Fashion & Apparel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Wellness & Medication
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Digital Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Audio Spectrum
                    </Link>
                  </li>
                  
                </ul>
                <button
                  className={`absolute right-2 top-1 mt-2 transform -translate-y-1/2 text-white transition-transform duration-300 ${
                    isActive.key === "6" ? "rotate-90" : ""
                  }`}
                  onClick={() => handleToggle("6")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>
              {/* Support Usy menu */}
              <li
                className={`${isActive.key === "7" ? "current" : ""} dropdown`}
              >
                <Link
                  href="#"
                  className="text-white text-sm font-bold uppercase"
                >
                  Support Us
                </Link>
                <ul
                  style={{
                    display: `${isActive.key === "7" ? "block" : "none"}`,
                  }}
                  className="space-y-2 ml-4"
                >
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Ways to Give
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Volunteer With Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awakening-soon"
                      className="text-white text-sm font-medium"
                    >
                      Collaborations
                    </Link>
                  </li>
                </ul>
                <button
                  className={`absolute right-2 top-1 mt-2 transform -translate-y-1/2 text-white transition-transform duration-300 ${
                    isActive.key === "7" ? "rotate-90" : ""
                  }`}
                  onClick={() => handleToggle("7")}
                >
                  <span className="fa fa-angle-right" />
                </button>
              </li>

              {/* Additional menu items... */}
              <li className="flex items-center space-x-4">
                <Link
                  href="/cart"
                  className="text-white text-lg"
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span className="ml-2 text-sm">Cart</span>
                </Link>
                <Link
                  href="/library"
                  className="text-white text-lg"
                >
                  <i className="fas fa-book-reader"></i>
                  <span className="ml-2 text-sm">Library</span>
                </Link>
                <Link
                  href="/profile"
                  className="text-white text-lg"
                >
                  <i className="fas fa-user"></i>
                  <span className="ml-2 text-sm">Profile</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/membership"
                  className="text-red-600 text-lg font-bold"
                >
                  GET MEMBERSHIP
                </Link>
              </li>
            </ul>
          </div>
          

         {/* Contact */}
<ul className="mobile-nav__contact list-unstyled space-y-3">
<li className="flex items-center text-sm text-dark">
    {isLoggedIn ? (
      <button
        onClick={handleLogout}
        className="text-white flex items-center"
      >
        <i className="fa fa-sign-out-alt text-white bg-lightpurple p-2 rounded-full mr-2"></i>
        Logout
      </button>
    ) : (
      <>
        <i className="fa fa-user-circle text-white bg-lightpurple p-2 rounded-full mr-2"></i>
        <Link href="/awakening-soon" className="text-white">
          Login
        </Link>
        <span className="mx-2 text-white">/</span>
        <Link href="/awakening-soon" className="text-white">
          Register
        </Link>
      </>
    )}
  </li>
  <li className="flex items-center text-sm text-dark">
    <i className="fa fa-envelope text-white bg-lightpurple p-2 rounded-full mr-2"></i>
    <Link href="mailto: info@sufisciencecenter.info" className="text-white">
      info@sufisciencecenter.info
    </Link>
  </li>
</ul>


          {/* Social Media */}
                  <div className="mobile-nav__social flex items-center space-x-4">
          <Link
            href="#"
            className="fab fa-facebook-square text-white text-lg hover:text-lightpurple"
          ></Link>
          <Link
            href="#"
            className="fab fa-linkedin text-white text-lg hover:text-lightpurple"
          ></Link>
          <Link
            href="https://www.youtube.com/@SufiPulse-Studio-USA"
            className="fab fa-youtube text-white text-lg hover:text-lightpurple"
          ></Link>
          <Link
            href="#"
            className="fab fa-twitter text-white text-lg hover:text-lightpurple"
          ></Link>
          <Link
            href="#"
            className="fab fa-instagram text-white text-lg hover:text-lightpurple"
          ></Link>
        </div>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;
