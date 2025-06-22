import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {HardTalkItem} from "../../types/digitalBookTypes"
import { PortableText, PortableTextComponents } from "next-sanity";
interface Props{
  data : HardTalkItem
}
const customComponents: PortableTextComponents = {
  marks: {
    
    lightPurple: ({ children }) => <span className="text-fixnix-lightpurple">{children}</span>,
    bgGray: ({ children }) => <span className="bg-gray-200 px-1">{children}</span>,
    indent: ({ children }) => <span className="pl-3">{children}</span>,
  },
  block: {
    normal: ({ children }) => <p className="mb-2   ">{children}</p>,
  },
};
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl  mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl  mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl  mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl  mb-2">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg  mb-1">{children}</h5>,
    normal: ({ children }) => <p className="text-base leading-7 mb-4">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    redText: ({ children }) => <span className="text-red-500">{children}</span>,
    greenText: ({ children }) => <span className="text-green-600">{children}</span>,
    lightPurple: ({ children }) => <span className="text-fixnix-lightpurple">{children}</span>,
    bgGray: ({ children }) => (
      <span className="bg-gray-100 px-1 rounded-sm">{children}</span>
    ),
    indent: ({ children }) => (
      <p className="ml-6 border-l-2 border-gray-300 pl-4 italic">{children}</p>
    ),
  },
};
const componentspurple: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl text-fixnix-white  mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl text-fixnix-white mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl text-fixnix-white ">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl text-fixnix-white ">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg text-fixnix-white  ">{children}</h5>,
    normal: ({ children }) => <p className="text-base text-fixnix-white  ">{children}</p>,
  },
}

const HardTalkDetails : React.FC<Props> = ({ data}) =>{
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="How To Fix Broken Back Glass On Your Phone"
      >
        <div className="bg-gradient-to-b from-white to-gray-50">
          <div className="px-6 py-16 max-w-4xl mx-auto text-gray-800">
            {/* Hero Section with decorative elements */}
            <div className="relative mb-16">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <svg className="w-64 h-64" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              <h1 className="text-5xl font-bold text-center mb-8 relative">
                {data.heading}
              </h1>
              
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-10">
                <p className="italic text-center text-xl text-gray-700">
                  {data.note}
                </p>
              </div>
              
              <blockquote className="text-center italic mb-8 text-lg">
                {data.headerSection?.heading}<br />
                <span className="block mt-3 text-gray-600 font-medium"> {data.headerSection?.personName}</span>
              </blockquote>
            </div>

            {/* Introduction Paragraphs */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="mb-6 leading-relaxed">
                <PortableText value={data.headerSection?.description} />
              </div>

              <p className="mb-12 font-semibold text-center text-xl">{data.headerSection?.note}</p>
            </div>

            {/* Content Sections with Enhanced Styling */}
            <div className="space-y-16">
              {data.pages?.map((page , pageId)=>{
                return(
                  <section key={pageId} className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  <span className="text-fixnix-lightpurple"></span> 
                  <span>{page.contentHeading}</span>
                </h2>
                <div className="mt-4 leading-relaxed">
                  <PortableText value={page.content} components={customComponents} />
                </div>
                
              </section>
                )
              })}
              {/* <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  <span className="text-fixnix-lightpurple"></span> 
                  <span>1. Sufism Is the Soul of Islam, Not Its Distraction</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  Sufism is not a side dish to Islam, nor a diluted form of religion for the romantic-minded. It is the deep interior of the
                  Shari'ah, the breath of the Sunnah, and the echo of the Qur'an in the chambers of the heart.
                </p>
                <ul className="list-disc list-inside mt-6 space-y-3 pl-4">
                  <li>
                    <strong>The Qur'an says:</strong> "Indeed, in the remembrance of Allah do hearts find rest." (13:28)
                  </li>
                  <li>
                    <strong>The Prophet ﷺ said:</strong> "There is a polish for everything, and the polish for the heart is the remembrance of Allah."
                  </li>
                </ul>
                <p className="mt-6">
                  The Sufi does not bypass the Shari'ah, he breathes it until it disappears into his being. He does not perform dhikr to impress, he does it to disappear.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>2. Reason: Entertainment Seeks the Self, Sufism Destroys It</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  Entertainment seeks to please the nafs (ego). It offers momentary distraction, emotional stimulation, and often, self-indulgence.
                  Sufism, by contrast, begins by crucifying the nafs. The Sufi disciplines the tongue, the limbs, the appetite.
                </p>
                <p className="mt-4">
                  How can something that burns the ego, confronts the heart, and silences the soul be confused with entertainment?
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>3. The Whirl Is Not for You. It Is for God.</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  You say: "They dance." Yes, they whirl. But why?
                </p>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4">
                  <li>The Prophet ﷺ stood in prayer till his feet swelled  and he did it in silence.</li>
                  <li>The Sufi turns as the planets do, not to attract, but to surrender to the axis of Divine Will.</li>
                </ul>
                <p className="mt-6">
                  Just as the Kaaba is circled in Tawaf, so the Sufi circles the inner Kaaba of his Lord. And if your eyes were polished, you would see not a dancer, but a flame yearning to rise.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>4. Wisdom of the Ancients: The Saints Were Not Performers</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  Was Rabiʿa al-ʿAdawiyya, who walked barefoot on scorching sand and refused paradise if it distracted her from God, an entertainer?
                </p>
                <p className="mt-4">
                  Was Jalaluddin Rumi, whose son was abducted, whose teacher was buried, and who poured oceans of grief into divine verses, seeking applause?
                </p>
                <p className="mt-4">
                  These saints suffered, starved, wept, vanished not for crowds, but for Truth.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                 
                  <span>5. Islamic Lineage: Sufism Is Orthodoxy with Depth</span>
                </h2>
                <ul className="list-disc list-inside mt-4 space-y-3 pl-4">
                  <li><strong>Imam al-Ghazali:</strong> "Whoever has no share of spiritual experience, he has no real knowledge."</li>
                  <li><strong>Ibn Taymiyyah:</strong> "Among the people of Sufism are those closest to Allah and most truthful."</li>
                  <li>The Prophet ﷺ engaged in contemplative dhikr in the Cave of Hira before the Qur'an descended.</li>
                </ul>
                <p className="mt-6">
                  Wherever Islam was practiced with beauty — Andalusia, Istanbul, Kashmir, Senegal — Sufism was its heartbeat.
                </p>
              </section>

              <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-fixnix-lightpurple">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                  
                  <span>6. The Mystic Does Not Entertain, He Reflects Divine Light</span>
                </h2>
                <p className="mt-4 leading-relaxed">
                  The Qur'an says: "Allah is the Light of the heavens and the earth…" (24:35)
                </p>
                <p className="mt-4">
                  The Sufi is the mirror, polished by repentance, dhikr, fasting, and service until he reflects that Light without distortion.
                </p>
              </section> */}

              <section className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-8 shadow-inner">
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                
                  <span>{data.footerSection?.heading}</span>
                </h2>
                <div className="mt-4 leading-relaxed">
                <PortableText value={data.footerSection?.content} components={components} />
                </div>
                
                <div className="mt-8 p-6 bg-fixnix-lightpurple rounded-lg font-semibold shadow-sm border border-gray-100">
                  <div className=" text-center space-y-[-20px] text-fixnix-white ">
                  <PortableText value={data.footerSection?.content2} components={componentspurple} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HardTalkDetails