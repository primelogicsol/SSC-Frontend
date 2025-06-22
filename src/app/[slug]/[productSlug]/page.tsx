
import DialogsDetails from "@/components/DialogsDetails";
import HardTalkDetails from "@/components/HardTalkDetails";
import InsightDetail from "@/components/InsightDetail";
import InterviewsDetails from "@/components/InterviewsDetails";
import ProfessionsDetails from "@/components/ProfessionsDetails";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";







type Props = {
  params: {
    slug: string;
    productSlug: string; 
  };
};

export default async function ProductPage({ params }: Props) {
  const { slug, productSlug } = params;

  const query = `*[_type == "page" && slug.current == $slug][0]{
    contentSections[]{
      ...,
      giftShopProduct[]{
        ...,
        digitalBook[]->{..., "slug": slug.current},
        audioSpectrum[]->{..., "slug": slug.current},
        handCraftProduct[]->{..., "slug": slug.current}
      }
    }
  }`;

  const pageData = await client.fetch(query, { slug });

  if (!pageData) return notFound();

  const products = pageData?.contentSections?.find(
    (section: any) => section.type === "giftShopProduct"
  );
  const insightSection = pageData?.contentSections?.find(
    (section: any) => section.type === "insightCategory"
  );
  const digitalAcademy = pageData?.contentSections?.find(
    (section: any) => section.type === "digitalBookCategory"
  );

  let foundProduct = null;
  let productType = "";
  let foundInsightBook = null;
  let digitalBookProduct = null;

  for (const group of ["digitalBook", "audioSpectrum", "handCraftProduct"]) {
    const groupItems = products?.[group] || [];
    const match = groupItems.find((item: any) => item.slug === productSlug);
    if (match) {
      foundProduct = match;
      productType = group;
      break;
    }
  }


for (const group of ["dailogSeries", "hardTalk", "professionsDetail", "inspiringInterview"]) {
    const groupItems = digitalAcademy?.digitalBookCategory?.[group] || [];
  
    const match = groupItems.find((item: any) => {
      if (!item.slug) return false;
      if (typeof item.slug === "string") return item.slug === productSlug;
      if (typeof item.slug === "object") return item.slug.current === productSlug;
      return false;
    });
  
    if (match) {
      digitalBookProduct = match;
      productType = group;
      break;
    }
  }





const books = insightSection?.insightCategory?.books || [];

for (const book of books) {
  if (book.slug.current === productSlug) {
    foundInsightBook = book;
    break;
  }
}

  
 
  if(foundInsightBook){
    return(
        <InsightDetail data={foundInsightBook} />
    )
  }
  
  if (productType === "dailogSeries") {
    return <DialogsDetails data={digitalBookProduct} />;
  }
  if (productType === "hardTalk") {
    return <HardTalkDetails data={digitalBookProduct} />;
  }
  if (productType === "professionsDetail") {
    return <ProfessionsDetails data={digitalBookProduct} />;
  }
  if (productType === "inspiringInterview") {
    return <InterviewsDetails data={digitalBookProduct} />;
  }
  

}
