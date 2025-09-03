"use client";
import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/sections/home3/Banner";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  subTitle?: string;
  title: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
};

type Block =
  | { type: "heroSlider"; slides: Slide[] }
  | { type: "sectionHeader"; tagline?: string; title: string; html?: string }
  | {
      type: "sidebar";
      searchPlaceholder?: string;
      categories: { label: string; href: string; active?: boolean }[];
    }
  | { type: "listToolbar"; showingText?: string; sortOptions?: string[] }
  | {
      type: "cardGrid";
      cards: { title: string; text?: string; image?: string; href?: string }[];
    }
  | { type: "richText"; html: string };

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "heroSlider") {
    // Add safety check for slides
    if (
      !block.slides ||
      !Array.isArray(block.slides) ||
      block.slides.length === 0
    ) {
      console.error("HeroSlider block missing or invalid slides:", block);
      return (
        <div className="p-4 text-center text-red-500">
          Error: HeroSlider block is missing slides data
        </div>
      );
    }
    
    return <Banner slides={block.slides as any} />;
  }
  if (block.type === "sectionHeader") {
    return (
      <div className="text-center sm:text-left relative block mt-[40px] mb-[49px] z-[1]">
        {/* Section Tagline */}
        {block.tagline && (
          <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            {block.tagline}
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
        )}
        <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">{block.title}</h2>
        {/* Section Text */}
        {block.html && (
          <p className="pt-[10px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
            <span dangerouslySetInnerHTML={{ __html: block.html }} />
          </p>
        )}
      </div>
    );
  }
  if (block.type === "sidebar") {
    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-lg bg-fixnix-lightpurple shadow-sm relative">
          <input
            type="text"
            placeholder={block.searchPlaceholder || "Search"}
            className="w-full p-2 pr-10 border rounded-lg bg-fixnix-lightpurple"
          />
          <i className="fa fa-search absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-100"></i>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {block.categories.map((c, idx) => (
              <li key={idx} className={c.active ? "font-bold" : undefined}>
                <Link
                  href={c.href}
                  className={c.active 
                    ? "hover:text-fixnix-darkpurple" 
                    : "text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                  }
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (block.type === "listToolbar") {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
        <p>{block.showingText || "Showing results"}</p>
        <select className="p-2 border bg-gray-100 rounded-lg">
          {(block.sortOptions || ["Sort by popular", "Sort by Ratings"]).map(
            (opt, idx) => (
              <option key={idx} className="hover:bg-fixnix-lightpurple">
                {opt}
              </option>
            )
          )}
        </select>
      </div>
    );
  }
  if (block.type === "cardGrid") {
    return (
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {block.cards.map((card, index) => (
          <div
            key={index}
            className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative group">
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
                <Link href={card.href || "#"}>
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-xl font-semibold mt-2 text-white">
                <Link href={card.href || "#"} className="text-white">
                  {card.title}
                </Link>
              </h3>
              {card.text && (
                <p className="text-sm text-gray-100 mt-2 italic">{card.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "richText")
    return (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  return null;
}

export default function AcademyPage() {
  const pathname = usePathname();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    const slug = parts[1];
    async function fetchData() {
      try {
        // Use NEXT_PUBLIC_BACKEND_URL with localhost:8000 as fallback
        const baseUrl =
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
        const res = await axios.get(`${baseUrl}/v1/content/academy/${slug}`, {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        setData(res.data.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchData();
  }, [pathname]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!data) return <div className="p-8">Not found</div>;

  // Find the heroSlider block once
  const heroSliderBlock = data.blocks.find((b: any) => b.type === "heroSlider");

  return (
    <Layout headerStyle={2} footerStyle={1}>
      {/* Render hero slider first if provided */}
      {heroSliderBlock && <BlockRenderer block={heroSliderBlock} />}

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4 text-left-mobile">
          {/* Section header, if present */}
          {data.blocks
            .filter((b: any) => b.type === "sectionHeader")
            .map((b: Block, i: number) => (
              <BlockRenderer key={`header-${i}`} block={b} />
            ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar column */}
            <div className="md:col-span-1 space-y-6">
              {data.blocks
                .filter((b: any) => b.type === "sidebar")
                .map((b: Block, i: number) => (
                  <BlockRenderer key={`sidebar-${i}`} block={b} />
                ))}
            </div>

            {/* Main content column */}
            <div className="md:col-span-3">
              {data.blocks
                .filter((b: any) => b.type === "listToolbar")
                .map((b: Block, i: number) => (
                  <BlockRenderer key={`toolbar-${i}`} block={b} />
                ))}
              
              {data.blocks
                .filter(
                  (b: any) =>
                    b.type === "richText" ||
                    b.type === "cardGrid"
                )
                .map((b: Block, i: number) => (
                  <BlockRenderer key={`main-${i}`} block={b} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
