import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {InsightCollection} from "../../types/insightTypes"
import { PortableText, PortableTextComponents } from "next-sanity";
import React from 'react';
interface Props {
    data : InsightCollection
}

const componentsForSimpleContent: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
      normal: ({ children }) => {
        const flatChildren = React.Children.toArray(children)
      
        const lines: string[] = []
      
        flatChildren.forEach(child => {
          if (typeof child === 'string' || typeof child === 'number') {
            const splitted = child.toString().split('\n')
            lines.push(...splitted)
          } else if (
            typeof child === 'object' &&
            React.isValidElement(child) &&
            typeof child.props.children === 'string'
          ) {
            const splitted = child.props.children.split('\n')
            lines.push(...splitted)
          }
        })
      
        return (
          <div className="text-xl leading-50 text-[var(--fixnix-darkpurple)] pr-6 mt-4 space-y-1">
            {lines
              .filter(line => line.trim() !== '') 
              .map((line, i) => (
                <div key={i} className="flex gap-2  ">
                  <span className="mr-2 mt-[18px] w-14 h-0.5 bg-[var(--fixnix-lightpuple)] "></span>
                  <span className="py-2 w-[90%]">{line}</span>
                </div>
              ))}
          </div>
        )
      },
      h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
      
    },
}
const customComponents: PortableTextComponents = {
    marks: {
      redText: ({ children }) => <span className="text-red-500">{children}</span>,
      greenText: ({ children }) => <span className="text-green-600">{children}</span>,
      lightPurple: ({ children }) => <span className="text-fixnix-lightpurple">{children}</span>,
      bgGray: ({ children }) => <span className="bg-gray-200 px-1">{children}</span>,
      indent: ({ children }) => <span className="pl-3">{children}</span>,
    },
    block: {
      normal: ({ children }) => <p className="mb-2 list-disc  ">{children}</p>,
    },
  };

