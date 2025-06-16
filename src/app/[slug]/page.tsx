// "use client"
// import { client } from "@/sanity/lib/client";
// import { notFound } from "next/navigation";
// import { useEffect, useState } from "react";

// // import GiftShopProduct from "@/components/products/GiftShopProduct";
// // import DigitalBookCategory from "@/components/products/DigitalBookCategory";
// import SufiScienceExplorer from "@/components/SufiScienceExplorer";

// type Props = {
//   params: { slug: string };
// };

// export default  function Page({ params }: Props) {
//     const [pagesData , setPagesData] = useState<any>()



//   const query = `*[_type == "page" && slug.current == $slug][0]{
//     heroSections: contentSections[type == "heroSections"][0].heroSections,
//     giftShopProduct: contentSections[type == "giftShopProduct"][0].giftShopProduct,
//     digitalBookCategory: contentSections[type == "digitalBookCategory"][0].digitalBookCategory,
//     insightCategory: contentSections[type == "insightCategory"][0].insightCategory,
//   }`;
 
// useEffect(()=>{
//   const getData = async ()=>{
//     const data = await client.fetch(query, { slug: params.slug });
//     setPagesData(data)
//   }
//   getData()
// },[])
  

//   console.log("dynamicData",pagesData)

//   if (!pagesData) return notFound();

//   // Render heroSections anywhere you want — usually at the top
//   // Now check which product section exists and render accordingly

// //   if (pageData.giftShopProduct) {
// //     return (
// //       <>
// //         {pageData.heroSections && <HeroSections data={pageData.heroSections} />}
// //         <GiftShopProduct data={pageData.giftShopProduct} />
// //       </>
// //     );
// //   }

// //   if (pageData.digitalBookCategory) {
// //     return (
// //       <>
// //         {pageData.heroSections && <HeroSections data={pageData.heroSections} />}
// //         <DigitalBookCategory data={pageData.digitalBookCategory} />
// //       </>
// //     );
// //   }

//   if (pagesData.insightCategory) {
//     return (
//       <>
        
//         <SufiScienceExplorer banner={pagesData.heroSections} data={pagesData.insightCategory} />
//       </>
//     );
//   }

//   // Agar koi valid product nahi mila to
//   return <div>No product found on this page.</div>;
// }
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import SufiScienceExplorer from "@/components/SufiScienceExplorer";
import DigitalAcademy from "@/components/DigitalAcademy";

// Add this function to provide slugs for static generation
export async function generateStaticParams() {
  // Fetch all slugs from your Sanity CMS or data source
  const slugs = await client.fetch(`*[_type == "page" && defined(slug.current)]{ "slug": slug.current }`);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    "heroSections" : contentSections[type == "heroSections"][0].heroSections,
    "giftShopProduct" : contentSections[type == "giftShopProduct"][0].giftShopProduct,
    "digitalBookCategory" : contentSections[type == "digitalBookCategory"][0].digitalBookCategory,
    "insightCategory" : contentSections[type == "insightCategory"][0].insightCategory,
  }`;

  const pagesData = await client.fetch(query, { slug: params.slug });

  if (!pagesData) return notFound();

  if (pagesData.insightCategory) {
    return (
      <SufiScienceExplorer
        banner={pagesData.heroSections}
        data={pagesData.insightCategory}
      />
    );
  }

  if (pagesData.digitalBookCategory) {
    return (
      <DigitalAcademy
        banner={pagesData.heroSections}
        data={pagesData.digitalBookCategory}
      />
    );
  }

  return <div>No product found on this page.</div>;
}
