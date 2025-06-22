
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import SufiScienceExplorer from "@/components/SufiScienceExplorer";
import DigitalAcademy from "@/components/DigitalAcademy";
import SacredGiftShop from "@/components/SacredGiftShop";
import { GiftShopProduct  } from '../../../types/giftShopProductType';


// //Add this function to provide slugs for static generation
// export async function generateStaticParams() {
//   // Fetch all slugs from your Sanity CMS or data source
//   const slugs = await client.fetch(`*[_type == "page" && defined(slug.current)]{ "slug": slug.current }`);
//   console.log("slugs", slugs)
//   return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
  
// }

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  
  const query = `*[_type == "page" && slug.current == $slug][0]{
    "slug" : slug.current,
    pageName,
    "heroSections" : contentSections[type == "heroSections"][0].heroSections,
    "giftShopProduct" : contentSections[type == "giftShopProduct"][0].giftShopProduct,
    "digitalBookCategory" : contentSections[type == "digitalBookCategory"][0].digitalBookCategory,
    "insightCategory" : contentSections[type == "insightCategory"][0].insightCategory,
  }`;

  const pagesData = await client.fetch(query, { slug: params.slug });

  if (!pagesData) return <div>no data</div>;

  if (pagesData.insightCategory) {
    return (
      <SufiScienceExplorer
        slug={pagesData.slug}
        banner={pagesData.heroSections}
        data={pagesData.insightCategory}
      />
    );
  }

  if (pagesData.digitalBookCategory) {
    return (
      <DigitalAcademy
      pageName={pagesData.pageName}
      slug={pagesData.slug}
        banner={pagesData.heroSections}
        data={pagesData.digitalBookCategory}
      />
    );
  }

  console.log('slug',pagesData.slug)
  if (pagesData.giftShopProduct) {
    let singleProduct = null;

// for (const p of pagesData.giftShopProduct) {
//   const meta = {
//     parentTitle: p.title,
//     parentHeading: p.heading,
//     parentDescription: p.description,
//   };

//   // if (p.typeOfProduct === 'digitalBook' && p.digitalBook?.length) {
//   //   singleProduct = { ...p.digitalBook[0], ...meta };
//   //   break;
//   // }

//   // if (p.typeOfProduct === 'audioSpectrum' && p.audioSpectrum?.length) {
//   //   singleProduct = { ...p.audioSpectrum[0], ...meta };
//   //   break;
//   // }

//   // if (p.typeOfProduct === 'handCraftProduct' && p.handCraftProduct?.length) {
//   //   singleProduct = { ...p.handCraftProduct[0], ...meta };
//   //   break;
//   // }
// }

    return (
      <SacredGiftShop
        banner={pagesData.heroSections}
        data={pagesData.giftShopProduct}            
        slug={pagesData.slug}
        pageName={pagesData.pageName}
      />
    );
  }

  return <div>No product found on this page.</div>;
}