const InsightDetail : React.FC<Props> = ({ data  }) =>  {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="How To Fix Broken Back Glass On Your Phone"
      >
        {/*Blog Details Two Start*/}
        <section className="relative block bg-[var(--fixnix-primary)]">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="relative block bg-white mx-4 rounded-lg py-28 mt-[-110px] z-10">
                  <div className="relative block text-center">
                    <h3 className="text-6xl font-bold leading-[70px] mt-24">
                      {data.insightBook?.heading}<br/> 
                      <p className="text-center text-[var(--fixnix-lightpurple)] text-[25px] font-normal px-4">{data.insightBook?.subHeading}</p>
                    </h3>
                    
                  </div>
                  <div className="relative block max-w-[630px] px-4 mx-auto mt-24">
                    {data.insightBook?.bookContent?.map((section , secId)=>{
                        return(
                            <div key={secId} >
                                <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                    {section.subjectName} 
                    </h3>
                    {section.pageContent?.map((page , pageId)=>{
                        return(
                            <div key={pageId} className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      	{page.subject}
                      </p>
                      <div className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4  ">
                      	<PortableText value={page.content} components={componentsForSimpleContent} />
                      </div>
                    </div>
                        )
                    })}
                    
                            </div>
                        )
                    })}
                    
                    {/* <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                    Prophetic Sayings 
                    </h3>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      	Islam – “Actions are judged by intentions.” (Prophet Muhammad ﷺ)
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      	This emphasizes that the inner dimension of action is what gives it reality, suggesting a consciousness-based reality framework.
                      </p>
                    </div>
                    
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      	Christianity – "In the beginning was the Word, and the Word was with God, and the Word was God." (John 1:1)
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      The primacy of divine articulation in the formation of existence, hinting at a linguistic structure to reality.
                      </p>
                    </div>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      Judaism – "And God said, ‘Let there be light,’ and there was light." (Genesis 1:3)
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      The creative force of divine command (Kun Fayakun in Islam) as the initiating principle of reality.
                      </p>
                    </div>
                    
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                    Scientific Reflections
                    </h3>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      Ibn Sina (980–1037) – The Metaphysics of Existence and Essence
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      Ibn Sina distinguished existence (wujud) from essence (mahiyya), asserting that existence is granted by a necessary being (God).
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      This aligns with quantum mechanics, where particles have potential existence until observed (collapse of the wave function).
                      </p>
                    </div>
                    
                  
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      Werner Heisenberg (1901–1976) – The Uncertainty Principle and Reality's Fluidity
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      Heisenberg discovered that the act of measurement changes a system’s state, implying that observation participates in reality’s formation.
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      This resonates with Islamic metaphysics, where divine witnessing (shuhud) is what grants stability to creation.
                      </p>
                    </div>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      John Wheeler (1911–2008) – The Participatory Universe
                      </p>
                      
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      	Wheeler proposed that reality is fundamentally observer-dependent, suggesting that consciousness is part of the fabric of existence.
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      This idea mirrors Sufi teachings, where the knower (arif) transforms their own reality through divine perception.
                      </p>
                    </div>
                    
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                    Kashmiri Sufi Wisdom
                    </h3>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      Sheikh Noor-ud-Din (1377–1440) – The Seeker as a Co-Creator
	

                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      “The one who seeks, finds the world reshaped by his vision.”
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      Noor-ud-Din emphasized that perception is not passive but actively constructs the seen world.
                      </p>
                    </div>
                    
                   
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      Lalla Ded (1320–1392) – The Body as a Temple of Light
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      	“The lamp of truth shines in those who remove the dust of illusion.”
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      She described the human body as an instrument of divine perception, mirroring Heisenberg’s discovery that matter exists in flux until conscious interaction occurs.
                      </p>
                    </div>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      Baba Dawood Khaki (16th century) – The Reality Behind Forms
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      	"The form deceives, the truth is hidden beneath the veil of names.”
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      His insights resonate with Plato’s concept of ideal forms and modern physics’ search for a unified field theory.
                      </p>
                    </div>
                    
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                    Scholarly Dialogs from Dr. Ghulam Mohammad Kumar 
                    </h3>
                    
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      Spiritual Foundations as a Quantum Superstructure
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      	Dr. Ghulam Mohammad Kumar proposes that divine consciousness is the underlying field of reality, akin to the quantum vacuum field, which is not empty but a potential-filled foundation of all existence.
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      He argues that Sufi perception (kashf) is a function of aligning human awareness with this divine field, much like quantum coherence in Bose-Einstein condensates.</p>
                    </div>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                      The Role of Divine Witnessing in Reality Formation
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                      	He correlates the Islamic concept of ‘Shahid’ (The Ever-Witnessing) with Wheeler’s Participatory Universe, arguing that divine observation sustains the very fabric of existence.
                      </p>
                      
                    </div>*/}
                   
                  </div> 
                  <div className="relative block  py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:right-0 before:top-0 before:h-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']"></div>

              
                  
                  <div className="relative block  mt-5 mx-12">
                    {data.insightBook?.detail?.map((item , idx)=>{
                        return(
                            <div key={idx} >
                             <h3 className="text-2xl font-semibold leading-6">
                    {item.heading}
                    </h3>
                    <div className="mt-7 mb-7">
                        <PortableText value={item.content} components={customComponents} />
                    </div>
                            </div>
                        )
                    })}
                    
                    
                  </div>
                  
                  <div className="relative block  px-5 ">
                    
                    
                  <div className="flex items-center">
  <span className="text-fixnix-darkpurple text-2xl mr-5 font-semibold font-two">Share This :</span>
  <div className="relative flex items-center space-x-2">
    <Link href="#" className="relative h-10 w-10 flex items-center justify-center text-white bg-fixnix-lightpurple text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:text-white">
      <i className="fab fa-facebook-f"></i>
    </Link>
    <Link href="#" className="relative h-10 w-10 flex items-center justify-center text-white bg-fixnix-lightpurple text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:text-white">
      <i className="fab fa-twitter"></i>
    </Link>
    <Link href="#" className="relative h-10 w-10 flex items-center justify-center text-white bg-fixnix-lightpurple text-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out hover:text-white">
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
    </>
  );
}

export default InsightDetail